// Else Home — Product Data
//
// PRODUCT IMAGES: Add photos to images/products/
//   Bed bases: use imageFile field (e.g. '1_aura_xxl.jpg')
//   Mattresses / toppers: name as [id]-main.jpg (e.g. mt-01-main.jpg)
//   Missing images fall back to the brand_assets placeholder for that category.

const baseProducts = [

  // ═══════════════════════════════════════════════════════
  // BED BASE SETS  (19)
  // ═══════════════════════════════════════════════════════

  {
    id: 'bb-01', name: 'Aura XXL',
    category: 'bed-base', subcategory: 'Upholstered',
    shortDesc: 'Oversized upholstered bed base with premium fabric finish.',
    description: 'The Aura XXL delivers a bold, oversized silhouette engineered for premium residential and hotel contracts. Full-perimeter upholstery, solid hardwood subframe, and available in 40+ fabric options across all sizes.',
    features: ['Solid hardwood subframe', 'Full-perimeter precision upholstery', 'Oversized XXL proportions', 'Custom dimensions on request', 'Contract-grade materials throughout'],
    specs: { 'Construction': 'Solid hardwood + MDF composite', 'Upholstery': 'Full fabric coverage', 'Standard Leg Height': '28 cm', 'Weight Capacity': '300 kg', 'Sizes Available': 'Single to Super King + Custom' },
    customOptions: ['Fabric selection (40+ options)', 'Leg height adjustment', 'Headboard pairing', 'Custom dimensions'],
    fabrics: ['alabaster', 'linen', 'oyster', 'slate', 'onyx', 'mist'],
    imageFile: '1_aura_xxl.jpg',
    featured: true,
  },
  {
    id: 'bb-02', name: 'Berlin',
    category: 'bed-base', subcategory: 'Platform',
    shortDesc: 'Architectural platform base with clean geometric lines.',
    description: 'The Berlin is a refined platform base with strict geometric proportions and flush edge detailing. Solid hardwood frame, full upholstery, and a hidden leg system engineered for contemporary residential and contract environments.',
    features: ['Solid hardwood structural frame', 'Flush edge finishing', 'Hidden leg system', 'Matching headboard range', 'Custom dimensions available'],
    specs: { 'Construction': 'Engineered hardwood + MDF', 'Upholstery': 'Full perimeter', 'Weight Capacity': '280 kg', 'Leg Height': 'Adjustable', 'Sizes Available': 'Double to Super King + Custom' },
    customOptions: ['Fabric selection', 'Leg height adjustment', 'Headboard integration', 'Custom dimensions'],
    fabrics: ['sand', 'sage', 'storm', 'charcoal', 'oyster', 'cream'],
    imageFile: '2_berlin.jpg',
    featured: false,
  },
  {
    id: 'bb-03', name: 'Metropolis',
    category: 'bed-base', subcategory: 'Platform',
    shortDesc: 'Statement platform base designed for large-scale contracts.',
    description: 'The Metropolis is engineered for statement residential and hospitality installations. Robust solid hardwood construction, deep upholstery profile, and a broad platform deck designed to anchor any room.',
    features: ['Broad platform deck profile', 'Solid hardwood frame', 'Full-perimeter upholstery', 'Contract-grade durability', 'Custom fabric and dimensions'],
    specs: { 'Construction': 'Solid hardwood + composite', 'Deck Width': 'Extended platform', 'Weight Capacity': '320 kg', 'Upholstery': 'Full coverage', 'Sizes Available': 'Single to Super King + Custom' },
    customOptions: ['Fabric selection', 'Deck height', 'Headboard pairing', 'Custom dimensions'],
    fabrics: ['ivory', 'anthracite', 'camel', 'forest', 'stone', 'charcoal'],
    imageFile: '3_metropolis.jpg',
    featured: true,
  },
  {
    id: 'bb-04', name: 'Perla XXL',
    category: 'bed-base', subcategory: 'Upholstered',
    shortDesc: 'Luxury oversized base with refined upholstery detailing.',
    description: 'The Perla XXL combines oversized proportions with meticulous upholstery finishing. Piped or plain edge detail options, deep HR foam padding, and a solid hardwood frame — engineered for luxury hotel suites and premium residential projects.',
    features: ['Oversized XXL construction', 'Piped or plain edge detailing', 'Deep HR foam padding', 'Solid hardwood frame', 'Contract-grade fabric throughout'],
    specs: { 'Set Includes': 'Base + optional headboard', 'Padding': '8 cm HR foam', 'Edge Detail': 'Piped or plain', 'Weight Capacity': '300 kg', 'Sizes Available': 'Double to Super King + Custom' },
    customOptions: ['Fabric selection', 'Edge detailing (piped / plain)', 'Headboard height', 'Custom dimensions'],
    fabrics: ['ecru', 'cognac', 'pewter', 'midnight', 'ivory', 'oyster'],
    imageFile: '4_perla_xxl.jpg',
    featured: false,
  },
  {
    id: 'bb-05', name: 'Business Class',
    category: 'bed-base', subcategory: 'Premium',
    shortDesc: 'Contract-grade premium base for hospitality environments.',
    description: 'The Business Class is built exclusively for hotel and contract use — reinforced hardwood frame, contract-grade upholstery rated for 10+ year daily use, and precision manufacturing to exact specification.',
    features: ['Contract-grade hardwood frame', 'Heavy-duty upholstery construction', 'Anti-sag perimeter support', 'Hotel specification standard', 'Custom dimensions and fabrics'],
    specs: { 'Construction': 'Reinforced hardwood', 'Upholstery Grade': 'Contract-rated', 'Weight Capacity': '350 kg', 'Durability': '10+ year rated', 'Sizes Available': 'Single to Super King' },
    customOptions: ['Fabric selection', 'Headboard style', 'Leg finish', 'Custom dimensions'],
    fabrics: ['cream', 'mist', 'slate', 'onyx', 'charcoal', 'stone'],
    imageFile: '5_business_class.jpg',
    featured: true,
  },
  {
    id: 'bb-06', name: 'Chester XXL',
    category: 'bed-base', subcategory: 'Upholstered',
    shortDesc: 'Oversized Chester-style base with deep button tufting.',
    description: 'The Chester XXL delivers the iconic deeply-tufted aesthetic at oversized scale. Hand-placed button tufting, 12 cm deep HR foam padding, and a solid hardwood frame make this a statement piece for luxury residential and boutique hotel contracts.',
    features: ['Hand button-tufted finish', 'Oversized XXL proportions', '12 cm deep HR foam padding', 'Diamond tufting pattern', 'Solid hardwood frame'],
    specs: { 'Tufting': 'Hand-placed buttons', 'Padding': '12 cm HR foam + fibre', 'Buttons': 'Self-covered fabric', 'Frame': 'Solid hardwood', 'Sizes Available': 'Double to Super King + Custom' },
    customOptions: ['Fabric selection', 'Button spacing', 'Tufting pattern', 'Custom dimensions'],
    fabrics: ['oyster', 'biscuit', 'taupe', 'graphite', 'sand', 'ecru'],
    imageFile: '6_chester_xxl.jpg',
    featured: false,
  },
  {
    id: 'bb-07', name: 'Dormo XXL',
    category: 'bed-base', subcategory: 'Upholstered',
    shortDesc: 'Wide-format upholstered base with wraparound profile.',
    description: 'The Dormo XXL features a wraparound upholstered profile with an extended footboard design. Built for large residential and hospitality installations where scale and comfort define the space.',
    features: ['Wraparound upholstered profile', 'Extended footboard design', 'Oversized XXL format', 'Solid hardwood subframe', 'Full custom fabric options'],
    specs: { 'Profile': 'Wraparound upholstered', 'Frame': 'Solid hardwood', 'Weight Capacity': '300 kg', 'Upholstery': 'Full perimeter + footboard', 'Sizes Available': 'King to Super King + Custom' },
    customOptions: ['Fabric selection', 'Footboard height', 'Leg finish', 'Custom dimensions'],
    fabrics: ['sand', 'ocean', 'clay', 'carbon', 'cream', 'ivory'],
    imageFile: '7_dormo_xxl.jpg',
    featured: false,
  },
  {
    id: 'bb-08', name: 'Elize XXL',
    category: 'bed-base', subcategory: 'Upholstered',
    shortDesc: 'Sculptural oversized base with refined edge profile.',
    description: 'The Elize XXL combines sculptural form with precision upholstery. A distinctive edge profile, deep-padded construction, and oversized format make it a signature product for luxury residential and premium hospitality.',
    features: ['Distinctive sculpted edge profile', 'Deep-padded construction', 'Oversized XXL proportions', 'Contract-grade materials', 'Custom fabric and dimensions'],
    specs: { 'Profile': 'Sculpted edge', 'Padding': '10 cm HR foam', 'Frame': 'Solid hardwood composite', 'Weight Capacity': '300 kg', 'Sizes Available': 'Double to Super King + Custom' },
    customOptions: ['Fabric selection', 'Edge profile depth', 'Headboard pairing', 'Custom dimensions'],
    fabrics: ['ivory', 'stone', 'slate', 'charcoal', 'onyx'],
    imageFile: '8_elize_xxl.jpg',
    featured: false,
  },
  {
    id: 'bb-09', name: 'Genova',
    category: 'bed-base', subcategory: 'Continental',
    shortDesc: 'Continental base with elegant tapered leg detail.',
    description: 'The Genova is a full continental base featuring an elegant tapered leg system and clean upholstered deck. Precision-engineered for residential and hospitality contracts where understated European design is required.',
    features: ['Tapered leg detail', 'Full continental construction', 'Clean upholstered deck', 'Euro-specification frame', 'Matching headboard available'],
    specs: { 'Type': 'Continental', 'Legs': 'Tapered euro-specification', 'Deck': 'Fully upholstered', 'Weight Capacity': '280 kg', 'Sizes Available': 'Double to Super King' },
    customOptions: ['Fabric selection', 'Leg finish', 'Headboard style', 'Custom dimensions'],
    fabrics: ['ivory', 'cream', 'oyster', 'ecru', 'alabaster'],
    imageFile: '9_genova.jpg',
    featured: false,
  },
  {
    id: 'bb-10', name: 'Maladive',
    category: 'bed-base', subcategory: 'Platform',
    shortDesc: 'Low-slung platform base with resort-inspired proportions.',
    description: 'The Maladive is a low-slung platform base designed for contemporary resort and boutique hotel environments. Floor-level proportions, full upholstery, and clean-line construction create a relaxed yet refined aesthetic.',
    features: ['Low floor-level profile', 'Full-perimeter upholstery', 'Resort-spec construction', 'Custom dimensions available', 'Matching headboard range'],
    specs: { 'Floor Clearance': '14 cm', 'Upholstery': 'Full coverage', 'Frame': 'Engineered hardwood', 'Weight Capacity': '280 kg', 'Sizes Available': 'Double to Super King + Custom' },
    customOptions: ['Fabric selection', 'Leg height', 'Headboard integration', 'Custom dimensions'],
    fabrics: ['alabaster', 'linen', 'sand', 'onyx', 'stone'],
    imageFile: '10_maladive.jpg',
    featured: false,
  },
  {
    id: 'bb-11', name: 'Venus',
    category: 'bed-base', subcategory: 'Upholstered',
    shortDesc: 'Curved upholstered base with soft-form silhouette.',
    description: 'The Venus introduces a soft-form curved silhouette to the Else Home range. Precision upholstery over a curved hardwood frame creates an organic, feminine aesthetic suited to premium residential and boutique hotel projects.',
    features: ['Curved hardwood frame', 'Soft-form upholstered silhouette', 'Full fabric coverage', 'Custom fabric selection', 'Matching headboard available'],
    specs: { 'Frame': 'Curved solid hardwood', 'Profile': 'Soft-form silhouette', 'Weight Capacity': '280 kg', 'Upholstery': 'Full curved coverage', 'Sizes Available': 'Double to Super King + Custom' },
    customOptions: ['Fabric selection', 'Curve radius', 'Headboard style', 'Custom dimensions'],
    fabrics: ['charcoal', 'slate', 'stone', 'onyx', 'graphite'],
    imageFile: '11_venus.jpg',
    featured: false,
  },
  {
    id: 'bb-12', name: 'Lounge',
    category: 'bed-base', subcategory: 'Ottoman',
    shortDesc: 'Deep-lounging ottoman base with full-access storage.',
    description: 'The Lounge combines deep, reclined proportions with full-access ottoman storage. A gas-lift mechanism rated for daily contract use, waterproof interior lining, and available in 40+ fabric options.',
    features: ['Full-access gas-lift storage', 'Deep lounge proportions', 'Waterproof interior lining', 'Heavy-duty gas pistons', 'Contract-grade construction'],
    specs: { 'Opening': 'Full-width access', 'Storage Depth': '30 cm', 'Mechanism': 'Gas-lift pistons', 'Lining': 'Waterproof non-woven', 'Sizes Available': 'King to Super King + Custom' },
    customOptions: ['Fabric selection', 'Opening direction', 'Interior lining', 'Custom dimensions'],
    fabrics: ['ivory', 'cream', 'oyster', 'ecru', 'alabaster'],
    imageFile: '12_lounge.jpg',
    featured: false,
  },
  {
    id: 'bb-13', name: 'Aura',
    category: 'bed-base', subcategory: 'Upholstered',
    shortDesc: 'Classic Aura upholstered base — timeless proportions.',
    description: 'The original Aura — clean upholstered proportions with a solid hardwood frame and full fabric coverage. A versatile base for residential, hospitality, and export markets available in all standard sizes and 40+ fabrics.',
    features: ['Solid hardwood subframe', 'Full-perimeter upholstery', 'Clean proportional design', 'Custom dimensions on request', 'Contract-grade materials'],
    specs: { 'Construction': 'Solid hardwood + MDF', 'Upholstery': 'Full fabric coverage', 'Leg Height': '28 cm standard', 'Weight Capacity': '300 kg', 'Sizes Available': 'Single to Super King + Custom' },
    customOptions: ['Fabric selection (40+ options)', 'Leg height adjustment', 'Headboard pairing', 'Custom dimensions'],
    fabrics: ['linen', 'navy-fabric', 'stone', 'ebony', 'cream'],
    imageFile: '13_aura.jpg',
    featured: false,
  },
  {
    id: 'bb-14', name: 'California',
    category: 'bed-base', subcategory: 'Platform',
    shortDesc: 'Wide-deck platform base with California proportions.',
    description: 'The California takes its name from its generous width-to-height ratio — a wide, low platform deck that commands space. Solid hardwood construction, full upholstery, and custom sizing for all non-standard bed dimensions.',
    features: ['Wide platform deck proportions', 'Low-profile design', 'Solid hardwood frame', 'Full-perimeter upholstery', 'Custom sizing available'],
    specs: { 'Profile': 'Wide low-platform', 'Construction': 'Solid hardwood', 'Weight Capacity': '300 kg', 'Upholstery': 'Full coverage', 'Sizes Available': 'California King + All Custom' },
    customOptions: ['Fabric selection', 'Deck height', 'Headboard integration', 'Custom dimensions'],
    fabrics: ['slate', 'charcoal', 'stone', 'graphite'],
    imageFile: '14_california.jpg',
    featured: false,
  },
  {
    id: 'bb-15', name: 'Chepau',
    category: 'bed-base', subcategory: 'Upholstered',
    shortDesc: 'Distinctive upholstered base with signature profile.',
    description: 'The Chepau is a signature Else Home design — a distinctive upholstered profile with precise panel proportions and refined edge detail. Engineered for luxury residential projects and boutique hotel contracts.',
    features: ['Signature panel proportions', 'Refined edge detailing', 'Solid hardwood frame', 'Full contract-grade upholstery', 'Custom fabric and dimensions'],
    specs: { 'Profile': 'Signature panel design', 'Frame': 'Solid hardwood', 'Weight Capacity': '300 kg', 'Upholstery': 'Full perimeter', 'Sizes Available': 'Double to Super King + Custom' },
    customOptions: ['Fabric selection', 'Panel detail', 'Headboard pairing', 'Custom dimensions'],
    fabrics: ['onyx', 'slate', 'graphite', 'midnight', 'stone', 'charcoal'],
    imageFile: '15_chepau.jpg',
    featured: false,
  },
  {
    id: 'bb-16', name: 'Chester',
    category: 'bed-base', subcategory: 'Upholstered',
    shortDesc: 'Classic Chester button-tufted base and headboard set.',
    description: 'The Chester is the quintessential button-tufted design — hand-placed buttons, diamond tufting pattern, and deep HR foam core. A timeless upholstered set for residential, boutique hotel, and contract environments.',
    features: ['Hand button-tufted headboard', 'Diamond tufting pattern', 'Deep HR foam padding (10 cm)', 'Self-covered fabric buttons', 'Matched base construction'],
    specs: { 'Tufting': 'Hand-placed buttons', 'Pattern': 'Diamond', 'Core': 'HR35 foam + fibre', 'Buttons': 'Self-covered fabric', 'Sizes Available': 'Single to Super King' },
    customOptions: ['Fabric selection', 'Button spacing', 'Headboard height', 'Custom dimensions'],
    fabrics: ['onyx', 'graphite', 'charcoal', 'midnight', 'carbon'],
    imageFile: '16_chester.jpg',
    featured: false,
  },
  {
    id: 'bb-17', name: 'Luxury',
    category: 'bed-base', subcategory: 'Premium',
    shortDesc: 'Top-tier luxury base with finest material specification.',
    description: 'The Luxury is the flagship Else Home bed base — the highest material specification, the most precise upholstery finishing, and complete customisation across every dimension. Engineered for five-star hotel suites and premium residential projects.',
    features: ['Flagship material specification', 'Precision handcrafted upholstery', 'Full custom dimensions and fabrics', 'Luxury leg finish options', 'Five-star hospitality rated'],
    specs: { 'Grade': 'Flagship luxury', 'Construction': 'Premium hardwood + MDF', 'Upholstery': 'Hand-finished', 'Weight Capacity': '350 kg', 'Sizes Available': 'All sizes + bespoke' },
    customOptions: ['Premium fabric selection', 'Leg finish (chrome / brass / black)', 'Headboard specification', 'Bespoke dimensions'],
    fabrics: ['alabaster', 'linen', 'sand', 'onyx', 'stone'],
    imageFile: '17_luxury.jpg',
    featured: true,
  },
  {
    id: 'bb-18', name: 'Napoli',
    category: 'bed-base', subcategory: 'Continental',
    shortDesc: 'European continental base with Italian-inspired elegance.',
    description: 'The Napoli draws on Italian design sensibility — a full continental base with refined proportions, tapered chrome legs, and an upholstered deck. Precision-engineered for premium residential and five-star hospitality.',
    features: ['Continental construction', 'Tapered chrome legs (standard)', 'Upholstered top deck', 'Euro-specification frame', 'Optional storage configuration'],
    specs: { 'Type': 'Continental', 'Legs': 'Tapered chrome / brushed gold', 'Deck': 'Fully upholstered', 'Weight Capacity': '300 kg', 'Sizes Available': 'Double to Super King + Custom' },
    customOptions: ['Fabric selection', 'Leg metal finish', 'Storage option', 'Custom dimensions'],
    fabrics: ['onyx', 'graphite', 'charcoal', 'midnight', 'carbon'],
    imageFile: '18_napoli.jpg',
    featured: false,
  },
  {
    id: 'bb-19', name: 'Paris',
    category: 'bed-base', subcategory: 'Upholstered',
    shortDesc: 'Parisian-inspired upholstered base with refined proportions.',
    description: 'The Paris brings a refined Parisian aesthetic to the Else Home range — soft upholstered proportions, elegant leg detail, and a headboard profile that references classic French interior design. Available in 40+ fabrics.',
    features: ['Parisian-inspired silhouette', 'Elegant leg profile', 'Soft upholstered proportions', 'Solid hardwood frame', 'Full fabric selection available'],
    specs: { 'Profile': 'French-inspired silhouette', 'Frame': 'Solid hardwood', 'Leg': 'Elegant detail finish', 'Weight Capacity': '280 kg', 'Sizes Available': 'Single to Super King + Custom' },
    customOptions: ['Fabric selection', 'Leg finish', 'Headboard height', 'Custom dimensions'],
    fabrics: ['linen', 'cream', 'sand', 'stone', 'charcoal', 'oyster'],
    imageFile: '19_paris.jpg',
    featured: false,
  },

  // ═══════════════════════════════════════════════════════
  // MATTRESSES  (6)
  // ═══════════════════════════════════════════════════════

  {
    id: 'mt-01', name: 'Foundation Pocket Spring',
    category: 'mattress', subcategory: 'Pocket Spring',
    shortDesc: '1000-count hand-nested springs with natural fillings.',
    description: '1000-count hand-nested pocket spring system with Belgian damask cover and traditional natural filling layers. A classic construction built with modern precision and available in custom spring counts.',
    features: ['1000 hand-nested pocket springs', 'Belgian damask ticking', 'Natural wool and cotton fillings', 'Hand-tufted finish', 'Dual-sided turnover design'],
    specs: { 'Spring Count': '1000 per 150 cm', 'Spring Type': 'Barrel pocket, hand-nested', 'Cover': 'Belgian damask', 'Fillings': 'Wool, cotton, coir', 'Depth': '24 cm' },
    customOptions: ['Spring count (800–2000)', 'Filling specification', 'Cover fabric selection', 'Custom dimensions'],
    fabrics: [],
    image: 'https://placehold.co/1200x900/f0edec/03163D?text=Foundation+Pocket+Spring',
    thumb: 'https://placehold.co/600x450/f0edec/03163D?text=Foundation',
    featured: true,
    layers: [
      { label: 'Belgian Damask Ticking', color: '#f0edec' },
      { label: 'Natural Wool Layer', color: '#e8dcc8' },
      { label: 'Cotton Comfort Layer', color: '#f0e8d8' },
      { label: '1000 Pocket Spring System', color: '#d4cfc9' },
      { label: 'Coir Fibre Foundation', color: '#b8ae9a' },
      { label: 'Non-Woven Base', color: '#a09890' },
    ],
  },
  {
    id: 'mt-02', name: 'Dual Zone Pocket Spring',
    category: 'mattress', subcategory: 'Pocket Spring',
    shortDesc: 'Five-zone spring mapping for ergonomic spinal support.',
    description: 'A 5-zone pocket spring system with firmer lumbar support in the centre zones and softer shoulder support in the outer zones. Independent springs eliminate motion transfer between sleep partners.',
    features: ['5-zone spring mapping', 'Firmer lumbar zone (centre)', 'Softer shoulder support (outer)', 'Motion isolation between zones', 'Breathable stretch-knit cover'],
    specs: { 'Zones': '5-zone mapped', 'Lumbar Gauge': '1.4 mm steel', 'Shoulder Gauge': '1.0 mm steel', 'Cover': 'Stretch-knit', 'Depth': '26 cm' },
    customOptions: ['Zone configuration', 'Spring count per zone', 'Cover material', 'Comfort layer specification'],
    fabrics: [],
    image: 'https://placehold.co/1200x900/e5e2e1/03163D?text=Dual+Zone+Pocket+Spring',
    thumb: 'https://placehold.co/600x450/e5e2e1/03163D?text=Dual+Zone',
    featured: false,
    layers: [],
  },
  {
    id: 'mt-03', name: 'Contour Memory Foam',
    category: 'mattress', subcategory: 'Memory Foam',
    shortDesc: 'Four-layer CertiPUR-US memory foam construction.',
    description: 'A four-layer visco-elastic memory foam construction with open-cell technology for breathability. CertiPUR-US certified materials, cooling stretch-knit cover, and non-slip base fabric throughout.',
    features: ['4-layer construction', 'Open-cell visco-elastic foam', 'CertiPUR-US certified', 'Cooling stretch-knit cover', 'Non-slip base'],
    specs: { 'Layers': 'Comfort + transition + support + cover', 'Top Layer': '3 cm visco-elastic (40 kg/m³)', 'Transition': '3 cm HR foam (35 kg/m³)', 'Support Base': '14 cm HR foam', 'Depth': '20 cm' },
    customOptions: ['Layer specification', 'Foam density selection', 'Cover material', 'Custom dimensions'],
    fabrics: [],
    image: 'https://placehold.co/1200x900/dcd9d9/03163D?text=Contour+Memory+Foam',
    thumb: 'https://placehold.co/600x450/dcd9d9/03163D?text=Contour',
    featured: false,
    layers: [],
  },
  {
    id: 'mt-04', name: 'Arctic Gel Memory Foam',
    category: 'mattress', subcategory: 'Memory Foam',
    shortDesc: 'Gel-infused foam with phase-change cooling cover.',
    description: 'Gel-bead infused memory foam with a phase-change material cover. Active heat dissipation and breathable quilting make this the ideal specification for warm-climate markets and temperature-sensitive hotel environments.',
    features: ['Gel-bead infused top layer', 'Phase-change material cover', 'Active heat dissipation', 'Breathable quilted panel', 'Up to 3°C surface temperature reduction'],
    specs: { 'Top Layer': '4 cm gel-infused (45 kg/m³)', 'Cover': 'PCM stretch-knit', 'Gel Type': 'Phase-change micro-encapsulated', 'Cooling': 'Up to −3°C surface', 'Depth': '22 cm' },
    customOptions: ['Gel layer depth', 'PCM cover specification', 'Foam density', 'Custom dimensions'],
    fabrics: [],
    image: 'https://placehold.co/1200x900/f0edec/03163D?text=Arctic+Gel+Memory+Foam',
    thumb: 'https://placehold.co/600x450/f0edec/03163D?text=Arctic+Gel',
    featured: false,
    layers: [],
  },
  {
    id: 'mt-05', name: 'Natura Latex',
    category: 'mattress', subcategory: 'Latex',
    shortDesc: '100% natural Talalay latex, OEKO-TEX certified.',
    description: '100% natural Talalay latex mattress with OEKO-TEX Standard 100 certification. Naturally hypoallergenic, sustainably sourced, open-cell pincore ventilation, and GOTS organic cotton cover.',
    features: ['100% Talalay natural latex', 'OEKO-TEX Standard 100 certified', 'Naturally hypoallergenic', 'Open-cell pincore ventilation', 'GOTS organic cotton cover'],
    specs: { 'Material': '100% Talalay natural latex', 'Density': '75 kg/m³', 'Core': 'Pincore ventilated', 'Cover': 'GOTS organic cotton', 'Depth': '20 cm' },
    customOptions: ['Latex density (soft / medium / firm)', 'Cover material', 'Layer configuration', 'Custom dimensions'],
    fabrics: [],
    image: 'https://placehold.co/1200x900/e5e2e1/03163D?text=Natura+Latex',
    thumb: 'https://placehold.co/600x450/e5e2e1/03163D?text=Natura',
    featured: true,
    layers: [],
  },
  {
    id: 'mt-06', name: 'Hybrid Elite',
    category: 'mattress', subcategory: 'Hybrid',
    shortDesc: 'Micro-coil base with memory foam comfort layer.',
    description: 'A 1200-count micro-coil support base combined with a visco-elastic memory foam comfort layer. The responsiveness of springs, the pressure relief of foam — in a single precision-engineered construction.',
    features: ['1200 micro-coils per 150 cm', 'Visco-elastic comfort layer', 'Zoned support construction', 'Breathable foam perimeter border', 'Knitted pillow-top cover'],
    specs: { 'Coil Count': '1200 per 150 cm', 'Coil Height': '5 cm', 'Comfort Foam': '3 cm visco-elastic', 'Border': 'Breathable perimeter foam', 'Depth': '25 cm' },
    customOptions: ['Coil count specification', 'Foam layer depth', 'Comfort level', 'Custom dimensions'],
    fabrics: [],
    image: 'https://placehold.co/1200x900/dcd9d9/03163D?text=Hybrid+Elite',
    thumb: 'https://placehold.co/600x450/dcd9d9/03163D?text=Hybrid',
    featured: false,
    layers: [],
  },

  // ═══════════════════════════════════════════════════════
  // TOPPERS  (3)
  // ═══════════════════════════════════════════════════════

  {
    id: 'tp-01', name: 'Cloud Memory Topper',
    category: 'topper', subcategory: 'Memory Foam',
    shortDesc: '5 cm visco-elastic topper with cooling cover.',
    description: '5 cm visco-elastic memory foam topper (45 kg/m³) for mattress surface enhancement. Cooling stretch-knit cover, anti-slip base, and 4-point corner strap system. Machine-washable cover.',
    features: ['5 cm visco-elastic foam (45 kg/m³)', 'Cooling stretch-knit cover', 'Anti-slip base fabric', '4-point corner strap system', 'Machine-washable removable cover'],
    specs: { 'Foam': 'Visco-elastic (45 kg/m³)', 'Depth': '5 cm', 'Cover': 'Cooling stretch-knit', 'Base': 'Non-slip fabric', 'Straps': '4× adjustable corners' },
    customOptions: ['Foam density', 'Depth (3 / 5 / 7 cm)', 'Cover material', 'Custom dimensions'],
    fabrics: [],
    image: 'https://placehold.co/1200x900/f0edec/03163D?text=Cloud+Memory+Topper',
    thumb: 'https://placehold.co/600x450/f0edec/03163D?text=Cloud+Topper',
    featured: false,
  },
  {
    id: 'tp-02', name: 'Natura Latex Topper',
    category: 'topper', subcategory: 'Latex',
    shortDesc: 'Natural Dunlop latex topper with pincore ventilation.',
    description: 'Natural Dunlop latex topper (65 kg/m³) with pincore ventilation and OEKO-TEX certification. Adds pressure-relief responsiveness and natural breathability to any mattress. GOTS organic cotton cover.',
    features: ['Natural Dunlop process latex', 'Pincore ventilation pattern', 'OEKO-TEX certified', 'GOTS organic cotton cover', 'Elasticated anchor straps'],
    specs: { 'Material': 'Natural Dunlop latex', 'Density': '65 kg/m³', 'Depth': '4 cm', 'Cover': 'GOTS organic cotton', 'Ventilation': 'Pincore pattern' },
    customOptions: ['Latex density', 'Depth (3 / 4 / 6 cm)', 'Cover selection', 'Custom dimensions'],
    fabrics: [],
    image: 'https://placehold.co/1200x900/e5e2e1/03163D?text=Natura+Latex+Topper',
    thumb: 'https://placehold.co/600x450/e5e2e1/03163D?text=Latex+Topper',
    featured: false,
  },
  {
    id: 'tp-03', name: 'Wool & Cotton Topper',
    category: 'topper', subcategory: 'Natural Fibre',
    shortDesc: 'Pure British wool topper with cotton cambric casing.',
    description: 'Pure British wool fill encased in cotton cambric — a natural temperature-regulating topper ideal for hotel and contract environments. 400 gsm standard fill weight. Machine washable at 40°C.',
    features: ['Pure British wool fill', '400 gsm fill weight standard', 'Cotton cambric 180TC outer', 'Temperature-regulating year-round', 'Machine washable at 40°C'],
    specs: { 'Fill': 'Pure British wool', 'Fill Weight': '400 gsm', 'Casing': 'Cotton cambric 180TC', 'Depth': '3 cm', 'Wash': 'Machine wash 40°C' },
    customOptions: ['Fill weight (300 / 400 / 500 gsm)', 'Casing thread count', 'Dimensions'],
    fabrics: [],
    image: 'https://placehold.co/1200x900/dcd9d9/03163D?text=Wool+%26+Cotton+Topper',
    thumb: 'https://placehold.co/600x450/dcd9d9/03163D?text=Wool+Topper',
    featured: false,
  },
];

