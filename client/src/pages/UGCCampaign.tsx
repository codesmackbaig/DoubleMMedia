import { useState } from "react";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, Users, TrendingUp, Heart, MessageCircle, Share2, Eye, Star } from "lucide-react";
import { useRef } from "react";

export default function UGCCampaign() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const featuredInfluencers = [
    {
      id: 1,
      name: "Emma Rodriguez",
      handle: "@emmalifestyle",
      category: "Lifestyle",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      followers: "2.8M",
      engagement: "8.5%",
      campaigns: 47,
      verified: true,
    },
    {
      id: 2,
      name: "Marcus Chen",
      handle: "@tech_marcus",
      category: "Tech",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      followers: "1.5M",
      engagement: "12.3%",
      campaigns: 32,
      verified: true,
    },
    {
      id: 3,
      name: "Sofia Martinez",
      handle: "@fashionista_sofia",
      category: "Fashion",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      followers: "3.2M",
      engagement: "9.1%",
      campaigns: 65,
      verified: true,
    },
    {
      id: 4,
      name: "James Wilson",
      handle: "@fitnessjames",
      category: "Sports",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      followers: "1.9M",
      engagement: "11.7%",
      campaigns: 41,
      verified: true,
    },
    {
      id: 5,
      name: "Olivia Park",
      handle: "@beautybyolivia",
      category: "Beauty",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
      followers: "2.4M",
      engagement: "10.2%",
      campaigns: 53,
      verified: true,
    },
    {
      id: 6,
      name: "David Kumar",
      handle: "@chef_david",
      category: "Food",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      followers: "1.1M",
      engagement: "13.8%",
      campaigns: 28,
      verified: true,
    },
  ];

  const ugcGallery = [
    {
      id: "vid-1",
      category: "Fashion",
      type: "Outfit Styling",
      creator: "@fashionista_sofia",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      poster: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&h=800&fit=crop",
      likes: "125K",
      comments: "3.2K",
      shares: "8.5K",
    },
    {
      id: "vid-2",
      category: "Tech",
      type: "Unboxing",
      creator: "@tech_marcus",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      poster: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&h=800&fit=crop",
      likes: "89K",
      comments: "2.1K",
      shares: "4.7K",
    },
    {
      id: "vid-3",
      category: "Beauty",
      type: "Tutorial",
      creator: "@beautybyolivia",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      poster: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=800&fit=crop",
      likes: "156K",
      comments: "4.8K",
      shares: "12K",
    },
    {
      id: "vid-4",
      category: "Sports",
      type: "Workout",
      creator: "@fitnessjames",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      poster: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=800&fit=crop",
      likes: "103K",
      comments: "2.9K",
      shares: "6.1K",
    },
    {
      id: "vid-5",
      category: "Lifestyle",
      type: "Day in Life",
      creator: "@emmalifestyle",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      poster: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=800&fit=crop",
      likes: "198K",
      comments: "5.7K",
      shares: "15K",
    },
    {
      id: "vid-6",
      category: "Food",
      type: "Recipe",
      creator: "@chef_david",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      poster: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=800&fit=crop",
      likes: "142K",
      comments: "3.6K",
      shares: "9.2K",
    },
  ];

  const categories = ["All", "Fashion", "Tech", "Beauty", "Sports", "Lifestyle", "Food"];
  const filteredGallery = selectedCategory === "All"
    ? ugcGallery
    : ugcGallery.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section with Parallax */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-primary rounded-full blur-[200px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-secondary rounded-full blur-[200px] animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge className="mb-6 px-6 py-2 text-base bg-gradient-to-r from-primary to-secondary">
              Influencer Marketing Campaign 2025
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 font-display">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Celebrity Influencer
              </span>
              <br />
              UGC Campaign
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
              Partner with the world's top content creators to amplify your brand message and drive real results. 
              Join brands like Nike, Apple, and Louis Vuitton who trust our influencer network.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { value: "500+", label: "Top Influencers" },
                { value: "50M+", label: "Total Reach" },
                { value: "12%", label: "Avg Engagement" },
                { value: "650%", label: "ROI" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Influencers Section */}
      <section className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Meet Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Featured Creators</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Work with verified influencers who have a proven track record of delivering results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredInfluencers.map((influencer, index) => (
              <motion.div
                key={influencer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover-elevate active-elevate-2 transition-all cursor-pointer h-full" data-testid={`influencer-card-${influencer.id}`}>
                  <div className="relative">
                    <div className="aspect-square overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                      <img 
                        src={influencer.image} 
                        alt={influencer.name}
                        className="w-full h-full object-cover transition-transform hover:scale-110"
                      />
                    </div>
                    {influencer.verified && (
                      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg">
                        <Star className="h-4 w-4 text-background fill-background" />
                      </div>
                    )}
                    <Badge className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm">
                      {influencer.category}
                    </Badge>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{influencer.name}</h3>
                    <p className="text-sm text-primary mb-4">{influencer.handle}</p>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div>
                        <div className="text-lg font-bold text-primary">{influencer.followers}</div>
                        <div className="text-xs text-muted-foreground">Followers</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-secondary">{influencer.engagement}</div>
                        <div className="text-xs text-muted-foreground">Engagement</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-accent">{influencer.campaigns}</div>
                        <div className="text-xs text-muted-foreground">Campaigns</div>
                      </div>
                    </div>

                    <Button 
                      className="w-full bg-gradient-to-r from-primary to-secondary"
                      data-testid={`button-collaborate-${influencer.id}`}
                    >
                      Collaborate
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Results Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Campaign <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Performance</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from our latest influencer marketing campaigns
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Eye, value: "45M+", label: "Total Views", color: "text-primary" },
              { icon: Heart, value: "8.5M+", label: "Total Likes", color: "text-secondary" },
              { icon: MessageCircle, value: "125K+", label: "Comments", color: "text-accent" },
              { icon: Share2, value: "380K+", label: "Shares", color: "text-primary" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 text-center hover-elevate active-elevate-2 transition-all">
                  <stat.icon className={`h-12 w-12 ${stat.color} mx-auto mb-4`} />
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* UGC Gallery Section */}
      <section className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Content</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Explore the best UGC content from our influencer network
            </p>

            {/* Category Filters */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-gradient-to-r from-primary to-secondary" : ""}
                  data-testid={`filter-${category.toLowerCase()}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Video Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {filteredGallery.map((content, index) => (
              <VideoGalleryCard
                key={content.id}
                content={content}
                index={index}
                isHovered={hoveredVideo === content.id}
                onHoverChange={(id, hovered) => setHoveredVideo(hovered ? id : null)}
              />
            ))}
          </div>
        </div>
      </section>

      <ContactSection 
        title="Ready to Launch Your UGC Campaign?"
        description="Partner with top influencers and create content that converts"
        subtitle="Let's discuss your influencer marketing strategy"
      />

      <Footer />
    </div>
  );
}

function VideoGalleryCard({ content, index, isHovered, onHoverChange }: {
  content: any;
  index: number;
  isHovered: boolean;
  onHoverChange: (id: string, hovered: boolean) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    onHoverChange(content.id, true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    onHoverChange(content.id, false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative aspect-[9/16] rounded-xl overflow-hidden group cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-testid={`video-${content.id}`}
    >
      <video
        ref={videoRef}
        poster={content.poster}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={content.videoUrl} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

      {!isHovered && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
            <Play className="h-8 w-8 text-background fill-background ml-1" />
          </div>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-primary/90 backdrop-blur-sm text-xs">
            {content.category}
          </Badge>
          <Badge variant="secondary" className="bg-secondary/90 backdrop-blur-sm text-xs">
            {content.type}
          </Badge>
        </div>
        <div className="text-sm font-semibold mb-2">{content.creator}</div>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Heart className="h-3 w-3" /> {content.likes}
          </span>
          <span className="flex items-center gap-1">
            <MessageCircle className="h-3 w-3" /> {content.comments}
          </span>
          <span className="flex items-center gap-1">
            <Share2 className="h-3 w-3" /> {content.shares}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
