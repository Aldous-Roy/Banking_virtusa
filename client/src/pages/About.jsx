import React from 'react';
import Contact from '../Components/Contact';
const About = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <p className="text-lg text-gray-700 mb-4 max-w-2xl text-center">
                Welcome to our bank! We are committed to providing exceptional banking services to our valued customers. 
                Established in [Year], our bank has always been focused on delivering financial solutions tailored to meet 
                the unique needs of individuals and businesses alike.
            </p>
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-4 max-w-2xl text-center">
                Our mission is to empower our customers with innovative financial solutions while maintaining the highest 
                standards of service and integrity. We strive to build lasting relationships and positively impact the 
                communities we serve.
            </p>
            <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
            <p className="text-lg text-gray-700 mb-4 max-w-2xl text-center">
                Our vision is to be the leading bank in [Your Location], recognized for our commitment to customer 
                satisfaction, financial literacy, and community engagement. We aim to leverage technology and our 
                expertise to create a seamless banking experience for our customers.
            </p>
            <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 max-w-2xl text-left mb-4">
                <li>Integrity</li>
                <li>Customer-Centricity</li>
                <li>Innovation</li>
                <li>Community Engagement</li>
                <li>Excellence</li>
            </ul>
            <Contact/>
        </div>
    );
};

export default About;
