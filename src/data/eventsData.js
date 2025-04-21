export const events = [
  {
    id: '1',
    title: 'Summer Music Festival',
    description: 'Join us for a weekend of amazing live performances from top artists across multiple genres. This annual festival brings together music lovers from all over for an unforgettable experience with great food, drinks, and community.',
    date: '2025-07-15',
    time: '2:00 PM - 11:00 PM',
    location: 'Central Park, New York',
    image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg',
    category: 'music',
    organizer: 'NYC Events'
  },
  {
    id: '2',
    title: 'Tech Conference 2025',
    description: 'The premier technology conference featuring keynotes from industry leaders, workshops on cutting-edge tech, and networking opportunities with professionals from around the world.',
    date: '2025-08-10',
    time: '9:00 AM - 6:00 PM',
    location: 'Convention Center, San Francisco',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
    category: 'conference',
    organizer: 'TechTalks'
  },
  {
    id: '3',
    title: 'Web Development Workshop',
    description: 'Learn the fundamentals of modern web development in this hands-on workshop. Perfect for beginners and those looking to refresh their skills.',
    date: '2025-06-20',
    time: '10:00 AM - 3:00 PM',
    location: 'Digital Hub, Boston',
    image: 'https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg',
    category: 'workshop',
    organizer: 'Code Masters'
  },
  {
    id: '4',
    title: 'Marathon for Charity',
    description: 'Run for a cause in our annual charity marathon. All proceeds go to supporting local education initiatives.',
    date: '2025-09-05',
    time: '7:00 AM - 12:00 PM',
    location: 'Downtown, Chicago',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
    category: 'sports',
    organizer: 'RunForGood'
  },
  {
    id: '5',
    title: 'Community Garden Day',
    description: 'Help plant and maintain our community gardens. Tools and refreshments provided. A great way to meet neighbors and contribute to local green spaces.',
    date: '2025-05-25',
    time: '9:00 AM - 1:00 PM',
    location: 'Riverside Gardens, Portland',
    image: 'https://images.pexels.com/photos/169523/pexels-photo-169523.jpeg',
    category: 'community',
    organizer: 'Green Spaces Initiative'
  },
  {
    id: '6',
    title: 'Jazz in the Park',
    description: 'An evening of smooth jazz performances under the stars. Bring your picnic blankets and enjoy some of the best jazz musicians in the region.',
    date: '2025-07-30',
    time: '6:00 PM - 9:00 PM',
    location: 'Heritage Park, Austin',
    image: 'https://images.pexels.com/photos/1813124/pexels-photo-1813124.jpeg',
    category: 'music',
    organizer: 'Austin Jazz Society'
  },
  {
    id: '7',
    title: 'AI Symposium',
    description: 'Exploring the future of artificial intelligence and its impact on society. Features panel discussions, demos, and networking with AI researchers and practitioners.',
    date: '2025-10-15',
    time: '10:00 AM - 5:00 PM',
    location: 'Tech Campus, Seattle',
    image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg',
    category: 'conference',
    organizer: 'Future AI Institute'
  },
  {
    id: '8',
    title: 'Photography Masterclass',
    description: 'Elevate your photography skills with this masterclass led by award-winning photographers. Covers composition, lighting, editing, and more.',
    date: '2025-06-10',
    time: '1:00 PM - 5:00 PM',
    location: 'Art Center, Los Angeles',
    image: 'https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg',
    category: 'workshop',
    organizer: 'Visual Arts Academy'
  }
];

export const getEventById = (id) => {
  return events.find(event => event.id === id);
};

export const getEventsByCategory = (category) => {
  if (category === 'all') return events;
  return events.filter(event => event.category === category);
};

export const getEventsByIds = (ids) => {
  return events.filter(event => ids.includes(event.id));
};