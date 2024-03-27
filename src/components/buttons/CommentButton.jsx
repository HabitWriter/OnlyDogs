import { useNavigate } from 'react-router-dom';
export default function CommentButton({ title }) {
    const navigate = useNavigate();
    const redirectToChat = () => {
        navigate('/chat');
    };
    return (
        <div className="flex items-center">
            <button
                title={title}
                className="btn btn-square btn-ghost"
                onClick={redirectToChat}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className="w-5 h-5"
                    zoomAndPan="magnify"
                    viewBox="0 0 375 374.999991"

                    preserveAspectRatio="xMidYMid meet"
                    version="1.0"
                >
                    <defs>
                        <clipPath id="bf18482283">
                            <path
                                d="M 0 23.011719 L 375 23.011719 L 375 352.234375 L 0 352.234375 Z M 0 23.011719 "
                                clipRule="nonzero"
                            />
                        </clipPath>
                    </defs>
                    <g clipPath="url(#bf18482283)">
                        <path
                            fill="#737373"
                            d="M 375 167.5 L 375 186.074219 C 375 186.90625 374.5 187.773438 374.402344 188.636719 C 371.738281 215.4375 361.117188 240.808594 343.9375 261.515625 C 321.398438 289.378906 292.503906 307.757812 258.746094 319.242188 C 236.707031 326.734375 213.566406 330.527344 190.261719 330.496094 C 170.722656 330.261719 151.210938 328.632812 131.871094 325.667969 C 128.671875 325.070312 125.34375 325.667969 122.515625 327.332031 C 101.875 339.785156 78.902344 347.808594 55 350.902344 C 46.976562 351.902344 38.917969 352.335938 30.828125 352.234375 C 28.132812 352.136719 25.566406 351.101562 23.570312 349.273438 C 21.574219 347.441406 20.308594 344.945312 20.007812 342.28125 C 19.707031 339.617188 20.339844 336.921875 21.871094 334.65625 C 22.90625 332.992188 24.070312 331.359375 25.367188 329.828125 C 35.988281 316.613281 44.976562 302.164062 52.136719 286.78125 C 52.632812 286.082031 52.835938 285.183594 52.699219 284.320312 C 52.535156 283.453125 52 282.6875 51.269531 282.222656 C 38.21875 271.070312 27.101562 257.851562 18.378906 243.105469 C 10.984375 230.585938 5.757812 216.96875 2.863281 202.753906 C 1.765625 197.261719 0.933594 191.5 0 186.074219 L 0 167.5 C 0.265625 166.433594 0.5 165.402344 0.664062 164.300781 C 2.929688 142.195312 10.6875 120.988281 23.171875 102.613281 C 36.921875 82.636719 54.832031 65.859375 75.671875 53.472656 C 95.746094 41.253906 117.820312 32.597656 140.859375 27.9375 C 176.847656 20.25 214.199219 21.546875 249.589844 31.667969 C 269.597656 37.261719 288.574219 46.015625 305.851562 57.535156 C 325.027344 70.152344 341.308594 86.632812 353.726562 105.90625 C 362.546875 119.492188 368.808594 134.574219 372.070312 150.453125 C 373.203125 156.113281 374.035156 161.804688 375 167.5 "
                            fillOpacity="1"
                            fillRule="nonzero"
                        />
                    </g>
                </svg>
            </button>
        </div>
    );
}
