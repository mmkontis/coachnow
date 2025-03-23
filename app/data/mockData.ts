// Athletic discipline categories
export const categories = [
  {
    id: "cat-1",
    name: "Lifting",
    icon: "https://cdn-icons-png.flaticon.com/512/3043/3043786.png",
    description: "Powerlifting and bodybuilding programs optimized for strength and hypertrophy."
  },
  {
    id: "cat-2",
    name: "Running",
    icon: "https://cdn-icons-png.flaticon.com/512/2151/2151449.png",
    description: "Track, marathon, and endurance training with AI-optimized pacing strategies."
  },
  {
    id: "cat-3",
    name: "Boxing",
    icon: "https://cdn-icons-png.flaticon.com/512/2671/2671457.png",
    description: "Combat sports training with technique analysis and conditioning protocols."
  },
  {
    id: "cat-4",
    name: "Grinding",
    icon: "https://cdn-icons-png.flaticon.com/512/4256/4256900.png",
    description: "Lifestyle optimization for entrepreneurs and high performers balancing fitness and success."
  },
  {
    id: "cat-5",
    name: "Cycling",
    icon: "https://cdn-icons-png.flaticon.com/512/2151/2151392.png",
    description: "Road and mountain biking with advanced cadence and interval programming."
  },
  {
    id: "cat-6",
    name: "Tennis",
    icon: "https://cdn-icons-png.flaticon.com/512/1099/1099680.png",
    description: "Court sports training with agility drills and stroke refinement."
  },
  {
    id: "cat-7",
    name: "CrossFit",
    icon: "https://cdn-icons-png.flaticon.com/512/2548/2548537.png",
    description: "Functional fitness programming with WOD optimization and scaling."
  },
  {
    id: "cat-8",
    name: "Yoga",
    icon: "https://cdn-icons-png.flaticon.com/512/1688/1688039.png",
    description: "Flexibility and mobility programming with progressive sequencing."
  }
];

