// Post.js
import React from "react";

export default function Post({ posts }) {
    if (!posts || posts.length === 0) {
        return <div>No posts to display.</div>;
    }

    return (
        <div>
            {posts.map((post, index) => (
                <div key={index} className="card w-[90%] md:w-[70%] bg-base-100 m-2 shadow-xl">
                    {/* Your post rendering logic */}
                </div>
            ))}
        </div>
    );
}



