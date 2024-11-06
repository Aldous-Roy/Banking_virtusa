import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BankInfo from '../Components/BankInfo';

const SignUp = () => {
  const [form, setForm] = useState({
    phone: "",
    pwd: "",
    cpwd: ""
  });
  const [msg, setMsg] = useState("");

  const inputBoxStyle = "rounded-lg mt-2 w-5/6 focus:scale-105 text-lg h-10 transition-all duration-300";
  const lableStyle = "text-lg font-semibold";

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value === "")
      setForm({ ...form, [name]: value });
    if (name === "phone" && !(/^[0-9]+$/.test(value)))
      return;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleVerify = async (e) => {
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
                Bank Account Sign Up
              </p>

              <div className="my-3 p-2">
                <div className="my-4">
                  <label className={lableStyle}>Registered Phone Number</label><br />
                  <input type="text" name="phone" value={form.phone} onChange={handleChange} className={inputBoxStyle} /><br />
                  <button className='rounded-lg bg-[#347928] hover:scale-110 active:scale-95 p-1 text-md md:text-xl text-white transition-all duration-300 mt-3' onClick={handleVerify}>
                    Verify
                  </button>
                </div>

                <div className="my-4">
                  <label className={lableStyle}>Set Your Account Password</label><br />
                  <input type="password" name="pwd" value={form.pwd} onChange={handleChange} className={inputBoxStyle} />
                </div>

                <div className="my-4">
                  <label className={lableStyle}>Confirm Your Account Password</label><br />
                  <input type="password" name="cpwd" value={form.cpwd} onChange={handleChange} className={inputBoxStyle} />
                </div>
              </div>

              <div className='my-2 text-md text-red-600 font-semibold'>
                {msg}
              </div>

              <button className="rounded-lg bg-[#347928] hover:scale-110 active:scale-95 p-2 text-lg md:text-xl text-white transition-all duration-300 mb-2" onClick={handleSubmit}>
                Sign Up
              </button>

              <div className='mb-4'>
                  <p className="text-sm">Already have an account? Then</p>
                  <Link to="/signin" className="text-black hover:underline text-lg font-bold">Sign In</Link>
              </div>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
