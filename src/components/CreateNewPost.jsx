import LikeButton from "./buttons/LikeButton";
import PostComment from "./PostComment";
import CommentButton from "./buttons/CommentButton";
import UploadImageButton from "./buttons/UploadImageButton";
import XButton from "./buttons/XButton";
import { useAtom, useAtomValue } from "jotai";
import { postArrayWriteableAtom, CurrentUserAtom } from "../atom";

export default function CreateNewPost({setIsAddingPost}) {
    const currentUser = useAtomValue(CurrentUserAtom);
    
    return (
        
            <div className="card w-[90%] md:w-[70%] bg-base-100 m-2 shadow-xl">
                <div className="card-body items-center">
                    <div className="flex items-center w-full justify-between">
                        <div className="flex">
                        <img
                            className="h-12 w-12 mr-4 my-2 rounded-full object-cover"
                            src="src\components\Dog\dog1.jpg"
                            alt=""
                        />
                        <h2 className="card-title">{currentUser.user.name}</h2>
                        </div>
                        <XButton clickAction={() => setIsAddingPost(false)}/>
                    </div>
                  
                    <textarea className="textarea w-full textarea-bordered resize-none" placeholder="Am be wanting to bark?"></textarea>
                    <div className="flex justify-end w-full">
                    
                    <button className="w-24 ml-2 btn btn-primary">Post</button>
                    </div>
                </div>
            </div>
    );
}

