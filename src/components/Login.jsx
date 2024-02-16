import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data: { user } } = await axios.post('/api/login', { email, password });
      navigate(`/mainUser/${user.id}`);
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please check your credentials and try again.');
    }
  };
  const navigateToCreateUserPage = () => {
    navigate("/createUserPage");
  };

  
}