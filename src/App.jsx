import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Play,
  Download,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
  Calendar,
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
  Briefcase,
  GraduationCap,
  Coffee,
  MapPin as MapIcon
} from 'lucide-react';

// Enhanced Mock Data
const carouselImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Epic Fantasy Adventures",
    description: "Immersive RPG experiences that captivate players worldwide"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Mobile Gaming Innovation",
    description: "Cutting-edge mobile games for the next generation"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Console Excellence",
    description: "AAA gaming experiences across all platforms"
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
    logo: "	https://metagames.ltd/wp-content/uploads/2024/11/youtube.png"
  },
  {
    id: 4,
    name: "PlayStation",
    logo: "	https://metagames.ltd/wp-content/uploads/2024/11/Google_AdMob_logo.svg_-2-300x69.png"
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
    name: "Alex Chen",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Visionary leader with 15+ years in game development"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Creative Director",
    image: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Award-winning designer behind our most popular titles"
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Technical genius with expertise in Unity and Unreal"
  },
  {
    id: 4,
    name: "Emily Zhang",
    role: "Art Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Creates stunning visuals that bring games to life"
  },
  {
    id: 5,
    name: "David Kim",
    role: "Game Designer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Master of gameplay mechanics and player engagement"
  }
];

const games = [
  {
    id: 1,
    title: "Dragon's Quest: Eternal",
    description: "An epic fantasy RPG with stunning visuals and immersive storytelling that takes players on a journey through mystical realms.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    platforms: ["iOS", "Android", "Steam"],
    rating: 4.8,
    downloads: "2M+",
    category: "RPG",
    featured: true
  },
  {
    id: 2,
    title: "Cyber Racing X",
    description: "High-octane racing game set in a futuristic cyberpunk world with customizable vehicles and intense multiplayer action.",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    platforms: ["PlayStation", "Xbox", "PC"],
    rating: 4.6,
    downloads: "1.5M+",
    category: "Racing",
    featured: true
  },
  {
    id: 3,
    title: "Puzzle Kingdom",
    description: "A delightful puzzle adventure combining match-3 mechanics with kingdom building in a charming fantasy setting.",
    image: "https://images.unsplash.com/photo-1556438064-2d7646166914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    platforms: ["iOS", "Android"],
    rating: 4.9,
    downloads: "5M+",
    category: "Puzzle",
    featured: true
  },
  {
    id: 4,
    title: "Space Defenders",
    description: "Defend Earth from alien invasions in this action-packed space shooter with stunning graphics and strategic gameplay.",
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    platforms: ["Steam", "Epic Games"],
    rating: 4.7,
    downloads: "800K+",
    category: "Action",
    featured: false
  },
  {
    id: 5,
    title: "Medieval Legends",
    description: "Build your empire and conquer kingdoms in this strategic multiplayer game set in medieval times.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    platforms: ["PC", "Mac"],
    rating: 4.5,
    downloads: "1.2M+",
    category: "Strategy",
    featured: false
  },
  {
    id: 6,
    title: "Ocean Explorer",
    description: "Dive into the depths of the ocean and discover mysterious creatures in this underwater adventure.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    platforms: ["iOS", "Android"],
    rating: 4.4,
    downloads: "950K+",
    category: "Adventure",
    featured: false
  }
];

