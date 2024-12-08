import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span><Image src="/images/hero-image.png" alt = "" margin-left={50} width={50} height={50} /></span>
    
      <div className="space-y-4">
        {/* Address */}
        <div className="flex items-center">
          <span className="text-red-500 text-xl mr-3">📍</span>
          <div>
            <span className="block text-sm font-semibold text-gray-700">Address</span>
            <span className="block text-white-800">Aligarh (UP), INDIA</span>
          </div>
        </div>
        {/* Email */}
        <div className="flex items-center">
          <span className="text-red-500 text-xl mr-3">✉️</span>
          <div>
            <span className="block text-sm font-semibold text-gray-700">Email</span>
            <span className="block text-white-800">www.shaurya23@gmail.com</span>
          </div>
        </div>
      </div>

        <p className="text-slate-600">Created by Shrey Yadav © 2024. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
