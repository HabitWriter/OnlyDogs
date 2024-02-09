import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

export default function OptionsButton({ setIsEditing, deleteHandler}) {

    return (
        <div className="dropdown dropdown-end">
            <div
                tabIndex={0}
                role="button"
                title="Options"
                className="btn btn-ghost "
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="16"
                    zoomAndPan="magnify"
                    viewBox="0 0 375 374.999991"
                    height="16"
                    preserveAspectRatio="xMidYMid meet"
                    version="1.0"
                >
                    <defs>
                        <clipPath id="2ee3847b6d">
                            <path
                                d="M 132.609375 0 L 242.109375 0 L 242.109375 110 L 132.609375 110 Z M 132.609375 0 "
                                clipRule="nonzero"
                            />
                        </clipPath>
                        <clipPath id="9b43a89d4e">
                            <path
                                d="M 132.609375 132 L 242.109375 132 L 242.109375 243 L 132.609375 243 Z M 132.609375 132 "
                                clipRule="nonzero"
                            />
                        </clipPath>
                        <clipPath id="a42077b58a">
                            <path
                                d="M 132.609375 265 L 242.109375 265 L 242.109375 375 L 132.609375 375 Z M 132.609375 265 "
                                clipRule="nonzero"
                            />
                        </clipPath>
                    </defs>
                    <g clipPath="url(#2ee3847b6d)">
                        <path
                            fill="#737373"
                            d="M 132.9375 54.699219 C 132.9375 84.804688 157.429688 109.300781 187.539062 109.300781 C 217.644531 109.300781 242.140625 84.804688 242.140625 54.699219 C 242.140625 24.589844 217.644531 0.0976562 187.539062 0.0976562 C 157.429688 0.0976562 132.9375 24.589844 132.9375 54.699219 "
                            fillOpacity="1"
                            fillRule="nonzero"
                        />
                    </g>
                    <g clipPath="url(#9b43a89d4e)">
                        <path
                            fill="#737373"
                            d="M 132.9375 187.496094 C 132.9375 217.609375 157.429688 242.097656 187.539062 242.097656 C 217.644531 242.097656 242.140625 217.609375 242.140625 187.496094 C 242.140625 157.390625 217.644531 132.898438 187.539062 132.898438 C 157.429688 132.898438 132.9375 157.390625 132.9375 187.496094 "
                            fillOpacity="1"
                            fillRule="nonzero"
                        />
                    </g>
                    <g clipPath="url(#a42077b58a)">
                        <path
                            fill="#737373"
                            d="M 132.9375 320.296875 C 132.9375 350.40625 157.429688 374.902344 187.539062 374.902344 C 217.644531 374.902344 242.140625 350.40625 242.140625 320.296875 C 242.140625 290.1875 217.644531 265.695312 187.539062 265.695312 C 157.429688 265.695312 132.9375 290.1875 132.9375 320.296875 "
                            fillOpacity="1"
                            fillRule="nonzero"
                        />
                    </g>
                </svg>
            </div>
            <div
                tabIndex="0"
                className="dropdown-content z-[1] card card-compact w-36 p-2 shadow bg-base-300"
            >
                <div className="card-body flex flex-row items-center">
                    <EditButton
                        clickAction={() => setIsEditing(true)}
                        title={"Edit Note"}
                    />
                    <DeleteButton
                        clickAction={deleteHandler}
                        title={"Delete Note"}
                    />
                </div>
            </div>
        </div>
    );
}
