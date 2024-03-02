import BottomNav from "../components/BottomNav";
import Post from "../components/Post";
import CreateNewPost from "../components/CreateNewPost";
import TopNav from "../components/TopNav";

export default function FeedPage() {
    return (
        <div>
            {/* <div className="fixed flex justify-center z-10 w-full bg-base-200">
                <LogoButton/>
            </div> */}
            <TopNav/>
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
