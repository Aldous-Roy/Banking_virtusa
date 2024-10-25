import React, { useState } from 'react';
import { postData } from '../Api/Api';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSend = (e) => {
        e.preventDefault();
        const data={name,email,message}
        postData('http://localhost:8000/send-message',data);
    };

    return (
        <div className="flex flex-col items-center justify-center min-w-full h-screen bg-gray-50">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <form 
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg"
                onSubmit={handleSend}
            >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="John Doe"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="email"
                        required
                        value={email}
                        placeholder='youremail@gmail.com'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        rows="4"
                        required
                        value={message}
                        placeholder='your message here...'
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