const categoryPlaceholders = {
  'bed-base': {
    image: 'brand_assets/placeholders/bed-base-main.svg',
    thumb: 'brand_assets/placeholders/bed-base-thumb.svg',
  },
  mattress: {
    image: 'brand_assets/placeholders/mattress-main.svg',
    thumb: 'brand_assets/placeholders/mattress-thumb.svg',
  },
  topper: {
    image: 'brand_assets/placeholders/topper-main.svg',
    thumb: 'brand_assets/placeholders/topper-thumb.svg',
  },
};

function applyProductImages(seedProducts) {
  return seedProducts.map(product => {
    const fallback = categoryPlaceholders[product.category] || {};
    const folder   = `images/products/${product.category}/`;
    const file     = product.imageFile || `${product.id}-main.jpg`;
    const imgSrc   = `${folder}${file}`;
    const baseName = file.replace(/\.[^.]+$/, '');
    return {
      ...product,
      image:         imgSrc,
      thumb:         imgSrc,
      imageFolder:   folder,
      imageBaseName: baseName,
      imageFallback: fallback.image || '',
    };
  });
}

const products = applyProductImages(baseProducts);

// ═══════════════════════════════════════════════════════
// FABRIC PALETTE
// ═══════════════════════════════════════════════════════

const fabrics = {
  alabaster:    { name: 'Alabaster',       hex: '#F2EDE4', group: 'neutral' },
  linen:        { name: 'Natural Linen',   hex: '#D8CAB0', group: 'neutral' },
  oyster:       { name: 'Oyster',          hex: '#E8DFD0', group: 'neutral' },
  cream:        { name: 'Warm Cream',      hex: '#F0E8D8', group: 'neutral' },
  ecru:         { name: 'Écru',            hex: '#EDE4D3', group: 'neutral' },
  biscuit:      { name: 'Biscuit',         hex: '#D4B896', group: 'neutral' },
  ivory:        { name: 'Ivory',           hex: '#FAFAF5', group: 'neutral' },
  sand:         { name: 'Desert Sand',     hex: '#C8A87A', group: 'warm'    },
  camel:        { name: 'Camel',           hex: '#B8934A', group: 'warm'    },
  cognac:       { name: 'Cognac',          hex: '#9B5E3A', group: 'warm'    },
  clay:         { name: 'Clay',            hex: '#A87060', group: 'warm'    },
  taupe:        { name: 'Taupe',           hex: '#9E907C', group: 'neutral' },
  stone:        { name: 'Stone',           hex: '#B8B0A8', group: 'cool'    },
  mist:         { name: 'Dove Mist',       hex: '#C8CDD4', group: 'cool'    },
  sage:         { name: 'Sage Green',      hex: '#8A9E8B', group: 'cool'    },
  slate:        { name: 'Slate Blue',      hex: '#7B8FA1', group: 'cool'    },
  ocean:        { name: 'Ocean',           hex: '#4A6E8A', group: 'cool'    },
  forest:       { name: 'Forest',          hex: '#4A6249', group: 'cool'    },
  storm:        { name: 'Storm Grey',      hex: '#6A7280', group: 'cool'    },
  pewter:       { name: 'Pewter',          hex: '#8A8E94', group: 'cool'    },
  graphite:     { name: 'Graphite',        hex: '#4A4E54', group: 'dark'    },
  charcoal:     { name: 'Charcoal',        hex: '#3A3D42', group: 'dark'    },
  midnight:     { name: 'Midnight Blue',   hex: '#1B2C4A', group: 'dark'    },
  'navy-fabric':{ name: 'Deep Navy',       hex: '#03163D', group: 'dark'    },
  onyx:         { name: 'Onyx',            hex: '#2C2C2C', group: 'dark'    },
  ebony:        { name: 'Ebony',           hex: '#1E1E1E', group: 'dark'    },
  anthracite:   { name: 'Anthracite',      hex: '#2D3032', group: 'dark'    },
  carbon:       { name: 'Carbon',          hex: '#383838', group: 'dark'    },
};