// Featured athletes 
export const featuredAthletes = [
  {
    id: "ath-1",
    name: "Alex Crusher",
    category: "Lifting",
    categoryId: "cat-1",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80",
    description: "6x powerlifting champion with AI-optimized strength programming for maximum hypertrophy and power output.",
    stats: [
      { value: "780kg", label: "Total" },
      { value: "120kg", label: "Lean Mass" },
      { value: "6x", label: "National Champion" }
    ],
    followers: 248000,
    programs: ["Hypertrophy Extreme", "Power Protocol"],
    socialLinks: {
      instagram: "https://instagram.com/alexcrusher",
      youtube: "https://youtube.com/alexcrusher"
    },
    aiScore: 95.8,
    achievements: ["6x National Champion", "World Record Holder"]
  },
  {
    id: "ath-2",
    name: "Maria Blaze",
    category: "Running",
    categoryId: "cat-2",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
    description: "Ultra-marathon elite with personalized pace strategies and recovery protocols powered by our AI.",
    stats: [
      { value: "2:22", label: "Marathon" },
      { value: "150mi", label: "Weekly" }
    ],
    followers: 186000,
    programs: ["Marathon Mastery", "Recovery Protocol"],
    socialLinks: {
      instagram: "https://instagram.com/mariablaze",
      youtube: "https://youtube.com/mariablaze"
    },
    aiScore: 94.3
  },
  {
    id: "ath-3",
    name: "Mike 'The Savage' Johnson",
    category: "Boxing",
    categoryId: "cat-3",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80",
    description: "Undefeated MMA fighter whose reflexes and conditioning have been enhanced through AI fight analysis.",
    stats: [
      { value: "15-0", label: "Record" },
      { value: "92%", label: "KO Rate" }
    ],
    followers: 321000,
    programs: ["Fight Conditioning", "Knockout Power"],
    socialLinks: {
      instagram: "https://instagram.com/mikesavage",
      youtube: "https://youtube.com/mikesavage"
    },
    aiScore: 97.1
  },
  {
    id: "ath-4",
    name: "Kai Zen",
    category: "CrossFit",
    categoryId: "cat-7",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80",
    description: "CrossFit Games athlete with specialized metcon programming and elite recovery strategies.",
    stats: [
      { value: "Top 10", label: "Games" },
      { value: "490lb", label: "Deadlift" }
    ],
    followers: 275000,
    programs: ["MetCon Matrix", "Functional Beast"],
    socialLinks: {
      instagram: "https://instagram.com/kaizen",
      youtube: "https://youtube.com/kaizen"
    },
    aiScore: 96.7
  },
  {
    id: "ath-5",
    name: "Serena Swift",
    category: "Cycling",
    categoryId: "cat-5",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80",
    description: "Pro cyclist with AI-optimized training for maximum power output and endurance on climbs.",
    stats: [
      { value: "450w", label: "FTP" },
      { value: "Tour", label: "Winner" }
    ],
    followers: 153000,
    programs: ["Power Pedal", "Climbing Crusher"],
    socialLinks: {
      instagram: "https://instagram.com/serenaswift",
      youtube: "https://youtube.com/serenaswift"
    },
    aiScore: 93.5
  },
  {
    id: "ath-6",
    name: "Flex Stone",
    category: "Grinding",
    categoryId: "cat-4",
    image: "https://images.unsplash.com/photo-1550345332-09e3ac987658?w=800&q=80",
    description: "Transformation specialist who's helped thousands shred fat and build muscle through AI-optimized HIIT.",
    stats: [
      { value: "8%", label: "Body Fat" },
      { value: "22\"", label: "Arms" }
    ],
    followers: 412000,
    programs: ["Shred Protocol", "Mass Machine"],
    socialLinks: {
      instagram: "https://instagram.com/flexstone",
      youtube: "https://youtube.com/flexstone"
    },
    aiScore: 95.2
  },
  {
    id: "ath-1-2",
    name: "Jake Power",
    category: "Lifting",
    categoryId: "cat-1",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80",
    description: "Specializing in strength and conditioning with a focus on functional movements and athletic performance.",
    stats: [
      { value: "250kg", label: "Squat" },
      { value: "8%", label: "Body Fat" },
      { value: "10K+", label: "Athletes Coached" }
    ],
    followers: 125000,
    programs: ["Functional Force", "Strength Foundation"],
    socialLinks: {
      instagram: "https://instagram.com/jakepower",
      youtube: "https://youtube.com/jakepower"
    },
    aiScore: 91.4,
    achievements: ["Elite Coach", "10,000+ Athletes Trained"]
  },
  {
    id: "ath-1-3",
    name: "Sarah Strong",
    category: "Lifting",
    categoryId: "cat-1",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80",
    description: "Olympic weightlifting specialist with AI-enhanced technique analysis and progressive programming.",
    stats: [
      { value: "110kg", label: "Clean & Jerk" },
      { value: "92kg", label: "Snatch" },
      { value: "Olympic", label: "Medalist" }
    ],
    followers: 210000,
    programs: ["Olympic Pathway", "Explosive Power"],
    socialLinks: {
      instagram: "https://instagram.com/sarahstrong",
      youtube: "https://youtube.com/sarahstrong"
    },
    aiScore: 93.7,
    achievements: ["Olympic Bronze Medalist", "3x Continental Champion"]
  },
  {
    id: "ath-2-2",
    name: "Chris Sprint",
    category: "Running",
    categoryId: "cat-2",
    image: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800&q=80",
    description: "Track specialist focused on sprints with AI-optimized acceleration and explosive power training.",
    stats: [
      { value: "10.2s", label: "100m" },
      { value: "20.7s", label: "200m" }
    ],
    followers: 142000,
    programs: ["Sprint Mastery", "Explosive Start"],
    socialLinks: {
      instagram: "https://instagram.com/chrissprint",
      youtube: "https://youtube.com/chrissprint"
    },
    aiScore: 90.8
  },
  {
    id: "ath-2-3",
    name: "Emma Trails",
    category: "Running",
    categoryId: "cat-2",
    image: "https://images.unsplash.com/photo-1502230831726-fe5549140034?w=800&q=80",
    description: "Trail running expert with specialized training for varied terrain and elevation adaptations.",
    stats: [
      { value: "4:35", label: "50K Trail" },
      { value: "6000ft", label: "Elev/Week" }
    ],
    followers: 178000,
    programs: ["Trail Warrior", "Mountain Master"],
    socialLinks: {
      instagram: "https://instagram.com/emmatrails",
      youtube: "https://youtube.com/emmatrails"
    },
    aiScore: 94.1
  },
  {
    id: "ath-3-1",
    name: "Mike Strike",
    category: "Boxing",
    categoryId: "cat-3",
    image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=800&q=80",
    description: "Professional boxer with AI-enhanced training protocols focusing on speed, power, and defensive techniques.",
    stats: [
      { value: "21-2", label: "Record" },
      { value: "86%", label: "KO Rate" },
      { value: "WBC", label: "Champion" }
    ],
    followers: 320000,
    programs: ["Power Punching", "Ring IQ"],
    socialLinks: {
      instagram: "https://instagram.com/mikestrike",
      youtube: "https://youtube.com/mikestrike"
    },
    aiScore: 95.2,
    achievements: ["WBC Champion", "Fighter of the Year"]
  },
  {
    id: "ath-3-2",
    name: "Lisa Swift",
    category: "Boxing",
    categoryId: "cat-3",
    image: "https://images.unsplash.com/photo-1615117972428-28de67cda58e?w=800&q=80",
    description: "Technical boxing specialist with a focus on footwork, speed, and tactical approach to fighting.",
    stats: [
      { value: "15-0", label: "Record" },
      { value: "+12", label: "Reach Adv" },
      { value: "European", label: "Champion" }
    ],
    followers: 186000,
    programs: ["Precision Boxing", "Footwork Master"],
    socialLinks: {
      instagram: "https://instagram.com/lisaswift",
      youtube: "https://youtube.com/lisaswift"
    },
    aiScore: 92.9,
    achievements: ["European Champion", "Olympic Team Captain"]
  },
  {
    id: "ath-3-3",
    name: "Ray Counter",
    category: "Boxing",
    categoryId: "cat-3",
    image: "https://images.unsplash.com/photo-1495555687398-3f50d6e79e1e?w=800&q=80",
    description: "Counter-puncher with intelligent defensive systems and strategic fighting approach.",
    stats: [
      { value: "18-1", label: "Record" },
      { value: "92%", label: "Def. Rate" }
    ],
    followers: 204000,
    programs: ["Counter Attack", "Defense Mastery"],
    socialLinks: {
      instagram: "https://instagram.com/raycounter",
      youtube: "https://youtube.com/raycounter"
    },
    aiScore: 93.5
  },
  {
    id: "ath-4-1",
    name: "Trent Beast",
    category: "Grinding",
    categoryId: "cat-4",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&q=80",
    description: "Entrepreneur and fitness influencer balancing high-intensity training with building a global business empire.",
    stats: [
      { value: "$8M+", label: "Business Revenue" },
      { value: "5:00AM", label: "Daily Start" },
      { value: "12%", label: "Body Fat" }
    ],
    followers: 278000,
    programs: ["Entrepreneur Fitness", "Morning Ritual"],
    socialLinks: {
      instagram: "https://instagram.com/trentbeast",
      youtube: "https://youtube.com/trentbeast"
    },
    aiScore: 94.7,
    achievements: ["Fortune 30 Under 30", "8-Figure Business Owner"]
  },
  {
    id: "ath-4-2",
    name: "Aisha Burn",
    category: "Grinding",
    categoryId: "cat-4",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=800&q=80",
    description: "CEO by day, fitness enthusiast by dawn. Pioneering the integration of peak performance in business and health.",
    stats: [
      { value: "3 Exits", label: "Startup Success" },
      { value: "18 Hours", label: "Peak Week" },
      { value: "7 Min", label: "Mile Time" }
    ],
    followers: 193000,
    programs: ["Executive Edge", "CEO Fitness"],
    socialLinks: {
      instagram: "https://instagram.com/aishaburn",
      youtube: "https://youtube.com/aishaburn"
    },
    aiScore: 91.6,
    achievements: ["Tech CEO of the Year", "Ironman Finisher"]
  },
  {
    id: "ath-4-3",
    name: "Derek Intense",
    category: "Grinding",
    categoryId: "cat-4",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    description: "Former military leader turned business consultant who teaches elite performers how to optimize every minute.",
    stats: [
      { value: "4:30AM", label: "Wake-up Time" },
      { value: "2 Books", label: "Published" },
      { value: "100+", label: "Corporate Clients" }
    ],
    followers: 221000,
    programs: ["Military Discipline", "Elite Morning Routine"],
    socialLinks: {
      instagram: "https://instagram.com/derekintense",
      youtube: "https://youtube.com/derekintense"
    },
    aiScore: 93.2,
    achievements: ["Best-Selling Author", "Special Forces Veteran"]
  },
  {
    id: "ath-5-1",
    name: "Lance Pedal",
    category: "Cycling",
    categoryId: "cat-5",
    image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800&q=80",
    description: "Road cycling specialist with AI-powered training plans focusing on endurance and climbing ability.",
    stats: [
      { value: "5.4W/kg", label: "FTP" },
      { value: "320km", label: "Weekly" }
    ],
    followers: 165000,
    programs: ["Mountain King", "Road Domination"],
    socialLinks: {
      instagram: "https://instagram.com/lancepedal",
      youtube: "https://youtube.com/lancepedal"
    },
    aiScore: 92.8
  },
  {
    id: "ath-5-2",
    name: "Nina Wheels",
    category: "Cycling",
    categoryId: "cat-5",
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=800&q=80",
    description: "Track cycling champion specializing in sprint events with explosive power development.",
    stats: [
      { value: "65kph", label: "Max Speed" },
      { value: "1800W", label: "Peak Power" }
    ],
    followers: 142000,
    programs: ["Velodrome Master", "Sprint Power"],
    socialLinks: {
      instagram: "https://instagram.com/ninawheels",
      youtube: "https://youtube.com/ninawheels"
    },
    aiScore: 91.5
  },
  {
    id: "ath-5-3",
    name: "Marco Trail",
    category: "Cycling",
    categoryId: "cat-5",
    image: "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=800&q=80",
    description: "Mountain biking expert with technique-focused training and terrain-specific conditioning.",
    stats: [
      { value: "1.2m", label: "Max Drop" },
      { value: "4:32", label: "DH Time" }
    ],
    followers: 189000,
    programs: ["Trail Blazer", "Downhill Dominator"],
    socialLinks: {
      instagram: "https://instagram.com/marcotrail",
      youtube: "https://youtube.com/marcotrail"
    },
    aiScore: 93.1
  },
  {
    id: "ath-6-1",
    name: "Serena Ace",
    category: "Tennis",
    categoryId: "cat-6",
    image: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=800&q=80",
    description: "Professional tennis player with power-based gameplay and AI-enhanced stroke analysis.",
    stats: [
      { value: "195kph", label: "Serve" },
      { value: "87%", label: "1st Serve Pts" }
    ],
    followers: 312000,
    programs: ["Power Tennis", "Service Domination"],
    socialLinks: {
      instagram: "https://instagram.com/serenaace",
      youtube: "https://youtube.com/serenaace"
    },
    aiScore: 95.6
  },
  {
    id: "ath-6-2",
    name: "Roger Slice",
    category: "Tennis",
    categoryId: "cat-6",
    image: "https://images.unsplash.com/photo-1542144582-1ba00456b5e3?w=800&q=80",
    description: "Technical tennis specialist with elegant play style and tactical court movement.",
    stats: [
      { value: "78%", label: "Win Rate" },
      { value: "43", label: "Shot Variety" }
    ],
    followers: 387000,
    programs: ["Technical Tennis", "Court Craft"],
    socialLinks: {
      instagram: "https://instagram.com/rogerslice",
      youtube: "https://youtube.com/rogerslice"
    },
    aiScore: 96.2
  },
  {
    id: "ath-6-3",
    name: "Andy Baseline",
    category: "Tennis",
    categoryId: "cat-6",
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=800&q=80",
    description: "Baseline specialist with exceptional endurance and consistent groundstrokes.",
    stats: [
      { value: "82%", label: "Baseline Pts" },
      { value: "4.8hr", label: "Endurance" }
    ],
    followers: 218000,
    programs: ["Baseline Master", "Endurance Tennis"],
    socialLinks: {
      instagram: "https://instagram.com/andybaseline",
      youtube: "https://youtube.com/andybaseline"
    },
    aiScore: 92.4
  },
  {
    id: "ath-7-1",
    name: "Travis WOD",
    category: "CrossFit",
    categoryId: "cat-7",
    image: "https://images.unsplash.com/photo-1533681904393-9ab6eee7e408?w=800&q=80",
    description: "CrossFit competitor with AI-optimized WOD programming and functional movement patterns.",
    stats: [
      { value: "325kg", label: "Total" },
      { value: "Sub-3", label: "Fran Time" }
    ],
    followers: 276000,
    programs: ["WOD Warrior", "Functional Beast"],
    socialLinks: {
      instagram: "https://instagram.com/traviswod",
      youtube: "https://youtube.com/traviswod"
    },
    aiScore: 94.3
  },
  {
    id: "ath-7-2",
    name: "Kara Box",
    category: "CrossFit",
    categoryId: "cat-7",
    image: "https://images.unsplash.com/photo-1584863265045-f9d10ca7fa61?w=800&q=80",
    description: "Gymnastic-focused CrossFit specialist with bodyweight mastery and mobility excellence.",
    stats: [
      { value: "30", label: "Muscle-Ups" },
      { value: "210", label: "Mobility Score" }
    ],
    followers: 193000,
    programs: ["Gymnastics WOD", "Bodyweight Master"],
    socialLinks: {
      instagram: "https://instagram.com/karabox",
      youtube: "https://youtube.com/karabox"
    },
    aiScore: 92.1
  },
  {
    id: "ath-7-3",
    name: "Jason Functional",
    category: "CrossFit",
    categoryId: "cat-7",
    image: "https://images.unsplash.com/photo-1577221084712-45b0445d2b00?w=800&q=80",
    description: "Olympic lifting specialist within CrossFit with explosive power and technical expertise.",
    stats: [
      { value: "148kg", label: "Clean & Jerk" },
      { value: "4:30", label: "Grace Time" }
    ],
    followers: 215000,
    programs: ["Olympic WOD", "Power & Technical"],
    socialLinks: {
      instagram: "https://instagram.com/jasonfunctional",
      youtube: "https://youtube.com/jasonfunctional"
    },
    aiScore: 93.7
  }
];

