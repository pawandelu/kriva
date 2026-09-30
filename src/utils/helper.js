export const products = [
  { name: "Product 1", href: "#" },
  { name: "Product 2", href: "#" },
  { name: "Product 3", href: "#" },
];

export const ComfortData = [
  {
    id: 1,
    icon: "fastrelief",
    title: "Fast Relief",
    description:
      "Ease muscle tension and soreness quickly so you can stay active.",
  },
  {
    id: 2,
    icon: "smarter",
    title: "Smarter Absorption",
    description:
      "Kriva’s CBDA absorbs up to 10× better than CBD for noticeably faster results.",
  },
  {
    id: 3,
    icon: "clean",
    title: "Clean Confidence",
    description:
      "Always third-party tested. Pure, safe, and trusted by athletes.",
  },
];
export const TABS = [
  { id: "lotion", label: "Lotion" },
  { id: "oil-drop", label: "Oil Drop" },
  { id: "gems", label: "Gems" },
  { id: "soap", label: "Soap" },
];

export const PRODUCTS = [
  // Lotion (3)
  {
    id: 1,
    tabId: "lotion",
    image: "/assets/images/webp/lotion1.webp",
    number: "4.2",
    heading: "Daily Wellness Body Lotion",
    para: "Daily recovery and balance.",
    amount: "$200",
    less: "$53.00",
  },
  {
    id: 2,
    tabId: "lotion",
    image: "/assets/images/webp/lotion1.webp",
    number: "4.2",
    heading: "Everyday Massage Oil- Sold Out",
    para: "Daily recovery and balance.",
    amount: "$200",
    less: "$49.00",
  },
  {
    id: 3,
    tabId: "lotion",
    image: "/assets/images/webp/lotion1.webp",
    number: "4.2",
    heading: "Everyday Massage Oil(1 oz.)",
    para: "Daily recovery and balance.",
    amount: "$200",
    less: "$1.00",
  },

  // Oil Drop (2)
  {
    id: 4,
    tabId: "oil-drop",
    image: "/assets/images/webp/lotion1.webp",
    number: "4.5",
    heading: "Pure Oil Drops (30 ml)",
    para: "Fast acting daily support.",
    amount: "$120",
    less: "$39.00",
  },
  {
    id: 5,
    tabId: "oil-drop",
    image: "/assets/images/webp/lotion1.webp",
    number: "4.3",
    heading: "Night Oil Drops",
    para: "Calm and recover while you sleep.",
    amount: "$110",
    less: "$35.00",
  },

  // Gems (1)
  {
    id: 6,
    tabId: "gems",
    image: "/assets/images/webp/lotion1.webp",
    number: "4.6",
    heading: "Daily Wellness Gems",
    para: "Easy, on-the-go support.",
    amount: "$90",
    less: "$29.00",
  },

  // Soap (3)
  {
    id: 7,
    tabId: "soap",
    image: "/assets/images/webp/lotion1.webp",
    number: "4.4",
    heading: "Recovery Body Soap",
    para: "Gentle cleanse after workouts.",
    amount: "$40",
    less: "$12.00",
  },
  {
    id: 8,
    tabId: "soap",
    image: "/assets/images/webp/lotion1.webp",
    number: "4.1",
    heading: "Sleep Calm Soap",
    para: "Relaxing evening routine.",
    amount: "$45",
    less: "$14.00",
  },
  {
    id: 9,
    tabId: "soap",
    image: "/assets/images/webp/lotion1.webp",
    number: "4.3",
    heading: "Everyday Soap Bar",
    para: "Simple daily care.",
    amount: "$35",
    less: "$10.00",
  },
];

export const TAB_INFO = {
  lotion: {
    heroImage: "/assets/images/webp/droper.webp",
    features: ["Maximum Relief", "Fastest Onset", "Adjustable Dosage"],
  },
  "oil-drop": {
    heroImage: "/assets/images/webp/droper.webp",
    features: ["Fast Absorbing", "Precise Dosing", "Easy To Use"],
  },
  gems: {
    heroImage: "/assets/images/webp/droper.webp",
    features: ["Portable", "Tasty", "Consistent Dose"],
  },
  soap: {
    heroImage: "/assets/images/webp/droper.webp",
    features: ["Gentle Cleanse", "Skin Friendly", "Daily Use"],
  },
};

