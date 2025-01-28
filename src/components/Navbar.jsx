import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthorsOpen, setIsAuthorsOpen] = useState(false);
  const [isEditionsOpen, setIsEditionsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-xl font-semibold">ICICV-2025</div>

        {/* Mobile Menu Button */}
        <button
          className="text-black text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-black hover:underline">
            Home
          </a>
          <a href="#" className="text-black hover:underline">
            Committees
          </a>

          {/* Dropdown - For Authors */}
          <div className="relative group">
            <button className="text-black">For Authors ▾</button>
            <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded-md py-2 w-40">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Submission
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Guidelines
              </a>
            </div>
          </div>

          {/* Dropdown - Previous Editions */}
          <div className="relative group">
            <button className="text-black">Previous Editions ▾</button>
            <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded-md py-2 w-40">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                2024
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                2023
              </a>
            </div>
          </div>
        </div>

        {/* Submit Paper Button */}
        <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Submit Paper
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
          <a href="#" className="block text-black hover:underline">
            Home
          </a>
          <a href="#" className="block text-black hover:underline">
            Committees
          </a>

          {/* Mobile Dropdown - For Authors */}
          <button
            className="block text-black w-full text-left"
            onClick={() => setIsAuthorsOpen(!isAuthorsOpen)}
          >
            For Authors ▾
          </button>
          {isAuthorsOpen && (
            <div className="ml-4 space-y-2">
              <a href="#" className="block text-gray-700 hover:underline">
                Submission
              </a>
              <a href="#" className="block text-gray-700 hover:underline">
                Guidelines
              </a>
            </div>
          )}

          {/* Mobile Dropdown - Previous Editions */}
          <button
            className="block text-black w-full text-left"
            onClick={() => setIsEditionsOpen(!isEditionsOpen)}
          >
            Previous Editions ▾
          </button>
          {isEditionsOpen && (
            <div className="ml-4 space-y-2">
              <a href="#" className="block text-gray-700 hover:underline">
                2024
              </a>
              <a href="#" className="block text-gray-700 hover:underline">
                2023
              </a>
            </div>
          )}

          {/* Submit Paper Button */}
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md w-full hover:bg-blue-700">
            Submit Paper
          </button>
        </div>
      )}
    </nav>
  );
}
