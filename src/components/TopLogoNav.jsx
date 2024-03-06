import LogoButton from "./Logo/LogoButton";
import LogoImage from "./Logo/LogoImage";
import AddButton from "./buttons/AddButton";

export default function TopLogoNav() {
    return (
        <div className="fixed flex px-6 py-4 justify-between items-center z-10 w-full bg-base-100 shadow-md rounded-3xl">
                <div className="w-12"></div>
                <LogoImage/>
                <AddButton/>
            </div>
    )
}