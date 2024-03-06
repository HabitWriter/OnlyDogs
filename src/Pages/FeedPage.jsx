import BottomNav from "../components/BottomNav";
import Post from "../components/Post";
import CreateNewPost from "../components/CreateNewPost";
import TopNav from "../components/TopLogoNav";

export default function FeedPage() {
    return (
        <div>
            <TopNav/>
            {/* Posts Container */}
            <div className="h-36"></div>
            <div className="flex flex-col items-center mb-60">
                <CreateNewPost />
                <Post />
            </div>
            <BottomNav selected={3}/>
        </div>
    );
}
