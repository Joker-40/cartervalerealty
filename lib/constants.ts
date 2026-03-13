import {
  Bell,
  Building2,
  ChartColumnBig,
  Heart,
  Handshake,
  House,
  Mail,
  Newspaper,
  Phone,
  Settings,
  UserCircle2,
  Users,
} from 'lucide-react';

export const BRAND = {
  name: 'Carter & Vale Realty Group',
  tagline: 'Where Smart Investments Meet Real Homes',
  phone: '(512) 555-0123',
  email: 'hello@cartervalerealty.com',
  address: '300 West 6th Street, Suite 2100, Austin, TX 78701',
  yearsExperience: 20,
};

export const PUBLIC_NAV_ITEMS = [
  { label: 'Properties', href: '/properties' },
  { label: 'Agents', href: '/agents' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
] as const;

export const PUBLIC_MOBILE_NAV = [
  { label: 'Home', href: '/', icon: House },
  { label: 'Search', href: '/properties', icon: Building2 },
  { label: 'Saved', href: '/properties?saved=true', icon: Heart },
  { label: 'Insights', href: '/insights', icon: Newspaper },
  { label: 'Contact', href: '/contact', icon: Phone },
] as const;

export const WORKSPACE_NAV_ITEMS = [
  { label: 'Dashboard', href: '/app/dashboard', icon: ChartColumnBig },
  { label: 'Properties', href: '/properties', icon: House },
  { label: 'Listings', href: '/app/listings', icon: Building2 },
  { label: 'Deals', href: '/app/deals', icon: Handshake },
  { label: 'Clients', href: '/app/clients', icon: Users },
  { label: 'Analytics', href: '/app/analytics', icon: ChartColumnBig },
  { label: 'Agents', href: '/app/agents', icon: Users },
  { label: 'Messages', href: '/app/messages', icon: Mail },
  { label: 'Notifications', href: '/app/notifications', icon: Bell },
  { label: 'Settings', href: '/app/settings', icon: Settings },
] as const;

export const WORKSPACE_MOBILE_NAV = [
  { label: 'Dashboard', href: '/app/dashboard', icon: ChartColumnBig },
  { label: 'Listings', href: '/app/listings', icon: Building2 },
  { label: 'Deals', href: '/app/deals', icon: Handshake },
  { label: 'Messages', href: '/app/messages', icon: Mail },
  { label: 'Profile', href: '/app/settings', icon: UserCircle2 },
] as const;

export const SERVICE_AREAS = [
  'Downtown Austin',
  'West Lake Hills',
  'Mueller',
  'The Domain',
  'Round Rock',
  'East Austin',
] as const;

export const PROPERTY_TYPES = ['Condo', 'Single Family', 'Townhome', 'Retail', 'Office', 'Mixed Use'] as const;
export const TRANSACTION_TYPES = ['buy', 'rent', 'lease'] as const;
export const PROPERTY_SEGMENTS = ['Residential', 'Commercial'] as const;

export const AMENITIES = [
  'Pool',
  'Private Garage',
  'Smart Home',
  'EV Charging',
  'Fitness Studio',
  'Roof Deck',
  'Concierge',
  'Conference Rooms',
  'Walkability',
  'Furnished',
] as const;

export const CRM_STAGES = ['New Inquiry', 'Contacted', 'Visit Scheduled', 'Negotiation', 'Closed'] as const;
