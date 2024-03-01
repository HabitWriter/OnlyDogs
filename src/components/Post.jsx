import BottomNav from "../components/BottomNav";
import LikeButton from "../components/buttons/LikeButton";
import CommentButton from "../components/buttons/LikeButton copy";

export default function Post() {
    return (
        <div className="card w-[70%] bg-base-100 m-2 shadow-xl">
            <div className="card-body">
                <div className="flex items-center">
                    <img
                        className="h-12 w-12 mr-4 rounded-full object-cover"
                        src="src\components\Dog\dog1.jpg"
                        alt=""
                    />
                    <h2>Chewbarka</h2>
                </div>
                <p className="card-title ml-6">
                    If a dog chews shoes whose shoes does he choose?
                </p>
                <div className="flex pl-2 items-center">
                    <LikeButton />
                    <CommentButton />
                </div>
            </div>
        </div>
    );
}
