import React, { useEffect, useState } from "react";
import axios from "axios";
import CommentButton from "./buttons/CommentButton";
import DeleteButton from "./buttons/DeleteButton";

export default function FriendListing({ name, image }) {
    // const deleteFriend = async (friendId) => {
    //     // Update state to remove friend
    //     setFriends(friends.filter(friend => friend.userId !== friendId));
    //     // Send request to backend to update user's friendsList
    //     try {
    //       await axios.delete(`/api/friends/${friendId}`);
    //       console.log(`Deleted friend with id: ${friendId}`);
    //     } catch (error) {
    //       console.error("Error deleting friend:", error);
    //     }
    // };

    // useEffect(() => {
    //     const fetchFriends = async () => {
    //         try {
    //             const response = await axios.get('/api/friends');
    //             // Update the friends' state with the fetched data or an empty array
    //             setFriends(response.data.friendsArray || []);
    //             // Log the updated friends array
    //             console.log(response.data.friendsArray);
    //         } catch (error) {
    //             console.error("Error fetching friends:", error);
    //         }
    //     };
    //     fetchFriends();
    // }, []);

    return (
        <div>
            <div className="w-full flex items-center justify-between">
                <div className="flex items-center">
                    <img
                        className="h-16 w-16 mr-4 my-2 rounded-full object-cover"
                        src={image || "src/components/Dog/dog3.jpg"} // Fallback image if none provided
                        alt={name}
                    />
                    <h2 className="text-2xl font-bold">
                        {name || "Name Unavailable"}
                    </h2>{" "}
                    {/* Fallback name */}
                </div>
                <div className="flex items-center">
                    <CommentButton />
                    <DeleteButton
                        title="Delete Friend"
                    />
                </div>
            </div>
            {/* Add a divider after each friend except the last one */}
            <div className="divider"></div>
        </div>
    );
}
