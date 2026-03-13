import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const imageUrls = {
  properties: [
    'https://cdn.abacus.ai/images/38452d81-da8a-4b56-9f38-e04bc281908d.png',
    'https://cdn.abacus.ai/images/14ec238d-3a1b-4aa8-beea-e3614e73c6a4.png',
    'https://cdn.abacus.ai/images/86b6d4ee-8fc3-4be6-a30b-f3de0dedff4c.png',
    'https://cdn.abacus.ai/images/0259ec79-490d-4243-a73b-d86d3c077abd.png',
    'https://cdn.abacus.ai/images/c202d5f0-da09-4e3f-8d2c-e642da05b022.png',
    'https://cdn.abacus.ai/images/0fcef905-1656-44c7-a570-481d4e7667ca.png',
    'https://cdn.abacus.ai/images/7904ef60-8d3d-4d00-a0b6-6f1e5add17d3.png',
    'https://cdn.abacus.ai/images/cb674e0b-c058-483c-b5f4-c58976112e7f.png',
    'https://cdn.abacus.ai/images/edfe0546-97f7-4eed-b7e0-dbe7c43ffc94.png',
    'https://cdn.abacus.ai/images/97636a2a-ba62-446e-b1c7-1f7f1db3522f.png',
  ],
  agents: [
    'https://cdn.abacus.ai/images/5bb24be8-8f94-4949-8925-bea7aed5c885.png',
    'https://cdn.abacus.ai/images/7654fc85-3adf-4738-8b38-886f497ca4c9.png',
    'https://cdn.abacus.ai/images/74536e6b-3f69-4b5b-ab63-9883ceaad1a0.png',
    'https://cdn.abacus.ai/images/49a24308-014e-4d6a-9f32-919bba62282b.png',
  ],
};