// Platform features
export const features = [
  {
    id: "feat-1",
    icon: "https://cdn-icons-png.flaticon.com/512/2936/2936886.png",
    title: "AI BEAST MODE",
    description: "Ultra-personalized workout plans using advanced AI to maximize your gains and demolish plateaus."
  },
  {
    id: "feat-2", 
    icon: "https://cdn-icons-png.flaticon.com/512/1067/1067357.png",
    title: "ELITE PERFORMANCE TRACKING",
    description: "Military-grade analytics that track every rep, set, and recovery period with scientific precision."
  },
  {
    id: "feat-3",
    icon: "https://cdn-icons-png.flaticon.com/512/7043/7043968.png",
    title: "WARRIOR COMMUNITY",
    description: "Connect with elite gym rats worldwide, compete in challenges, and push beyond your limits."
  },
  {
    id: "feat-4",
    icon: "https://cdn-icons-png.flaticon.com/512/2672/2672379.png",
    title: "DOMINATE CONTENT",
    description: "Create savage fitness content with AI that explodes your following and establishes your dominance."
  },
  {
    id: "feat-5",
    icon: "https://cdn-icons-png.flaticon.com/512/7335/7335064.png",
    title: "ANABOLIC NUTRITION",
    description: "AI-powered meal plans that fuel your gains with scientific precision for maximum muscle growth."
  },
  {
    id: "feat-6",
    icon: "https://cdn-icons-png.flaticon.com/512/6811/6811336.png",
    title: "BEAST COACHING",
    description: "Real-time form correction and elite coaching from the world's top trainers through AI."
  }
];

