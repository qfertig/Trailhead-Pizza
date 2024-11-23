import React from 'react';
import { Utensils, Clock, Award } from 'lucide-react';

const Feature = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="flex flex-col items-center text-center p-6">
    <div className="bg-red-100 p-3 rounded-full">
      <Icon className="h-6 w-6 text-red-600" />
    </div>
    <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
  </div>
);

const About = () => {
  const features = [
    {
      icon: Utensils,
      title: "Artisanal Quality",
      description: "Hand-crafted pizzas made with locally sourced ingredients and traditional techniques."
    },
    {
      icon: Clock,
      title: "Fresh Daily",
      description: "Our dough is made fresh every morning, ensuring the perfect crust every time."
    },
    {
      icon: Award,
      title: "Local Favorite",
      description: "Voted 'Best Pizza' by our community three years in a row."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Story</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Founded in 2020, Trailhead Pizza brings together our passion for outdoor adventure 
            and authentic Italian pizza-making. Every pizza tells a story of exploration and taste.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Feature key={index} {...feature} />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <img
            src="https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&q=80"
            alt="Our kitchen"
            className="w-full h-96 object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default About;