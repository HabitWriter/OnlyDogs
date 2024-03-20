import { useAtomValue } from "jotai";
import LikeButton from "../components/buttons/LikeButton";
import PostComment from "./PostComment";
import CommentButton from "../components/buttons/CommentButton"; // Corrected import path
import { userArrayWriteableAtom } from "../atom";

export default function Post({ name, body, likes, userId, comments }) {
  return (
    <div className="card w-[90%] md:w-[70%] bg-base-100 m-2 shadow-xl">
      <div className="card-body items-center">
        <div className="flex items-center w-full">
          <img
            className="h-12 w-12 mr-4 my-2 rounded-full object-cover"
            src="src/components/Dog/dog1.jpg" // Corrected image src path
            alt=""
          />
          <h2>{name}</h2>
        </div>
        <p className="card-title w-full ml-12 mr-2">{body}</p>
        <div className="flex w-full pl-2 items-center">
          <LikeButton likes={likes} />
          <CommentButton />
        </div>
        {comments.map(({ user, commentId, body, userId, likes }) => (
          <PostComment
            key={commentId}
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