// User testimonials
export const testimonials = [
  {
    id: "test-1",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    name: "Jake Steel",
    title: "CrossFit Champion",
    quote: "CoachNow's AI is like having an elite coach 24/7. My deadlift PR jumped 60lbs in 8 weeks. This platform is the real deal for serious athletes.",
    rating: 5,
    program: "Power Protocol",
    results: {
      strengthGain: "32%",
      bodyFatReduction: "4.8%"
    }
  },
  {
    id: "test-2",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Mike Savage",
    title: "Fitness Influencer",
    quote: "The AI content tools helped me 5X my following in 3 months. My engagement is through the roof, and I'm making more in sponsorships than ever.",
    rating: 5,
    program: "Content Domination",
    results: {
      followerGrowth: "482%",
      engagement: "38% increase"
    }
  },
  {
    id: "test-3",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    name: "Alex Fury",
    title: "IFBB Pro",
    quote: "The precision of CoachNow's AI is unreal. It spotted weaknesses in my training I didn't see, which transformed my physique. Mandatory for serious lifters.",
    rating: 5,
    program: "Hypertrophy Extreme",
    results: {
      muscleGain: "11.3kg",
      competitionPlacement: "1st Place"
    }
  },
  {
    id: "test-4",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Tara Power",
    title: "Marathon Runner",
    quote: "The AI-optimized training adjusted perfectly to my recovery needs. Shaved 14 minutes off my marathon PR while training fewer hours per week.",
    rating: 5,
    program: "Marathon Mastery",
    results: {
      raceTimes: "14:22 improvement",
      vo2max: "12% increase"
    }
  },
  {
    id: "test-5",
    avatar: "https://randomuser.me/api/portraits/men/51.jpg",
    name: "Marcus Strong",
    title: "Military Fitness",
    quote: "As a former Special Forces operator, I know serious training. CoachNow's AI programming is next-level. Prepared me for selection better than anything else.",
    rating: 5,
    program: "Elite Conditioning",
    results: {
      endurance: "45% improvement",
      strengthEndurance: "3x increase"
    }
  },
  {
    id: "test-6",
    avatar: "https://randomuser.me/api/portraits/women/42.jpg",
    name: "Jade Flex",
    title: "Yoga Instructor",
    quote: "Even though I teach yoga, I use CoachNow's AI for my strength training. The mobility analysis improved my practice tremendously.",
    rating: 4,
    program: "Strength & Mobility",
    results: {
      mobility: "28% improvement",
      corePower: "significant increase"
    }
  }
];

