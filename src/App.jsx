import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Play,
  Download,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
  Clock,
  Users,
  Target,
  Lightbulb,
  Award,
  Globe,
  Smartphone,
  Star,
  ArrowRight,
  Send,
  Gamepad2,
  Zap,
  Shield,
  Trophy,
  Search,
  Filter,
  Eye,
  Heart,
  Code,
  Palette,
  GraduationCap,
  Coffee,
  Sparkles
} from 'lucide-react';

// Enhanced Mock Data
const carouselImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Next-Gen Gaming Experiences",
    description: "Crafting immersive worlds that push the boundaries of interactive entertainment"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Mobile Gaming Revolution",
    description: "Innovative mobile titles that redefine portable gaming experiences"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Cross-Platform Excellence",
    description: "Seamless gaming experiences across all your favorite devices"
  }
];

// Partners data
const partners = [
  {
    id: 1,
    name: "Unity Technologies",
    logo: "https://metagames.ltd/wp-content/uploads/2024/11/ironsource.png"
  },
  {
    id: 2,
    name: "Epic Games",
    logo: "https://metagames.ltd/wp-content/uploads/2024/11/Mintegral.png"
  },
  {
    id: 3,
    name: "Steam",
    logo: "https://metagames.ltd/wp-content/uploads/2024/11/youtube.png"
  },
  {
    id: 4,
    name: "PlayStation",
    logo: "https://metagames.ltd/wp-content/uploads/2024/11/Google_AdMob_logo.svg_-2-300x69.png"
  },
  {
    id: 5,
    name: "Nintendo",
    logo: "https://metagames.ltd/wp-content/uploads/2024/11/unity.png"
  },
  {
    id: 6,
    name: "Xbox",
    logo: "https://metagames.ltd/wp-content/uploads/2024/11/Payoneer.png"
  }
];

// Team members data
const teamMembers = [
  {
    id: 1,
    name: "James Liu",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Gaming industry veteran with 18+ years of experience building hit titles"
  },
  {
    id: 2,
    name: "Sophie Wong",
    role: "Creative Director",
    image: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Visionary artist behind our most innovative game designs and mechanics"
  },
  {
    id: 3,
    name: "Kevin Chan",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Full-stack gaming expert specializing in cutting-edge game engines"
  },
  {
    id: 4,
    name: "Luna Zhang",
    role: "Art Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Creates breathtaking visual experiences that captivate players worldwide"
  },
  {
    id: 5,
    name: "Marcus Lee",
    role: "Game Designer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Gameplay architect focused on creating addictive and engaging experiences"
  }
];

const games = [
  {
    id: 1,
    title: "Mystic Realms: Origins",
    description: "An immersive fantasy adventure featuring dynamic storytelling and breathtaking environments that adapt to your choices.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    platforms: ["iOS", "Android", "Steam"],
    rating: 4.9,
    downloads: "3.2M+",
    category: "RPG",
    featured: true
  },
  {
    id: 2,
    title: "Neon Speed",
    description: "Futuristic racing experience with anti-gravity vehicles and stunning cyberpunk aesthetics in competitive multiplayer.",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    platforms: ["PlayStation", "Xbox", "PC"],
    rating: 4.7,
    downloads: "2.1M+",
    category: "Racing",
    featured: true
  },
  {
    id: 3,
    title: "Crystal Quest",
    description: "Strategic puzzle adventure combining gem-matching mechanics with epic quest narratives in magical kingdoms.",
    image: "https://images.unsplash.com/photo-1556438064-2d7646166914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    platforms: ["iOS", "Android"],
    rating: 4.8,
    downloads: "6.5M+",
    category: "Puzzle",
    featured: true
  },
  {
    id: 4,
    title: "Galactic Warfare",
    description: "Epic space combat simulator with tactical fleet management and intense real-time battles across the galaxy.",
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    platforms: ["Steam", "Epic Games"],
    rating: 4.6,
    downloads: "1.3M+",
    category: "Action",
    featured: false
  },
  {
    id: 5,
    title: "Empire Builders",
    description: "Master the art of civilization building in this deep strategy game with diplomatic and military campaigns.",
    image: "https://images.unsplash.com/photo-1500995617113-cf789362a3e1?q=80&w=1740&auto=format&fit=crop&w=800&q=80",
    platforms: ["PC", "Mac"],
    rating: 4.5,
    downloads: "1.8M+",
    category: "Strategy",
    featured: false
  },
  {
    id: 6,
    title: "Deep Blue",
    description: "Explore the mysterious ocean depths and discover ancient secrets in this atmospheric underwater adventure.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    platforms: ["iOS", "Android"],
    rating: 4.4,
    downloads: "1.1M+",
    category: "Adventure",
    featured: false
  }
];

