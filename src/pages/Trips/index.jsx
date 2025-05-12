import React from 'react';
import TripCard from '../components/TripCard.jsx'
import '../components/TripCard.css';
import PdfDownloader from '../../components/PdfDownloader/Index.jsx';

const tripsData = [
  {
    id: 1,
    destination: 'Bali, Indonesia',
    price: 1299,
    duration: 7,
    type: 'Adventure',
    description: 'Explore beautiful beaches, lush rice terraces, and vibrant culture in this tropical paradise.',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
  },
  {
    id: 2,
    destination: 'Paris, France',
    price: 1899,
    duration: 5,
    type: 'Romantic',
    description: 'Experience the city of love with iconic landmarks, exquisite cuisine, and charming streets.',
    image: 'https://images.unsplash.com/photo-1431274172761-fca41d930114',
  },
  {
    id: 3,
    destination: 'Tokyo, Japan',
    price: 2199,
    duration: 10,
    type: 'Cultural',
    description: 'Discover the perfect blend of ancient traditions and cutting-edge technology.',
    image: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3',
  },
  {
    id: 4,
    destination: 'Santorini, Greece',
    price: 1599,
    duration: 6,
    type: 'Luxury',
    description: 'Stunning white-washed buildings with blue domes overlooking the Aegean Sea.',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d',
  },
  {
    id: 5,
    destination: 'New York, USA',
    price: 1499,
    duration: 4,
    type: 'City Break',
    description: 'The city that never sleeps with endless entertainment and iconic skyline.',
    image: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee',
  },
  {
    id: 6,
    destination: 'Cape Town, South Africa',
    price: 1799,
    duration: 8,
    type: 'Wildlife',
    description: 'Breathtaking landscapes, wildlife safaris, and rich cultural heritage.',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5',
  },
];

const Trips = () => {
  return (
    <div className="trips-page">
      <div className="trips-header">
        <h1>Explore Our Travel Packages</h1>
        <p>Discover amazing destinations around the world</p>
      </div>
      
      <div className="filters">
        <select>
          <option value="">All Destinations</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="America">America</option>
          <option value="Africa">Africa</option>
        </select>
        
        <select>
          <option value="">All Trip Types</option>
          <option value="Adventure">Adventure</option>
          <option value="Romantic">Romantic</option>
          <option value="Cultural">Cultural</option>
          <option value="Luxury">Luxury</option>
        </select>
      </div>
      <PdfDownloader 
        filename="document"
        buttonText="Save as PDF"
        buttonClass="custom-button"
        onBeforeDownload={() => console.log("Starting PDF generation")}
        onComplete={() => console.log("PDF saved successfully")}
      >
        <div className="trips-grid">
            {tripsData.map(trip => (
            <TripCard key={trip.id} trip={trip} />
            ))}
        </div>
      </PdfDownloader>
      
    </div>
  );
};

export default Trips;