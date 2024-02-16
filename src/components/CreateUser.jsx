import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function CreateUser() {
    const [usernameValue, setUsernameValue] = useState('');
    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [breedValue, setBreedValue] = useState('');
    const navigate = useNavigate();
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const validatePassword = (password) => {
        return password.length >= 6;
    };
    const handleCreateUser = async (event) => {
        event.preventDefault();
        if (!validateEmail(emailValue)) {
            alert("Please enter a valid email address.");
            return;
        }
        if (!validatePassword(passwordValue)) {
            alert("Please create a password at least 6 characters long.");
            return;
        }
        try {
            const res = await axios.post('/api/users', {
                username: usernameValue,
                name: nameValue,
                email: emailValue,
                password: passwordValue,
                breed: breedValue,
            });
            if (res.data) {
                navigate("/");
            }
        } catch (error) {
            console.error("There was an error creating the user:", error);
        }
    };


}