import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import OpenAI from "openai";
import { Resend } from "resend";
import { z } from "zod";

// Initialize OpenAI client with Replit AI Integrations
// This uses Replit's AI Integrations service, which provides OpenAI-compatible API access without requiring your own OpenAI API key
const openai = new OpenAI({
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY
});

// Initialize Resend for sending emails
const resend = new Resend(process.env.RESEND_API_KEY);

const chatMessageSchema = z.object({
  message: z.string(),
  conversationHistory: z.array(z.object({
    role: z.enum(["user", "assistant"]),
    content: z.string()
  })).optional()
});

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string()
});

export async function registerRoutes(app: Express): Promise<Server> {
  // AI Chatbot endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, conversationHistory = [] } = chatMessageSchema.parse(req.body);

      // Build conversation context
      const messages = [
        {
          role: "system" as const,
          content: `You are an AI assistant for Double M Media, a digital marketing and creative agency. 
Your role is to:
1. Help visitors understand our services (Web Development, Web Design, AI Product Photography & 3D Modeling, Performance Marketing, SmartCommerce Management)
2. Answer questions about our expertise and approach
3. Qualify leads by understanding their business challenges
4. Encourage visitors to schedule consultations or contact us directly

Be friendly, professional, and focus on understanding their needs. Keep responses concise (2-3 sentences typically).
When appropriate, suggest they contact us at meesam@doublemmedia.co or fill out our contact form for a detailed consultation.`
        },
        ...conversationHistory,
        {
          role: "user" as const,
          content: message
        }
      ];

      // the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user
      const completion = await openai.chat.completions.create({
        model: "gpt-5",
        messages,
        max_completion_tokens: 500,
      });

      const reply = completion.choices[0]?.message?.content || "I'm sorry, I couldn't process that. Please try again or contact us directly.";

      res.json({ reply });
    } catch (error) {
      console.error("Chat error:", error);
      res.status(500).json({ 
        error: "Failed to process message",
        reply: "I apologize, but I'm experiencing technical difficulties. Please contact us at meesam@doublemmedia.co and our team will assist you directly."
      });
    }
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const formData = contactFormSchema.parse(req.body);
      
      // Save to storage
      const contactId = await storage.saveContactSubmission(formData);
      
      console.log("Contact form submission:", {
        id: contactId,
        ...formData
      });

      // Send email notification using Resend
      try {
        await resend.emails.send({
          from: 'Double M Media <onboarding@resend.dev>',
          to: 'meesam@doublemmedia.co',
          subject: `New Contact Form Submission - ${formData.name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            ${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ''}
            ${formData.company ? `<p><strong>Company:</strong> ${formData.company}</p>` : ''}
            <p><strong>Message:</strong></p>
            <p>${formData.message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><small>Submission ID: ${contactId}</small></p>
          `
        });
        console.log("Email sent successfully to meesam@doublemmedia.co");
      } catch (emailError) {
        console.error("Failed to send email:", emailError);
        // Don't fail the request if email fails - we still saved it to storage
      }

      res.json({ 
        success: true, 
        message: "Thank you for contacting us! We'll get back to you within 24 hours.",
        id: contactId
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false,
        error: "Failed to submit contact form. Please try again or email us directly at meesam@doublemmedia.co"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
