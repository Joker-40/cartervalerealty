import { AMENITIES, CRM_STAGES } from '@/lib/constants';
import type {
  AgentSummary,
  CompanyMetric,
  DashboardMetric,
  InsightArticle,
  LeadPipelineCard,
  MarketSeries,
  MessageThread,
  PropertyDetailModel,
  SearchFilters,
  TestimonialModel,
  WorkspaceNotification,
} from '@/lib/types';

const agents: AgentSummary[] = [
  {
    id: 'agent-evelyn-carter',
    name: 'Evelyn Carter',
    title: 'Managing Broker',
    yearsExperience: 18,
    bio: 'Leads luxury residential strategy with a focus on data-backed pricing and relocation planning.',
    specialties: ['Luxury Homes', 'Relocation', 'Investment Strategy'],
    headshot: '/agent/agent-evelyn.png',
    phone: '(512) 555-0130',
    email: 'evelyn@cartervalerealty.com',
    listingsCount: 24,
    marketFocus: 'West Lake Hills + Downtown Austin',
  },
  {
    id: 'agent-marcus-vale',
    name: 'Marcus Vale',
    title: 'Commercial Director',
    yearsExperience: 22,
    bio: 'Structures retail and mixed-use deals for founders, operators, and family offices across Central Texas.',
    specialties: ['Commercial Leasing', 'Retail', 'Mixed Use'],
    headshot: '/agent/agent-marcus.png',
    phone: '(512) 555-0131',
    email: 'marcus@cartervalerealty.com',
    listingsCount: 19,
    marketFocus: 'The Domain + East Austin',
  },
  {
    id: 'agent-simone-hart',
    name: 'Simone Hart',
    title: 'Senior Advisor',
    yearsExperience: 14,
    bio: 'Guides first-time and move-up buyers with neighborhood intelligence and white-glove transaction support.',
    specialties: ['Condominiums', 'Move-up Buyers', 'Negotiation'],
    headshot: '/agent/agent-simone.png',
    phone: '(512) 555-0132',
    email: 'simone@cartervalerealty.com',
    listingsCount: 17,
    marketFocus: 'Mueller + East Austin',
  },
  {
    id: 'agent-daniel-reid',
    name: 'Daniel Reid',
    title: 'Investment Advisor',
    yearsExperience: 12,
    bio: 'Pairs underwriting rigor with neighborhood growth forecasting for cash-flow and appreciation-minded buyers.',
    specialties: ['Investor Services', 'Multifamily', 'Yield Analysis'],
    headshot: '/agent/agent-daniel.png',
    phone: '(512) 555-0133',
    email: 'daniel@cartervalerealty.com',
    listingsCount: 15,
    marketFocus: 'Round Rock + North Austin',
  },
];

