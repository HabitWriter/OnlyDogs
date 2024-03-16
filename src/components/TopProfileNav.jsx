import React, { useState, useEffect } from "react";
import AddButton from "./buttons/AddButton";
import EditButton from "./buttons/EditButton";
import OptionsButton from "./buttons/OptionsButton";
import axios from "axios"; 

export default function TopProfileNav() {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [bio, setBio] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        // Fetch user information from the backend when the component mounts
        fetchUserProfile();
    }, []);

    const fetchUserProfile = async () => {
        try {
            const response = await axios.get('/api/user/1'); 
            const userData = response.data.user;
            setName(userData.name);
            setBreed(userData.breed);
            setBio(userData.bio);
        } catch (error) {
            console.error("Error fetching user profile:", error);
        }
    };

    const handleSave = async () => {
       const response = await axios.post('api/edituserprofile/1', {name, breed, bio});
       console.log(response.data); // Here is where the backend stuff goes
        setIsEditing(false);
    };

    return (
        <div className="fixed flex justify-between items-center z-10 p-6 pl-12 w-full bg-base-100 shadow-md rounded-3xl">
            <div className="flex items-center">
                <img
                    className="h-24 w-24 mr-4 my-2 rounded-full object-cover"
                    src="src\components\Dog\dog1.jpg"
                    alt=""
                />
                <div className="flex flex-col h-24 justify-between">
                    {isEditing ? (
                        <>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                type="text"
                                value={breed}
                                onChange={(e) => setBreed(e.target.value)}
                            />
                            <input
                                type="text"
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                            />
                        </>
                    ) : (
                        <>
                            <h2 className="text-2xl font-bold">{name}</h2>
                            <p className="font-semibold">{breed}</p>
                            <p>{bio}</p>
                        </>
                    )}
                </div>
            </div>
            <div className="flex">
                {isEditing ? (
                    <button onClick={handleSave}>Save</button>
                ) : (
                    <>
                        <EditButton onClick={() => setIsEditing(true)} />
                        <AddButton />
                    </>
                )}
            </div>
        </div>
    );
}


