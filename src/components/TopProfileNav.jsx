import AddButton from "./buttons/AddButton";
import EditButton from "./buttons/EditButton";
import OptionsButton from "./buttons/OptionsButton";

export default function TopProfileNav() {
    return (
        <div className="fixed flex justify-between items-center z-10 p-6 pl-12 w-full bg-base-100 shadow-md rounded-3xl">
            <div className="flex items-center">
            <img
                className="h-24 w-24 mr-4 my-2 rounded-full object-cover"
                src="src\components\Dog\dog1.jpg"
                alt=""
            />

            <div className="flex flex-col h-24 justify-between">
                <h2 className="text-2xl font-bold">Chewbarka</h2>
                <p className="font-semibold">Goldendoodle</p>
                <p>Am be wanting a treat.</p>
            </div>
            </div>
            <div className="flex">
            <EditButton/>
            <AddButton/>
            </div>
        </div>
    );
}
