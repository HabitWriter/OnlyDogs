import React, { useState } from "react";
import XButton from "./buttons/XButton";

export default function CreateNewPost({ setIsAddingPost, addNewPost, userId }) {
    const [postContent, setPostContent] = useState("");

    const handlePost = () => {
        if (postContent.trim() !== "") {
            // Create a new post object containing userId and body
            const newPostData = {
                userId: userId, // Assuming userId is passed as a prop
                body: postContent.trim()
            };
            // Pass the new post data to the addNewPost function
            addNewPost(newPostData);
            setIsAddingPost(false); // Close the create new post section
            setPostContent(""); // Clear the textarea
        }
    };

    return (
        <div className="card w-[90%] md:w-[70%] bg-base-100 m-2 shadow-xl">
            <div className="card-body items-center">
                <div className="flex items-center w-full justify-between">
                    <div className="flex">
                        {/* Your user avatar and name */}
                    </div>
                    <XButton clickAction={() => setIsAddingPost(false)} />
                </div>
                <textarea
                    className="textarea w-full textarea-bordered resize-none"
                    placeholder="Write something..."
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                ></textarea>
                <div className="flex justify-end w-full">
                    <button className="w-24 ml-2 btn btn-primary" onClick={handlePost}>Post</button>
                </div>
            </div>
        </div>
    );
}
