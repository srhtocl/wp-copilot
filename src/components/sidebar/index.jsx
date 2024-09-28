import React from 'react';
import { FaTachometerAlt, FaSignOutAlt, FaHeading, FaList, FaFileAlt, FaPlus, FaLanguage, FaTags, FaAd, FaGlobe, FaPlusCircle, FaComment, FaUser, FaKey } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="h-screen bg-gray-800 text-white w-64 flex flex-col">
      <div className="flex items-center justify-center h-16 bg-gray-900 text-xl font-bold">WP COPİLOT</div>
      <nav className="flex-grow">
        <ul className="mt-2">
          <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <FaTachometerAlt className="mr-3" />
            Dashboard
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <FaSignOutAlt className="mr-3" />
            Çıkış
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <FaHeading className="mr-3" />
            H1 Oluştur
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <FaList className="mr-3" />
            H1 Listem
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <FaFileAlt className="mr-3" />
            Makaleler
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <FaPlus className="mr-3" />
            Makale Oluştur
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <FaLanguage className="mr-3" />
            Metin Çevir
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <FaTags className="mr-3" />
            Ürün Açıklaması
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <FaAd className="mr-3" />
            Reklam Metni
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <FaGlobe className="mr-3" />
            Siteler
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <FaPlusCircle className="mr-3" />
            Ürün Ekle
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <FaComment className="mr-3" />
            Yorum Ekle
          </li>
        </ul>
      </nav>
      <div className="px-4 py-2 bg-gray-900 flex items-center">
        <FaUser className="mr-3" />
        Hesabım
      </div>
      <div className="px-4 py-2 bg-gray-900 flex items-center">
        <FaKey className="mr-3" />
        API
      </div>
    </div>
  );
}

export default Sidebar;
