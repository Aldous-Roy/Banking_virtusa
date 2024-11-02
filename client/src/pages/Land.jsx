import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Land = () => {
    const { scrollYProgress } = useScroll();
    const fadeIn = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    return (
        <div className="bg-gray-50">
            <motion.section 
                className="hero bg-cover bg-center h-screen flex items-center justify-center text-center text-white"
                style={{
                    backgroundImage: 'url("https://source.unsplash.com/1600x900/?bank")',
                    opacity: fadeIn,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="bg-black bg-opacity-50 p-8 rounded-xl">
                    <h2 className="text-4xl font-bold mb-4">Empowering Your Financial Future</h2>
                    <p className="mb-6">Experience unparalleled banking solutions tailored just for you.</p>
                    <a href="#services" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Explore Our Services</a>
                </div>
            </motion.section>

            <motion.section 
                id="services" 
                className="container mx-auto py-12 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold mb-6">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {["Personal Banking", "Business Banking", "Investment Services"].map((service, idx) => (
                        <motion.div 
                            key={idx}
                            className="bg-white p-6 rounded-lg shadow-md"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl font-semibold mb-2">{service}</h3>
                            <p>{service === "Personal Banking" ? "Your trusted partner for all personal finance needs."
                                : service === "Business Banking" ? "Comprehensive solutions to help your business thrive."
                                : "Grow your wealth with our expert guidance and investment strategies."}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            <motion.section 
                id="about" 
                className="bg-gray-100 py-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">About Us</h2>
                    <p className="mb-4">At MyBank, we prioritize your financial health. Our mission is to provide you with innovative banking solutions backed by exceptional customer service.</p>
                    <a href="#contact" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Contact Us</a>
                </div>
            </motion.section>

            <motion.section 
                id="contact" 
                className="container mx-auto py-12 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="mb-4">We’re here to help you achieve your financial goals. Reach out to us today!</p>
                <p className="mb-4">Email: support@mybank.com | Phone: (123) 456-7890</p>
            </motion.section>

            <footer className="bg-blue-800 text-white py-4 text-center">
                <p>&copy; {new Date().getFullYear()} MyBank. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Land;