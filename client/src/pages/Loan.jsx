import React from 'react';
import { motion } from 'framer-motion';

const Loan = () => {
    return (
        <div className="bg-gray-50">
            {/* Header Section */}
            <motion.section 
                className="bg-blue-600 text-white text-center py-20"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h2 className="text-4xl font-bold">Loan Options</h2>
                <p className="mt-4 text-lg">Financial solutions tailored to your needs.</p>
                <a href="#loan-options" className="mt-6 inline-block bg-white text-blue-800 py-2 px-4 rounded-lg font-semibold hover:bg-gray-200">
                    Explore Our Loan Options
                </a>
            </motion.section>

            {/* Loan Options Section */}
            <motion.section 
                id="loan-options" 
                className="py-20 max-w-7xl mx-auto px-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold text-center">Our Loan Options</h2>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {["Personal Loans", "Home Loans", "Auto Loans"].map((loanType, idx) => (
                        <motion.div 
                            key={idx}
                            className="bg-white shadow-lg rounded-lg p-6 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl font-semibold">{loanType}</h3>
                            <p className="mt-2">
                                {loanType === "Personal Loans" 
                                    ? "Flexible terms for your personal financial needs."
                                    : loanType === "Home Loans" 
                                    ? "Affordable mortgage options for your dream home."
                                    : "Get behind the wheel with our competitive rates."}
                            </p>
                            <a href="#apply" className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg">
                                Apply Now
                            </a>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Loan Application Section */}
            <motion.section 
                id="apply" 
                className="py-20 bg-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center">Get Started with Your Loan Application</h2>
                    <p className="mt-4 text-center max-w-2xl mx-auto">
                        Ready to apply? Fill out our easy online application and get a response in minutes!
                    </p>
                    <div className="text-center mt-6">
                        <a href="#" className="bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700">
                            Start Application
                        </a>
                    </div>
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

export default Loan;