export const RIGHT_MAGNER = [
  {
    img: "/assets/images/webp/mag-mite.webp",
    heading: "MAG-MATE Terminals",
    para: "Insulation displacement (IDC) terminals simplify magnet wire termination by eliminating the need to strip insulation before assembly. Designed for motor, transformer, coil, and other winding applications, these terminals create reliable electrical connections while helping reduce assembly steps, improve productivity, and support high-volume automated manufacturing. Available in multiple configurations and wire ranges, MAG-MATE solutions can help optimize both performance and production efficiency.",
    link: "View MAG-MATE Products",
    popup: {
      bullets: [
        "Terminates film-insulated copper or aluminum magnet wire",
        "New Nano MAG-MATE terminals are available for fine gauge copper magnet wire terminations",
        "Virtually eliminates need for pre-stripping conductors and post-insulate termination",
        "Terminates two magnet wires of the same size in one terminal (for splicing or bi-filing)",
        "Varnish-resist tab terminals are available for special applications",
        "Broad application coverage – Offered in Standard, Slim-Line, and Mini versions supporting magnet wire sizes from 52 AWG to 12 AWG depending on product family.",
        "Multiple terminal styles available – Includes poke-in, splice, quick connect, crimp wire barrel, solder post, pin, tab, and receptacle configurations to meet diverse design requirements.",
      ],
      images: [
        {
          src: "/assets/images/webp/standard-mag-mate.webp",
          label: "Standard MAG-MATE Terminals",
          about: [
            "Copper wire: 34-12 AWG / 0.16-2.05 mm",
            "Aluminium wire: 33-11 AWG / 0.18-2.30 mm",
          ],
        },
        {
          src: "/assets/images/webp/sim-line.webp",
          label: "Slim Line MAG-MATE Terminals",
          about: ["Copper wire: 33-17 AWG / 0.18-1.15 mm"],
        },
        {
          src: "/assets/images/webp/mini-mag-mate.webp",
          label: "Mini MAG-MATE Terminals",
          about: ["Copper wire: 52-30 AWG / 0.02-0.25 mm"],
        },
        {
          src: "/assets/images/webp/mag-mite.webp",
          label: "Nano MAG-MATE Terminals",
        },
      ],
    },
  },
  {
    img: "/assets/images/webp/sianmze.webp",
    heading: "SIAMEZE Terminals",
    para: "It provides a fast, reliable way to terminate magnet wire without pre-stripping insulation. Designed for coil, motor, transformer, and other winding applications, SIAMEZE terminals create clean, gas-tight electrical connections by automatically piercing wire insulation & establishing a stable metal-to-metal interface. Supporting a wide range of wire sizes and automated assembly processes.",
    link: "View SIAMEZE Products ",
    popup: {
      bullets: [
        "Designed for copper or aluminum magnet wires",
        "Virtually eliminates the need for welding or soldering processes, improving operating and manufacturing efficiencies",
        "Space saving size for small motor designs",
        "No pre-stripping of wires needed ",
        "Available in multiple interconnection options for design flexibility",
        "Wide wire range capability with a cantilever beam design",
        "Direct termination through Lead wire with 105℃ PVC insulation",
      ],
      images: [
        {
          src: "/assets/images/webp/standard-wire-range.webp",
          label: "Standard Wire Range",
          about: [
            "Copper wire: 34-18 AWG / 0.16-1.02 mm",
            "Aluminum wire: 25-18 AWG / 0.45-1.00 mm",
            "Lead wire: 22-18 AWG / 0.3-0.8 mm²",
          ],
        },
        {
          src: "/assets/images/webp/fine-wire-range.webp",
          label: "Fine Wire Range",
          about: [
            "Copper: 36-27 AWG / 0.13-0.36 mm",
            "Lead wire: 22-18 AWG / 0.3-0.8 mm",
          ],
        },
        {
          src: "/assets/images/webp/medium-wire-range.webp",
          label: "Medium Wire Range",
          about: [
            "Copper: 23-12 AWG / 0.56-2.05 mm",
            "Lead wire: 20-16 AWG / 0.5-1.3 mm²",
          ],
        },
      ],
    },
  },
  {
    img: "/assets/images/webp/amplivar.webp",
    heading: "AMPLIVAR Terminals & Splices",
    para: "AMPLIVAR Terminals & Splices provide a reliable alternative to soldering and traditional magnet wire termination methods. By automatically penetrating wire insulation and creating precision metal-to-metal crimp connections, AMPLIVAR helps streamline assembly, improve termination consistency, and deliver durable electrical performance across a wide range of winding applications.",
    link: "View AMPLIVAR Products",
    popup: {
      bullets: [
        "Designed for copper and/or aluminum magnet wire",
        "Outstanding wire barrel design with serrations and burrs produces superior metal-to-metal compression crimp with excellent tensile strength",
        "New application tooling allows splices to be bussed together to 4+ magnet wires in nearly infinite combinations",
        "Operating temperature ranges from -65ºC to 150ºC",
      ],
      images: [
        {
          src: "/assets/images/webp/nine-serrations.webp",
          label: "9 Serrations",
          about: [
            "CMA range: 400-22000",
            "Magnet wire of 28AWG [0.32mm] or smaller should be used with Shallow serrations",
          ],
        },
        {
          src: "/assets/images/webp/seven-serrations.webp",
          label: "7 Serrations",
          about: [
            "CMA range: 600-13000",
            "Magnet wire of 26AWG [0.40mm] or smaller should be used with Shallow serrations",
          ],
        },
        {
          src: "/assets/images/webp/five-serrations.webp",
          label: "5 Serrations",
          about: [
            "CMA range: 600-13000",
            "Magnet wire of 26AWG [0.40mm] or smaller should be used with Shallow serrations",
          ],
        },
      ],
    },
  },
  {
    img: "/assets/images/webp/cluster.webp",
    heading: "Cluster Blocks",
    para: "Cluster Blocks provide a fully insulated, quick-connect solution designed to help manufacturers simplify compressor connections, reduce installation errors, and support long-term reliability in air conditioning and refrigeration applications. Engineered for high-volume production, Cluster Blocks combine durable housing materials, secure electrical performance, and flexible header pin compatibility in a cost-effective design.",
    link: "View Cluster Blocks",
    popup: {
      bullets: [
        "Designed for mage wire copper and/or aluminum magnet wire and lead wire",
        "Withstand refrigerant and oil in compressor applications",
        "High termination quality in a repeatable process",
      ],
      images: [
        {
          src: "/assets/images/webp/insulate-quick.webp",
        },
        {
          title: ".090’ [2.29mm] pin size",
          about: [
            "Lead wire range: 22-14AWG [0.3-2.0mm²]",
            "Or magnet wire range 225-4800",
          ],
        },
        {
          title: ".125’ [3.18mm] pin size",
          about: [
            "Lead wire range: 18-16AWG [0.8-1.4mm²] Or 14-10AWG [2.0-6.0mm²]",
            "Or magnet wire range 400-8500",
          ],
        },
      ],
    },
  },
];

