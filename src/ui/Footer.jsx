import {
  FaFacebookF,
  FaInstagram,
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
      className="mt-10 w-full bg-slate-700 text-white md:text-[18px]"
      style={{ fontFamily: "var(--font-body)" }}
    >
      {/* Back to top button */}
      <div className="h-[60px] flex items-center justify-center border-b border-slate-600">
        <button
          onClick={scrollToTop}
          className="px-8 py-3 hover:scale-110 transition-all font-semibold "
        >
          Back to top
        </button>
      </div>

      {/* Main footer content */}
      <div className="bg-slate-800 px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8   text-center md:text-left">
        <div>
          <h2 className="text-lg font-semibold mb-4">FUTMxMart</h2>
          <p className="text-sm md:text-[16px] text-slate-300">
            FUTMxMart is an online marketplace for FUT Minna students,
            connecting buyers and student vendors in one platform.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-slate-300">
            <li>
              <a href="/shop" className="hover:text-purple-400">
                Shop
              </a>
            </li>
            <li>
              <a href="/vendors" className="hover:text-purple-400">
                Vendors
              </a>
            </li>
            <li>
              <a href="/cart" className="hover:text-purple-400">
                Cart
              </a>
            </li>
            <li>
              <Link to="/faq" className="hover:text-purple-400">
                Faq
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-slate-300 text-sm flex flex-col  md:items-start">
            <li className="flex items-center gap-2 ">
              <span>
                <MdEmail />
              </span>
              <span> Email: futmxmart@gmail.com</span>
            </li>
            <li className="flex items-center gap-1 ">
              <span>
                <HiPhone />
              </span>
              <span> Phone: +234 812 345 6789</span>
            </li>
            <li className="flex items-center gap-1 ">
              <span>
                <HiLocationMarker />
              </span>
              <span>Location: FUT Minna, Campus</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
          <p className="text-sm text-slate-300 mb-2">
            Subscribe to our newsletter
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 outline-0 rounded-l-md text-black w-full bg-slate-50"
            />
            <button className="px-4 py-2 cursor-pointer bg-purple-800 rounded-r-md hover:bg-purple-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Socials & Bottom */}
      <div className="bg-slate-900 text-center">
        <h1 className="font-extrabold text-2xl p-2 font-[Poppins]">
          FUTM<span className="text-purple-800">x</span>Mart
        </h1>
        <div className="flex justify-center gap-6 py-4 text-xl">
          <Link to="/" className="hover:text-purple-400"></Link>
          <Link to="/" className="hover:text-purple-400">
            <FaXTwitter />
          </Link>
          <Link to="/" className="hover:text-purple-400">
            <FaInstagram />
          </Link>
          <Link to="/" className="hover:text-purple-400">
            <FaFacebookF />
          </Link>
          <Link to="/" className="hover:text-purple-400">
            <FaWhatsapp />
          </Link>
        </div>

        <div className="border-t border-slate-700 m-7 md:ml-20 md:mr-20"></div>

        <div className="text-sm py-4">
          © {new Date().getFullYear()} FUTM
          <span className="text-purple-800">x</span>
          <span className="text-gray-100">Mart</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
