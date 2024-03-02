export default function UploadImageButton({ clickAction, title }) {
    // TODO Need to change functioning, title, and links based on props

    return (
        <div className="flex items-center">
            <button
                title={title}
                className="btn btn-square btn-ghost"
                onClick={clickAction}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    className="w-5 h-5"
                    zoomAndPan="magnify"
                    viewBox="0 0 375 374.999991"
                    
                    preserveAspectRatio="xMidYMid meet"
                    version="1.0"
                >
                    <defs>
                        <clipPath id="bbebfd69df">
                            <path
                                d="M 219 4.6875 L 375 4.6875 L 375 161 L 219 161 Z M 219 4.6875 "
                                clip-rule="nonzero"
                            />
                        </clipPath>
                    </defs>
                    <path
                        fill="#737373"
                        d="M 279.890625 316.25 C 279.046875 317.4375 276.742188 318.375 273.714844 318.496094 C 273.417969 318.671875 273.058594 318.671875 272.3125 318.671875 L 112.140625 318.671875 C 100.128906 318.671875 87.941406 318.496094 75.917969 318.375 C 70.40625 318.375 64.773438 318.1875 59.285156 318.1875 C 54.128906 318.1875 49.042969 319.207031 43.710938 318.671875 C 43.519531 318.671875 43.414062 318.671875 43.042969 318.496094 C 42.652344 318.496094 42.117188 318.375 41.582031 318.007812 C 38.257812 315.882812 45.148438 310.726562 46.371094 309.144531 C 50.054688 304.523438 90.542969 247.769531 91.113281 247.117188 C 96.566406 238.992188 104.027344 234.382812 111.785156 234.382812 C 123.261719 234.382812 129.070312 246.570312 138.121094 251.667969 C 149.957031 258.59375 157.726562 249.363281 163.570312 240.011719 C 167.527344 233.8125 171.566406 227.457031 175.460938 221.078125 C 177.769531 217.394531 180.191406 213.496094 182.507812 209.601562 C 185.347656 205.167969 188.140625 200.761719 190.980469 196.199219 L 196.644531 186.980469 C 197.191406 186.253906 197.546875 185.742188 197.90625 185.03125 C 200.03125 182 202.453125 180.054688 204.402344 180.054688 C 206.234375 180.054688 208.359375 182 210.285156 185.210938 C 230.089844 220.601562 250.046875 256.46875 269.460938 291.277344 L 278.871094 308.300781 C 279.710938 309.5 280.09375 310.914062 280.460938 311.984375 C 280.640625 313.398438 280.816406 315.132812 279.890625 316.25 Z M 94.972656 96.296875 C 118.164062 96.117188 136.921875 114.820312 136.921875 138.199219 C 136.921875 161.355469 118.53125 179.933594 95.34375 180.054688 C 72.175781 180.054688 53.476562 161.175781 53.476562 138.199219 C 53.476562 115.175781 71.996094 96.476562 94.972656 96.296875 Z M 297.210938 177.59375 C 244.796875 177.59375 202.277344 135.109375 202.277344 82.671875 C 202.277344 70.5625 204.558594 58.992188 208.65625 48.359375 L 41.761719 48.359375 C 38.042969 48.359375 34.359375 48.714844 30.820312 49.261719 C 13.296875 52.078125 0.25 66.761719 0.25 84.109375 C 0.25 166.449219 0.0742188 248.699219 0.25 330.863281 C 0.25 351.570312 18.261719 369.757812 38.96875 369.9375 L 282.945312 369.9375 C 290.167969 369.9375 296.703125 367.632812 302.367188 363.414062 C 313.15625 355.132812 317.945312 343.789062 317.945312 330.386719 C 318.121094 289.542969 318.121094 248.519531 318.121094 207.472656 L 318.121094 175.289062 C 311.386719 176.785156 304.398438 177.59375 297.210938 177.59375 "
                        fill-opacity="1"
                        fill-rule="nonzero"
                    />
                    <g clip-path="url(#bbebfd69df)">
                        <path
                            fill="#737373"
                            d="M 340.8125 75.125 L 331.535156 83.929688 C 330.832031 84.605469 329.730469 84.582031 329.039062 83.894531 L 309.414062 63.957031 C 308.285156 62.832031 306.347656 63.625 306.347656 65.207031 L 306.347656 134.195312 C 306.347656 135.167969 305.5625 135.976562 304.578125 135.976562 L 291.460938 135.976562 C 290.488281 135.976562 289.679688 135.167969 289.679688 134.195312 L 289.679688 63.03125 C 289.679688 61.453125 287.753906 60.644531 286.640625 61.75 L 263.839844 84.332031 C 263.09375 85.070312 261.867188 85.023438 261.191406 84.179688 L 253.445312 74.53125 C 252.886719 73.820312 252.933594 72.796875 253.585938 72.15625 L 295.90625 29.886719 C 296.59375 29.183594 297.734375 29.183594 298.425781 29.886719 L 340.859375 72.570312 C 341.5625 73.285156 341.550781 74.449219 340.8125 75.125 Z M 297.210938 4.757812 C 254.195312 4.757812 219.300781 39.640625 219.300781 82.671875 C 219.300781 125.699219 254.195312 160.570312 297.210938 160.570312 C 340.242188 160.570312 375.125 125.699219 375.125 82.671875 C 375.125 39.640625 340.242188 4.757812 297.210938 4.757812 "
                            fill-opacity="1"
                            fill-rule="nonzero"
                        />
                    </g>
                </svg>
            </button>
        </div>
    );
}