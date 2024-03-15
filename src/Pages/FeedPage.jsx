import BottomNav from "../components/BottomNav";
import Post from "../components/Post";
import CreateNewPost from "../components/CreateNewPost";
import TopLogoNav from "../components/TopLogoNav";
import { useAtom } from "jotai";
import { postArrayWriteableAtom } from "../atom";
import { useTransition, useEffect } from 'react';


export default function FeedPage() {
    const [posts, setPosts] = useAtom(postArrayWriteableAtom);
    const [isPending, startTransition] = useTransition();
    
    useEffect(() => {
        startTransition(() => {
            console.log(posts);
        });
    }, [startTransition]);
    
    return (
        <div>
            <TopLogoNav/>
            {/* Posts Container */}
            <div className="h-24"></div>
            <div className="flex flex-col items-center mb-60">
                <CreateNewPost />
                {isPending ? (
                    <p>Loading...</p>
                ) : (
                    posts.map(({postId,body,likes,userId,comments}) => (
                        <Post key={postId} body={body} likes={likes} userId={userId} comments={comments}/>
                    ))
                )}
            </div>
            <BottomNav selected={3}/>
        </div>
    );
}
