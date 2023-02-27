import { FaGithub } from 'react-icons/fa';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
function About() {
  return (
    <div>
        <Navbar />

        <Header name="About Us"/>


        <div className="mt-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-500">
              This application is built using the following technologies:
            </p>
            <ul className="mt-4">
              <li className="text-lg">
                React - A JavaScript library for building user interfaces
              </li>
              <li className="text-lg">
                Tailwind CSS - A utility-first CSS framework for rapid UI development
              </li>
              <li className="text-lg">React Router - Declarative routing for React</li>
              <li className="text-lg">React Icons - Popular icons for React projects</li>
              <li className="text-lg">React Spring - A spring-physics based animation library</li>
              <li className="text-lg">Firebase - A cloud-based platform for building apps</li>
            </ul>
            <div className="mt-10">
              <p className="text-xl text-gray-500">
                You can find the source code for this application on GitHub:
              </p>
              <a
                href="https://github.com/your-username/your-project-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 text-lg bg-indigo-500 border border-transparent rounded-md font-semibold text-white hover:bg-indigo-600 active:bg-indigo-700 px-6 py-3"
              >
                <FaGithub className="mr-2" /> View on GitHub
              </a>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  );
}

export default About;

