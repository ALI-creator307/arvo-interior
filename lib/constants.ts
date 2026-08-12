export const BUSINESS_INFO = {
  name: "Arvo Interior",
  tagline: "Your Satisfaction is Our Commitment",
  model: "Installation-Only Service (No Material Supply)",
  phone: "+971 52 353 2873",
  phoneRaw: "971523532873",
  email: "arvointerior90@gmail.com",
  instagram: "@arvo.interior",
  instagramUrl: "https://instagram.com/arvo.interior",
  websiteUrl: "https://arvointerior-ae.vercel.app",
  serviceAreas: ["Dubai", "Sharjah", "Ajman"],
  heroBadge: "Serving Dubai • Sharjah • Ajman",
  rating: 4.9,
  reviewsCount: 180,
  experienceYears: 7,
  completedProjects: 850,
};

export const CITIES = [
  {
    name: "Dubai",
    badge: "Dubai Installation Team",
    description: "Fast, precision interior installation across Downtown, Marina, JLT, Business Bay, Villa communities & all Dubai zones.",
  },
  {
    name: "Sharjah",
    badge: "Sharjah Installation Team",
    description: "Expert interior installation services covering Al Majaz, Al Nahda, Muwaileh & all Sharjah residential & commercial units.",
  },
  {
    name: "Ajman",
    badge: "Ajman Installation Team",
    description: "Reliable, clean, same-day site visits for installation in Al Nuaimia, Al Rashidiya & all Ajman locations.",
  },
] as const;

export type CityName = typeof CITIES[number]["name"];

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: "Tv" | "Layers" | "Blinds" | "Grid" | "Paintbrush";
  highlights: string[];
  includes: string[];
  idealFor: string[];
  imagePlaceholder: string;
  whatsappMessage: (city?: string) => string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "tv-unit-wall-installation",
    slug: "tv-unit-installation",
    title: "TV Unit / Wall Installation",
    shortDescription: "Precision wall mounting, floating TV console fitting, background accent wall mounting, and concealed cable alignment.",
    fullDescription: "Transform your living room with expert TV unit and TV wall installation. We handle heavy LED/OLED TV wall mounting, floating media console assembly & installation, LED strip background fitting, and hidden wire management. Professional installation only — you bring the materials, we deliver flawless fitting.",
    iconName: "Tv",
    highlights: [
      "Precision laser alignment & stud locator mounting",
      "Concealed wire & cable channel fitting",
      "Floating console & soundbar heavy anchor installation",
      "Background backboard & LED strip mounting"
    ],
    includes: [
      "Heavy-duty bracket & anchor installation",
      "Laser level positioning & height optimization",
      "Floating wall console secure fitting",
      "Cable trunking & hidden wire routing",
      "Post-installation clean-up & testing"
    ],
    idealFor: [
      "Apartments & villas in Dubai, Sharjah, Ajman",
      "Home cinema & modern living room setups",
      "Rental units needing damage-free precision fitting"
    ],
    imagePlaceholder: "/images/services/tv-unit-installation.jpg",
    whatsappMessage: (city = "Dubai") => `Hi Arvo Interior, I would like to get a quote for TV Unit / Wall Installation in ${city}.`
  },
  {
    id: "wall-panels-installation",
    slug: "wall-panels-installation",
    title: "Wall Panels Installation",
    shortDescription: "Expert fitting of 3D foam panels, stainless steel profiles, and luxury gold strip accent wall paneling.",
    fullDescription: "Elevate your interior walls with specialized wall panel installation. We accurately cut, measure, align, and fix acoustic foam panels, PVC marble sheets, stainless steel strips, and luxury gold inlay panels on any wall surface. Installation-only service ensuring seam-free patterns and solid adhesion.",
    iconName: "Layers",
    highlights: [
      "Gold strip & stainless steel profile fitting",
      "Acoustic & 3D foam panel adhesive mounting",
      "PVC marble sheet & WPC fluted panel installation",
      "Perfect corner beveling & seam matching"
    ],
    includes: [
      "Surface preparation & wall level assessment",
      "Precision laser grid measurement",
      "Adhesive/mechanical fixing of panels & gold trims",
      "Corner trimming & edge sealant finishing",
      "Thorough site cleaning after installation"
    ],
    idealFor: [
      "Feature accent walls behind beds or TV units",
      "Dining area wall upgrades",
      "Commercial offices & salon feature walls"
    ],
    imagePlaceholder: "/images/services/wall-panels-installation.jpg",
    whatsappMessage: (city = "Dubai") => `Hi Arvo Interior, I am interested in Wall Panels Installation (foam / steel / gold strip panels) in ${city}. Please send details.`
  },
  {
    id: "curtains-blinds-installation",
    slug: "curtains-blinds-installation",
    title: "Curtains & Roller Blinds Installation",
    shortDescription: "Heavy curtain rod fixing, motorized track mounting, motorized & manual roller blinds installation.",
    fullDescription: "Achieve perfect window coverage with custom curtain and blinds installation. We install ceiling-mounted curtain tracks, heavy-duty metallic rods, motorized blinds, blackout roller blinds, and zebra shades across all window types and double-height ceilings.",
    iconName: "Blinds",
    highlights: [
      "Ceiling & wall curtain track bracket mounting",
      "Motorized blind wiring & remote pairing installation",
      "Double rod & sheer curtain hanging & leveling",
      "Concrete, drywall, and gypsum ceiling anchoring"
    ],
    includes: [
      "Laser level mark-up & drill hole anchoring",
      "Curtain rod, track, & motorized blind installation",
      "Drape hanging & pleat adjustment",
      "Motorized blinds calibration",
      "Clean workspace maintenance"
    ],
    idealFor: [
      "Villa living rooms with tall windows",
      "Bedroom blackout roller blind setups",
      "Office spaces needing glare control blinds"
    ],
    imagePlaceholder: "/images/services/curtains-blinds-installation.jpg",
    whatsappMessage: (city = "Dubai") => `Hi Arvo Interior, I need Curtains & Roller Blinds Installation in ${city}. Can we schedule a site visit?`
  },
  {
    id: "spc-flooring-installation",
    slug: "spc-flooring-installation",
    title: "SPC Flooring Installation",
    shortDescription: "Flawless click-lock SPC vinyl floor fitting, underlayment placement, and skirting/skirting profile installation.",
    fullDescription: "Get waterproof, durable flooring installed with master accuracy. Our SPC flooring installation includes floor inspection, foam underlayment laydown, click-lock vinyl plank fitting, expansion gap management, and matching skirting/threshold profile installation.",
    iconName: "Grid",
    highlights: [
      "Click-lock vinyl SPC plank installation",
      "Subfloor smoothing & underlayment laying",
      "Door frame under-cutting & transition profile fitting",
      "Baseboard skirting board fixing"
    ],
    includes: [
      "Subfloor surface check & prep",
      "Underlayment pad installation",
      "Precision plank cutting & stagger pattern laying",
      "Skirting & edge trim installation",
      "Final floor cleanup & inspection"
    ],
    idealFor: [
      "Living room & bedroom flooring makeovers",
      "Kitchen & moisture-prone area floor upgrades",
      "Commercial retail & studio flooring replacement"
    ],
    imagePlaceholder: "/images/services/spc-flooring-installation.jpg",
    whatsappMessage: (city = "Dubai") => `Hi Arvo Interior, I want to get a quote for SPC Flooring Installation in ${city}.`
  },
  {
    id: "painting-decor-finishing",
    slug: "painting-decor-finishing",
    title: "Painting & Décor Finishing",
    shortDescription: "Interior wall repainting, accent wall painting, touch-up finishing, and protective surface coating.",
    fullDescription: "Refresh your space with professional interior painting and finishing installation. We apply smooth primer coats, multi-layer wall paint, geometric accent wall finishes, and protective sealants with clean edge masking and zero mess.",
    iconName: "Paintbrush",
    highlights: [
      "Precision edge masking & furniture protection",
      "Wall crack filling, sanding & putty smooth prep",
      "Multi-coat interior wall & ceiling painting",
      "Decorative accent wall color application"
    ],
    includes: [
      "Floor & furniture drop-cloth protection",
      "Wall scraping, putty patching & smooth sanding",
      "Primer coat + two topcoats paint application",
      "Clean painter tape removal & crisp border finish",
      "Complete post-paint site cleanup"
    ],
    idealFor: [
      "End-of-lease villa & apartment repainting",
      "New home interior customization",
      "Feature accent wall color refresh"
    ],
    imagePlaceholder: "/images/services/painting-decor-finishing.jpg",
    whatsappMessage: (city = "Dubai") => `Hi Arvo Interior, I need Painting & Décor Finishing installation in ${city}. Please contact me.`
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Installation-Only Experts",
    description: "We don't sell materials — we specialize 100% in expert installation. You buy what you love, we fit it to perfection with master craftsmanship.",
    icon: "ShieldCheck",
  },
  {
    title: "Authentic UAE Workmanship",
    description: "Hundreds of completed installations across Dubai, Sharjah, and Ajman with verified high ratings and satisfied homeowners.",
    icon: "Award",
  },
  {
    title: "Fast & Clean Execution",
    description: "Punctual site visits, precision laser leveling, heavy-duty anchors, and complete site cleanup after every project.",
    icon: "Zap",
  },
  {
    title: "Satisfaction Guaranteed",
    description: "Our motto: 'Your Satisfaction is Our Commitment'. We inspect every alignment and finish before completing any job.",
    icon: "ThumbsUp",
  },
];

