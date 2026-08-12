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
  heroLocation: "Dubai • Sharjah • Ajman",
  rating: 4.9,
  reviewsCount: 180,
  experienceYears: 7,
  completedProjects: 850,
};

export const CITIES = [
  {
    name: "Dubai",
    subtitle: "Downtown, Marina, JLT, Business Bay & Villa Communities",
    description: "On-site installation teams dispatched daily for residential apartments and villa projects across Dubai.",
  },
  {
    name: "Sharjah",
    subtitle: "Al Majaz, Al Nahda, Muwaileh & Residential Districts",
    description: "Reliable installation specialists covering apartments, townhouses, and commercial spaces throughout Sharjah.",
  },
  {
    name: "Ajman",
    subtitle: "Al Nuaimia, Al Rashidiya & Surrounding Areas",
    description: "Clean, same-day site visits for wall mounting, paneling, blinds, and flooring fitting in Ajman.",
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
  image: string;
  whatsappMessage: (city?: string) => string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "tv-unit-wall-installation",
    slug: "tv-unit-installation",
    title: "TV Unit / Wall Installation",
    shortDescription: "Laser-aligned TV wall mounting, floating console fitting, and concealed wire routing.",
    fullDescription: "Professional installation for heavy LED/OLED TVs, media wall consoles, LED strip background fitting, and concealed cable management. You provide the TV mount and console — we handle secure wall anchoring and precision mounting.",
    iconName: "Tv",
    highlights: [
      "Laser level alignment & stud locator mounting",
      "Concealed cable channel routing",
      "Heavy-duty wall anchors for concrete & drywall",
      "Floating console & soundbar fitting"
    ],
    includes: [
      "Bracket positioning & height calibration",
      "Wall drilling & anchor installation",
      "Floating console secure mounting",
      "Wire trunking setup",
      "Workspace cleanup"
    ],
    idealFor: [
      "Apartments & villas in Dubai, Sharjah, Ajman",
      "Home theater & living room upgrades"
    ],
    image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=1000&q=80",
    whatsappMessage: (city = "Dubai") => `Hi Arvo Interior, I need a quote for TV Unit / Wall Installation in ${city}.`
  },
  {
    id: "wall-panels-installation",
    slug: "wall-panels-installation",
    title: "Wall Panels Installation",
    shortDescription: "Precision fitting of 3D foam panels, stainless steel profiles, and gold strip wall paneling.",
    fullDescription: "Flawless wall paneling installation for acoustic foam panels, PVC marble sheets, stainless steel trims, and decorative gold strip wall panels. We ensure accurate pattern alignment, tight seam matching, and clean edge finishing.",
    iconName: "Layers",
    highlights: [
      "Gold strip & steel accent trim fitting",
      "Acoustic & 3D foam panel adhesive mounting",
      "PVC marble & WPC fluted panel fitting",
      "Seamless corner trimming"
    ],
    includes: [
      "Wall surface level inspection",
      "Laser grid measurement & pattern layout",
      "Panel fixing & adhesive bonding",
      "Edge sealant application",
      "Post-job site cleaning"
    ],
    idealFor: [
      "Feature accent walls behind TV units & beds",
      "Dining room wall makeovers"
    ],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
    whatsappMessage: (city = "Dubai") => `Hi Arvo Interior, I need Wall Panels Installation (foam / steel / gold strip) in ${city}.`
  },
  {
    id: "curtains-blinds-installation",
    slug: "curtains-blinds-installation",
    title: "Curtains & Roller Blinds Installation",
    shortDescription: "Heavy curtain rod mounting, ceiling track fixing, and motorized or manual roller blinds fitting.",
    fullDescription: "Secure window treatment installation across all ceiling heights. We mount heavy curtain rods, ceiling-embedded tracks, blackout roller blinds, and motorized window shades with laser level precision.",
    iconName: "Blinds",
    highlights: [
      "Ceiling & wall curtain track mounting",
      "Motorized blind track wiring & remote pairing",
      "Double rod & sheer curtain hanging",
      "Gypsum & concrete ceiling anchoring"
    ],
    includes: [
      "Laser level mark-up & hole drilling",
      "Track & rod anchor installation",
      "Curtain hanging & pleat adjustment",
      "Motorized blinds calibration"
    ],
    idealFor: [
      "High-ceiling villa living rooms",
      "Bedroom blackout setups & office blinds"
    ],
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
    whatsappMessage: (city = "Dubai") => `Hi Arvo Interior, I need Curtains & Roller Blinds Installation in ${city}.`
  },
  {
    id: "spc-flooring-installation",
    slug: "spc-flooring-installation",
    title: "SPC Flooring Installation",
    shortDescription: "Click-lock vinyl SPC plank fitting, underlayment placement, and skirting board installation.",
    fullDescription: "Professional SPC vinyl flooring installation with subfloor prep, underlayment laying, staggered plank fitting, door frame under-cutting, and matching skirting profile installation.",
    iconName: "Grid",
    highlights: [
      "Click-lock vinyl SPC plank laying",
      "Underlayment pad placement",
      "Door frame under-cutting & transition profiles",
      "Skirting board fixing"
    ],
    includes: [
      "Subfloor surface check",
      "Underlayment laying",
      "Plank cutting & stagger pattern fitting",
      "Skirting board installation",
      "Final cleanup"
    ],
    idealFor: [
      "Living room & bedroom floor makeovers",
      "Kitchen & moisture-resistant flooring"
    ],
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1000&q=80",
    whatsappMessage: (city = "Dubai") => `Hi Arvo Interior, I need SPC Flooring Installation in ${city}.`
  },
  {
    id: "painting-decor-finishing",
    slug: "painting-decor-finishing",
    title: "Painting & Décor Finishing",
    shortDescription: "Interior wall repainting, putty patching, feature wall painting, and clean edge masking.",
    fullDescription: "Clean interior wall painting and finishing. Includes furniture protection, wall crack filling, putty smooth sanding, primer coating, and multi-layer wall paint application with crisp borders.",
    iconName: "Paintbrush",
    highlights: [
      "Furniture & floor drop-cloth masking",
      "Wall crack repair & putty smooth sanding",
      "Multi-coat interior wall painting",
      "Accent wall color application"
    ],
    includes: [
      "Surface scraping & putty smoothing",
      "Primer coat application",
      "Two topcoats paint application",
      "Masking tape removal & site cleanup"
    ],
    idealFor: [
      "Apartment repainting before moving in",
      "Feature accent wall color updates"
    ],
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1000&q=80",
    whatsappMessage: (city = "Dubai") => `Hi Arvo Interior, I need Painting & Décor Finishing installation in ${city}.`
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Installation-Only Focus",
    description: "We focus 100% on fitting labor. You choose and purchase materials from your preferred vendor, and we deliver master installation.",
  },
  {
    title: "Transparent Labor Pricing",
    description: "Upfront labor quotes with no hidden material markups or surprise fees after the job is completed.",
  },
  {
    title: "Fast & Clean Workmanship",
    description: "Laser level alignment, heavy-duty anchors for concrete or drywall, and full site cleanup when finished.",
  },
  {
    title: "Satisfaction Committed",
    description: "Our motto: 'Your Satisfaction is Our Commitment'. We inspect every fitting with you before wrapping up.",
  },
];

