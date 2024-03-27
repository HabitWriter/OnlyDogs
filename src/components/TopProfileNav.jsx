import React, { useState, useEffect } from "react";
import AddButton from "./buttons/AddButton";
import EditButton from "./buttons/EditButton";
import { CurrentUserAtom } from "../atom";
import { useAtomValue } from "jotai";
import { useNavigate } from "react-router-dom";


export default function TopProfileNav({setIsAddingPost}) {
    const navigate = useNavigate();
    const [isEditing,setIsEditing] = useState(false)
    const currentUser = useAtomValue(CurrentUserAtom);
    

    useEffect(() => {
        if (currentUser.error && currentUser.error.status === 401) {
            navigate('/');
        }
    }, [currentUser, history]);
    
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
                                defaultValue={currentUser.user.name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                type="text"
                                defaultValue={currentUser.user.breed}
                                onChange={(e) => setBreed(e.target.value)}
                            />
                            <input
                                type="text"
                                defaultValue={currentUser.user.bio}
                                onChange={(e) => setBio(e.target.value)}
                            />
                        </>
                    ) : (
                        <>
                            <h2 className="text-2xl font-bold">{currentUser.user.name}</h2>
                            <p className="font-semibold">{currentUser.user.breed}</p>
                            <p>{currentUser.user.bio}</p>
                        </>
                    )}
                </div>
            </div>
            <div className="flex">

            <EditButton clickAction={() => setIsEditing(!isEditing)}/>
            <AddButton clickAction={() => setIsAddingPost(true)}/>

            </div>
        </div>
    );
}


