import BottomNav from "../components/BottomNav";
import Post from "../components/Post";
import CreateNewPost from "../components/CreateNewPost";
import TopLogoNav from "../components/TopLogoNav";

export default function FeedPage() {
    return (
        <div>
            <TopLogoNav/>
            {/* Posts Container */}
            <div className="h-24"></div>
            <div className="flex flex-col items-center mb-60">
                <CreateNewPost />
                <Post />
            </div>
            <BottomNav selected={3}/>
        </div>
    );
}