export const PROJECT_GALLERY = [
  {
    id: "p1",
    title: "Luxury TV Wall & Fluted Panels",
    service: "TV Unit / Wall Installation",
    city: "Dubai (Downtown)",
    image: "/images/projects/project-1.jpg",
    category: "tv-unit",
  },
  {
    id: "p2",
    title: "Gold Strip & Charcoal Wall Panel Installation",
    service: "Wall Panels Installation",
    city: "Sharjah (Al Majaz)",
    image: "/images/projects/project-2.jpg",
    category: "wall-panels",
  },
  {
    id: "p3",
    title: "Motorized Blackout Blinds Fitting",
    service: "Curtains & Roller Blinds Installation",
    city: "Dubai (Dubai Marina)",
    image: "/images/projects/project-3.jpg",
    category: "curtains",
  },
  {
    id: "p4",
    title: "Wood Grain SPC Vinyl Flooring",
    service: "SPC Flooring Installation",
    city: "Ajman (Al Nuaimia)",
    image: "/images/projects/project-4.jpg",
    category: "flooring",
  },
  {
    id: "p5",
    title: "Feature Accent Wall Painting & Finishing",
    service: "Painting & Décor Finishing",
    city: "Sharjah (Muwaileh)",
    image: "/images/projects/project-5.jpg",
    category: "painting",
  },
  {
    id: "p6",
    title: "Floating TV Console & LED Backlight Mount",
    service: "TV Unit / Wall Installation",
    city: "Dubai (JLT)",
    image: "/images/projects/project-6.jpg",
    category: "tv-unit",
  },
];

export function getWhatsAppLink(message?: string): string {
  const defaultText = encodeURIComponent(
    `Hi Arvo Interior, I would like to get a free quote for installation service in UAE.`
  );
  const textParam = message ? encodeURIComponent(message) : defaultText;
  return `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${textParam}`;
}
