import LikeButton from "./buttons/LikeButton";

export default function PostComment({body,userId,likes}) {
    return(
    <>
        {/* Divider */}
        <div className="flex flex-col w-full">
            <div className="divider"></div>
        </div>
        {/* Comment Section */}

        <div className="ml-6 w-full flex items-center">
            <img
                className="h-12 w-12 mr-4 my-2 rounded-full object-cover"
                src="src\components\Dog\dog3.jpg"
                alt=""
            />
            <h2>{userId}</h2>
        </div>
        <p className="card-title w-full ml-16">{body}</p>
        <div className="flex pl-2 ml-6 items-center w-full">
            <LikeButton likes={likes} />
        </div>
    </>
    )
}
