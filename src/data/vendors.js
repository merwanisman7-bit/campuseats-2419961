const vendors = [
  {
    id: 'kafe-zubair',
    name: 'Kafe Mahallah Zubair',
    location: 'Mahallah Zubair, Ground Floor',
    openHours: '7:00 am - 10:00 pm',
    isOpen: true,
    menu: [
      { id: 'zub-1', name: 'Nasi Lemak Ayam', description: 'Coconut rice, fried chicken, sambal and egg', price: 7.5, category: 'Rice', available: true },
      { id: 'zub-2', name: 'Mee Goreng', description: 'Stir-fried yellow noodles with vegetables and egg', price: 6, category: 'Noodles', available: true },
      { id: 'zub-3', name: 'Teh Tarik', description: 'Pulled milk tea', price: 2.5, category: 'Drinks', available: false },
    ],
  },
  {
    id: 'kafe-siddiq',
    name: 'Kafe Mahallah Siddiq',
    location: 'Mahallah Siddiq, Ground Floor',
    openHours: '8:00 am - 9:00 pm',
    isOpen: true,
    menu: [
      { id: 'sid-1', name: 'Nasi Ayam Penyet', description: 'Smashed fried chicken with sambal and rice', price: 9, category: 'Rice', available: true },
      { id: 'sid-2', name: 'Maggi Goreng', description: 'Fried instant noodles with egg', price: 5.5, category: 'Noodles', available: true },
      { id: 'sid-3', name: 'Air Bandung', description: 'Rose syrup with milk', price: 3, category: 'Drinks', available: true },
    ],
  },
  {
    id: 'kafe-farouq',
    name: 'Kafe Mahallah Farouq',
    location: 'Mahallah Farouq, Ground Floor',
    openHours: '7:30 am - 9:30 pm',
    isOpen: false,
    menu: [
      { id: 'far-1', name: 'Roti Canai', description: 'Flaky flatbread with dhal curry', price: 2, category: 'Breakfast', available: true },
      { id: 'far-2', name: 'Nasi Goreng Kampung', description: 'Village-style fried rice with anchovies', price: 6.5, category: 'Rice', available: true },
      { id: 'far-3', name: 'Milo Ais', description: 'Iced Milo', price: 2.5, category: 'Drinks', available: true },
    ],
  },
]

export default vendors