const jobs = [
  {
    id: 1,
    title: "Senior Game Developer",
    description: "Architect next-generation gaming experiences using advanced Unity frameworks and cloud technologies. Leadership in multiplayer architecture essential.",
    location: "Hong Kong / Remote",
    type: "Full-time",
    department: "Engineering",
    posted: "3 days ago",
    requirements: ["Unity 3D", "C#", "Cloud Gaming"],
    icon: Code
  },
  {
    id: 2,
    title: "3D Artist & Animator",
    description: "Design stunning visual assets and fluid animations for our premium gaming titles. Expertise in modern 3D pipelines required.",
    location: "Hong Kong",
    type: "Full-time",
    department: "Art",
    posted: "1 week ago",
    requirements: ["Maya", "Blender", "Motion Capture"],
    icon: Palette
  },
  {
    id: 3,
    title: "Game Designer",
    description: "Craft engaging gameplay systems and monetization strategies for mobile-first gaming experiences. Analytics expertise preferred.",
    location: "Remote",
    type: "Contract",
    department: "Design",
    posted: "2 days ago",
    requirements: ["Game Design", "Monetization", "Data Analysis"],
    icon: Lightbulb
  },
  {
    id: 4,
    title: "QA Lead",
    description: "Drive quality assurance initiatives across multiple platforms with automated testing frameworks and team leadership.",
    location: "Hong Kong",
    type: "Full-time",
    department: "Quality Assurance",
    posted: "4 days ago",
    requirements: ["Test Automation", "Cross-Platform", "Team Management"],
    icon: Shield
  },
  {
    id: 5,
    title: "UI/UX Designer",
    description: "Create intuitive and visually stunning user interfaces for both mobile and console gaming platforms with user-centered design.",
    location: "Remote",
    type: "Full-time",
    department: "Design",
    posted: "1 day ago",
    requirements: ["Figma", "Game UI", "User Testing"],
    icon: Eye
  },
  {
    id: 6,
    title: "Marketing Manager",
    description: "Lead comprehensive marketing strategies for game launches including influencer partnerships and community building initiatives.",
    location: "Hong Kong",
    type: "Full-time",
    department: "Marketing",
    posted: "5 days ago",
    requirements: ["Digital Marketing", "Community Management", "Influencer Relations"],
    icon: Target
  }
];

// Company timeline
const timeline = [
  {
    year: "2017",
    title: "Company Founded",
    description: "Sleek Charm Limited was born with a mission to revolutionize mobile gaming experiences."
  },
  {
    year: "2019",
    title: "Breakthrough Success",
    description: "Our debut mobile title achieved 2M downloads within the first 3 weeks of launch."
  },
  {
    year: "2021",
    title: "Platform Expansion",
    description: "Successfully launched our first cross-platform title across mobile, PC, and console."
  },
  {
    year: "2023",
    title: "Global Recognition",
    description: "Expanded internationally with studios in 4 countries and achieved 15M+ total players."
  },
  {
    year: "2025",
    title: "Next-Gen Innovation",
    description: "Leading the industry with AI-powered gameplay and immersive AR/VR integrations."
  }
];