export const MARQUEE = [
  "Made in the USA",
  "Made from USA hemp",
  "Manufactured in a GMP facility",
  "NSF for Sport GMP",
];

export const ATHLETES = [
  {
    image: "/assets/images/webp/lena.webp",
    heading: "Lena R.",
    para: "Verified Buyer",
    content: "“Finally, something that helps me bounce back faster.”",
    image2: "/assets/images/webp/gem.webp",
    heading2: "gem pineapple",
    image3: "/assets/images/webp/pineapple.webp",
    width: 60,
    height: 50,
  },

  {
    image: "/assets/images/webp/jordan.webp",
    heading: "Jordan M.",
    para: "Verified Buyer",
    content: "“My legs feel lighter after long runs.”",
    image2: "/assets/images/webp/massage.webp",
    heading2: "Massage OIL",
    image3: "/assets/images/webp/massage-oil.webp",
    width: 26,
    height: 67,
  },

  {
    image: "/assets/images/webp/brooklyn.webp",
    heading: "Brooklyn",
    para: "Verified Buyer",
    content: "“Finally, something that helps me bounce back faster.”",
    image2: "/assets/images/webp/anti-chafe.webp",
    heading2: "Anti-chafe glide",
    image3: "/assets/images/webp/anti-chafe-glide.webp",
    width: 33,
    height: 63,
  },
];

export const KRIVA_TEAM = [
  {
    img: "/assets/images/webp/boler.webp",
    facebookUrl: "https://www.facebook.com/",
    instagrmaUrl: "https://www.instagram.com/?hl=en",
    twitterUrl: "https://x.com/?lang=en",
  },
  {
    img: "/assets/images/webp/slider-img2.webp",
    facebookUrl: "https://www.facebook.com/",
    instagrmaUrl: "https://www.instagram.com/?hl=en",
    twitterUrl: "https://x.com/?lang=en",
  },
  {
    img: "/assets/images/webp/slider-img3.webp",
    facebookUrl: "https://www.facebook.com/",
    instagrmaUrl: "https://www.instagram.com/?hl=en",
    twitterUrl: "https://x.com/?lang=en",
  },
  {
    img: "/assets/images/webp/boler.webp",
    facebookUrl: "https://www.facebook.com/",
    instagrmaUrl: "https://www.instagram.com/?hl=en",
    twitterUrl: "https://x.com/?lang=en",
  },
  {
    img: "/assets/images/webp/slider-img2.webp",
    facebookUrl: "https://www.facebook.com/",
    instagrmaUrl: "https://www.instagram.com/?hl=en",
    twitterUrl: "https://x.com/?lang=en",
  },
  {
    img: "/assets/images/webp/slider-img3.webp",
    facebookUrl: "https://www.facebook.com/",
    instagrmaUrl: "https://www.instagram.com/?hl=en",
    twitterUrl: "https://x.com/?lang=en",
  },
 
];
