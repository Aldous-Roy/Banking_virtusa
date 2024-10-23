import React from 'react';

const Land = () => {
    return (
        <div className="bg-gray-50">

            <section className="hero bg-cover bg-center h-screen flex items-center justify-center text-center text-white" style={{ backgroundImage: 'url("https://source.unsplash.com/1600x900/?bank")' }}>
                <div className="bg-black bg-opacity-50 p-8 rounded-xl">
                    <h2 className="text-4xl font-bold mb-4">Empowering Your Financial Future</h2>
                    <p className="mb-6">Experience unparalleled banking solutions tailored just for you.</p>
                    <a href="#services" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Explore Our Services</a>
                </div>
            </section>

            <section id="services" className="container mx-auto py-12 text-center">
                <h2 className="text-3xl font-bold mb-6">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Personal Banking</h3>
                        <p>Your trusted partner for all personal finance needs.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Business Banking</h3>
                        <p>Comprehensive solutions to help your business thrive.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Investment Services</h3>
                        <p>Grow your wealth with our expert guidance and investment strategies.</p>
                    </div>
                </div>
            </section>

            <section id="about" className="bg-gray-100 py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">About Us</h2>
                    <p className="mb-4">At MyBank, we prioritize your financial health. Our mission is to provide you with innovative banking solutions backed by exceptional customer service.</p>
                    <a href="#contact" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Contact Us</a>
                </div>
            </section>

            <section id="contact" className="container mx-auto py-12 text-center">
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="mb-4">We’re here to help you achieve your financial goals. Reach out to us today!</p>
                <p className="mb-4">Email: support@mybank.com | Phone: (123) 456-7890</p>
            </section>

            <footer className="bg-blue-800 text-white py-4 text-center">
                <p>&copy; {new Date().getFullYear()} MyBank. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Land;
