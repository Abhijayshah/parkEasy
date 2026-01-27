
const mongoose = require('mongoose');
const Place = require('./models/Place');

const MONGO_URI = 'mongodb://localhost:27017/parking';

const seedPlaces = [
  { name: 'Alicante Airport', info: 'Convenient airport parking.', price: '12', image: 'AlicanteAirport.png' },
  { name: 'Broad', info: 'City center parking.', price: '15', image: 'Broad.png' },
  { name: 'Centro', info: 'Near shopping mall.', price: '10', image: 'Centro.png' },
  { name: 'Dallas', info: 'Secure underground parking.', price: '20', image: 'Dallas.png' },
  { name: 'Disney', info: 'Theme park parking.', price: '25', image: 'Disney.png' },
  { name: 'Igi', info: 'International terminal parking.', price: '18', image: 'Igi.png' },
  { name: 'London Heathrow', info: 'Premium airport parking.', price: '30', image: 'LondonHeathrow.png' },
  { name: 'Louvre', info: 'Museum parking.', price: '22', image: 'Louvre.png' },
  { name: 'Mayfair', info: 'Luxury area parking.', price: '40', image: 'Mayfair.png' },
  { name: 'Paris Gare de Lyon', info: 'Train station parking.', price: '18', image: 'Paris-Gare-de-Lyon.png' },
  { name: 'Paris Gare du Nord', info: 'Train station parking.', price: '18', image: 'Paris-Gare-du-Nord.png' },
  { name: 'Plaza', info: 'Central plaza parking.', price: '14', image: 'Plaza.png' },
  { name: 'Rodeo', info: 'Shopping district.', price: '28', image: 'Rodeo.png' },
  { name: 'Tivoli', info: 'Park side parking.', price: '16', image: 'Tivoli.png' },
  { name: 'Universal', info: 'Studio tour parking.', price: '25', image: 'Universal.png' },
  { name: 'Vitznau', info: 'Scenic view parking.', price: '10', image: 'Vitznau.png' },
  { name: 'Wested', info: 'West end parking.', price: '15', image: 'Wested.png' },
  { name: 'Whitefield', info: 'Tech park parking.', price: '12', image: 'Whitefield.png' }
];

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    await Place.deleteMany({});
    await Place.insertMany(seedPlaces);
    console.log('Places seeded');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error(err);
    mongoose.connection.close();
  });