// Membership plans
export const plans = [
  {
    id: "plan-1",
    name: "WARRIOR",
    description: "For dedicated athletes",
    price: 19.99,
    features: [
      "AI workout customization",
      "Performance tracking",
      "Beast community access",
      "Basic nutrition guidance"
    ],
    aiFeatures: ["Basic Algorithm", "Weekly Adjustments"],
    contentCreation: false,
    coachAccess: false,
    analyticsLevel: "Basic",
    recommended: false,
    featured: false
  },
  {
    id: "plan-2",
    name: "BEAST",
    description: "For elite performers",
    price: 39.99,
    features: [
      "Everything in WARRIOR",
      "Advanced AI training system",
      "Anabolic nutrition planning",
      "Form correction technology",
      "Priority support"
    ],
    aiFeatures: ["Advanced Algorithm", "Daily Adjustments", "Form Analysis"],
    contentCreation: true,
    coachAccess: false,
    analyticsLevel: "Advanced",
    recommended: true,
    featured: true
  },
  {
    id: "plan-3",
    name: "LEGEND",
    description: "For the top 1%",
    price: 99.99,
    features: [
      "Everything in BEAST",
      "Elite performance analytics",
      "1-on-1 with pro coaches monthly",
      "Custom programming",
      "Exclusive content tools"
    ],
    aiFeatures: ["Elite Algorithm", "Real-time Adjustments", "Predictive Analytics"],
    contentCreation: true,
    coachAccess: true,
    analyticsLevel: "Elite",
    recommended: false,
    featured: false
  },
  {
    id: "plan-4",
    name: "INFLUENCER",
    description: "For content creators",
    price: 149.99,
    features: [
      "Everything in LEGEND",
      "AI content generation",
      "Audience analytics",
      "Brand partnership tools",
      "Content calendar AI"
    ],
    aiFeatures: ["All Elite Features", "Content AI", "Audience Analysis"],
    contentCreation: true,
    coachAccess: true,
    analyticsLevel: "Elite+",
    recommended: false,
    featured: false,
    hidden: true
  }
];

