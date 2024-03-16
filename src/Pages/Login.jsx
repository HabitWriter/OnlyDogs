import { useState, useEffect } from "react";
import axios from "axios";
import LogoButton from "../components/Logo/LogoButton.jsx";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

export default function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("user1@example.com");
  const [password, setPassword] = useState("password1");

  //Check for Dogtcha Cookies
  useEffect(() => {
    const dogtchaPassed = Cookies.get('dogtchaPassed');
    if (dogtchaPassed === 'false') {
        navigate('/notADog');
    }
}, [navigate]);

  // Login function
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // const { data: { user } } = await axios.post('/api/login', { email, password });
      const response = await axios.post('/api/login', { email, password });
      // console.log(response);
      
      const user = response.data.user
      // Check if user has friends in their friendsList
      // If user has friends, navigate to the feed page
      if (user.friendsList && user.friendsList.length > 0) {
        navigate(`/feed`);
        // navigate(`/feed/${user.userId}`);
      } 
      // If user has no friends, navigate to the home page
      else {
        navigate(`/home`);
        // navigate(`/home/${user.id}`);
      }
      console.log(user);
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
    <div className='flex flex-col '>

      <div className="flex justify-center ">
        <LogoButton />
      </div>

      <div className="px-12 md:px-40 lg:px-64 xl:px-96">

        <h1 className="flex justify-center px-2 mt-2 font-bold">Log In to OnlyDogs</h1>

        <div>
          {/* Login Form */}
          <form onSubmit={handleLogin}>

            {/* Email enter field */}
            <div className="mb-6 mt-6">
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
            </div>

            {/* Log In button */}
            <div className='flex flex-col items-center'>
              <button onClick={handleLogin} className="btn bg-blue-800 text-white">Log in</button>
            </div>
          </form>
        </div>

        {/* divider */}
        <div className="flex flex-col w-full">
          <div className=" divider">or</div>
        </div>
        
        {/* Create Account button */}
        <div className='flex flex-col items-center'>
          <button onClick={navigateToDogtchaPage} className="btn btn-warning text-blue-800">Create new account</button>
        </div><br></br>
      </div>
    </div>
  );
}