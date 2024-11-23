import React from 'react';
import { Flame } from 'lucide-react';

const MenuItem = ({ name, description, price }: { name: string; description: string; price: string }) => (
  <div className="border-b border-gray-200 last:border-b-0 py-6">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
      <span className="text-red-600 font-semibold">{price}</span>
    </div>
  </div>
);

const Menu = () => {
  const pizzas = [
    {
      name: "The Trailblazer",
      description: "Our signature pizza with pepperoni, mushrooms, bell peppers, and our special sauce blend",
      price: "$22"
    },
    {
      name: "Forest Feast",
      description: "A vegetarian delight with wild mushrooms, caramelized onions, and fresh herbs",
      price: "$20"
    },
    {
      name: "Summit Special",
      description: "Spicy Italian sausage, fresh mozzarella, and basil on our hand-tossed crust",
      price: "$24"
    },
    {
      name: "Alpine White",
      description: "White sauce base with ricotta, garlic, spinach, and cherry tomatoes",
      price: "$21"
    }
  ];

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Menu</h2>
          <div className="flex items-center justify-center mt-2">
            <Flame className="h-5 w-5 text-red-600 mr-2" />
            <p className="text-gray-600">Wood-fired to perfection</p>
          </div>
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto">
          {pizzas.map((pizza, index) => (
            <MenuItem key={index} {...pizza} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 italic">Online ordering coming soon!</p>
        </div>
      </div>
    </section>
  );
};

export default Menu;