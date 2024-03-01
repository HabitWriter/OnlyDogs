import BottomNav from "../components/BottomNav";
import Post from "../components/Post";
import LikeButton from "../components/buttons/LikeButton";
import CommentButton from "../components/buttons/LikeButton copy";

export default function FeedPage() {
    return (
        <div>
            {/* Posts Container */}
            <div className="flex flex-col items-center">
                
                <Post/>
                <Post/>
            </div>
            <BottomNav />
        </div>
    );
}
