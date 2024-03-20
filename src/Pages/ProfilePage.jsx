import BottomNav from "../components/BottomNav";
import Post from "../components/Post";
import CreateNewPost from "../components/CreateNewPost";
import TopProfileNav from "../components/TopProfileNav";
import { useAtom, useAtomValue } from "jotai";
import { postArrayWriteableAtom, CurrentUserAtom } from "../atom";
import { useTransition, useEffect, useState } from 'react';
import { set } from "lodash";

export default function ProfilePage() {
    const [posts, setPosts] = useAtom(postArrayWriteableAtom);
    const currentUser = useAtomValue(CurrentUserAtom);
    const [isPending, startTransition] = useTransition();
    const [isAddingPost, setIsAddingPost] = useState(false)
    
    useEffect(() => {
        startTransition(() => {
            // console.log(posts);
            // console.log(currentUser);
        });
    }, [startTransition]);
    
    return (
        <div>
            <TopProfileNav setIsAddingPost={setIsAddingPost}/>
            {/* Posts Container */}
            <div className="h-44"></div>
            
            <div className="flex flex-col items-center mb-60">
                {isAddingPost ? <CreateNewPost setIsAddingPost={setIsAddingPost}/> : <div></div>}
                
                {isPending ? (
                    <p>Loading...</p>
                ) : (
                    posts.filter(post => post.user.userId === currentUser.user.userId)
                        .map(({user,postId,body,likes,userId,comments}) => (
                            <Post key={postId} name={user.name} body={body} likes={likes} userId={userId} comments={comments}/>
                        ))
                )}
            </div>
            <BottomNav selected={2}/>
        </div>
    );
}