const marketData: Record<string, MarketSeries[]> = {
  skyline: [
    {
      id: 'price-trend',
      title: 'Price Trend',
      unit: '$/sq ft',
      delta: '+8.2%',
      points: [
        { label: 'Jan', value: 502 },
        { label: 'Feb', value: 507 },
        { label: 'Mar', value: 516 },
        { label: 'Apr', value: 528 },
        { label: 'May', value: 535 },
        { label: 'Jun', value: 543 },
      ],
    },
    {
      id: 'growth',
      title: 'Neighborhood Growth',
      unit: 'YoY',
      delta: '+11.4%',
      points: [
        { label: 'Jan', value: 4.2 },
        { label: 'Feb', value: 5.1 },
        { label: 'Mar', value: 6.3 },
        { label: 'Apr', value: 8.1 },
        { label: 'May', value: 9.9 },
        { label: 'Jun', value: 11.4 },
      ],
    },
    {
      id: 'yield',
      title: 'Rental Yield',
      unit: '%',
      delta: '5.9%',
      points: [
        { label: 'Jan', value: 5.1 },
        { label: 'Feb', value: 5.2 },
        { label: 'Mar', value: 5.4 },
        { label: 'Apr', value: 5.6 },
        { label: 'May', value: 5.8 },
        { label: 'Jun', value: 5.9 },
      ],
    },
  ],
  boulevard: [
    {
      id: 'price-trend',
      title: 'Price Trend',
      unit: '$/sq ft',
      delta: '+6.7%',
      points: [
        { label: 'Jan', value: 418 },
        { label: 'Feb', value: 424 },
        { label: 'Mar', value: 429 },
        { label: 'Apr', value: 437 },
        { label: 'May', value: 441 },
        { label: 'Jun', value: 446 },
      ],
    },
    {
      id: 'growth',
      title: 'Neighborhood Growth',
      unit: 'YoY',
      delta: '+7.8%',
      points: [
        { label: 'Jan', value: 3.4 },
        { label: 'Feb', value: 4.2 },
        { label: 'Mar', value: 4.9 },
        { label: 'Apr', value: 6 },
        { label: 'May', value: 6.8 },
        { label: 'Jun', value: 7.8 },
      ],
    },
    {
      id: 'yield',
      title: 'Rental Yield',
      unit: '%',
      delta: '6.1%',
      points: [
        { label: 'Jan', value: 5.3 },
        { label: 'Feb', value: 5.6 },
        { label: 'Mar', value: 5.7 },
        { label: 'Apr', value: 5.8 },
        { label: 'May', value: 6 },
        { label: 'Jun', value: 6.1 },
      ],
    },
  ],
  atelier: [
    {
      id: 'price-trend',
      title: 'Price Trend',
      unit: '$/sq ft',
      delta: '+5.2%',
      points: [
        { label: 'Jan', value: 362 },
        { label: 'Feb', value: 366 },
        { label: 'Mar', value: 371 },
        { label: 'Apr', value: 375 },
        { label: 'May', value: 378 },
        { label: 'Jun', value: 381 },
      ],
    },
    {
      id: 'growth',
      title: 'Neighborhood Growth',
      unit: 'YoY',
      delta: '+6.4%',
      points: [
        { label: 'Jan', value: 2.1 },
        { label: 'Feb', value: 2.7 },
        { label: 'Mar', value: 3.9 },
        { label: 'Apr', value: 4.8 },
        { label: 'May', value: 5.6 },
        { label: 'Jun', value: 6.4 },
      ],
    },
    {
      id: 'yield',
      title: 'Rental Yield',
      unit: '%',
      delta: '5.1%',
      points: [
        { label: 'Jan', value: 4.6 },
        { label: 'Feb', value: 4.8 },
        { label: 'Mar', value: 4.9 },
        { label: 'Apr', value: 5 },
        { label: 'May', value: 5.1 },
        { label: 'Jun', value: 5.1 },
      ],
    },
  ],
};