// Sample workouts by category
export const sampleWorkouts = [
  {
    id: "workout-1",
    categoryId: "cat-1",
    name: "Hypertrophy Blast",
    type: "Bodybuilding",
    description: "Maximizes muscle growth through AI-optimized volume and tension.",
    level: "Intermediate",
    duration: 65,
    exercises: [
      {
        name: "Barbell Squat",
        sets: 4,
        reps: "8-10",
        rest: 120,
        aiNotes: "Emphasize depth for maximum quad activation"
      },
      {
        name: "Romanian Deadlift",
        sets: 3,
        reps: "10-12",
        rest: 90,
        aiNotes: "Focus on hamstring stretch at bottom position"
      },
      {
        name: "Incline Bench Press",
        sets: 4,
        reps: "8-12",
        rest: 90,
        aiNotes: "Upper chest emphasis with controlled eccentric"
      }
    ],
    aiScore: 94.7,
    userRating: 4.8
  },
  {
    id: "workout-2",
    categoryId: "cat-2",
    name: "Endurance Builder",
    type: "Running",
    description: "Develops aerobic capacity with optimized intervals.",
    level: "Advanced",
    duration: 55,
    exercises: [
      {
        name: "Warm-up Jog",
        distance: "1 mile",
        pace: "Easy",
        aiNotes: "Gradually increase heart rate to 120-130 BPM"
      },
      {
        name: "Interval Sprints",
        sets: 8,
        distance: "400m",
        rest: 90,
        pace: "85% effort",
        aiNotes: "Maintain consistent pace across all intervals"
      },
      {
        name: "Cool Down",
        distance: "1 mile",
        pace: "Very Easy",
        aiNotes: "Focus on breath control and relaxation"
      }
    ],
    aiScore: 92.5,
    userRating: 4.7
  },
  {
    id: "workout-3",
    categoryId: "cat-3",
    name: "Fighter Conditioning",
    type: "Boxing",
    description: "Explosive power and endurance for combat athletes.",
    level: "Elite",
    duration: 75,
    exercises: [
      {
        name: "Shadow Boxing",
        duration: 3,
        sets: 5,
        rest: 60,
        aiNotes: "Focus on technique and speed, vary combinations"
      },
      {
        name: "Heavy Bag Work",
        duration: 3,
        sets: 5,
        rest: 60,
        aiNotes: "Power punches with hip rotation, maintain guard"
      },
      {
        name: "Footwork Drills",
        duration: 3,
        sets: 4,
        rest: 45,
        aiNotes: "Quick directional changes, maintain balanced stance"
      }
    ],
    aiScore: 96.3,
    userRating: 4.9
  },
  {
    id: "workout-4",
    categoryId: "cat-7",
    name: "MetCon Mayhem",
    type: "CrossFit",
    description: "High-intensity metabolic conditioning for total fitness.",
    level: "Intermediate",
    duration: 45,
    exercises: [
      {
        name: "AMRAP 12 min",
        components: [
          "12 Box Jumps (24\"/20\")",
          "12 KB Swings (53/35 lbs)",
          "12 Calorie Row"
        ],
        aiNotes: "Pace to maintain consistent work rate throughout"
      },
      {
        name: "EMOM 10 min",
        components: [
          "Odd: 10 Power Cleans (135/95 lbs)",
          "Even: 15 Wall Balls (20/14 lbs)"
        ],
        aiNotes: "Quick transitions, focus on breathing between efforts"
      }
    ],
    aiScore: 95.1,
    userRating: 4.8
  }
];

