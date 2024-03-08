import CommentButton from "./buttons/CommentButton";
import DeleteButton from "./buttons/DeleteButton";

export default function FriendListing() {
    return (
        <div className="w-full flex items-center justify-between">
                    <div className="flex items-center">
                        <img
                            className="h-16 w-16 mr-4 my-2 rounded-full object-cover"
                            src="src\components\Dog\dog3.jpg"
                            alt=""
                        />
                        <h2 className="text-2xl font-bold">Bark Ruffalo</h2>
                    </div>
                    <div className="flex items-center">
                        <CommentButton />
                        <DeleteButton />
                    </div>
                    </div>
    );
}
