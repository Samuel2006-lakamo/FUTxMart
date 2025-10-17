import { BsTelegram } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";
import { HiPhone } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer
      className="mt-10 w-full bg-slate-800 text-white md:text-[16px]"
      style={{ fontFamily: "var(--font-body)" }}
    >
      {/* Back to top */}
      <div className="h-[60px] flex items-center justify-center border-b border-slate-700">
        <button
          onClick={scrollToTop}
          className="px-8 py-3 hover:scale-110 transition-all font-semibold"
        >
          Back to top ↑
        </button>
      </div>

      {/* Main content */}
      <div className="px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-emerald-400">FUTMxMart</h2>
          <p className="text-sm md:text-[15px] text-slate-300">
            FUTMxMart is an online marketplace for FUT Minna students —
            connecting buyers and student vendors in one smart platform.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4 text-purple-300">
            Quick Links
          </h3>
          <ul className="space-y-2 text-slate-300">
            <li>
              <Link to="/about" className="hover:text-emerald-400">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-emerald-400">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/vendors" className="hover:text-emerald-400">
                Vendors
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-emerald-400">
                Cart
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-emerald-400">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4 text-purple-300">
            Contact Us
          </h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li className="flex items-center gap-2">
              <MdEmail className="text-emerald-400" />
              <span>futmxmart@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <HiPhone className="text-emerald-400" />
              <span>+234 812 345 6789</span>
            </li>
            <li className="flex items-center gap-2">
              <HiLocationMarker className="text-emerald-400" />
              <span>FUT Minna, Campus</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-purple-700 to-emerald-600 p-6 rounded-2xl shadow-md">
          <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
          <p className="text-sm text-slate-100 mb-4">
            Get the latest updates and student discounts.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 outline-none rounded-l-md text-black w-full bg-white"
            />
            <button className="px-4 py-2 bg-slate-900 rounded-r-md text-white hover:scale-105 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Vendor CTA */}
      <div className="text-center mb-8">
        <Link
          to="/register-vendor"
          className="inline-block bg-gradient-to-r from-purple-700 to-emerald-600 px-6 py-3 rounded-lg text-white font-semibold hover:scale-105 transition-all shadow-md"
        >
          Become a Vendor
        </Link>
      </div>

      {/* Socials & Bottom */}
      <div className="bg-slate-900 flex flex-col justify-center text-center">
        <h1 className="font-extrabold text-2xl p-2 font-[Poppins]">
          FUTM<span className="text-purple-600">x</span>Mart
        </h1>

        <div className="flex justify-center gap-6 py-4 text-xl">
          <Link
            to="https://x.com/"
            target="_blank"
            className="hover:text-emerald-400"
          >
            <FaXTwitter />
          </Link>
          <Link
            to="https://instagram.com/"
            target="_blank"
            className="hover:text-emerald-400"
          >
            <FaInstagram />
          </Link>
          <Link
            to="https://facebook.com/"
            target="_blank"
            className="hover:text-emerald-400"
          >
            <FaFacebookF />
          </Link>
          <Link
            to="https://t.me/"
            target="_blank"
            className="hover:text-emerald-400"
          >
            <BsTelegram/>
          </Link>
          <Link
            to="https://wa.me/09132709107"
            target="_blank"
            className="hover:text-emerald-400"
          >
            <FaWhatsapp />
          </Link>
        </div>

        <div className="border-t border-slate-700 mx-10"></div>

        <div className="text-sm py-4 text-slate-400">
          © {new Date().getFullYear()} FUTM
          <span className="text-purple-600">x</span>
          <span className="text-gray-100">Mart</span>. All rights reserved.
        </div>

        <div className="pb-6 flex justify-center items-center gap-2 text-slate-400 text-sm">
          24/7 Available
          <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