// AI performance metrics
export const aiMetrics = {
  accuracyRate: 99.8,
  adaptationSpeed: 3.2, // days to fully optimize program
  personalizedParameters: 47,
  successRate: 94.7,
  clientRetention: 92.4,
  improvementRate: {
    strength: 32.6,
    endurance: 41.2,
    fat_loss: 27.8,
    muscle_gain: 24.3,
    performance: 38.7
  },
  userSatisfaction: 96.3
};

// Training analytics 
export const analyticsData = {
  userEngagement: {
    daily: 87.2,
    weekly: 95.4,
    monthly: 98.7
  },
  topPerformingPrograms: [
    {
      id: "prog-1",
      name: "Hypertrophy Extreme",
      satisfaction: 97.2,
      results: 94.5
    },
    {
      id: "prog-2",
      name: "Marathon Mastery",
      satisfaction: 95.8,
      results: 92.3
    },
    {
      id: "prog-3",
      name: "Shred Protocol",
      satisfaction: 96.4,
      results: 93.7
    }
  ],
  adherenceRate: 86.7,
  recommendationAccuracy: 94.2,
  fitnessGoals: {
    "muscle_gain": 38.2,
    "fat_loss": 32.7,
    "performance": 18.3,
    "general_fitness": 10.8
  }
};

// Community data
export const communityData = {
  totalUsers: 248764,
  totalWorkoutsCompleted: 12874563,
  totalWeightLifted: 49823541298, // in pounds
  challenges: [
    {
      id: "chal-1",
      name: "Summer Shred Challenge",
      participants: 24657,
      startDate: "2023-06-01",
      endDate: "2023-08-31",
      prize: "$10,000"
    },
    {
      id: "chal-2",
      name: "Deadlift Demolisher",
      participants: 18342,
      startDate: "2023-09-15",
      endDate: "2023-10-15",
      prize: "Year of LEGEND membership"
    },
    {
      id: "chal-3",
      name: "Marathon Madness",
      participants: 9821,
      startDate: "2023-11-01",
      endDate: "2023-12-31",
      prize: "Sponsored race entries"
    }
  ],
  topLeaderboardUsers: [
    {
      id: "user-1",
      username: "BeastMode247",
      points: 124576,
      streak: 342
    },
    {
      id: "user-2",
      username: "IronQueen",
      points: 118935,
      streak: 298
    },
    {
      id: "user-3",
      username: "MountainCrusher",
      points: 112784,
      streak: 257
    }
  ]
}; 