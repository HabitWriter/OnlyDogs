import BottomNav from "../components/BottomNav";
import FriendListing from "../components/FriendListing";
import NewFriendListing from "../components/NewFriendListing";
import TopFriendNav from "../components/TopFriendNav";
import CommentButton from "../components/buttons/CommentButton";
import DeleteButton from "../components/buttons/DeleteButton";

export default function FriendPage() {
    return (
        <div>
            <TopFriendNav />
            {/* Posts Container */}
            <div className="h-32"></div>

            <div className="flex flex-col items-center mb-60 px-6 md:px-40 lg:px-72">
                <div className="divider font-bold">Your Dawgz</div>
                <FriendListing />
                <div className="divider"></div>
                <FriendListing />
                <div className="divider font-bold">New Friends</div>
                <NewFriendListing/>
            </div>
            <BottomNav selected={5} />
        </div>
    );
}
