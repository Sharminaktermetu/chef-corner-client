import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="h-16 bg-black flex items-center justify-center">
      <div className="container mx-auto flex items-center justify-between">
        <span className="text-sm text-white">© 2023 Chef Corner Website</span>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-white hover:text-gray-400"
            aria-label="Facebook"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-400"
            aria-label="Twitter"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-400"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
