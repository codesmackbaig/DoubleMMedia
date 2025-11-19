import { Play, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Link } from "wouter";

export default function UGCShowcaseSection() {
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);

  const ugcContent = [
    {
      id: "fashion-1",
      category: "Fashion",
      type: "Shoutout",
      creator: "@fashionista_jules",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      poster: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&h=800&fit=crop",
      views: "2.5M",
      engagement: "15%",
    },
    {
      id: "tech-1",
      category: "Tech",
      type: "Unboxing",
      creator: "@tech_reviewer_pro",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      poster: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&h=800&fit=crop",
      views: "1.8M",
      engagement: "12%",
    },
    {
      id: "beauty-1",
      category: "Beauty",
      type: "Review",
      creator: "@glowup_withsarah",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      poster: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=800&fit=crop",
      views: "3.2M",
      engagement: "18%",
    },
    {
      id: "fitness-1",
      category: "Sports",
      type: "Tryout",
      creator: "@fit_life_coach",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      poster: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=800&fit=crop",
      views: "2.1M",
      engagement: "14%",
    },
    {
      id: "fashion-2",
      category: "Fashion",
      type: "Lifestyle",
      creator: "@style_icon_mia",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      poster: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&h=800&fit=crop",
      views: "4.5M",
      engagement: "22%",
    },
    {
      id: "beauty-2",
      category: "Beauty",
      type: "Unboxing",
      creator: "@makeup_maven",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      poster: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&h=800&fit=crop",
      views: "2.8M",
      engagement: "16%",
    },
    {
      id: "food-1",
      category: "Food",
      type: "Review",
      creator: "@foodie_adventures",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      poster: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=800&fit=crop",
      views: "3.8M",
      engagement: "20%",
    },
    {
      id: "lifestyle-1",
      category: "Lifestyle",
      type: "Day in Life",
      creator: "@daily_vibes_emma",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      poster: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=800&fit=crop",
      views: "5.1M",
      engagement: "24%",
    },
    {
      id: "tech-2",
      category: "Tech",
      type: "Review",
      creator: "@gadget_guru",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      poster: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=800&fit=crop",
      views: "2.3M",
      engagement: "13%",
    },
    {
      id: "fitness-2",
      category: "Sports",
      type: "Workout Tutorial",
      creator: "@muscle_motivation",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      poster: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&h=800&fit=crop",
      views: "4.2M",
      engagement: "19%",
    },
    {
      id: "fashion-3",
      category: "Fashion",
      type: "Outfit Styling",
      creator: "@trendsetter_alex",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      poster: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=800&fit=crop",
      views: "6.7M",
      engagement: "28%",
    },
    {
      id: "beauty-3",
      category: "Beauty",
      type: "Tutorial",
      creator: "@beauty_by_bella",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      poster: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&h=800&fit=crop",
      views: "3.9M",
      engagement: "21%",
    },
    {
      id: "travel-1",
      category: "Travel",
      type: "Destination Review",
      creator: "@wanderlust_jess",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      poster: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=800&fit=crop",
      views: "4.6M",
      engagement: "17%",
    },
    {
      id: "food-2",
      category: "Food",
      type: "Recipe Tutorial",
      creator: "@chef_carlos",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      poster: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=500&h=800&fit=crop",
      views: "2.9M",
      engagement: "15%",
    },
    {
      id: "lifestyle-2",
      category: "Lifestyle",
      type: "Home Tour",
      creator: "@home_inspo_sarah",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      poster: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&h=800&fit=crop",
      views: "3.5M",
      engagement: "16%",
    },
    {
      id: "tech-3",
      category: "Tech",
      type: "Comparison",
      creator: "@tech_talk_tom",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      poster: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&h=800&fit=crop",
      views: "5.4M",
      engagement: "23%",
    },
    {
      id: "sports-3",
      category: "Sports",
      type: "Training Tips",
      creator: "@athlete_pro_jake",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      poster: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&h=800&fit=crop",
      views: "2.7M",
      engagement: "14%",
    },
    {
      id: "fashion-4",
      category: "Fashion",
      type: "Haul",
      creator: "@shopping_queen_liv",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      poster: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=500&h=800&fit=crop",
      views: "7.2M",
      engagement: "31%",
    },
  ];

  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Fashion", "Tech", "Sports", "Beauty", "Food", "Travel", "Lifestyle"];

  const filteredContent = activeFilter === "All"
    ? ugcContent
    : ugcContent.filter(item => item.category === activeFilter);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-accent rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/3 w-[600px] h-[600px] bg-secondary rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-display">
            Influencer <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Collaborations</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Authentic UGC content that drives engagement and conversions
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={activeFilter === filter ? "bg-gradient-to-r from-primary to-secondary" : ""}
                data-testid={`filter-${filter.toLowerCase()}`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* UGC Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {filteredContent.map((content, index) => (
            <VideoCard
              key={content.id}
              content={content}
              index={index}
              isHovered={hoveredVideo === content.id}
              onHoverChange={(id, hovered) => setHoveredVideo(hovered ? id : null)}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link href="/ugc-campaign">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-lg px-8 py-6"
              data-testid="button-view-full-ugc-campaign"
            >
              View Full UGC Campaign
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground mt-4">
            Partner with top influencers across fashion, tech, sports & beauty
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function VideoCard({ content, index, isHovered, onHoverChange }: {
  content: any;
  index: number;
  isHovered: boolean;
  onHoverChange: (id: string, hovered: boolean) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    onHoverChange(content.id, true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Silently handle autoplay errors
      });
    }
  };

  const handleMouseLeave = () => {
    onHoverChange(content.id, false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleFocus = () => {
    onHoverChange(content.id, true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Silently handle autoplay errors
      });
    }
  };

  const handleBlur = () => {
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
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex={0}
      role="button"
      aria-label={`Play UGC video by ${content.creator}`}
      data-testid={`ugc-video-${content.id}`}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        poster={content.poster}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={`Video content by ${content.creator}`}
      >
        <source src={content.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity pointer-events-none" />

      {/* Play Icon - Hide when video is playing */}
      {!isHovered && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-[0_0_30px_rgba(0,217,255,0.5)]"
          >
            <Play className="h-8 w-8 text-background fill-background ml-1" />
          </motion.div>
        </div>
      )}

      {/* Content Info Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-300 pointer-events-none">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <Badge className="bg-primary/90 backdrop-blur-sm">
            {content.category}
          </Badge>
          <Badge variant="secondary" className="bg-secondary/90 backdrop-blur-sm text-xs">
            {content.type}
          </Badge>
        </div>
        <div className="text-sm font-semibold text-foreground mb-1">
          {content.creator}
        </div>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span>{content.views} views</span>
          <span>•</span>
          <span>{content.engagement} engagement</span>
        </div>
      </div>

      {/* Hover Glow Effect */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,217,255,0.3)] pointer-events-none"
        />
      )}
    </motion.div>
  );
}
