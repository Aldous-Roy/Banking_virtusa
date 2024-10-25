import React from 'react';

const Home = () => {
    return (
        <div className="bg-gray-50">
            <section className="bg-blue-600 text-white text-center py-20">
                <h2 className="text-4xl font-bold">Welcome to My Bank</h2>
                <p className="mt-4 text-lg">Your trusted partner in finance.</p>
                <a href="#services" className="mt-6 inline-block bg-white text-blue-800 py-2 px-4 rounded-lg font-semibold hover:bg-gray-200">
                    Explore Our Services
                </a>
            </section>
            <section id="services" className="py-20 max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center">Our Services</h2>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <h3 className="text-xl font-semibold">Online Banking</h3>
                        <p className="mt-2">Manage your finances anytime, anywhere.</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <h3 className="text-xl font-semibold">Loans</h3>
                        <p className="mt-2">Competitive rates to help you achieve your goals.</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <h3 className="text-xl font-semibold">Investments</h3>
                        <p className="mt-2">Grow your wealth with our expert guidance.</p>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section id="about" className="py-20 bg-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center">About Us</h2>
                    <p className="mt-4 text-center max-w-2xl mx-auto">
                        My Bank has been providing top-notch financial services for over 20 years. Our commitment to excellence ensures that we meet all your banking needs efficiently.
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-blue-800 text-white py-6">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h3 className="text-lg font-bold">Contact Us</h3>
                    <p>Email: support@mybank.com</p>
                    <p>Phone: 1-800-123-4567</p>
                    <p>&copy; 2023 My Bank. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
