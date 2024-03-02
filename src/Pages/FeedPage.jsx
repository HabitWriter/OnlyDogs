import BottomNav from "../components/BottomNav";
import Post from "../components/Post";
import LikeButton from "../components/buttons/LikeButton";
import CommentButton from "../components/buttons/CommentButton";
import CreateNewPost from "../components/CreateNewPost";
import LogoButton from "../components/Logo/Logo";

export default function FeedPage() {
    return (
        <div>
            <div className="fixed flex justify-center z-10 w-full bg-base-200">
                <LogoButton/>
            </div>
            {/* Posts Container */}
            <div className="h-36"></div>
            <div className="flex flex-col items-center mb-60">
                <CreateNewPost />
                <Post />
            </div>
            <BottomNav />
        </div>
    );
}