const properties: PropertyDetailModel[] = [
  {
    id: 'skyline-reserve-penthouse',
    slug: 'skyline-reserve-penthouse',
    title: 'Skyline Reserve Penthouse',
    summary: 'A glass-wrapped residence with skyline views, concierge access, and investor-grade appreciation metrics.',
    price: 2480000,
    address: '300 Bowie Street, Unit 3201',
    city: 'Austin',
    state: 'TX',
    zipCode: '78703',
    neighborhood: 'Downtown Austin',
    bedrooms: 3,
    bathrooms: 3.5,
    squareFeet: 2840,
    yearBuilt: 2021,
    propertyType: 'Condo',
    transactionType: 'buy',
    segment: 'Residential',
    coverImage: '/property/property-skyline.png',
    badges: ['Featured', 'Waterfront Views'],
    amenities: [...AMENITIES.slice(0, 6)],
    coordinates: { lat: 30.2687, lng: -97.7528 },
    featured: true,
    marketHeadline: 'Downtown luxury inventory is tightening faster than the six month average.',
    description:
      'Positioned above Lady Bird Lake, this penthouse combines resort-grade amenities with a data-positive location profile. The floor plan is designed around indoor-outdoor entertaining, private client hosting, and lock-and-leave convenience.',
    heroStat: {
      label: 'Market Health Score',
      value: '91 / 100',
    },
    gallery: ['/property/property-skyline.png', '/property/property-skyline.png', '/property/property-skyline.png'],
    floorPlans: [
      { id: 'fp-1', label: 'Primary Residence Plan', image: '/images/floorplan-a.svg' },
      { id: 'fp-2', label: 'Entertainment Level', image: '/images/floorplan-b.svg' },
    ],
    agent: agents[0],
    locationHighlights: ['4 minutes to Lady Bird Lake Trail', '9 minutes to The Domain shuttle hub', 'Walk score 93'],
    marketData: marketData.skyline,
    neighborhoodGrowth: '+11.4% annualized',
    rentalYield: '5.9%',
  },
  {
    id: 'south-congress-boulevard-lofts',
    slug: 'south-congress-boulevard-lofts',
    title: 'South Congress Boulevard Lofts',
    summary: 'Boutique loft collection with hospitality-grade finishes and strong short-term appreciation indicators.',
    price: 1360000,
    address: '1612 South Congress Avenue',
    city: 'Austin',
    state: 'TX',
    zipCode: '78704',
    neighborhood: 'South Congress',
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1680,
    yearBuilt: 2019,
    propertyType: 'Condo',
    transactionType: 'buy',
    segment: 'Residential',
    coverImage: '/property/property-boulevard.png',
    badges: ['New Arrival', 'Walkable District'],
    amenities: ['Roof Deck', 'Smart Home', 'Furnished', 'Walkability', 'Private Garage'],
    coordinates: { lat: 30.248, lng: -97.7502 },
    featured: true,
    marketHeadline: 'South Congress demand remains resilient among executive relocations.',
    description:
      'An elevated SoCo loft with warm materiality, private terraces, and frictionless access to Austin’s most active dining and retail corridor.',
    heroStat: {
      label: 'Neighborhood Velocity',
      value: '23 Days',
    },
    gallery: ['/property/property-boulevard.png', '/property/property-boulevard.png', '/property/property-boulevard.png'],
    floorPlans: [{ id: 'fp-3', label: 'Loft Plan', image: '/images/floorplan-b.svg' }],
    agent: agents[2],
    locationHighlights: ['Blocks from Music Lane retail', 'Bike access to downtown core', 'Strong corporate relocation demand'],
    marketData: marketData.boulevard,
    neighborhoodGrowth: '+7.8% annualized',
    rentalYield: '6.1%',
  },
  {
    id: 'mueller-atelier-townhome',
    slug: 'mueller-atelier-townhome',
    title: 'Mueller Atelier Townhome',
    summary: 'Family-scaled townhome with a polished modern envelope, wellness amenities, and balanced appreciation/yield profile.',
    price: 924000,
    address: '4501 Aldrich Street',
    city: 'Austin',
    state: 'TX',
    zipCode: '78723',
    neighborhood: 'Mueller',
    bedrooms: 3,
    bathrooms: 2.5,
    squareFeet: 2134,
    yearBuilt: 2018,
    propertyType: 'Townhome',
    transactionType: 'buy',
    segment: 'Residential',
    coverImage: '/property/property-atelier.png',
    badges: ['Family Favorite', 'Smart Home'],
    amenities: ['Smart Home', 'Fitness Studio', 'Private Garage', 'EV Charging', 'Pool'],
    coordinates: { lat: 30.3005, lng: -97.7077 },
    featured: true,
    marketHeadline: 'Mueller continues to outperform Austin median on buyer retention.',
    description:
      'Designed for modern household flexibility, this residence offers dual living zones, a polished chef’s kitchen, and strong school-and-park adjacency.',
    heroStat: {
      label: 'Rental Yield',
      value: '5.1%',
    },
    gallery: ['/property/property-atelier.png', '/property/property-atelier.png', '/property/property-atelier.png'],
    floorPlans: [{ id: 'fp-4', label: 'Three-Level Plan', image: '/images/floorplan-c.svg' }],
    agent: agents[3],
    locationHighlights: ['2 minutes to Mueller Lake Park', 'Retail and dining within a five minute walk', 'High owner-occupancy neighborhood profile'],
    marketData: marketData.atelier,
    neighborhoodGrowth: '+6.4% annualized',
    rentalYield: '5.1%',
  },
  {
    id: 'domain-axis-office-suite',
    slug: 'domain-axis-office-suite',
    title: 'Domain Axis Office Suite',
    summary: 'Flexible office suite with hospitality reception, executive conferencing, and Class A tenant visibility.',
    price: 18500,
    address: '11601 Burnet Road, Suite 500',
    city: 'Austin',
    state: 'TX',
    zipCode: '78758',
    neighborhood: 'The Domain',
    squareFeet: 5120,
    yearBuilt: 2020,
    propertyType: 'Office',
    transactionType: 'lease',
    segment: 'Commercial',
    coverImage: '/property/property-axis.png',
    badges: ['Lease', 'Class A'],
    amenities: ['Conference Rooms', 'Concierge', 'Walkability', 'Fitness Studio'],
    coordinates: { lat: 30.4022, lng: -97.7241 },
    featured: true,
    marketHeadline: 'North Austin office absorption is outperforming broader metro benchmarks.',
    description:
      'Ideal for high-growth teams needing a polished front-of-house and seamless client experience, with premium access to retail, dining, and transit.',
    heroStat: {
      label: 'Lease Rate',
      value: '$18.5K / mo',
    },
    gallery: ['/property/property-axis.png', '/property/property-axis.png', '/property/property-axis.png'],
    floorPlans: [{ id: 'fp-5', label: 'Office Suite Layout', image: '/images/floorplan-a.svg' }],
    agent: agents[1],
    locationHighlights: ['Walkable to major corporate campuses', 'Visibility from Burnet Road', 'Private conference and hospitality zones'],
    marketData: marketData.boulevard,
    neighborhoodGrowth: '+7.8% annualized',
    rentalYield: '6.4%',
  },
  {
    id: 'east-austin-mercantile-retail',
    slug: 'east-austin-mercantile-retail',
    title: 'East Austin Mercantile Retail',
    summary: 'Street-facing retail box with curated fit-out potential and strong consumer traffic capture.',
    price: 2295000,
    address: '1207 East 6th Street',
    city: 'Austin',
    state: 'TX',
    zipCode: '78702',
    neighborhood: 'East Austin',
    squareFeet: 4288,
    yearBuilt: 2017,
    propertyType: 'Retail',
    transactionType: 'buy',
    segment: 'Commercial',
    coverImage: '/property/property-mercantile.png',
    badges: ['Retail', 'Investor Pick'],
    amenities: ['Conference Rooms', 'Walkability', 'Smart Home'],
    coordinates: { lat: 30.2644, lng: -97.7307 },
    featured: false,
    marketHeadline: 'East Austin retail growth remains supply constrained and brand friendly.',
    description:
      'A flexible retail footprint built for experiential brands, boutique hospitality, or gallery-led tenant concepts with high pedestrian engagement.',
    heroStat: {
      label: 'Foot Traffic Index',
      value: '124',
    },
    gallery: ['/property/property-mercantile.png', '/property/property-mercantile.png', '/property/property-mercantile.png'],
    floorPlans: [{ id: 'fp-6', label: 'Retail Layout', image: '/images/floorplan-b.svg' }],
    agent: agents[1],
    locationHighlights: ['Prime East 6th exposure', 'Strong nightlife adjacency', 'Investor-friendly exit profile'],
    marketData: marketData.skyline,
    neighborhoodGrowth: '+10.1% annualized',
    rentalYield: '6.8%',
  },
  {
    id: 'round-rock-yard-mixed-use',
    slug: 'round-rock-yard-mixed-use',
    title: 'Round Rock Yard Mixed-Use',
    summary: 'Income-diverse mixed-use asset with live-work optionality and suburban growth tailwinds.',
    price: 3175000,
    address: '201 Kenney Fort Boulevard',
    city: 'Round Rock',
    state: 'TX',
    zipCode: '78665',
    neighborhood: 'Round Rock',
    squareFeet: 7310,
    yearBuilt: 2022,
    propertyType: 'Mixed Use',
    transactionType: 'buy',
    segment: 'Commercial',
    coverImage: '/property/property-yard.png',
    badges: ['Mixed Use', 'Growth Corridor'],
    amenities: ['Conference Rooms', 'EV Charging', 'Private Garage', 'Smart Home'],
    coordinates: { lat: 30.5103, lng: -97.6575 },
    featured: false,
    marketHeadline: 'Round Rock mixed-use assets continue to attract family office capital.',
    description:
      'A newly built asset with layered income potential across storefront, office, and residential-flex programming, designed for long-hold investors.',
    heroStat: {
      label: 'Cap Rate',
      value: '6.2%',
    },
    gallery: ['/property/property-yard.png', '/property/property-yard.png', '/property/property-yard.png'],
    floorPlans: [{ id: 'fp-7', label: 'Mixed-Use Massing', image: '/images/floorplan-c.svg' }],
    agent: agents[3],
    locationHighlights: ['Immediate access to SH-45', 'Strong demographic growth corridor', 'Tenant mix diversification potential'],
    marketData: marketData.atelier,
    neighborhoodGrowth: '+6.9% annualized',
    rentalYield: '6.2%',
  },
];

