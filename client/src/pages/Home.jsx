import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <motion.section 
                className="bg-blue-600 text-white text-center py-20"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h2 className="text-4xl font-bold">Welcome to My Bank</h2>
                <p className="mt-4 text-lg">Your trusted partner in finance.</p>
                <a href="#services" className="mt-6 inline-block bg-white text-blue-800 py-2 px-4 rounded-lg font-semibold hover:bg-gray-200">
                    Explore Our Services
                </a>
            </motion.section>

            {/* Services Section */}
            <motion.section 
                id="services" 
                className="py-20 max-w-7xl mx-auto px-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold text-center">Our Services</h2>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {["Online Banking", "Loans", "Investments"].map((service, idx) => (
                        <motion.div 
                            key={idx}
                            className="bg-white shadow-lg rounded-lg p-6 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl font-semibold">{service}</h3>
                            <p className="mt-2">
                                {service === "Online Banking" 
                                    ? "Manage your finances anytime, anywhere."
                                    : service === "Loans" 
                                    ? "Competitive rates to help you achieve your goals."
                                    : "Grow your wealth with our expert guidance."}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* About Us Section */}
            <motion.section 
                id="about" 
                className="py-20 bg-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center">About Us</h2>
                    <p className="mt-4 text-center max-w-2xl mx-auto">
                        My Bank has been providing top-notch financial services for over 20 years. Our commitment to excellence ensures that we meet all your banking needs efficiently.
                    </p>
                </div>
            </motion.section>

            {/* Footer */}
            <motion.footer 
                className="bg-blue-800 text-white py-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h3 className="text-lg font-bold">Contact Us</h3>
                    <p>Email: support@mybank.com</p>
                    <p>Phone: 1-800-123-4567</p>
                    <p>&copy; {new Date().getFullYear()} My Bank. All rights reserved.</p>
                </div>
            </motion.footer>
        </div>
    );
};

export default Home;