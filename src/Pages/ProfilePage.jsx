import BottomNav from "../components/BottomNav";
import Post from "../components/Post";
import CreateNewPost from "../components/CreateNewPost";
import TopProfileNav from "../components/TopProfileNav";

export default function ProfilePage() {
    return (
        <div>
            <TopProfileNav/>
            {/* Posts Container */}
            <div className="h-44"></div>
            
            <div className="flex flex-col items-center mb-60">
                <CreateNewPost />
                <Post />
            </div>
            <BottomNav selected={2}/>
        </div>
    );
}