async function main() {
  console.log('Starting seed...');

  const agents = [
    {
      name: 'Jennifer Mitchell',
      title: 'Senior Real Estate Advisor',
      email: 'jennifer.mitchell@cartervalerealty.com',
      phone: '(512) 555-0145',
      photoUrl: imageUrls.agents[0],
      bio: 'With over 12 years of experience in luxury residential and commercial real estate, Jennifer has helped hundreds of clients find their perfect properties across Texas. Her expertise in market analysis and negotiation ensures clients get the best value for their investments.',
      yearsExperience: 12,
      specialization: 'Luxury Residential & Commercial',
    },
    {
      name: 'David Patterson',
      title: 'Commercial Real Estate Specialist',
      email: 'david.patterson@cartervalerealty.com',
      phone: '(512) 555-0156',
      photoUrl: imageUrls.agents[1],
      bio: 'David specializes in commercial properties and office leasing with 10 years of experience. He has facilitated over $200M in commercial transactions and maintains strong relationships with major corporations and investors throughout Texas.',
      yearsExperience: 10,
      specialization: 'Commercial Properties & Office Leasing',
    },
    {
      name: 'Lisa Chen',
      title: 'Investment Property Consultant',
      email: 'lisa.chen@cartervalerealty.com',
      phone: '(512) 555-0167',
      photoUrl: imageUrls.agents[2],
      bio: 'Lisa brings 8 years of expertise in investment properties and portfolio management. She helps investors maximize returns through strategic property acquisitions and has a proven track record in identifying high-growth opportunities.',
      yearsExperience: 8,
      specialization: 'Investment Properties',
    },
    {
      name: 'Marcus Williams',
      title: 'Residential Real Estate Expert',
      email: 'marcus.williams@cartervalerealty.com',
      phone: '(512) 555-0178',
      photoUrl: imageUrls.agents[3],
      bio: 'With 15 years in residential real estate, Marcus has an unmatched understanding of the Texas housing market. His dedication to client satisfaction and deep local knowledge make him a trusted advisor for families and first-time buyers.',
      yearsExperience: 15,
      specialization: 'Residential Properties',
    },
  ];

  console.log('Upserting agents...');
  const createdAgents = [];
  for (const agent of agents) {
    const created = await prisma.agent.upsert({
      where: { email: agent.email },
      update: agent,
      create: agent,
    });
    createdAgents.push(created);
    console.log(`Agent created/updated: ${created.name}`);
  }

  const properties = [
    {
      title: 'Modern Luxury Estate',
      price: 1850000,
      address: '2500 Westlake Drive',
      city: 'Austin',
      state: 'TX',
      zipCode: '78746',
      bedrooms: 4,
      bathrooms: 3.5,
      squareFootage: 4200,
      propertyType: 'Residential',
      transactionType: 'Buy',
      amenities: ['Pool', 'Gym', 'Security', 'Garden', 'Parking', 'Air Conditioning', 'Heating'],
      description: 'Stunning contemporary estate featuring floor-to-ceiling windows, gourmet kitchen with premium appliances, and breathtaking hill country views. The open-concept design seamlessly blends indoor and outdoor living spaces, perfect for entertaining.',
      galleryImages: [imageUrls.properties[0]],
      assignedAgentId: createdAgents[0]?.id ?? null,
      featured: true,
    },
    {
      title: 'Classic Family Home',
      price: 625000,
      address: '1456 Oak Street',
      city: 'Dallas',
      state: 'TX',
      zipCode: '75201',
      bedrooms: 3,
      bathrooms: 2.5,
      squareFootage: 2800,
      propertyType: 'Residential',
      transactionType: 'Buy',
      amenities: ['Parking', 'Garden', 'Air Conditioning', 'Heating', 'Pet Friendly'],
      description: 'Charming traditional brick home in a family-friendly neighborhood. Features include a spacious backyard, updated kitchen, hardwood floors throughout, and close proximity to top-rated schools and parks.',
      galleryImages: [imageUrls.properties[1]],
      assignedAgentId: createdAgents[3]?.id ?? null,
      featured: true,
    },
    {
      title: 'Downtown Luxury Condo',
      price: 895000,
      address: '789 Main Street, Unit 2501',
      city: 'Houston',
      state: 'TX',
      zipCode: '77002',
      bedrooms: 2,
      bathrooms: 2,
      squareFootage: 1850,
      propertyType: 'Residential',
      transactionType: 'Buy',
      amenities: ['Elevator', 'Security', 'Gym', 'Parking', 'Air Conditioning', 'Balcony'],
      description: 'High-rise luxury condominium with panoramic city views. Features premium finishes, smart home technology, concierge service, and access to world-class amenities including rooftop pool and fitness center.',
      galleryImages: [imageUrls.properties[2]],
      assignedAgentId: createdAgents[0]?.id ?? null,
      featured: false,
    },
    {
      title: 'Spacious Ranch Property',
      price: 1250000,
      address: '4500 Ranch Road',
      city: 'Austin',
      state: 'TX',
      zipCode: '78732',
      bedrooms: 5,
      bathrooms: 4,
      squareFootage: 5200,
      propertyType: 'Residential',
      transactionType: 'Buy',
      amenities: ['Pool', 'Garden', 'Parking', 'Air Conditioning', 'Heating', 'Pet Friendly'],
      description: 'Expansive ranch-style property on 10 acres of pristine Texas land. Main house features five bedrooms, guest house, barn, and endless opportunities for outdoor activities. Perfect for equestrian enthusiasts.',
      galleryImages: [imageUrls.properties[3]],
      assignedAgentId: createdAgents[3]?.id ?? null,
      featured: true,
    },
    {
      title: 'Prime Office Building',
      price: 4500000,
      address: '1200 Commerce Street',
      city: 'Dallas',
      state: 'TX',
      zipCode: '75202',
      bedrooms: null,
      bathrooms: null,
      squareFootage: 25000,
      propertyType: 'Office',
      transactionType: 'Buy',
      amenities: ['Elevator', 'Parking', 'Security', 'Air Conditioning', 'Heating', 'Wheelchair Accessible'],
      description: 'Class A office building in the heart of Dallas business district. Featuring modern glass facade, high-speed elevators, state-of-the-art HVAC systems, and ample parking. Ideal for corporate headquarters or multi-tenant investment.',
      galleryImages: [imageUrls.properties[4]],
      assignedAgentId: createdAgents[1]?.id ?? null,
      featured: true,
    },
    {
      title: 'Retail Space - High Traffic',
      price: 3200,
      address: '567 Sixth Street',
      city: 'Austin',
      state: 'TX',
      zipCode: '78701',
      bedrooms: null,
      bathrooms: null,
      squareFootage: 2500,
      propertyType: 'Retail',
      transactionType: 'Lease',
      amenities: ['Air Conditioning', 'Heating', 'Parking', 'Wheelchair Accessible'],
      description: 'Premium retail space in vibrant entertainment district. High foot traffic, excellent visibility, and flexible layout perfect for restaurants, boutiques, or specialty retail. Includes storefront parking and outdoor seating area.',
      galleryImages: [imageUrls.properties[5]],
      assignedAgentId: createdAgents[1]?.id ?? null,
      featured: false,
    },
    {
      title: 'Industrial Warehouse',
      price: 8500,
      address: '3400 Industrial Boulevard',
      city: 'Houston',
      state: 'TX',
      zipCode: '77020',
      bedrooms: null,
      bathrooms: null,
      squareFootage: 50000,
      propertyType: 'Commercial',
      transactionType: 'Lease',
      amenities: ['Parking', 'Security', 'Wheelchair Accessible'],
      description: 'Large industrial warehouse with high ceilings, multiple loading docks, and excellent highway access. Suitable for distribution, manufacturing, or storage operations. Includes office space and 24/7 security.',
      galleryImages: [imageUrls.properties[6]],
      assignedAgentId: createdAgents[1]?.id ?? null,
      featured: false,
    },
    {
      title: 'Luxury Penthouse',
      price: 2500000,
      address: '888 Tower Drive, Penthouse',
      city: 'Dallas',
      state: 'TX',
      zipCode: '75219',
      bedrooms: 3,
      bathrooms: 3.5,
      squareFootage: 3500,
      propertyType: 'Residential',
      transactionType: 'Buy',
      amenities: ['Elevator', 'Security', 'Gym', 'Pool', 'Parking', 'Air Conditioning', 'Balcony'],
      description: 'Exclusive penthouse offering unparalleled luxury and sweeping 360-degree city views. Custom Italian finishes, wine cellar, private elevator, and access to five-star building amenities including spa and concierge.',
      galleryImages: [imageUrls.properties[7]],
      assignedAgentId: createdAgents[0]?.id ?? null,
      featured: false,
    },
    {
      title: 'Modern Office Suite',
      price: 4800,
      address: '900 Congress Avenue, Suite 450',
      city: 'Austin',
      state: 'TX',
      zipCode: '78701',
      bedrooms: null,
      bathrooms: null,
      squareFootage: 3200,
      propertyType: 'Office',
      transactionType: 'Lease',
      amenities: ['Elevator', 'Parking', 'Security', 'Air Conditioning', 'Wheelchair Accessible'],
      description: 'Contemporary office space with open floor plan, abundant natural light, and modern finishes. Located in prestigious downtown tower with conference facilities, fitness center, and on-site dining options.',
      galleryImages: [imageUrls.properties[8]],
      assignedAgentId: createdAgents[1]?.id ?? null,
      featured: false,
    },
    {
      title: 'Executive Waterfront Estate',
      price: 3200000,
      address: '100 Lakeshore Drive',
      city: 'Houston',
      state: 'TX',
      zipCode: '77005',
      bedrooms: 5,
      bathrooms: 5.5,
      squareFootage: 6800,
      propertyType: 'Residential',
      transactionType: 'Buy',
      amenities: ['Pool', 'Gym', 'Security', 'Garden', 'Parking', 'Air Conditioning', 'Heating', 'Balcony'],
      description: 'Magnificent waterfront estate with private dock and resort-style pool. Features include home theater, wine cellar, guest house, and meticulously landscaped grounds. The epitome of luxury living.',
      galleryImages: [imageUrls.properties[9]],
      assignedAgentId: createdAgents[0]?.id ?? null,
      featured: false,
    },
  ];

  console.log('Upserting properties...');
  for (const property of properties) {
    const created = await prisma.property.upsert({
      where: { id: 'temp-id-' + property.title.replace(/\s+/g, '-').toLowerCase() },
      update: {},
      create: property,
    });
    console.log(`Property created: ${created.title}`);
  }

  const testimonials = [
    {
      clientName: 'Sarah Johnson',
      clientTitle: 'Business Owner',
      testimonialText: 'Carter & Vale helped us find the perfect office space for our growing startup. Their professionalism and market knowledge made the process seamless. I highly recommend their services!',
      rating: 5,
    },
    {
      clientName: 'Michael Chen',
      clientTitle: 'Real Estate Investor',
      testimonialText: 'The investment properties they recommended have exceeded our ROI expectations. Their team truly understands the Texas market and provides invaluable insights.',
      rating: 5,
    },
    {
      clientName: 'Emily Rodriguez',
      clientTitle: 'Homeowner',
      testimonialText: 'We found our dream home thanks to Carter & Vale. The entire team was supportive, responsive, and genuinely cared about our needs. Five stars all the way!',
      rating: 5,
    },
    {
      clientName: 'Robert Thompson',
      clientTitle: 'Corporate Executive',
      testimonialText: 'Outstanding service from start to finish. They handled every detail of our commercial lease negotiation with expertise and professionalism. Absolutely top-notch!',
      rating: 5,
    },
  ];

  console.log('Upserting testimonials...');
  for (const testimonial of testimonials) {
    const created = await prisma.testimonial.upsert({
      where: { id: 'temp-id-' + testimonial.clientName.replace(/\s+/g, '-').toLowerCase() },
      update: {},
      create: testimonial,
    });
    console.log(`Testimonial created: ${created.clientName}`);
  }

  console.log('Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
