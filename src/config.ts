// Star Nails & Lashes - Freiburg Website Configuration

export const config = {
  // ============================================
  // BUSINESS IDENTITY
  // ============================================
  business: {
    name: "Star Nails & Lashes",
    tagline: "NAGELSTUDIO · FREIBURG",
    motto: "Eleganz bis in die Fingerspitzen",
    description: "Ihr Premium Nagelstudio in Freiburg. Von eleganten Klassikern bis zu modernen Kunstwerken – jedes Design wird mit Liebe zum Detail und höchster Präzision kreiert.",
    foundingYear: 2020,
    yearsExperience: 5,
    yearsInCenter: 5,
    satisfiedClients: "500+",
    productBrands: ["Premium Nail Products", "Luxury Gel Systems"],
  },

  // ============================================
  // LOGO (add logo.png to /public when available)
  // ============================================
  // logo: {
  //   src: "/logo.png",
  //   alt: "Star Nails & Lashes Logo",
  // },

  // ============================================
  // CONTACT INFORMATION
  // ============================================
  contact: {
    phone: "0123 456 7890",
    phoneLink: "tel:+491234567890",
    mobile: "0170 123 4567",
    mobileLink: "tel:+491701234567",
    email: "info@example.com",
    whatsapp: "+49 170 123 4567",
    whatsappLink: "https://wa.me/491701234567",
    address: {
      street: "Musterstraße 1",
      city: "Freiburg",
      district: "Zentrum",
      zip: "79098",
    },
    googleMapsEmbed: "",
    googleMapsLink: "#",
  },

  // ============================================
  // SOCIAL MEDIA
  // ============================================
  social: {
    instagram: "https://www.instagram.com/starnailslashes.4/",
    facebook: "",
    tiktok: "",
  },

  // ============================================
  // OPENING HOURS
  // ============================================
  hours: {
    weekdays: "Mo-Fr 10:00-19:00",
    saturday: "Sa 10:00-17:00",
    sunday: "Geschlossen",
    note: "Termine nach Vereinbarung",
    display: "Mo-Sa nach Vereinbarung",
  },

  // ============================================
  // BOOKING
  // ============================================
  booking: {
    url: "#",
  },

  // ============================================
  // GOOGLE REVIEWS
  // ============================================
  reviews: {
    rating: 5.0,
    count: "50+",
    googleReviewLink: "#",
  },

  // ============================================
  // OWNER / ABOUT SECTION
  // ============================================
  owner: {
    name: "Ihr Star Nails Team",
    fullName: "Star Nails & Lashes Team",
    image: "/beauty/face.jpg",
    bio: [
      "Willkommen bei Star Nails & Lashes – Ihrem exklusiven Nagelstudio im Herzen von Freiburg. Mit Leidenschaft und Präzision verwandeln wir Ihre Nägel in kleine Kunstwerke.",
      "Unser erfahrenes Team kreiert individuelle Designs, die perfekt zu Ihrem Stil passen – von dezenter Eleganz bis zu auffälligem Glamour.",
      "Bei uns genießen Sie nicht nur erstklassige Nail Art, sondern auch eine entspannte Atmosphäre, in der Sie sich rundum wohlfühlen können.",
    ],
    certifications: [
      { label: "Zertifizierte Nail Artists", icon: "award" },
      { label: "Premium Produkte", icon: "star" },
      { label: "Höchste Hygienestandards", icon: "shield" },
      { label: "Individuelle Beratung", icon: "check" },
    ],
  },

  // ============================================
  // TESTIMONIALS
  // ============================================
  testimonials: [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Absolut traumhafte Nägel! Das Team ist super freundlich und die Ergebnisse sind jedes Mal perfekt. Kann ich nur weiterempfehlen!",
      service: "Acryl Nägel",
      date: "Dezember 2024",
    },
    {
      name: "Lisa K.",
      rating: 5,
      text: "Endlich ein Nagelstudio, das meine Wünsche versteht! Die 3D-Blumen auf meinen Nägeln waren ein echter Hingucker.",
      service: "3D Nail Art",
      date: "November 2024",
    },
    {
      name: "Anna S.",
      rating: 5,
      text: "Sehr professionell und hygienisch. Die French Maniküre hält super lange und sieht fantastisch aus!",
      service: "French Maniküre",
      date: "Oktober 2024",
    },
  ],

  // ============================================
  // SERVICES (Featured)
  // ============================================
  services: [
    {
      title: "Maniküre",
      description: "Professionelle Nagelpflege mit klassischem Lack, Shellac oder Gel Polish. Für perfekt gepflegte Hände, die strahlen.",
      price: "ab 25€",
      image: "/beauty/maniküre 3.png",
      benefits: ["Langanhaltend", "Gepflegt"],
    },
    {
      title: "Pediküre",
      description: "Verwöhnende Fußpflege mit Lack oder Shellac. Entspannung pur für Ihre Füße mit professioneller Pflege.",
      price: "ab 35€",
      image: "/beauty/pedicure.webp",
      benefits: ["Entspannend", "Pflegend"],
    },
    {
      title: "Gel & Acryl Nägel",
      description: "Hochwertige Nagelmodellage mit Gel oder Acryl. Neuanlage und Auffüllung für starke, schöne Nägel.",
      price: "ab 45€",
      image: "/beauty/maniküre neu.png",
      benefits: ["Robust", "Elegant"],
    },
    {
      title: "Nail Art & Design",
      description: "Kreative Nagelkunst von French Tips bis 3D-Blumen. Individuelle Designs, die Ihre Persönlichkeit unterstreichen.",
      price: "ab 5€",
      image: "/beauty/wimpern.png",
      benefits: ["Kreativ", "Einzigartig"],
    },
    {
      title: "Wimpernverlängerung",
      description: "Traumhaft volle Wimpern für einen verführerischen Blick. Volume Lashes und Classic Lashes nach Ihren Wünschen.",
      price: "ab 80€",
      image: "/beauty/wimpern3.jpg",
      benefits: ["Voluminös", "Natürlich"],
    },
    {
      title: "Waxing",
      description: "Sanfte Haarentfernung für glatte Haut. Professionelles Waxing für Gesicht und Körper.",
      price: "ab 10€",
      image: "/beauty/face2.jpg",
      benefits: ["Sanft", "Langanhaltend"],
    },
  ],

  // ============================================
  // PRICING MENU
  // ============================================
  pricing: [
    {
      category: "Maniküre",
      items: [
        { name: "Classic Maniküre", price: "25€" },
        { name: "Maniküre mit Shellac", price: "35€" },
        { name: "Spa Maniküre Deluxe", price: "45€" },
        { name: "Lack wechseln (Hände)", price: "15€" },
        { name: "Shellac entfernen", price: "10€" },
      ],
    },
    {
      category: "Pediküre",
      items: [
        { name: "Classic Pediküre", price: "35€" },
        { name: "Pediküre mit Shellac", price: "45€" },
        { name: "Spa Pediküre Deluxe", price: "55€" },
        { name: "Lack wechseln (Füße)", price: "20€" },
      ],
    },
    {
      category: "Nagelmodellage",
      items: [
        { name: "Acryl Neuanlage", price: "55€" },
        { name: "Acryl Auffüllung", price: "40€" },
        { name: "Gel Neuanlage", price: "60€" },
        { name: "Gel Auffüllung", price: "45€" },
        { name: "French / Ombre", price: "+15€" },
        { name: "Verstärkung Naturnagel", price: "40€" },
      ],
    },
    {
      category: "Nail Art & Extras",
      items: [
        { name: "Einfaches Design (pro Nagel)", price: "2€" },
        { name: "Aufwendiges Design (pro Nagel)", price: "5€" },
        { name: "3D Design / Blumen", price: "ab 8€" },
        { name: "Glitzer / Strass", price: "ab 3€" },
        { name: "Reparatur (pro Nagel)", price: "5€" },
      ],
    },
    {
      category: "Wimpern",
      items: [
        { name: "Classic Lashes Neuanlage", price: "80€" },
        { name: "Classic Lashes Auffüllung", price: "45€" },
        { name: "Volume Lashes Neuanlage", price: "120€" },
        { name: "Volume Lashes Auffüllung", price: "60€" },
        { name: "Lash Lifting", price: "55€" },
      ],
    },
    {
      category: "Waxing",
      items: [
        { name: "Augenbrauen", price: "10€" },
        { name: "Oberlippe", price: "8€" },
        { name: "Ganzes Gesicht", price: "25€" },
        { name: "Achseln", price: "15€" },
        { name: "Arme", price: "25€" },
        { name: "Beine komplett", price: "45€" },
      ],
    },
  ],

  // ============================================
  // IMAGES
  // ============================================
  images: {
    hero: "/beauty/maniküre 3.png",
    heroAlt: "Star Nails & Lashes - Premium Nagelstudio Freiburg",
    hygiene: "/beauty/behandlung 3.png",
    gallery: [
      { url: "/beauty/maniküre 3.png", category: "Maniküre" },
      { url: "/beauty/maniküre neu.png", category: "Nageldesign" },
      { url: "/beauty/wimpern.png", category: "Wimpern" },
      { url: "/beauty/wimpern3.jpg", category: "Wimpern" },
      { url: "/beauty/pedicure.webp", category: "Pediküre" },
      { url: "/beauty/face.jpg", category: "Beauty" },
      { url: "/beauty/behandlung 3.png", category: "Studio" },
      { url: "/beauty/face2.jpg", category: "Beauty" },
    ],
  },

  // ============================================
  // COLORS (Theme) - Rose Gold / Warm Champagne
  // ============================================
  colors: {
    primary: "#B8860B",
    primaryRgb: "184, 134, 11",
    dark: "#1A1A1A",
    light: "#FAFAFA",
    lightAlt: "#F5F5F5",
  },

  // ============================================
  // HYGIENE SECTION
  // ============================================
  hygiene: {
    headline: "Premium Nail Erlebnis",
    description: "Bei Star Nails & Lashes erwartet Sie ein luxuriöses Ambiente mit modernster Ausstattung und höchsten Hygienestandards.",
    features: [
      {
        icon: "shield",
        title: "Höchste Hygiene",
        description: "Wir arbeiten mit sterilisierten Instrumenten. Ihre Gesundheit hat für uns oberste Priorität.",
      },
      {
        icon: "star",
        title: "Premium Produkte",
        description: "Nur hochwertige Markenprodukte für langanhaltende und schonende Ergebnisse.",
      },
      {
        icon: "award",
        title: "Erfahrene Nail Artists",
        description: "Unser Team ist bestens geschult und kreiert perfekte Designs mit Präzision.",
      },
      {
        icon: "check",
        title: "Zentrale Lage",
        description: "Mitten in der Freiburger Altstadt – perfekt erreichbar für alle.",
      },
    ],
  },
};

export type Config = typeof config;