export const testimonials: TestimonialModel[] = [
  {
    id: 'testimonial-1',
    clientName: 'Natalie Brooks',
    propertyType: 'Luxury Residence',
    quote: 'Their pricing discipline felt closer to an investment committee than a typical brokerage. We moved quickly and still bought well.',
    rating: 5,
    avatarLabel: 'NB',
  },
  {
    id: 'testimonial-2',
    clientName: 'M. Alvarez Holdings',
    propertyType: 'Retail Acquisition',
    quote: 'Carter & Vale combined neighborhood context, tenant demand insight, and negotiation strategy in a way most firms simply do not.',
    rating: 5,
    avatarLabel: 'MA',
  },
  {
    id: 'testimonial-3',
    clientName: 'Jordan and Priya Patel',
    propertyType: 'Townhome Purchase',
    quote: 'Every option came with clear market logic. We felt informed, not overwhelmed, and the final choice has already appreciated.',
    rating: 5,
    avatarLabel: 'JP',
  },
];

export const insights: InsightArticle[] = [
  {
    slug: 'where-austin-capital-is-moving-next',
    title: 'Where Austin Capital Is Moving Next',
    excerpt: 'A concise read on how migration, office flight-to-quality, and neighborhood density are reshaping high-confidence deals.',
    category: 'Market Trends',
    publishDate: '2026-02-10',
    readTime: '6 min read',
  },
  {
    slug: 'buy-vs-lease-for-founder-led-teams',
    title: 'Buy vs Lease for Founder-Led Teams',
    excerpt: 'When a fast-growing operating company should control its footprint, and when flexibility still wins.',
    category: 'Commercial Strategy',
    publishDate: '2026-01-22',
    readTime: '5 min read',
  },
  {
    slug: 'how-to-evaluate-rental-yield-beyond-headlines',
    title: 'How To Evaluate Rental Yield Beyond Headlines',
    excerpt: 'A practical framework for reading yield, demand durability, and underwriting quality across Austin submarkets.',
    category: 'Investor Guide',
    publishDate: '2025-12-18',
    readTime: '7 min read',
  },
];

