import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About Cloud Core */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">About Cloud Core</h2>
            <p>
              Cloud Core is a next-gen eCommerce platform that offers reliable cloud-based services, 
              digital products, and seamless online shopping experiences for individuals and businesses.
            </p>
          </div>

          {/* Products */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Our Services</h2>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-white">Cloud Hosting Solutions</a></li>
              <li><a href="#" className="hover:text-white">Digital Product Marketplace</a></li>
              <li><a href="#" className="hover:text-white">Secure Payment Integration</a></li>
              <li><a href="#" className="hover:text-white">Real-Time Order Tracking</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Stay Connected</h2>
            <p>Follow Cloud Core on social media for updates and offers.</p>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-white">Facebook</a>
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="#" className="hover:text-white">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <hr className="my-6 border-gray-700" />
        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Cloud Core. Developed by Md Abdul Kader Molla. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
