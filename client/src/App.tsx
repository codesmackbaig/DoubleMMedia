import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import ChatWidget from "@/components/ChatWidget";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import WebDevelopment from "@/pages/WebDevelopment";
import WebDesign from "@/pages/WebDesign";
import AIPhotography from "@/pages/AIPhotography";
import PerformanceMarketing from "@/pages/PerformanceMarketing";
import SmartCommerce from "@/pages/SmartCommerce";
import Portfolio from "@/pages/Portfolio";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import CaseStudy from "@/pages/CaseStudy";
import UGCCampaign from "@/pages/UGCCampaign";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/web-development" component={WebDevelopment} />
      <Route path="/web-design" component={WebDesign} />
      <Route path="/ai-photography" component={AIPhotography} />
      <Route path="/performance-marketing" component={PerformanceMarketing} />
      <Route path="/smartcommerce" component={SmartCommerce} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/case-study/:id" component={CaseStudy} />
      <Route path="/ugc-campaign" component={UGCCampaign} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
          <ChatWidget />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
