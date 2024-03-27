
import AddButton from "./buttons/AddButton";

export default function NewFriendListing({userId, name, profilePic}) {
    // const [user, setUser] = useState(null);
    // useEffect(() => {
    //     // Fetch a random user that is not a friend
    //     axios.get('/api/randomNotFriend')
    //         .then(response => {
    //             setUser(response.data.user);
    //         })
    //         .catch(error => console.error('There was an error fetching the random user: ', error));
    // }, []); 
    // if (!user) return <div>Loading...</div>; // Handle loading state
    return (
        <div className="w-full flex items-center justify-between">
            <div className="flex items-center">
               
                <img
                    className="h-16 w-16 mr-4 my-2 rounded-full object-cover"
                    src={profilePic} 
                    alt={name}
                />
                <h2 className="text-2xl font-bold">{name}</h2>
            </div>
            <div className="flex items-center">
                <AddButton />
            </div>
        </div>
    );
}