export const PROJECT_GALLERY = [
  {
    id: "p1",
    title: "TV Wall Mounting & Concealed Wiring",
    service: "TV Unit / Wall Installation",
    city: "Dubai (Downtown)",
    image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=1000&q=80",
    category: "tv-unit",
  },
  {
    id: "p2",
    title: "Gold Strip & Fluted Wall Panel Fitting",
    service: "Wall Panels Installation",
    city: "Sharjah (Al Majaz)",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
    category: "wall-panels",
  },
  {
    id: "p3",
    title: "Ceiling-Mounted Blackout Curtains & Blinds",
    service: "Curtains & Roller Blinds Installation",
    city: "Dubai (Marina)",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
    category: "curtains",
  },
  {
    id: "p4",
    title: "Wood-Grain SPC Click Flooring Installation",
    service: "SPC Flooring Installation",
    city: "Ajman (Al Nuaimia)",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1000&q=80",
    category: "flooring",
  },
  {
    id: "p5",
    title: "Feature Accent Wall Painting & Finishing",
    service: "Painting & Décor Finishing",
    city: "Sharjah (Muwaileh)",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1000&q=80",
    category: "painting",
  },
  {
    id: "p6",
    title: "Floating Media Console & LED Mount",
    service: "TV Unit / Wall Installation",
    city: "Dubai (JLT)",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    category: "tv-unit",
  },
];

export function getWhatsAppLink(message?: string): string {
  const defaultText = encodeURIComponent(
    `Hi Arvo Interior, I would like to get a quote for installation service in UAE.`
  );
  const textParam = message ? encodeURIComponent(message) : defaultText;
  return `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${textParam}`;
}
