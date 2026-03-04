const categories = [
  { id: 'electricians', name: 'Electricians', emoji: '⚡', description: 'Wiring, repairs & installations' },
  { id: 'plumbers', name: 'Plumbers', emoji: '🔧', description: 'Pipes, taps & drainage' },
  { id: 'carpenters', name: 'Carpenters', emoji: '🪚', description: 'Furniture & woodwork' },
  { id: 'mechanics', name: 'Mechanics', emoji: '🔩', description: 'Vehicle repair & servicing' },
  { id: 'doctors', name: 'Doctors', emoji: '🩺', description: 'Health & medical care' },
  { id: 'teachers', name: 'Teachers', emoji: '📚', description: 'Tuition & coaching' },
  { id: 'shops', name: 'Shops', emoji: '🛒', description: 'Groceries & general stores' },
  { id: 'tailors', name: 'Tailors', emoji: '🧵', description: 'Stitching & alterations' },
];

const contacts = [
  // Electricians
  { id: 'e1', categoryId: 'electricians', name: 'Ramesh Kumar', phone: '+91 98765 43210', address: 'House 12, Main Road, Village Center', description: 'Specializes in house wiring and inverter installations. Available for emergency repairs.', experience: '15 years', available: true },
  { id: 'e2', categoryId: 'electricians', name: 'Sunil Sharma', phone: '+91 87654 32109', address: 'Shop 3, Market Lane', description: 'Expert in motor repairs and agricultural pump wiring.', experience: '10 years', available: true },
  { id: 'e3', categoryId: 'electricians', name: 'Vikram Singh', phone: '+91 76543 21098', address: 'Near Panchayat Office', description: 'Solar panel installation and maintenance specialist.', experience: '8 years', available: false },
  { id: 'e4', categoryId: 'electricians', name: 'Anil Verma', phone: '+91 65432 10987', address: 'Behind School, East Colony', description: 'Commercial and residential electrical work.', experience: '12 years', available: true },

  // Plumbers
  { id: 'p1', categoryId: 'plumbers', name: 'Manoj Yadav', phone: '+91 99876 54321', address: 'Lane 4, South Colony', description: 'Expert in pipeline fitting and bathroom installations.', experience: '12 years', available: true },
  { id: 'p2', categoryId: 'plumbers', name: 'Sanjay Gupta', phone: '+91 88765 43210', address: 'Near Water Tank, North Side', description: 'Borewell and submersible pump specialist.', experience: '20 years', available: true },
  { id: 'p3', categoryId: 'plumbers', name: 'Deepak Rajput', phone: '+91 77654 32109', address: 'Market Road, Shop 7', description: 'Drainage and sewage line expert. Quick response for emergencies.', experience: '9 years', available: false },

  // Carpenters
  { id: 'c1', categoryId: 'carpenters', name: 'Raju Vishwakarma', phone: '+91 96543 21098', address: 'Carpenter Lane, Village Center', description: 'Custom furniture, doors, and window frames. Uses seasoned wood only.', experience: '25 years', available: true },
  { id: 'c2', categoryId: 'carpenters', name: 'Pappu Lohar', phone: '+91 85432 10987', address: 'Near Temple, West Side', description: 'Specializes in modular kitchen and wardrobe work.', experience: '7 years', available: true },
  { id: 'c3', categoryId: 'carpenters', name: 'Gopal Das', phone: '+91 74321 09876', address: 'Old Market, Shop 15', description: 'Furniture polishing and repair services.', experience: '18 years', available: true },
  { id: 'c4', categoryId: 'carpenters', name: 'Ashok Suthar', phone: '+91 63210 98765', address: 'New Colony, House 45', description: 'Roof and ceiling woodwork specialist.', experience: '14 years', available: false },

  // Mechanics
  { id: 'm1', categoryId: 'mechanics', name: 'Salman Khan', phone: '+91 95432 10987', address: 'Highway Garage, NH Road', description: 'All types of car and jeep repairs. AC servicing available.', experience: '16 years', available: true },
  { id: 'm2', categoryId: 'mechanics', name: 'Ravi Patel', phone: '+91 84321 09876', address: 'Bus Stand Road', description: 'Two-wheeler specialist. Genuine spare parts available.', experience: '11 years', available: true },
  { id: 'm3', categoryId: 'mechanics', name: 'Irfan Sheikh', phone: '+91 73210 98765', address: 'Tractor Market, East Road', description: 'Tractor and heavy vehicle repair expert.', experience: '22 years', available: true },

  // Doctors
  { id: 'd1', categoryId: 'doctors', name: 'Dr. Priya Sharma', phone: '+91 94321 09876', address: 'Village Health Center, Main Road', description: 'General physician. OPD hours 9 AM - 1 PM and 5 PM - 8 PM.', experience: '10 years', available: true },
  { id: 'd2', categoryId: 'doctors', name: 'Dr. Rajesh Meena', phone: '+91 83210 98765', address: 'Meena Clinic, Market Road', description: 'Pediatric specialist. Child vaccination and care.', experience: '15 years', available: true },
  { id: 'd3', categoryId: 'doctors', name: 'Dr. Sunita Devi', phone: '+91 72109 87654', address: 'Near Bus Stand', description: 'Ayurvedic practitioner. Herbal and natural treatments.', experience: '20 years', available: false },
  { id: 'd4', categoryId: 'doctors', name: 'Dr. Arun Joshi', phone: '+91 61098 76543', address: 'Joshi Hospital, South Colony', description: 'Dental care and oral surgery.', experience: '8 years', available: true },

  // Teachers
  { id: 't1', categoryId: 'teachers', name: 'Seema Mishra', phone: '+91 93210 98765', address: 'Lane 2, Teacher Colony', description: 'Maths and Science tuition for classes 8-12. Board exam preparation.', experience: '12 years', available: true },
  { id: 't2', categoryId: 'teachers', name: 'Amit Tiwari', phone: '+91 82109 87654', address: 'Near Post Office', description: 'English language and literature. Spoken English classes also available.', experience: '9 years', available: true },
  { id: 't3', categoryId: 'teachers', name: 'Kavita Pandey', phone: '+91 71098 76543', address: 'Pandey Bhawan, North Lane', description: 'Primary classes (1-5). Homework help and activity-based learning.', experience: '14 years', available: true },

  // Shops
  { id: 's1', categoryId: 'shops', name: 'Sharma General Store', phone: '+91 92109 87654', address: 'Main Market, Shop 1', description: 'Groceries, snacks, daily essentials. Home delivery available for orders above ₹500.', experience: '30 years', available: true },
  { id: 's2', categoryId: 'shops', name: 'Gupta Medical Store', phone: '+91 81098 76543', address: 'Main Market, Shop 8', description: 'Medicines, first aid supplies, and health products. Open till 10 PM.', experience: '18 years', available: true },
  { id: 's3', categoryId: 'shops', name: 'Kisan Fertilizer Shop', phone: '+91 70987 65432', address: 'Agriculture Market', description: 'Seeds, fertilizers, pesticides, and farming tools.', experience: '15 years', available: true },
  { id: 's4', categoryId: 'shops', name: 'Jai Mobile Center', phone: '+91 69876 54321', address: 'Market Road, Shop 12', description: 'Mobile phones, accessories, recharge, and repair services.', experience: '6 years', available: true },

  // Tailors
  { id: 'tl1', categoryId: 'tailors', name: 'Hussain Darzi', phone: '+91 91098 76543', address: 'Tailor Market, Shop 4', description: 'Men\'s clothing specialist. Suits, sherwanis, and kurta-pajama.', experience: '20 years', available: true },
  { id: 'tl2', categoryId: 'tailors', name: 'Sunita Boutique', phone: '+91 80987 65432', address: 'Women\'s Market, Shop 6', description: 'Ladies suits, blouses, and designer wear. Embroidery work available.', experience: '12 years', available: true },
  { id: 'tl3', categoryId: 'tailors', name: 'Raja Alterations', phone: '+91 79876 54321', address: 'Near Cinema Hall', description: 'Quick alterations and repairs. Same-day service available.', experience: '8 years', available: false },
];

export const getCategories = () => categories;

export const getCategoryById = (id) => categories.find((c) => c.id === id);

export const getContactsByCategory = (categoryId) =>
  contacts.filter((c) => c.categoryId === categoryId);

export const getContactById = (id) => contacts.find((c) => c.id === id);

export const searchContacts = (query) => {
  const lower = query.toLowerCase().trim();
  if (!lower) return [];
  return contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(lower) ||
      c.description.toLowerCase().includes(lower) ||
      c.address.toLowerCase().includes(lower)
  );
};
