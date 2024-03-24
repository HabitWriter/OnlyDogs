import { useAtomValue } from "jotai";
import LikeButton from "../components/buttons/LikeButton";
import PostComment from "./PostComment";
import CommentButton from "./buttons/CommentButton";
import { userArrayWriteableAtom } from "../atom";
import axios from "axios";
import { useState } from "react";

export default function Post({ postId, name, body, likes, userId, comments }) {
    const [likesState, setLikesState] = useState(likes);
    const [isCommenting, setIsCommenting] = useState(false);
    const [currentComments, setCurrentComments] = useState(comments);

    async function addLike() {
        const responseData = await axios.post("/api/post/like", {
            postId: postId,
        });
        // console.log(postId);
        // console.log(responseData);

        setLikesState(likesState + 1);
    }

    async function addComment(e) {
        e.preventDefault();
        console.log(e.target[0].value);
        body = e.target[0].value;
        const responseData = await axios.post("api/comment/new", {
            postId: postId,
            body: body,
            userId: userId,
        });
        console.log(responseData);
        setCurrentComments([responseData.data, ...currentComments])
        setIsCommenting(false)
    }

    return (
        <div className="card w-[90%] md:w-[70%] bg-base-100 m-2 shadow-xl">
            <div className="card-body items-center">
                <div className="flex items-center w-full">
                    <img
                        className="h-12 w-12 mr-4 my-2 rounded-full object-cover"
                        src="src\components\Dog\dog1.jpg"
                        alt=""
                    />
                    <h2>{name}</h2>
                </div>
                <p className="card-title w-full ml-12 mr-2">{body}</p>
                <div className="flex w-full pl-2 items-center">
                    <LikeButton
                        clickAction={() => addLike()}
                        likes={likesState}
                    />
                    <CommentButton
                        clickAction={() => setIsCommenting(!isCommenting)}
                    />
                </div>

                {isCommenting && (
                    <>
                        {" "}
                        <form
                            className="w-full"
                            onSubmit={(e) => addComment(e)}
                        >
                            <textarea
                                name="Jim"
                                className="textarea w-full textarea-bordered resize-none"
                            ></textarea>
                            <div className="flex justify-end w-full">
                                <button
                                    type="submit"
                                    className="w-24 ml-2 btn btn-primary"
                                >
                                    Comment
                                </button>
                            </div>
                        </form>
                    </>
                )}
                {currentComments
                    .sort(
                        (a, b) =>
                            new Date(b.timeCreated) - new Date(a.timeCreated)
                    )
                    .map(({ user, commentId, body, userId, likes }) => (
                        <PostComment
                            key={commentId}
                            commentId={commentId}
                            name={user.name}
                            body={body}
                            userId={userId}
                            likes={likes}
                        />
                    ))}
            </div>
        </div>
    );
}
