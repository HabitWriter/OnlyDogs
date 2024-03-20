// CreateNewPost.js
import React, { useState } from "react";

export default function CreateNewPost({ onAddPost }) {
    const [postContent, setPostContent] = useState("");

    const handleInputChange = (event) => {
        setPostContent(event.target.value);
    };

    const handlePost = () => {
        const newPost = {
            userName: "Chewbarka", // Example user name
            userImage: "src\components\Dog\dog1.jpg", // Example user image
            content: postContent,
            likes: 0,
            comments: []
        };
        // Call the onAddPost function with the new post data
        onAddPost(newPost);
        setPostContent(""); // Clear input after posting
    };

    return (
        <div className="card w-[90%] md:w-[70%] bg-base-100 m-2 shadow-xl">
            <div className="card-body items-center">
                <textarea
                    className="textarea w-full textarea-bordered resize-none"
                    placeholder="Am be wanting to bark?"
                    value={postContent}
                    onChange={handleInputChange}
                ></textarea>
                <div className="flex justify-end w-full">
                    <button className="w-24 ml-2 btn btn-primary" onClick={handlePost}>
                        Post
                    </button>
                </div>
            </div>
        </div>
    );
}