const jobs = [
  {
    id: 1,
    title: "Senior Game Developer",
    description: "Lead development of next-generation mobile games using Unity and modern development practices. Experience with multiplayer systems and monetization strategies required.",
    location: "Hong Kong / Remote",
    type: "Full-time",
    department: "Engineering",
    posted: "2 days ago",
    requirements: ["Unity 3D", "C#", "Multiplayer Systems"],
    icon: Code
  },
  {
    id: 2,
    title: "3D Artist & Animator",
    description: "Create stunning 3D models, textures, and animations for our upcoming AAA title. Proficiency in Maya, Blender, and Substance Suite required.",
    location: "Hong Kong",
    type: "Full-time",
    department: "Art",
    posted: "1 week ago",
    requirements: ["Maya", "Blender", "Substance Suite"],
    icon: Palette
  },
  {
    id: 3,
    title: "Game Designer",
    description: "Design engaging game mechanics, balance systems, and create compelling player experiences. Experience with mobile F2P games preferred.",
    location: "Remote",
    type: "Contract",
    department: "Design",
    posted: "3 days ago",
    requirements: ["Game Design", "F2P Experience", "Analytics"],
    icon: Lightbulb
  },
  {
    id: 4,
    title: "QA Lead",
    description: "Lead our quality assurance team ensuring bug-free releases. Experience with automation testing and mobile platforms essential.",
    location: "Hong Kong",
    type: "Full-time",
    department: "Quality Assurance",
    posted: "5 days ago",
    requirements: ["Test Automation", "Mobile Testing", "Leadership"],
    icon: Shield
  },
  {
    id: 5,
    title: "UI/UX Designer",
    description: "Design intuitive and beautiful user interfaces for mobile and PC games. Experience with game UI patterns and user research.",
    location: "Remote",
    type: "Full-time",
    department: "Design",
    posted: "1 day ago",
    requirements: ["Figma", "UI Design", "User Research"],
    icon: Eye
  },
  {
    id: 6,
    title: "Marketing Manager",
    description: "Drive marketing campaigns for game launches and user acquisition. Experience with digital marketing and analytics required.",
    location: "Hong Kong",
    type: "Full-time",
    department: "Marketing",
    posted: "4 days ago",
    requirements: ["Digital Marketing", "Analytics", "Campaign Management"],
    icon: Target
  }
];

// Company timeline
const timeline = [
  {
    year: "2016",
    title: "Company Founded",
    description: "MetaGame Limited was established with a vision to create innovative gaming experiences."
  },
  {
    year: "2018",
    title: "First Mobile Hit",
    description: "Released our first mobile game which reached 1M downloads in the first month."
  },
  {
    year: "2020",
    title: "Console Expansion",
    description: "Expanded to console gaming with our first AAA title release."
  },
  {
    year: "2022",
    title: "International Growth",
    description: "Opened offices in three new countries and reached 10M+ players worldwide."
  },
  {
    year: "2024",
    title: "AI Integration",
    description: "Pioneered AI-driven gameplay features and procedural content generation."
  }
];

// Reusable Components
const Navigation = ({ currentPage, setCurrentPage, isMenuOpen, setIsMenuOpen }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'games', label: 'Games' },
    { id: 'jobs', label: 'Jobs' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md z-50 border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25">
              <Play className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                MetaGame Limited
              </h1>
              <p className="text-xs text-gray-400 hidden sm:block font-medium">metagame-limited.com</p>
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
                    ? 'text-white bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg shadow-purple-500/25'
                    : 'text-gray-300 hover:text-white hover:bg-purple-800/30'
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
              className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-purple-800/30 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800/95 backdrop-blur-md border-t border-purple-500/20 rounded-b-2xl">
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
                      ? 'text-white bg-gradient-to-r from-purple-600 to-pink-500'
                      : 'text-gray-300 hover:text-white hover:bg-purple-800/30'
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
    <div className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden rounded-3xl shadow-2xl shadow-purple-900/25">
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
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/20 to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <h3 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              {image.title}
            </h3>
            <p className="text-lg md:text-xl text-purple-100 max-w-2xl">{image.description}</p>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-purple-600/30 hover:bg-purple-600/50 backdrop-blur-md text-white p-4 rounded-2xl transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-purple-600/30 hover:bg-purple-600/50 backdrop-blur-md text-white p-4 rounded-2xl transition-all duration-300 hover:scale-110"
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
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
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
                  <p className="text-purple-300 font-semibold mb-3">{member.role}</p>
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
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-purple-600/30 hover:bg-purple-600/50 backdrop-blur-md text-white p-3 rounded-2xl transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-purple-600/30 hover:bg-purple-600/50 backdrop-blur-md text-white p-3 rounded-2xl transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};