export const companyMetrics: CompanyMetric[] = [
  { label: 'Years advising Austin buyers', value: '20+', detail: 'Residential and commercial across central Texas corridors.' },
  { label: 'Closed transaction volume', value: '$1.2B', detail: 'Blending premium residences with strategic investment property sales.' },
  { label: 'Cities actively covered', value: '6', detail: 'Austin core, west side enclaves, The Domain, Round Rock, and beyond.' },
];

export const dashboardMetrics: DashboardMetric[] = [
  { label: 'Total Listings', value: '126', delta: '+12 this month' },
  { label: 'Active Deals', value: '34', delta: '+4 in negotiation' },
  { label: 'Monthly Sales', value: '$18.4M', delta: '+9.1% vs last month' },
  { label: 'Market Health Score', value: '87', delta: 'Up 6 points' },
];

export const dashboardCharts = {
  revenue: [
    { label: 'Jan', value: 4.1 },
    { label: 'Feb', value: 5.2 },
    { label: 'Mar', value: 5.7 },
    { label: 'Apr', value: 6.4 },
    { label: 'May', value: 7.2 },
    { label: 'Jun', value: 8.6 },
  ],
  views: [
    { label: 'Jan', value: 8600 },
    { label: 'Feb', value: 9400 },
    { label: 'Mar', value: 10100 },
    { label: 'Apr', value: 11200 },
    { label: 'May', value: 12050 },
    { label: 'Jun', value: 13440 },
  ],
  conversion: [
    { label: 'Jan', value: 18 },
    { label: 'Feb', value: 21 },
    { label: 'Mar', value: 24 },
    { label: 'Apr', value: 27 },
    { label: 'May', value: 31 },
    { label: 'Jun', value: 34 },
  ],
};

