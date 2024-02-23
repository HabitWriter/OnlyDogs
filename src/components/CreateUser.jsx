import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import LogoButton from "./Logo/Logo";
export default function CreateUser() {
    const [usernameValue, setUsernameValue] = useState('');
    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [breedValue, setBreedValue] = useState('');
    const [avatar, setAvatar] = useState('https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg');
    // const navigate = useNavigate();
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const validatePassword = (password) => {
        return password.length >= 6;
    };
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setAvatar(e.target.result);
            };
            reader.readAsDataURL(file);
        }
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
            const res = await axios.post('/api/user', {
                username: usernameValue,
                name: nameValue,
                email: emailValue,
                password: passwordValue,
                breed: breedValue,
            });
            // Handle success response
            console.log("User created successfully", res.data);
        } catch (error) {
            // Log error message
            console.error("There was an error creating the user:", error.response ? error.response.data : error);
        }
    };
    return (
        <div>
            <LogoButton/>
            <br></br><br></br><br></br><br></br>
            <div className="w-400 md:w-480 lg:w-638 border bg-white">
                <br></br>
                <h1 className="flex justify-center text-black text-5xl font-bold">Create a new account</h1>
                <br></br>
                <h2 className="flex justify-center text-black text-xs">A place for Paw-sitivity and Fur-ever friends!</h2>
                <br></br>
                <div className="flex flex-col w-full">
                    <div className="divider before:bg-gray-400 after:bg-gray-400"></div>
                </div>
                <form onSubmit={handleCreateUser}>
                    <div className="avatar flex justify-center">
                        <div className="w-60 rounded-full">
                            <img src={avatar} alt="Avatar" />
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <input type="file" className="file-input file-input-bordered file-input-warning w-full max-w-xs" onChange={handleImageChange} />
                    </div><br></br>
                    <div className="flex flex-row justify-center gap-4 mb-6">
                        {/* Name enter field */}
                        <input type="text" value={nameValue} onChange={(e) => setNameValue(e.target.value)} id="name" autoComplete="properName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
                        {/* Breed enter field */}
                        <input type="text" value={breedValue} onChange={(e) => setBreedValue(e.target.value)} id="breed" autoComplete="none" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Breed" required />
                    </div>
                    {/* User Name enter field */}
                    <div className="mb-6">
                        <input type="text" value={usernameValue} onChange={(e) => setUsernameValue(e.target.value)} id="userName" autoComplete="none" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="User Name" required />
                    </div>
                    {/* Email enter field */}
                    <div className="mb-6">
                        <input type="email" value={emailValue} onChange={(e) => setEmailValue(e.target.value)} id="email" autoComplete="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
                    </div>
                    {/* Password enter field */}
                    <div className="mb-6">
                        <input type="password" value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required />
                    </div> <br></br>
                    {/* Create Account button */}
                    <div className='flex flex-col items-center'>
                        <button className="btn btn-warning text-blue-800" type="submit">Sign Up</button>
                    </div>
                </form>
                <br></br><br></br>
                <p className="text-sm font-bold text-black dark:text-black flex justify-center">
                    Already signed up? &nbsp;  <a href="#" className="font-medium text-blue-800 hover:underline dark:text-primary-500">Sign in</a>
                </p><br></br><br></br>
            </div>

        </div>
    );

}