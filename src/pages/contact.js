import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

function Contact() {
  return (
   <>
     <Navbar />
    <Header  name="Contact" />
    <div className=" text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-12 md:mb-0 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="mb-4">Your are requested to contact with if Have Any query. Thank you</p>
          <div className="flex items-center justify-center md:justify-start">
            <FaPhone className="text-xl mr-2" />
            <span>01994512054</span>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <FaEnvelope className="text-xl mr-2" />
            <span>sanuarkhan220@gmail.com</span>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <FaMapMarkerAlt className="text-xl mr-2" />
            <span>Dhaka , Bangladesh</span>
          </div>
        </div>

        <form className="w-full md:w-1/2 px-4">
          <div className="mb-4">
            <label className="block mb-2 text-lg font-bold">Name</label>
            <input className="w-full bg-white text-gray-800 border border-gray-300 rounded py-2 px-4" type="text" />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-lg font-bold">Email</label>
            <input className="w-full bg-white text-gray-800 border border-gray-300 rounded py-2 px-4" type="email" />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-lg font-bold">Message</label>
            <textarea className="w-full bg-white text-gray-800 border border-gray-300 rounded py-2 px-4" rows="4"></textarea>
          </div>
          <button className="bg-white text-purple-500 hover:bg-purple-500 hover:text-white font-bold py-2 px-4 rounded">
            Send Message
          </button>
        </form>
      </div>
    </div>
    <Footer />
   </>
  );
}

export default Contact;
