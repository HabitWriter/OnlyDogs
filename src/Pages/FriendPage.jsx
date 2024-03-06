import BottomNav from "../components/BottomNav";
import Post from "../components/Post";
import CreateNewPost from "../components/CreateNewPost";
import TopFriendNav from "../components/TopFriendNav";

export default function FriendPage() {
    return (
        <div>
            <TopFriendNav/>
            {/* Posts Container */}
            <div className="h-44"></div>
            
            <div className="flex flex-col items-center mb-60">
                <CreateNewPost />
                <Post />
            </div>
            <BottomNav selected={5}/>
        </div>
    );
}
