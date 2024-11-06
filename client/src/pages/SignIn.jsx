import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BankInfo from '../Components/BankInfo';

const SignIn = () => {
  const [form, setForm] = useState({
    phone: "",
    pwd: ""
  });

  const inputBoxStyle = "rounded-lg mt-2 w-5/6 focus:scale-105 text-lg h-10 transition-all duration-300";
  const lableStyle = "text-lg font-semibold";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1 h-screen gap-5">
        <BankInfo />
        <div className="bg-[#C0EBA6] flex justify-center items-center py-10 px-2">
          <form className="bg-[#FCCD2A] rounded-xl sm:w-4/5 w-full">
            <center>
              <p className="bg-[#347928] rounded-t-xl text-white p-3 text-center font-bold text-2xl md:text-3xl shadow-lg shadow-black">
                Bank Account Sign In
              </p>
              <div className="my-3 p-4">
                <div className="my-4">
                  <label className={lableStyle}>Registered Phone Number</label><br />
                  <input type="text" name="phone" value={form.phone} onChange={handleChange} className={inputBoxStyle} />
                </div>
                <div className="my-4">
                  <label className={lableStyle}>Account Password</label><br />
                  <input type="password" name="pwd" value={form.pwd} onChange={handleChange} className={inputBoxStyle} />
                </div>
              </div>
              <button className="rounded-lg bg-[#347928] hover:scale-110 active:scale-95 p-2 text-lg md:text-xl text-white transition-all duration-300 mb-2" onClick={handleSubmit}>
                Sign In
              </button>
              <div className='mb-4'>
                  <p className="text-sm">Don't have an account? Then</p>
                  <Link to="/signup" className="text-black hover:underline text-lg font-bold">Sign Up</Link>
              </div>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
