import { useAtom, useAtomValue } from "jotai";
import BottomNav from "../components/BottomNav";
import FriendListing from "../components/FriendListing";
import NewFriendListing from "../components/NewFriendListing";
import TopFriendNav from "../components/TopFriendNav";
import {
    friendArrayWriteableAtom,
    notFriendArrayWriteableAtom,
} from "../atom";

export default function FriendPage() {
    const [friendArray, setFriendArray] = useAtom(friendArrayWriteableAtom);
    const [notFriendArray, setNotFriendArray] = useAtom(notFriendArrayWriteableAtom);

    // console.log(friendArray);
    console.log(notFriendArray);

    
    function addedFriend() {
        
        
        setFriendArray([newFriend, ...friendArray])
        const currentNotFriends = notFriendArray.filter((user) => user.userId != addedFriend.userId )
        setNotFriendArray(currentNotFriends)
    }

    return (
        <div>
            <TopFriendNav />
            {/* Posts Container */}
            <div className="h-32"></div>

            <div className="flex flex-col items-center mb-60 px-6 md:px-40 lg:px-72">
                <div className="divider font-bold">Your Dawgz</div>

                {friendArray.map(({ userId, name, image }) => (
                        
                        <FriendListing
                            key={userId}
                            userId={userId}
                            name={name}
                            image={image}
                        />
                    
                ))}
                <div className="divider font-bold">New Friends</div>
                {notFriendArray.map(({ userId, name, profilePic }) => (
                    
                        
                    <NewFriendListing
                        key={userId}
                        userId={userId}
                        name={name}
                        profilePic={profilePic}
                    />
                
            ))}
                
            </div>
            <BottomNav selected={5} />
        </div>
    );
}
