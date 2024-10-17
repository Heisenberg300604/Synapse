import React from 'react';
import ArbiFallsImage from './arbifalls.jpg';

const ArbiFalls = () => {
  const handleExport = () => {
    
    alert('Details exported successfully!');
  };

  return (
    <div className="bg-#FFFBFA min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105">
        
        {/* Image Section */}
        <img src={ArbiFallsImage} alt="Arbi Falls" className="w-full h-72 object-cover" />
        
        {/* Content Section */}
        <div className="p-8">
          <h1 className="text-5xl font-extrabold text-#00BD9D mb-6">Arbi Falls, Manipal</h1>
          
          {/* Brief Description */}
          <p className="text-lg text-gray-800 leading-relaxed mb-8">
            Arbi Falls is a hidden gem near Manipal, Karnataka, surrounded by lush greenery and serene landscapes. This small yet beautiful waterfall is especially mesmerizing during the monsoon season, offering a tranquil spot for relaxation and a perfect escape into nature.
          </p>

          {/* Location Details */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-#00BD9D mb-3">Location</h2>
            <p className="text-gray-700">
              Latitude: <strong>13.3°N</strong> | Longitude: <strong>74.8°E</strong>
            </p>
            <p className="text-gray-700">State: Karnataka, India</p>
          </div>

          {/* Nearby Attractions */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-#00BD9D mb-3">Nearby Attractions</h2>
            <ul className="list-disc ml-6 text-gray-800">
              <li><strong>End Point</strong> - A scenic viewpoint offering a panoramic view of the river and surrounding greenery.</li>
              <li><strong>Manipal Lake</strong> - A peaceful spot for walking and boating amidst nature.</li>
              <li><strong>Kaup Beach</strong> - Known for its lighthouse and pristine shores, it's perfect for a quiet evening by the sea.</li>
              <li><strong>Malpe Beach</strong> - A beautiful beach famous for its golden sands and water sports.</li>
            </ul>
          </div>

          {/* Historical Significance */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-#00BD9D mb-3">Historical Significance</h2>
            <p className="text-gray-800">
              Though not widely known for its historical significance, Arbi Falls holds a special place among the locals and students of Manipal. It offers a peaceful retreat for those seeking solace in nature, away from the hustle of town life.
            </p>
          </div>

          {/* Export Button */}
          <div className="text-center">
            <button
              onClick={handleExport}
              className="bg-#49C6E5 hover:bg-#54DEFD text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Export Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArbiFalls;
