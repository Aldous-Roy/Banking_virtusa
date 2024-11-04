import React from 'react';
import { motion } from 'framer-motion';
import Contact from '../Components/Contact';

const About = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
            <motion.h1 
                className="text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                About Us
            </motion.h1>
            
            <motion.p 
                className="text-lg text-gray-700 mb-4 max-w-2xl text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                Welcome to our bank! We are committed to providing exceptional banking services to our valued customers.
                Established in [Year], our bank has always been focused on delivering financial solutions tailored to meet 
                the unique needs of individuals and businesses alike.
            </motion.p>

            <motion.h2 
                className="text-2xl font-semibold mb-2"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
            >
                Our Mission
            </motion.h2>

            <motion.p 
                className="text-lg text-gray-700 mb-4 max-w-2xl text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
            >
                Our mission is to empower our customers with innovative financial solutions while maintaining the highest 
                standards of service and integrity. We strive to build lasting relationships and positively impact the 
                communities we serve.
            </motion.p>

            <motion.h2 
                className="text-2xl font-semibold mb-2"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
            >
                Our Vision
            </motion.h2>

            <motion.p 
                className="text-lg text-gray-700 mb-4 max-w-2xl text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
            >
                Our vision is to be the leading bank in [Your Location], recognized for our commitment to customer 
                satisfaction, financial literacy, and community engagement. We aim to leverage technology and our 
                expertise to create a seamless banking experience for our customers.
            </motion.p>

            <motion.h2 
                className="text-2xl font-semibold mb-2"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
            >
                Our Values
            </motion.h2>

            <motion.ul 
                className="list-disc list-inside text-lg text-gray-700 max-w-2xl text-left mb-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.4 }}
            >
                <li>Integrity</li>
                <li>Customer-Centricity</li>
                <li>Innovation</li>
                <li>Community Engagement</li>
                <li>Excellence</li>
            </motion.ul>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.6 }}
            >
                <Contact />
            </motion.div>
        </div>
    );
};

export default About;