import { useState } from "react";
import axios from "axios";
import LogoButton from "../components/Logo/LogoButton.jsx";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

// Login function
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data: { user } } = await axios.post('/api/login', { email, password });
      navigate(`/home/${user.id}`);
     console.log(user)
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please check your credentials and try again.');
    }
  };
  // Routing to Dogtcha page
  const navigateToDogtchaPage = () => {
    navigate("/dogtcha");
  };
  return (
    <div>
      <LogoButton/><br></br><br></br><br></br><br></br>
      <div className="w-400 md:w-480 lg:w-638 border bg-white">
        <br></br><h1 className="flex justify-center text-black font-bold">Log In to OnlyDogs</h1><br></br>
        <form onSubmit={handleLogin}>
          {/* Email enter field */}
          <div className="mb-6">
            <input
              type="email"
              id="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email"
              required
            />
          </div>
          {/* Password enter field */}
          <div className="mb-6">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Password"
              required
            />
          </div> <br></br>
          {/* Log In button */}
          <div className='flex flex-col items-center'>
            <button onClick={handleLogin} className="btn bg-blue-800 text-white">Log in</button>
          </div>
        </form>
        {/* divider */}
        <div className="flex flex-col w-full">
          <div className=" divider before:bg-black after:bg-black text-black">or</div>
        </div>
        {/* Create Account button */}
        <div className='flex flex-col items-center'>
          <button onClick={navigateToDogtchaPage} className="btn btn-warning text-blue-800">Create new account</button>
        </div><br></br>
      </div>
    </div>
  );
}