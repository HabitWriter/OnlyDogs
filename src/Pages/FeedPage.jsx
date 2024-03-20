import React, { useState } from "react";
import BottomNav from "../components/BottomNav";
import Post from "../components/Post";
import CreateNewPost from "../components/CreateNewPost";
import TopLogoNav from "../components/TopLogoNav";

export default function FeedPage() {
    const [posts, setPosts] = useState([]);

    // Function to handle adding new post
    const handleAddPost = (newPost) => {
        setPosts([...posts, newPost]);
    };

    return (
        <div>
            <TopLogoNav/>
            {/* Posts Container */}
            <div className="h-24"></div>
            <div className="flex flex-col items-center mb-60">
                <CreateNewPost onAddPost={handleAddPost} /> {/* Pass the handleAddPost function as a prop */}
                <Post posts={posts} /> {/* Pass the array of posts as a prop */}
            </div>
            <BottomNav selected={3}/>
        </div>
    );
}




