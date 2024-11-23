import React, { useState } from 'react';
import { Pizza as PizzaIcon, Minus, Plus, ShoppingCart } from 'lucide-react';

interface Pizza {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface CartItem extends Pizza {
  quantity: number;
}

const pizzas: Pizza[] = [
  {
    id: 1,
    name: "The Trailblazer",
    description: "Pepperoni, mushrooms, bell peppers, special sauce blend",
    price: 22,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    name: "Forest Feast",
    description: "Wild mushrooms, caramelized onions, fresh herbs",
    price: 20,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    name: "Summit Special",
    description: "Spicy Italian sausage, fresh mozzarella, basil",
    price: 24,
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 4,
    name: "Alpine White",
    description: "White sauce, ricotta, garlic, spinach, cherry tomatoes",
    price: 21,
    image: "https://images.unsplash.com/photo-1576458088443-04a19bb13da6?auto=format&fit=crop&q=80&w=400"
  }
];

const Order = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (pizza: Pizza) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === pizza.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === pizza.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...pizza, quantity: 1 }];
    });
  };

  const updateQuantity = (pizzaId: number, delta: number) => {
    setCart(prevCart => {
      return prevCart
        .map(item =>
          item.id === pizzaId
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter(item => item.quantity > 0);
    });
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Order Online</h1>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors"
          >
            <ShoppingCart className="h-6 w-6" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-red-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={pizza.image}
                alt={pizza.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">{pizza.name}</h3>
                <p className="mt-2 text-gray-600">{pizza.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-red-600 font-semibold">${pizza.price}</span>
                  <button
                    onClick={() => addToCart(pizza)}
                    className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
            <div className="p-6 h-full flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Your Cart</h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-gray-500">
                  <PizzaIcon className="h-12 w-12 mb-4" />
                  <p>Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="flex-1 overflow-y-auto">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center py-4 border-b">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded"
                        />
                        <div className="ml-4 flex-1">
                          <h3 className="text-lg font-semibold">{item.name}</h3>
                          <p className="text-gray-600">${item.price}</p>
                          <div className="mt-2 flex items-center">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="text-gray-500 hover:text-red-600"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="mx-3">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="text-gray-500 hover:text-red-600"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                    <button
                      className="mt-4 w-full bg-red-600 text-white py-3 rounded-full hover:bg-red-700 transition-colors"
                      onClick={() => alert('Checkout functionality coming soon!')}
                    >
                      Checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;