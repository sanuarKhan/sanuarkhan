import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ImageCard from "@/components/ImageCard";
import Navbar from "@/components/Navbar";

const Service = () => {
  return (
    <div>
      
      <Navbar />
      <Header name="Services" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <h1 className="text-4xl font-bold mb-4">Services</h1>
        <p className="text-xl mb-8">
          As a web developer, I offer the following services:
        </p>
        <ul className="list-disc pl-4">
          <li className="text-lg mb-4">
            Blog Website Development - I can build a custom blog website using
            modern web technologies.
          </li>
          <li className="text-lg mb-4">
            E-commerce Website Development - I can build an e-commerce website
            that is easy to use and manage.
          </li>
          <li className="text-lg mb-4">
            Portfolio Website Development - I can create a portfolio website
            that showcases your skills and experience.
          </li>
        </ul>
      </div>

      <div className=" py-10">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ImageCard
            title="Blog Development"
            image="/images/2.png"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis ante vel lorem tristique volutpat."
          />
          <ImageCard
            title="E-commerce Development"
            image="/images/3.png"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis ante vel lorem tristique volutpat."
          />
          <ImageCard
            title="Portfolio Development"
            image="/images/1.png"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis ante vel lorem tristique volutpat."
          />
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Service;
