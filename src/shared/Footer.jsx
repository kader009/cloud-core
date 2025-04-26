import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Cloud Core */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">
              About Cloud Core
            </h2>
            <p>
              Cloud Core is a next-gen eCommerce platform that offers reliable
              cloud-based services, digital products, and seamless online
              shopping experiences for individuals and businesses.
            </p>
          </div>

          {/* Products */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">
              Shop Categories
            </h2>
            <ul className="space-y-1">
              <li>
                <a href="/category/electronics" className="hover:text-white">
                  Electronics
                </a>
              </li>
              <li>
                <a href="/category/fashion" className="hover:text-white">
                  Fashion & Apparel
                </a>
              </li>
              <li>
                <a href="/category/home-kitchen" className="hover:text-white">
                  Home & Kitchen
                </a>
              </li>
              <li>
                <a href="/category/beauty" className="hover:text-white">
                  Beauty & Wellness
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">
              Stay Connected
            </h2>
            <p>Follow Cloud Core on social media for updates and offers.</p>

            <div className="flex space-x-4 mt-2 text-gray-300 hover:text-white transition">
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="w-6 h-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.3V12h2.3l-.3 3h-2v7A10 10 0 0022 12z" />
                </svg>
              </a>

              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="w-6 h-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm6.75 2a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zm-4.25 1.25a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="w-6 h-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5a2.5 2.5 0 11.02 0zm.02 4.5H2V22h3V8zm7.5 0h-2.75V22h3V14c0-2.26 1.48-3.5 3.23-3.5 1.74 0 2.52 1.17 2.52 3.5V22h3v-8.5c0-5.38-2.87-7.5-6.75-7.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <hr className="my-6 border-gray-700" />
        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Cloud Core. Developed by ❤️ Md Abdul
          Kader Molla. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