const GameCard = ({ game }) => (
  <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden hover:shadow-purple-500/25 transition-all duration-500 transform hover:-translate-y-3 border border-purple-500/20 group">
    <div className="relative overflow-hidden">
      <img
        src={game.image}
        alt={game.title}
        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
      <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-500 px-3 py-2 rounded-xl flex items-center space-x-2 shadow-lg">
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
        <span className="text-xs font-semibold text-purple-300 bg-purple-600/20 px-2 py-1 rounded-lg">
          {game.category}
        </span>
      </div>
      <p className="text-gray-300 mb-6 leading-relaxed">{game.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {game.platforms.map((platform, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-500/20 text-purple-300 rounded-xl text-sm font-semibold border border-purple-500/30"
          >
            {platform}
          </span>
        ))}
      </div>
      
      <div className="flex justify-between items-center mb-6">
        <span className="text-gray-400 font-medium">{game.downloads} downloads</span>
      </div>
      
      <div className="flex space-x-3">
        <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-purple-500/25 hover:scale-105">
          <Download className="h-4 w-4" />
          <span>Download</span>
        </button>
        <button className="px-4 py-3 border border-purple-500/50 hover:border-purple-400 text-purple-300 hover:text-white rounded-xl transition-all duration-300 hover:bg-purple-600/20">
          <Eye className="h-4 w-4" />
        </button>
      </div>
    </div>
  </div>
);

const JobCard = ({ job }) => (
  <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-8 hover:shadow-purple-500/25 transition-all duration-500 border border-purple-500/20 hover:border-purple-400/40 group">
    <div className="flex justify-between items-start mb-6">
      <div className="flex items-start space-x-4">
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-3 rounded-2xl">
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
        <span className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-xl text-sm font-semibold border border-purple-500/30">
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
    
    <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-purple-500/25 hover:scale-105">
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
            Creating
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Legendary </span>
            Gaming Experiences
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            MetaGame Limited is a leading game development studio creating immersive, 
            innovative games that captivate players across all platforms.
          </p>
        </div>
        
        <ImageCarousel images={carouselImages} />
      </div>
    </section>

    {/* Stats Section */}
    <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-y border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "15+", label: "Games Published", icon: Trophy },
            { number: "10M+", label: "Players Worldwide", icon: Users },
            { number: "50+", label: "Team Members", icon: Target },
            { number: "8", label: "Years Experience", icon: Award }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-3xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
                <stat.icon className="h-8 w-8 text-purple-400 mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">{stat.number}</div>
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
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Discover our most popular gaming experiences</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {games.filter(game => game.featured).map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:scale-105">
            View All Games
          </button>
        </div>
      </div>
    </section>

    {/* Partners Section */}
    <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-y border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Partners</h2>
          <p className="text-xl text-gray-300">Collaborating with industry leaders to deliver exceptional experiences</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner) => (
            <div key={partner.id} className="group">
              <div className="bg-gradient-to-b from-gray-100 to-gray-200 p-6 rounded-3xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 grayscale hover:grayscale-0">
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
    <section className="py-20 bg-gradient-to-r bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center from-purple-900 to-pink-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">About MetaGame Limited</h1>
        <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
          Pioneering the future of gaming through innovation, creativity, and cutting-edge technology
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
              To create extraordinary gaming experiences that inspire, entertain, and connect 
              people around the world. We believe in pushing the boundaries of what's possible 
              in interactive entertainment while maintaining the highest standards of quality 
              and innovation.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Since our founding in 2016, we've been committed to developing games that not 
              only entertain but also bring communities together and create lasting memories.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Target, title: "Vision", desc: "Leading global game innovation" },
              { icon: Users, title: "Team", desc: "50+ passionate developers" },
              { icon: Award, title: "Quality", desc: "Award-winning game design" },
              { icon: Globe, title: "Global", desc: "Players in 100+ countries" }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl text-center border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
                <item.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="font-bold text-white mb-3 text-lg">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Company Timeline */}
    <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-y border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Our Journey</h2>
          <p className="text-xl text-gray-300">A timeline of our growth and achievements</p>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 to-pink-500"></div>
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-3xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                    <div className="text-2xl font-bold text-purple-400 mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full relative z-10 mx-auto"></div>
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
          <p className="text-xl text-gray-300">The talented individuals behind our success</p>
        </div>
        
        <TeamCarousel members={teamMembers} />
      </div>
    </section>

    {/* Core Values */}
    <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-y border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Core Values</h2>
          <p className="text-xl text-gray-300">The principles that guide everything we do</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Lightbulb,
              title: "Innovation",
              description: "We constantly push creative boundaries and embrace new technologies to deliver groundbreaking gaming experiences."
            },
            {
              icon: Users,
              title: "Collaboration",
              description: "We believe in the power of teamwork and foster an environment where diverse talents come together to create magic."
            },
            {
              icon: Award,
              title: "Excellence",
              description: "We maintain the highest standards in everything we create, from initial concept to final release and beyond."
            }
          ].map((value, index) => (
            <div key={index} className="bg-gradient-to-b from-gray-800 to-gray-900 p-10 rounded-3xl shadow-2xl text-center border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
              <value.icon className="h-16 w-16 text-purple-400 mx-auto mb-8" />
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
        <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-10 rounded-3xl shadow-2xl border border-purple-500/20">
          <div className="flex items-center space-x-6 mb-8">
            <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-4 rounded-2xl">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Our Headquarters</h3>
              <p className="text-gray-300">Visit us in the heart of Hong Kong</p>
            </div>
          </div>
          
          <div className="text-lg text-gray-300 space-y-2">
            <p className="font-semibold text-white">MetaGame Limited</p>
            <p>Unit 506, 5/F, New World Tower 1</p>
            <p>18 Queen's Road Central, Central</p>
            <p>Hong Kong</p>
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
      <section className="py-20 bg-gradient-to-r bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center from-purple-900 to-pink-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">Our Games Portfolio</h1>
          <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
            Discover the diverse collection of games we've created across multiple platforms and genres
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-b border-purple-500/20">
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
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
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
                      ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-purple-800/30'
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
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-y border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Platform Presence</h2>
            <p className="text-xl text-gray-300">Our games are available across all major platforms</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Smartphone, platform: "Mobile", count: "8 Games" },
              { icon: Play, platform: "PC/Steam", count: "6 Games" },
              { icon: Gamepad2, platform: "Console", count: "4 Games" },
              { icon: Globe, platform: "Web", count: "3 Games" }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl text-center border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
                <item.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
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
  
  const departments = ['All', 'Engineering', 'Art', 'Design', 'Quality Assurance', 'Marketing'];
  const types = ['All', 'Full-time', 'Contract', 'Part-time'];
  
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    const matchesType = selectedType === 'All' || job.type === selectedType;
    return matchesSearch && matchesDepartment && matchesType;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">Join Our Team</h1>
          <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
            Be part of creating the next generation of gaming experiences. We're looking for 
            passionate individuals who share our vision for innovative game development.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-b border-purple-500/20">
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
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            
            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-400" />
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="bg-gray-800 border border-purple-500/30 rounded-xl text-white px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
              
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="bg-gray-800 border border-purple-500/30 rounded-xl text-white px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
              <JobCard key={job.id} job={job} />
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

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-y border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Work With Us?</h2>
            <p className="text-xl text-gray-300">Great benefits and an amazing work environment</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Competitive Salary",
                description: "Market-leading compensation packages with performance bonuses"
              },
              {
                icon: Shield,
                title: "Flexible Work",
                description: "Remote work options and flexible hours to maintain work-life balance"
              },
              {
                icon: GraduationCap,
                title: "Learning & Growth",
                description: "Continuous learning opportunities and career development programs"
              },
              {
                icon: Heart,
                title: "Health Benefits",
                description: "Comprehensive health insurance and wellness programs"
              },
              {
                icon: Trophy,
                title: "Creative Freedom",
                description: "Work on innovative projects with creative autonomy and input"
              },
              {
                icon: Coffee,
                title: "Team Culture",
                description: "Collaborative environment with regular team events and activities"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
                <benefit.icon className="h-12 w-12 text-purple-400 mb-6" />
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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">Get In Touch</h1>
          <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
            Have a question, idea, or want to collaborate? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-10 rounded-3xl shadow-2xl border border-purple-500/20">
              <h2 className="text-3xl font-bold text-white mb-8">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 font-semibold mb-3">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-gray-700 border border-purple-500/30 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
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
                    className="w-full px-6 py-4 bg-gray-700 border border-purple-500/30 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
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
                    className="w-full px-6 py-4 bg-gray-700 border border-purple-500/30 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 resize-none transition-all duration-300"
                    placeholder="Tell us about your project or inquiry..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-purple-500/25 hover:scale-105"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Company Info */}
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-10 rounded-3xl shadow-2xl border border-purple-500/20">
                <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-3 rounded-xl">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-lg">Address</p>
                      <p className="text-gray-300 mt-2 leading-relaxed">
                        Unit 506, 5/F, New World Tower 1<br />
                        18 Queen's Road Central, Central<br />
                        Hong Kong
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-3 rounded-xl">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-lg">Email</p>
                      <p className="text-gray-300 mt-1">contact@metagame-limited.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-3 rounded-xl">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-lg">Phone</p>
                      <p className="text-gray-300 mt-1">+852 1234 5678</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-10 rounded-3xl shadow-2xl border border-purple-500/20">
                <h3 className="text-2xl font-bold text-white mb-8">Follow Us</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Linkedin, name: "LinkedIn", color: "from-blue-600 to-blue-700" },
                    { icon: Facebook, name: "Facebook", color: "from-blue-700 to-blue-800" },
                    { icon: Twitter, name: "Twitter", color: "from-sky-500 to-sky-600" },
                    { icon: Instagram, name: "Instagram", color: "from-pink-600 to-purple-600" }
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
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-purple-500/20">
                <div className="p-6 border-b border-purple-500/20">
                  <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                    <MapPin className="h-6 w-6 text-purple-400" />
                    <span>Our Location</span>
                  </h3>
                </div>
                <div className="h-80 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.0739737302896!2d114.15562631496598!3d22.28103428533929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404005d7a9a9d1f%3A0x8b8c7a7e8a9a9a9a!2s18%20Queen's%20Rd%20Central%2C%20Central%2C%20Hong%20Kong!5e0!3m2!1sen!2s!4v1641234567890!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'hue-rotate(260deg) saturate(0.7) brightness(0.8)' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="MetaGame Limited Office Location"
                    className="rounded-b-3xl"
                  ></iframe>
                  {/* Overlay for better theming */}
                  <div className="absolute inset-0 bg-purple-900/20 pointer-events-none rounded-b-3xl"></div>
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
const MetaGameWebsite = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 text-white" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Navigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <main className="relative">
        {/* Background Pattern */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-gray-900 to-gray-900 pointer-events-none"></div>
        <div className="fixed inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(139,92,246,0.05)_50%,transparent_75%)] pointer-events-none"></div>
        
        <div className="relative z-10">
          {renderPage()}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-r from-gray-900 to-black text-white py-16 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Play className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">MetaGame Limited</h3>
                  <p className="text-gray-400 text-sm font-medium">metagame-limited.com</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Creating legendary gaming experiences that inspire and entertain players worldwide.
              </p>
              <div className="flex space-x-4">
                {[Linkedin, Facebook, Twitter, Instagram].map((Icon, index) => (
                  <button key={index} className="text-gray-400 hover:text-purple-400 transition-colors p-2 rounded-lg hover:bg-purple-900/20">
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
                    className="block text-gray-300 hover:text-purple-400 transition-colors font-medium"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-lg">Contact</h4>
              <div className="space-y-3 text-gray-300">
                <p>Unit 506, 5/F, New World Tower 1</p>
                <p>18 Queen's Road Central</p>
                <p>Central, Hong Kong</p>
                <p className="mt-4 text-purple-400">contact@metagame-limited.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-purple-500/20 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 MetaGame Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MetaGameWebsite;