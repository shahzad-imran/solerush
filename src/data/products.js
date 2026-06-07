export const products = [
  {
    id: 1,
    name: "Air Max Pulse",
    brand: "Nike",
    category: "Sneakers",
    gender: "Men",
    price: 150,
    oldPrice: 190,
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=600&q=80"
    ],
    sizes: [7, 8, 9, 10, 11, 12],
    colors: [
      { name: "Crimson Red", hex: "#ef4444" },
      { name: "Obsidian Black", hex: "#171717" },
      { name: "Volt Green", hex: "#22c55e" }
    ],
    description: "The Air Max Pulse pulls inspiration from the London music scene, bringing an underground touch to the iconic Air Max line. Its textile-wrapped midsole and point-loaded cushioning system deliver a bounce that pushes boundaries.",
    features: [
      "Point-loaded cushioning system features a plastic clip that distributes weight to targeted points across the Air unit.",
      "Textile upper with leather and synthetic overlays provides durability and breathability.",
      "Rubber Waffle outsole delivers heritage traction and style."
    ],
    isNew: true,
    isSale: true
  },
  {
    id: 2,
    name: "Ultraboost Light",
    brand: "Adidas",
    category: "Running",
    gender: "Men",
    price: 190,
    oldPrice: 0,
    rating: 4.9,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=600&q=80"
    ],
    sizes: [8, 9, 10, 11],
    colors: [
      { name: "Cloud White", hex: "#ffffff" },
      { name: "Core Black", hex: "#0a0a0a" }
    ],
    description: "Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever. The magic lies in the Light BOOST midsole, a new generation of Adidas BOOST that provides maximum cushioning and responsiveness.",
    features: [
      "Lightweight BOOST cushioning foam returns energy with every stride.",
      "Continental™ Rubber outsole provides extraordinary grip in wet and dry conditions.",
      "Primeknit+ textile upper fits snug like a sock."
    ],
    isNew: true,
    isSale: false
  },
  {
    id: 3,
    name: "Retro High OG",
    brand: "Jordan",
    category: "Sneakers",
    gender: "Unisex",
    price: 180,
    oldPrice: 220,
    rating: 4.7,
    reviews: 340,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1512374382149-4337531f29cdc?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=600&q=80"
    ],
    sizes: [7, 8, 9, 10, 11, 12, 13],
    colors: [
      { name: "Chicago Red", hex: "#b91c1c" },
      { name: "Hyper Royal", hex: "#2563eb" },
      { name: "Shadow Black", hex: "#171717" }
    ],
    description: "Familiar but always fresh, the iconic Air Jordan 1 Retro High is remastered for today's sneakerhead culture. This OG edition features premium leather, comfortable cushioning, and classic design details.",
    features: [
      "Genuine and synthetic leather upper provides durable comfort.",
      "Encapsulated Air-Sole unit in the heel cushions every step.",
      "Solid rubber outsole with deep flex grooves ensures reliable traction."
    ],
    isNew: false,
    isSale: true
  },
  {
    id: 4,
    name: "Classic Suede",
    brand: "Puma",
    category: "Sneakers",
    gender: "Women",
    price: 85,
    oldPrice: 110,
    rating: 4.6,
    reviews: 87,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=600&q=80"
    ],
    sizes: [5, 6, 7, 8, 9],
    colors: [
      { name: "Mustard Gold", hex: "#d97706" },
      { name: "Forest Green", hex: "#15803d" },
      { name: "Baby Pink", hex: "#f472b6" }
    ],
    description: "The Suede is one of PUMA's most historical and recognizable sneakers. It has been kicking around in society since 1968, finding fame in sport, hip hop, and street culture. This version keeps the legacy alive with premium materials.",
    features: [
      "Full suede upper with synthetic leather lining.",
      "Comfortable flat lace closure.",
      "Grippy rubber outsole provides traction."
    ],
    isNew: false,
    isSale: true
  },
  {
    id: 5,
    name: "New Balance 990v6",
    brand: "New Balance",
    category: "Running",
    gender: "Men",
    price: 200,
    oldPrice: 0,
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=600&q=80"
    ],
    sizes: [8, 9, 10, 11, 12],
    colors: [
      { name: "Classic Gray", hex: "#737373" },
      { name: "Navy Blue", hex: "#1e3a8a" }
    ],
    description: "The designers of the first 990 were tasked with creating the single best running shoe on the market. The 990v6 continues this legacy with a FuelCell midsole foam that adds responsive propulsion and clean, modern panelling.",
    features: [
      "FuelCell foam delivers a propulsive feel to help drive you forward.",
      "ENCAP midsole cushioning combines lightweight foam with a durable polyurethane rim.",
      "Reflective accents designed to catch the light."
    ],
    isNew: true,
    isSale: false
  },
  {
    id: 6,
    name: "Pegasus 40",
    brand: "Nike",
    category: "Running",
    gender: "Women",
    price: 130,
    oldPrice: 160,
    rating: 4.7,
    reviews: 215,
    image: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1579338559194-a162d19bd842?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=600&q=80"
    ],
    sizes: [6, 7, 8, 9],
    colors: [
      { name: "Hot Pink", hex: "#ec4899" },
      { name: "Soft White", hex: "#fafafa" }
    ],
    description: "A springy ride for every run, the Peg's familiar, just-for-you feel returns to help you accomplish your goals. This milestone edition has the same responsiveness you love but with improved comfort in sensitive areas.",
    features: [
      "Nike React technology is a lightweight, durable foam that delivers a smooth, responsive ride.",
      "Two Zoom Air units (one in forefoot and one in heel) provide energy return.",
      "Highly tuned single-layer mesh upper creates an inviting feel and fit."
    ],
    isNew: false,
    isSale: true
  },
  {
    id: 7,
    name: "NMD_R1 V3",
    brand: "Adidas",
    category: "Sneakers",
    gender: "Men",
    price: 160,
    oldPrice: 0,
    rating: 4.5,
    reviews: 62,
    image: "https://images.unsplash.com/photo-1512374382149-4337531f29cdc?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512374382149-4337531f29cdc?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=600&q=80"
    ],
    sizes: [8, 9, 10, 11],
    colors: [
      { name: "Core Black", hex: "#0a0a0a" },
      { name: "Cyber Red", hex: "#ef4444" }
    ],
    description: "Tactical, functional, and deeply stylish, these Adidas NMD shoes bring street style to the future. A translucent heel cage and plug details on the Boost midsole give these shoes a high-tech vibe.",
    features: [
      "Boost midsole offers unparalleled responsive energy return.",
      "Hugs-the-foot textile upper made from high-performance yarn.",
      "Sturdy rubber outsole handles everyday wear with ease."
    ],
    isNew: true,
    isSale: false
  },
  {
    id: 8,
    name: "Air Force 1 '07",
    brand: "Nike",
    category: "Sneakers",
    gender: "Unisex",
    price: 115,
    oldPrice: 0,
    rating: 4.8,
    reviews: 412,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=600&q=80"
    ],
    sizes: [7, 8, 9, 10, 11, 12],
    colors: [
      { name: "Triple White", hex: "#ffffff" },
      { name: "Triple Black", hex: "#000000" }
    ],
    description: "The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best: durably stitched overlays, clean finishes, and the perfect amount of flash to make you shine.",
    features: [
      "Stitched leather overlays on the upper add heritage style, durability, and support.",
      "Originally designed for performance hoops, Nike Air cushioning adds lightweight comfort.",
      "Low-cut silhouette adds a clean, streamlined look."
    ],
    isNew: false,
    isSale: false
  },
  {
    id: 9,
    name: "RS-X Efekt",
    brand: "Puma",
    category: "Sports",
    gender: "Men",
    price: 120,
    oldPrice: 150,
    rating: 4.4,
    reviews: 45,
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80"
    ],
    sizes: [8, 9, 10, 11],
    colors: [
      { name: "Glitch Blue", hex: "#3b82f6" },
      { name: "Futuristic Gray", hex: "#a3a3a3" }
    ],
    description: "The RS-X is back. This future-retro silhouette made waves when it dropped in 2018, celebrated for its disruptive design, fresh material mixes, and bold colors. Today, RS-X returns for a new generation of style-seekers.",
    features: [
      "Running System (RS): PUMA's retro cushioning technology that offers support.",
      "Mesh upper with synthetic leather and suede overlays.",
      "Aggressive, chunkier midsole with colorful TPU plugs."
    ],
    isNew: false,
    isSale: true
  },
  {
    id: 10,
    name: "Zoom Vomero 5",
    brand: "Nike",
    category: "Running",
    gender: "Women",
    price: 160,
    oldPrice: 0,
    rating: 4.8,
    reviews: 184,
    image: "https://images.unsplash.com/photo-1579338559194-a162d19bd842?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1579338559194-a162d19bd842?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=600&q=80"
    ],
    sizes: [6, 7, 8, 9],
    colors: [
      { name: "Oatmeal Beige", hex: "#e5e5e5" },
      { name: "Cobalt Blue", hex: "#1d4ed8" }
    ],
    description: "Carve a new lane for yourself in the Zoom Vomero 5—your go-to for complexity, depth and now, easy styling. The richly layered design includes textiles, synthetic suede and plastic accents that come together to make one of the coolest sneakers of the season.",
    features: [
      "Synthetic leather and textile upper provides structure and durability.",
      "Cushion foam with Zoom Air cushioning offers a responsive, smooth ride.",
      "Plastic cage on the side adds a supportive feel."
    ],
    isNew: true,
    isSale: false
  },
  {
    id: 11,
    name: "Forum Low Classic",
    brand: "Adidas",
    category: "Sneakers",
    gender: "Unisex",
    price: 110,
    oldPrice: 140,
    rating: 4.6,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1512374382149-4337531f29cdc?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80"
    ],
    sizes: [7, 8, 9, 10, 11],
    colors: [
      { name: "Vintage White", hex: "#f5f5f4" },
      { name: "Royal Blue", hex: "#1d4ed8" },
      { name: "Gum Brown", hex: "#78350f" }
    ],
    description: "More than just a shoe, the Adidas Forum is a statement. Having ruled the basketball courts in the '80s, it's now a staple of urban street style. This edition keeps the iconic ankle strap and premium leather overlays.",
    features: [
      "Premium coated leather upper with suede stripes.",
      "Removable hook-and-loop ankle strap for adjustable fit.",
      "Durable rubber cupsole delivers outstanding traction."
    ],
    isNew: false,
    isSale: true
  },
  {
    id: 12,
    name: "Fresh Foam More v4",
    brand: "New Balance",
    category: "Running",
    gender: "Women",
    price: 165,
    oldPrice: 0,
    rating: 4.8,
    reviews: 74,
    image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=600&q=80"
    ],
    sizes: [6, 7, 8, 9],
    colors: [
      { name: "Lilac Haze", hex: "#c084fc" },
      { name: "Cream White", hex: "#fafaf9" }
    ],
    description: "Fresh Foam X More v4 represents the pinnacle of plush underfoot cushioning. This running shoe features the thickest stack of Fresh Foam X ever, providing a luxurious yet stable ride for short recovery jogs and long miles alike.",
    features: [
      "Fresh Foam X midsole foam with approximately 3% bio-based content.",
      "Wider platform applies underfoot cushioning to more areas of the foot.",
      "Engineered mesh upper supports the foot while providing breathability."
    ],
    isNew: true,
    isSale: false
  },
  {
    id: 13,
    name: "Air Jordan 4 Retro",
    brand: "Jordan",
    category: "Sneakers",
    gender: "Men",
    price: 210,
    oldPrice: 240,
    rating: 4.9,
    reviews: 420,
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1512374382149-4337531f29cdc?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
    ],
    sizes: [8, 9, 10, 11, 12, 13],
    colors: [
      { name: "Military Black", hex: "#262626" },
      { name: "Fire Red", hex: "#dc2626" }
    ],
    description: "One of the most coveted Jordan silhouettes, the Air Jordan 4 Retro delivers lightweight cushioning and historic style. The mesh side panels and unique lace wings give these sneakers a timeless look that stands out on the street.",
    features: [
      "Premium nubuck leather and synthetic upper.",
      "Visible Air-Sole units in the heel and forefoot for impact protection.",
      "Rubber outsole with herringbone pattern for excellent durability and grip."
    ],
    isNew: false,
    isSale: true
  },
  {
    id: 14,
    name: "Deviate Nitro 2",
    brand: "Puma",
    category: "Running",
    gender: "Men",
    price: 160,
    oldPrice: 0,
    rating: 4.7,
    reviews: 58,
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
    ],
    sizes: [8, 9, 10, 11, 12],
    colors: [
      { name: "Fire Orange", hex: "#f97316" },
      { name: "Acid Lime", hex: "#84cc16" }
    ],
    description: "The Deviate Nitro 2 is a carbon-plated performance running shoe designed to make you run faster, easier. It features premium Nitro Elite foam for maximum responsiveness and an updated PWRPLATE for direct energy transfer.",
    features: [
      "NITRO Elite: Premium performance foam technology that provides pinnacle responsiveness.",
      "PWRPLATE: Innovative carbon composite plate designed for maximum energy transfer.",
      "PUMAGRIP: Durable performance rubber compound designed for all-surface traction."
    ],
    isNew: true,
    isSale: false
  },
  {
    id: 15,
    name: "Metcon 9 Amp",
    brand: "Nike",
    category: "Sports",
    gender: "Unisex",
    price: 140,
    oldPrice: 170,
    rating: 4.8,
    reviews: 106,
    image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=600&q=80"
    ],
    sizes: [7, 8, 9, 10, 11, 12],
    colors: [
      { name: "Glacier Gray", hex: "#cbd5e1" },
      { name: "Hyper Crimson", hex: "#ea580c" }
    ],
    description: "Whatever your 'why' is for working out, the Metcon 9 makes it all worth it. We improved on the 8 with a larger Hyperlift plate and added rubber rope wrap. Sworn to by some of the greatest athletes in the world, it is the gold standard for lifting and cross-training.",
    features: [
      "Hyperlift plate in the heel is even larger for stability during tough lifting workouts.",
      "Lace lock system attaches to the shoe tongue, so you don't have to worry about it snagging.",
      "Extended rubber wrap on the side adds durability and support for rope climbs."
    ],
    isNew: false,
    isSale: true
  },
  {
    id: 16,
    name: "Barricade 13",
    brand: "Adidas",
    category: "Sports",
    gender: "Women",
    price: 150,
    oldPrice: 0,
    rating: 4.7,
    reviews: 43,
    image: "https://images.unsplash.com/photo-1579338559194-a162d19bd842?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1579338559194-a162d19bd842?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
    ],
    sizes: [6, 7, 8, 9],
    colors: [
      { name: "Pulse Mint", hex: "#6ee7b7" },
      { name: "Lucid Lemon", hex: "#facc15" }
    ],
    description: "Control the court to dominate your opponent. These Adidas Barricade tennis shoes support your play with an intuitive lacing system that pulls down the tongue to match your midfoot shape. Geofit Sensepods in the heel provide a locked-in fit.",
    features: [
      "Intuitive lacing system creates a truly custom fit.",
      "Repetitive impact cushioning provided by the Bounce midsole.",
      "Torsion System supports explosive lateral movements."
    ],
    isNew: true,
    isSale: false
  }
];
