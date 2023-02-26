import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4 sm:px-8">
      <div className="flex flex-wrap justify-between items-center">
        <nav className="flex flex-wrap items-center justify-center lg:justify-start text-base">
          <Link href="/" className="mr-5 hover:text-gray-400">Home</Link>
          <Link href="/about" className="mr-5 hover:text-gray-400">About</Link>
          <Link href="/blog" className="mr-5 hover:text-gray-400">Blog</Link>
          <Link href="/services" className="mr-5 hover:text-gray-400">Services</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
        </nav>
        <div className="flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
          <a href="#" className="mr-3 hover:text-gray-400"><FaFacebookF /></a>
          <a href="#" className="mr-3 hover:text-gray-400"><FaTwitter /></a>
          <a href="#" className="hover:text-gray-400"><FaLinkedinIn /></a>
        </div>
      </div>
      <div className="mt-8 text-center">
        <div className="text-base">&copy; 2023 By Sanuar Khan. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;
