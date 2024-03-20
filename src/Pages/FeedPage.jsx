import React from "react";
import BottomNav from "../components/BottomNav";
import Post from "../components/Post";
import CreateNewPost from "../components/CreateNewPost";
import TopLogoNav from "../components/TopLogoNav";
import { useAtom } from "jotai";
import { postArrayWriteableAtom, userArrayWriteableAtom } from "../atom";
import { useTransition, useEffect, useState } from "react";

export default function FeedPage() {
    const [posts, setPosts] = useAtom(postArrayWriteableAtom);
    
    
    const [isPending, startTransition] = useTransition();
    const [isAddingPost, setIsAddingPost] = useState(false);

    useEffect(() => {
        startTransition(() => {
            // console.log(posts);
        });
    }, [startTransition]);

    return (
        <div>
            <TopLogoNav setIsAddingPost={setIsAddingPost}/>
            {/* Posts Container */}
            <div className="h-24"></div>
            <div className="flex flex-col items-center mb-60">
            {isAddingPost ? <CreateNewPost setIsAddingPost={setIsAddingPost}/> : <div></div>}
                {/* {startTransition(() => {
                    posts.map(({postId,body,likes,userId,comments}) => (
                        <Post key={postId} body={body} likes={likes} userId={userId} comments={comments}/>
                    ))
                })} */}
                {isPending ? (
                    <p>Loading...</p>
                ) : (
                    
                    posts.map(({user,postId,body,likes,userId,comments}) => (
                        <Post key={postId} name={user.name} body={body} likes={likes} userId={userId} comments={comments}/>
                    ))
                )}
            </div>
            <BottomNav selected={3} />
        </div>
    );
}