export const pipelineLeads: LeadPipelineCard[] = [
  { id: 'lead-1', name: 'Ari Benson', interest: 'Executive relocation', stage: CRM_STAGES[0], property: 'Skyline Reserve Penthouse', value: '$2.48M' },
  { id: 'lead-2', name: 'Verdant Retail', interest: 'Flagship storefront', stage: CRM_STAGES[1], property: 'East Austin Mercantile Retail', value: '$2.29M' },
  { id: 'lead-3', name: 'Cora Lin', interest: 'Move-up buyer', stage: CRM_STAGES[2], property: 'Mueller Atelier Townhome', value: '$924K' },
  { id: 'lead-4', name: 'Northstar Labs', interest: 'Team headquarters', stage: CRM_STAGES[3], property: 'Domain Axis Office Suite', value: '$18.5K/mo' },
  { id: 'lead-5', name: 'Langford Family Office', interest: 'Long-hold acquisition', stage: CRM_STAGES[4], property: 'Round Rock Yard Mixed-Use', value: '$3.17M' },
];

export const notifications: WorkspaceNotification[] = [
  { id: 'notification-1', title: 'Lead converted to negotiation', detail: 'Northstar Labs moved into negotiation after second site visit.', time: '8 minutes ago', status: 'success' },
  { id: 'notification-2', title: 'Listing performance spike', detail: 'Skyline Reserve views rose 22% after campaign refresh.', time: '1 hour ago', status: 'info' },
  { id: 'notification-3', title: 'Client action due', detail: 'Follow-up proposal needed for Verdant Retail by end of day.', time: 'Today', status: 'warning' },
];

export const messageThreads: MessageThread[] = [
  { id: 'message-1', sender: 'Ari Benson', preview: 'Can we review the HOA reserve numbers before the weekend?', property: 'Skyline Reserve Penthouse', unread: true, sentAt: '10:14 AM' },
  { id: 'message-2', sender: 'Northstar Labs', preview: 'The board wants to compare TI packages on the final two suites.', property: 'Domain Axis Office Suite', unread: false, sentAt: '9:02 AM' },
  { id: 'message-3', sender: 'Jordan Patel', preview: 'We are ready to schedule a second walk-through next week.', property: 'Mueller Atelier Townhome', unread: false, sentAt: 'Yesterday' },
];

export function getProperties(filters: SearchFilters = {}) {
  return properties.filter((property) => {
    if (filters.intent && property.transactionType !== filters.intent) return false;
    if (filters.location && !`${property.city} ${property.neighborhood}`.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }
    if (filters.segment && property.segment !== filters.segment) return false;
    if (filters.propertyType && property.propertyType !== filters.propertyType) return false;
    if (filters.minPrice && property.price < filters.minPrice) return false;
    if (filters.maxPrice && property.price > filters.maxPrice) return false;
    if (filters.bedrooms && (property.bedrooms ?? 0) < filters.bedrooms) return false;
    if (filters.bathrooms && (property.bathrooms ?? 0) < filters.bathrooms) return false;
    if (filters.minSquareFeet && property.squareFeet < filters.minSquareFeet) return false;
    if (filters.maxSquareFeet && property.squareFeet > filters.maxSquareFeet) return false;
    if (filters.yearBuiltMin && property.yearBuilt < filters.yearBuiltMin) return false;
    if (filters.amenities?.length && !filters.amenities.every((amenity) => property.amenities.includes(amenity))) return false;
    return true;
  });
}

export function getFeaturedProperties() {
  return properties.filter((property) => property.featured).slice(0, 4);
}

export function getPropertyBySlug(slug: string) {
  return properties.find((property) => property.slug === slug);
}

export function getAgents() {
  return agents;
}

export function getInsights() {
  return insights;
}

export function getTestimonials() {
  return testimonials;
}

export function getCompanyMetrics() {
  return companyMetrics;
}