// ═══════════════════════════════════════════════════════
// CATEGORIES
// ═══════════════════════════════════════════════════════

const categories = [
  {
    id: 'bed-base',
    name: 'Bed Base Systems',
    count: 19,
    description: 'Platform, storage, ottoman, adjustable, wingback, and divan bases — engineered for export markets, hotel contracts, and premium residential use.',
    image: 'https://placehold.co/800x600/f0edec/03163D?text=Bed+Base+Systems',
  },
  {
    id: 'mattress',
    name: 'Mattresses',
    count: 6,
    description: 'Pocket spring, memory foam, latex, and hybrid mattresses built to custom specifications for every comfort requirement.',
    image: 'https://placehold.co/800x600/e5e2e1/03163D?text=Mattresses',
  },
  {
    id: 'topper',
    name: 'Toppers',
    count: 3,
    description: 'Memory foam, natural latex, and wool topper systems for mattress enhancement and hotel bedding programmes.',
    image: 'https://placehold.co/800x600/dcd9d9/03163D?text=Toppers',
  },
];

// ═══════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════

function getProductById(id) {
  return products.find(p => p.id === id) || null;
}

function getProductsByCategory(cat) {
  return products.filter(p => p.category === cat);
}

function getFeaturedProducts() {
  return products.filter(p => p.featured);
}

function getFabric(id) {
  return fabrics[id] || { name: id, hex: '#ccc', group: 'neutral' };
}

function getRelated(product, limit = 4) {
  return products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}

if (typeof window !== 'undefined') {
  window.ElseHomeData = {
    products,
    categories,
    fabrics,
    getProductById,
    getProductsByCategory,
    getFeaturedProducts,
    getFabric,
    getRelated,
  };
}
