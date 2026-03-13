export type TransactionType = 'buy' | 'rent' | 'lease';
export type PropertySegment = 'Residential' | 'Commercial';
export type WorkspaceStage = 'New Inquiry' | 'Contacted' | 'Visit Scheduled' | 'Negotiation' | 'Closed';

export interface SearchFilters {
  saved?: boolean;
  intent?: TransactionType;
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  minSquareFeet?: number;
  maxSquareFeet?: number;
  yearBuiltMin?: number;
  propertyType?: string;
  segment?: PropertySegment;
  amenities?: string[];
}

export interface AgentSummary {
  id: string;
  name: string;
  title: string;
  yearsExperience: number;
  bio: string;
  specialties: string[];
  headshot: string;
  phone: string;
  email: string;
  listingsCount: number;
  marketFocus: string;
}

export interface MarketPoint {
  label: string;
  value: number;
}

export interface MarketSeries {
  id: string;
  title: string;
  unit: string;
  delta: string;
  points: MarketPoint[];
}

export interface PropertyCardModel {
  id: string;
  slug: string;
  title: string;
  summary: string;
  price: number;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  neighborhood: string;
  bedrooms?: number;
  bathrooms?: number;
  squareFeet: number;
  yearBuilt: number;
  propertyType: string;
  transactionType: TransactionType;
  segment: PropertySegment;
  coverImage: string;
  badges: string[];
  amenities: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  featured: boolean;
  marketHeadline: string;
}

export interface PropertyDetailModel extends PropertyCardModel {
  description: string;
  heroStat: {
    label: string;
    value: string;
  };
  gallery: string[];
  floorPlans: {
    id: string;
    label: string;
    image: string;
  }[];
  agent: AgentSummary;
  locationHighlights: string[];
  marketData: MarketSeries[];
  neighborhoodGrowth: string;
  rentalYield: string;
}

export interface TestimonialModel {
  id: string;
  clientName: string;
  propertyType: string;
  quote: string;
  rating: number;
  avatarLabel: string;
}

export interface InsightArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishDate: string;
  readTime: string;
}

export interface CompanyMetric {
  label: string;
  value: string;
  detail: string;
}

export interface LeadCapturePayload {
  propertyId?: string;
  propertySlug?: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface DashboardMetric {
  label: string;
  value: string;
  delta: string;
}

export interface LeadPipelineCard {
  id: string;
  name: string;
  interest: string;
  stage: WorkspaceStage;
  property: string;
  value: string;
}

export interface WorkspaceNotification {
  id: string;
  title: string;
  detail: string;
  time: string;
  status: 'info' | 'success' | 'warning';
}

export interface MessageThread {
  id: string;
  sender: string;
  preview: string;
  property: string;
  unread: boolean;
  sentAt: string;
}
