export default function ArrowButton({rotation, isOpen, setIsOpen}) {

    let newRotation = isOpen ? "rotate-0" : "-rotate-90";



    return (
        <button title="Open/Close" className={`w-12 h-12 btn btn-ghost ${newRotation}`} onClick={() => setIsOpen(!isOpen)}>
            
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
                <path
                    strokeLinecap="round"
                    transform="matrix(-0.53033, 0.53033, -0.53033, -0.53033, 384.304402, 110.415682)"
                    fill="none"
                    strokeLinejoin="miter"
                    d="M 38.498698 38.501751 L 329.211674 38.498068 "
                    stroke="#737373"
                    strokeWidth="77"
                    strokeOpacity="1"
                    strokeMiterlimit="4"
                />
                <path
                    strokeLinecap="round"
                    transform="matrix(0.53033, 0.53033, -0.53033, 0.53033, 31.524271, 69.580272)"
                    fill="none"
                    strokeLinejoin="miter"
                    d="M 38.497683 38.499255 L 329.214342 38.499255 "
                    stroke="#737373"
                    strokeWidth="77"
                    strokeOpacity="1"
                    strokeMiterlimit="4"
                />
            </svg>
        </button>
    );
}
