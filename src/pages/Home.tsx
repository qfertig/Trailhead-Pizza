import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80"
          alt="Pizza background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative text-center text-white px-4 space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Trailhead Pizza</h1>
        <p className="text-xl md:text-2xl">Crafting Adventure in Every Slice</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => navigate('/menu')}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
          >
            View Menu
          </button>
          <button 
            onClick={() => navigate('/order')}
            className="bg-white hover:bg-gray-100 text-red-600 px-8 py-3 rounded-full text-lg font-semibold transition-colors"
          >
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;