// Reusable Components
const ContactDialog = ({ isOpen, onClose, job }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl shadow-2xl border border-blue-500/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-cyan-500 p-6 rounded-t-3xl flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-white">Apply for {job?.title}</h2>
            <p className="text-blue-100">Contact us to apply for this position</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2 rounded-xl transition-all duration-300"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="space-y-6">
            {/* Company Info */}
            <div className="bg-gray-800/50 p-6 rounded-2xl border border-blue-500/20">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-3 rounded-xl">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-lg">Address</p>
                    <p className="text-gray-300 mt-2 leading-relaxed">
                      WEST WING, 2/F.<br />
                      822 LAI CHI KOK ROAD, CHEUNG SHA WAN<br />
                      HONG KONG
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-3 rounded-xl">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-lg">Email</p>
                    <p className="text-gray-300 mt-1">contact@sleekcharm.games</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-3 rounded-xl">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-lg">Phone</p>
                    <p className="text-gray-300 mt-1">+852 4424 9946</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gray-800/50 p-6 rounded-2xl border border-blue-500/20">
              <h3 className="text-xl font-bold text-white mb-6">Follow Us</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Linkedin, name: "LinkedIn", color: "from-blue-600 to-blue-700" },
                  { icon: Facebook, name: "Facebook", color: "from-blue-700 to-blue-800" },
                  { icon: Twitter, name: "Twitter", color: "from-sky-500 to-sky-600" },
                  { icon: Instagram, name: "Instagram", color: "from-pink-600 to-blue-600" }
                ].map((social, index) => (
                  <button
                    key={index}
                    className={`bg-gradient-to-r ${social.color} hover:scale-105 text-white p-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg`}
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="font-semibold">{social.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Application Note */}
            <div className="bg-blue-600/10 p-6 rounded-2xl border border-blue-500/30">
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">To apply for this position:</strong><br />
                Please send your resume and cover letter to <span className="text-blue-400 font-semibold">contact@sleekcharm.games</span> with the subject line "Application: {job?.title}". We look forward to hearing from you!
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-blue-500/20">
          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-blue-500/25"
          >
            <span>Close</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const Navigation = ({ currentPage, setCurrentPage, isMenuOpen, setIsMenuOpen }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'games', label: 'Games' },
    { id: 'jobs', label: 'Jobs' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md z-50 border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
              <Sparkles className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Sleek Charm Limited
              </h1>
              <p className="text-xs text-gray-400 hidden sm:block font-medium">sleekcharm.games</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  currentPage === item.id
                    ? 'text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/25'
                    : 'text-gray-300 hover:text-white hover:bg-blue-800/30'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-blue-800/30 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800/95 backdrop-blur-md border-t border-blue-500/20 rounded-b-2xl">
            <div className="px-2 pt-2 pb-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    currentPage === item.id
                      ? 'text-white bg-gradient-to-r from-blue-600 to-cyan-500'
                      : 'text-gray-300 hover:text-white hover:bg-blue-800/30'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const goToSlide = (index) => setCurrentIndex(index);
  const goToPrevious = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  return (
    <div className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden rounded-3xl shadow-2xl shadow-blue-900/25">
      {images.map((image, index) => (
        <div
          key={image.id}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <img
            src={image.url}
            alt={image.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <h3 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              {image.title}
            </h3>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl">{image.description}</p>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-blue-600/30 hover:bg-blue-600/50 backdrop-blur-md text-white p-4 rounded-2xl transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-blue-600/30 hover:bg-blue-600/50 backdrop-blur-md text-white p-4 rounded-2xl transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const TeamCarousel = ({ members }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => setCurrentIndex((prev) => (prev - 1 + members.length) % members.length);
  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % members.length);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {members.map((member) => (
            <div key={member.id} className="w-1/3 flex-shrink-0 px-4">
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-300 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-600/30 hover:bg-blue-600/50 backdrop-blur-md text-white p-3 rounded-2xl transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600/30 hover:bg-blue-600/50 backdrop-blur-md text-white p-3 rounded-2xl transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};

const GameCard = ({ game }) => (
  <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden hover:shadow-blue-500/25 transition-all duration-500 transform hover:-translate-y-3 border border-blue-500/20 group">
    <div className="relative overflow-hidden">
      <img
        src={game.image}
        alt={game.title}
        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
      <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-cyan-500 px-3 py-2 rounded-xl flex items-center space-x-2 shadow-lg">
        <Star className="h-4 w-4 text-white fill-current" />
        <span className="text-sm font-bold text-white">{game.rating}</span>
      </div>
      {game.featured && (
        <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 px-3 py-2 rounded-xl">
          <span className="text-sm font-bold text-white">Featured</span>
        </div>
      )}
    </div>
    
    <div className="p-8">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-2xl font-bold text-white">{game.title}</h3>
        <span className="text-xs font-semibold text-blue-300 bg-blue-600/20 px-2 py-1 rounded-lg">
          {game.category}
        </span>
      </div>
      <p className="text-gray-300 mb-6 leading-relaxed">{game.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {game.platforms.map((platform, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 text-blue-300 rounded-xl text-sm font-semibold border border-blue-500/30"
          >
            {platform}
          </span>
        ))}
      </div>
      
      <div className="flex justify-between items-center mb-6">
        <span className="text-gray-400 font-medium">{game.downloads} downloads</span>
      </div>
      
      <div className="flex space-x-3">
        <a
          href="https://play.google.com/store/apps/dev?id=8261223609324337203"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-blue-500/25 hover:scale-105">
            <Download className="h-4 w-4" />
            <span>Download</span>
          </button>
        </a>

        <button className="px-4 py-3 border border-blue-500/50 hover:border-blue-400 text-blue-300 hover:text-white rounded-xl transition-all duration-300 hover:bg-blue-600/20">
          <Eye className="h-4 w-4" />
        </button>
      </div>
    </div>
  </div>
);

const JobCard = ({ job, onApplyClick }) => (
  <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-8 hover:shadow-blue-500/25 transition-all duration-500 border border-blue-500/20 hover:border-blue-400/40 group">
    <div className="flex justify-between items-start mb-6">
      <div className="flex items-start space-x-4">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-3 rounded-2xl">
          <job.icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <span className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>{job.location}</span>
            </span>
            <span className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>{job.posted}</span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end space-y-3">
        <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
          {job.type}
        </span>
        <span className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-xl text-sm font-semibold border border-blue-500/30">
          {job.department}
        </span>
      </div>
    </div>
    
    <p className="text-gray-300 mb-6 leading-relaxed">{job.description}</p>
    
    <div className="mb-6">
      <h4 className="text-white font-semibold mb-3">Requirements:</h4>
      <div className="flex flex-wrap gap-2">
        {job.requirements.map((req, index) => (
          <span key={index} className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-lg">
            {req}
          </span>
        ))}
      </div>
    </div>
    
    <button 
      onClick={() => onApplyClick(job)}
      className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-blue-500/25 hover:scale-105"
    >
      <span>Apply Now</span>
      <ArrowRight className="h-5 w-5" />
    </button>
  </div>
);

// Page Components
const HomePage = () => (
  <div className="pt-20">
    {/* Hero Section */}
    <section className="py-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in">
            Crafting
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Extraordinary </span>
            Gaming Worlds
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Sleek Charm Limited pioneers cutting-edge game development, creating immersive 
            experiences that captivate players and redefine interactive entertainment.
          </p>
        </div>
        
        <ImageCarousel images={carouselImages} />
      </div>
    </section>

    {/* Stats Section */}
    <section className="py-20 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border-y border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "20+", label: "Games Published", icon: Trophy },
            { number: "15M+", label: "Players Worldwide", icon: Users },
            { number: "60+", label: "Team Members", icon: Target },
            { number: "8", label: "Years Experience", icon: Award }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-3xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
                <stat.icon className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Games */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Games</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Explore our most celebrated gaming experiences</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {games.filter(game => game.featured).map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-105">
            View All Games
          </button>
        </div>
      </div>
    </section>

    {/* Partners Section */}
    <section className="py-20 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border-y border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Partners</h2>
          <p className="text-xl text-gray-300">Collaborating with industry titans to deliver exceptional experiences</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner) => (
            <div key={partner.id} className="group">
              <div className="bg-gradient-to-b from-gray-100 to-gray-200 p-6 rounded-3xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105 grayscale hover:grayscale-0">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-16 object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

const AboutPage = () => (
  <div className="pt-20">
    {/* Hero Section */}
    <section className="py-20 bg-gradient-to-r bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center from-blue-900 to-cyan-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">About Sleek Charm Limited</h1>
        <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
          Revolutionizing the gaming industry through innovation, artistry, and state-of-the-art technology
        </p>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">Our Mission</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              To revolutionize interactive entertainment by creating groundbreaking gaming experiences 
              that inspire creativity, foster global communities, and push the boundaries of what's 
              possible in digital storytelling.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Since 2017, we've been dedicated to developing premium games that not only entertain 
              but also create meaningful connections between players worldwide, establishing new 
              standards for innovation in the gaming industry.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Target, title: "Vision", desc: "Next-gen gaming innovation" },
              { icon: Users, title: "Team", desc: "60+ creative professionals" },
              { icon: Award, title: "Excellence", desc: "Industry-leading quality" },
              { icon: Globe, title: "Global", desc: "Players in 120+ countries" }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl text-center border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
                <item.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="font-bold text-white mb-3 text-lg">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Company Timeline */}
    <section className="py-20 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border-y border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Our Journey</h2>
          <p className="text-xl text-gray-300">Milestones of innovation and growth</p>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-cyan-500"></div>
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-3xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                    <div className="text-2xl font-bold text-blue-400 mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full relative z-10 mx-auto"></div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Meet Our Team */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Meet Our Team</h2>
          <p className="text-xl text-gray-300">The visionary minds driving our success</p>
        </div>
        
        <TeamCarousel members={teamMembers} />
      </div>
    </section>

    {/* Core Values */}
    <section className="py-20 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border-y border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Core Values</h2>
          <p className="text-xl text-gray-300">The foundation of everything we create</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Lightbulb,
              title: "Innovation",
              description: "We continuously explore cutting-edge technologies and creative approaches to deliver revolutionary gaming experiences."
            },
            {
              icon: Users,
              title: "Community",
              description: "We foster inclusive environments where diverse talents collaborate to create exceptional interactive entertainment."
            },
            {
              icon: Award,
              title: "Excellence",
              description: "We uphold uncompromising quality standards in every aspect of game development, from concept to launch."
            }
          ].map((value, index) => (
            <div key={index} className="bg-gradient-to-b from-gray-800 to-gray-900 p-10 rounded-3xl shadow-2xl text-center border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
              <value.icon className="h-16 w-16 text-blue-400 mx-auto mb-8" />
              <h3 className="text-2xl font-bold text-white mb-6">{value.title}</h3>
              <p className="text-gray-300 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Company Address */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-10 rounded-3xl shadow-2xl border border-blue-500/20">
          <div className="flex items-center space-x-6 mb-8">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-4 rounded-2xl">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Our Headquarters</h3>
              <p className="text-gray-300">Visit us in vibrant Hong Kong</p>
            </div>
          </div>
          
          <div className="text-lg text-gray-300 space-y-2">
            <p className="font-semibold text-white">Sleek Charm Limited</p>
            <p>WEST WING, 2/F.</p>
            <p>822 LAI CHI KOK ROAD, CHEUNG SHA WAN</p>
            <p>HONG KONG</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const GamesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'RPG', 'Racing', 'Puzzle', 'Action', 'Strategy', 'Adventure'];
  
  const filteredGames = games.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         game.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || game.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center from-blue-900 to-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">Our Games Collection</h1>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Explore our diverse portfolio of innovative games spanning multiple platforms and genres
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search games..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-blue-500/30 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-xl font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-blue-800/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
          
          {filteredGames.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🎮</div>
              <h3 className="text-2xl font-bold text-white mb-2">No games found</h3>
              <p className="text-gray-300">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Platform Statistics */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border-y border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Platform Coverage</h2>
            <p className="text-xl text-gray-300">Our games reach players across all major gaming platforms</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Smartphone, platform: "Mobile", count: "12 Games" },
              { icon: Play, platform: "PC/Steam", count: "8 Games" },
              { icon: Gamepad2, platform: "Console", count: "6 Games" },
              { icon: Globe, platform: "Web", count: "4 Games" }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl text-center border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
                <item.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="font-bold text-white mb-2 text-lg">{item.platform}</h3>
                <p className="text-gray-300">{item.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const JobsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  
  const departments = ['All', 'Engineering', 'Art', 'Design', 'Quality Assurance', 'Marketing'];
  const types = ['All', 'Full-time', 'Contract', 'Part-time'];
  
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    const matchesType = selectedType === 'All' || job.type === selectedType;
    return matchesSearch && matchesDepartment && matchesType;
  });

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedJob(null);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-cyan-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">Join Our Team</h1>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Shape the future of gaming with us. We're seeking passionate innovators who share 
            our vision for creating extraordinary interactive experiences.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search positions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-blue-500/30 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            
            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-400" />
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="bg-gray-800 border border-blue-500/30 rounded-xl text-white px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
              
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="bg-gray-800 border border-blue-500/30 rounded-xl text-white px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {types.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} onApplyClick={handleApplyClick} />
            ))}
          </div>
          
          {filteredJobs.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">💼</div>
              <h3 className="text-2xl font-bold text-white mb-2">No positions found</h3>
              <p className="text-gray-300">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Dialog */}
      <ContactDialog 
        isOpen={isDialogOpen} 
        onClose={handleCloseDialog} 
        job={selectedJob}
      />

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border-y border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Sleek Charm?</h2>
            <p className="text-xl text-gray-300">Exceptional benefits and an inspiring work culture</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Competitive Package",
                description: "Industry-leading compensation with equity options and performance incentives"
              },
              {
                icon: Shield,
                title: "Work-Life Balance",
                description: "Flexible remote work arrangements and comprehensive time-off policies"
              },
              {
                icon: GraduationCap,
                title: "Professional Growth",
                description: "Continuous learning opportunities with conference attendance and skill development"
              },
              {
                icon: Heart,
                title: "Wellness Focus",
                description: "Premium health coverage, mental health support, and wellness programs"
              },
              {
                icon: Trophy,
                title: "Innovation Culture",
                description: "Freedom to experiment with cutting-edge technologies and creative solutions"
              },
              {
                icon: Coffee,
                title: "Dynamic Environment",
                description: "Collaborative culture with team building events and celebration of achievements"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
                <benefit.icon className="h-12 w-12 text-blue-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">Get In Touch</h1>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Have a brilliant idea, partnership proposal, or just want to connect? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-10 rounded-3xl shadow-2xl border border-blue-500/20">
              <h2 className="text-3xl font-bold text-white mb-8">Send us a message</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-300 font-semibold mb-3">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-gray-700 border border-blue-500/30 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 font-semibold mb-3">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-gray-700 border border-blue-500/30 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 font-semibold mb-3">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="6"
                    className="w-full px-6 py-4 bg-gray-700 border border-blue-500/30 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 resize-none transition-all duration-300"
                    placeholder="Tell us about your project or inquiry..."
                    required
                  ></textarea>
                </div>
                
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-blue-500/25 hover:scale-105"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Company Info */}
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-10 rounded-3xl shadow-2xl border border-blue-500/20">
                <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-3 rounded-xl">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-lg">Address</p>
                      <p className="text-gray-300 mt-2 leading-relaxed">
                        WEST WING, 2/F.<br />
                        822 LAI CHI KOK ROAD, CHEUNG SHA WAN<br />
                        HONG KONG
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-3 rounded-xl">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-lg">Email</p>
                      <p className="text-gray-300 mt-1">contact@sleekcharm.games</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-3 rounded-xl">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-lg">Phone</p>
                      <p className="text-gray-300 mt-1">+852 4424 9946</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-10 rounded-3xl shadow-2xl border border-blue-500/20">
                <h3 className="text-2xl font-bold text-white mb-8">Follow Us</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Linkedin, name: "LinkedIn", color: "from-blue-600 to-blue-700" },
                    { icon: Facebook, name: "Facebook", color: "from-blue-700 to-blue-800" },
                    { icon: Twitter, name: "Twitter", color: "from-sky-500 to-sky-600" },
                    { icon: Instagram, name: "Instagram", color: "from-pink-600 to-blue-600" }
                  ].map((social, index) => (
                    <button
                      key={index}
                      className={`bg-gradient-to-r ${social.color} hover:scale-105 text-white p-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg`}
                    >
                      <social.icon className="h-5 w-5" />
                      <span className="font-semibold">{social.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Google Maps */}
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-blue-500/20">
                <div className="p-6 border-b border-blue-500/20">
                  <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                    <MapPin className="h-6 w-6 text-blue-400" />
                    <span>Our Location</span>
                  </h3>
                </div>
                <div className="h-80 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.234567890123!2d114.12345678901234!3d22.33456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f0123456789a%3A0x123456789abcdef0!2s822%20Lai%20Chi%20Kok%20Rd%2C%20Cheung%20Sha%20Wan%2C%20Hong%20Kong!5e0!3m2!1sen!2s!4v1641234567890!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'hue-rotate(200deg) saturate(0.7) brightness(0.8)' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sleek Charm Limited Office Location"
                    className="rounded-b-3xl"
                  ></iframe>
                  {/* Overlay for better theming */}
                  <div className="absolute inset-0 bg-blue-900/20 pointer-events-none rounded-b-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Main App Component
const SleekCharmWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'games':
        return <GamesPage />;
      case 'jobs':
        return <JobsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 text-white" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Navigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <main className="relative">
        {/* Background Pattern */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900 to-gray-900 pointer-events-none"></div>
        <div className="fixed inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.05)_50%,transparent_75%)] pointer-events-none"></div>
        
        <div className="relative z-10">
          {renderPage()}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-r from-gray-900 to-black text-white py-16 border-t border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Sparkles className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Sleek Charm Limited</h3>
                  <p className="text-gray-400 text-sm font-medium">sleekcharm.games</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Crafting extraordinary gaming worlds that inspire and entertain players across the globe.
              </p>
              <div className="flex space-x-4">
                {[Linkedin, Facebook, Twitter, Instagram].map((Icon, index) => (
                  <button key={index} className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-blue-900/20">
                    <Icon className="h-6 w-6" />
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
              <div className="space-y-3">
                {['Home', 'About', 'Games', 'Jobs', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => setCurrentPage(link.toLowerCase())}
                    className="block text-gray-300 hover:text-blue-400 transition-colors font-medium"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-lg">Contact</h4>
              <div className="space-y-3 text-gray-300">
                <p>WEST WING, 2/F.</p>
                <p>822 LAI CHI KOK ROAD</p>
                <p>CHEUNG SHA WAN, HONG KONG</p>
                <p className="mt-4 text-blue-400">contact@sleekcharm.games</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-500/20 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Sleek Charm Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SleekCharmWebsite;