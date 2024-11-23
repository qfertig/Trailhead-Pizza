import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const Location = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Visit Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            Located in the heart of downtown, we're easy to find and hard to forget.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-8 rounded-lg">
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-red-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                  <p className="mt-2 text-gray-600">
                    123 Adventure Lane<br />
                    Downtown District<br />
                    City, State 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-6 w-6 text-red-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Hours</h3>
                  <div className="mt-2 text-gray-600">
                    <p>Monday - Thursday: 11am - 10pm</p>
                    <p>Friday - Saturday: 11am - 11pm</p>
                    <p>Sunday: 12pm - 9pm</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-red-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
                  <p className="mt-2 text-gray-600">
                    Phone: (555) 123-4567<br />
                    Email: hello@trailheadpizza.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80"
              alt="Restaurant exterior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;