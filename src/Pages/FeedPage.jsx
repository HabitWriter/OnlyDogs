import React, { useState } from "react";
import BottomNav from "../components/BottomNav";
import Post from "../components/Post";
import CreateNewPost from "../components/CreateNewPost";
import TopLogoNav from "../components/TopLogoNav";
import { useAtom } from "jotai";
import { postArrayWriteableAtom } from "../atom";
import axios from "axios"; // Import Axios

export default function FeedPage() {
    const [posts, setPosts] = useAtom(postArrayWriteableAtom);
    const [isAddingPost, setIsAddingPost] = useState(false);

    const addNewPost = async (newPostData) => {
        try {
            // Make a POST request to create a new post
            const response = await axios.post("/api/post/create", newPostData);
            // Update the local state with the newly created post
            setPosts([...posts, response.data]);
        } catch (error) {
            console.error('Error creating post:', error);
            // Handle error if necessary
        }
    };

    return (
        <div>
            <TopLogoNav setIsAddingPost={setIsAddingPost} />
            {/* Posts Container */}
            <div className="h-24"></div>
            <div className="flex flex-col items-center mb-60">
                {isAddingPost ? (
                    <CreateNewPost setIsAddingPost={setIsAddingPost} addNewPost={addNewPost} />
                ) : null}

                {posts.map(
                    ({ user, postId, body, likes, userId, comments }) => (
                        <Post
                            key={postId}
                            name={user.name}
                            body={body}
                            likes={likes}
                            userId={userId}
                            comments={comments}
                        />
                    )
                )}
            </div>
            <BottomNav selected={3} />
        </div>
    );
}
