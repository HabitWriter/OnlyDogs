import { useNavigate } from "react-router-dom"


export default function BottomNav({selected}) {
    
    const navigate = useNavigate();    
    
    let settingsClassName = ""
    let profileClassName = ""
    let feedClassName = ""
    let chatClassName = ""
    let friendsClassName = ""


    function highlightSelected(selected) {
        switch(selected) {
            case 1:
                settingsClassName = "active"
                break
            case 2:
                profileClassName = "active"
                break
            case 3:
                feedClassName = "active"
                break
            case 4:
                chatClassName = "active"
                break
            case 5:
                friendsClassName = "active"
                break

        }
    }

    highlightSelected(selected)
    
    return (
        
        <div>
            <div className="btm-nav">
                
                {/* Settings Button */}
                <button className={settingsClassName}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        className="h-10 w-10"
                        zoomAndPan="magnify"
                        viewBox="0 0 375 374.999991"
                        stroke="currentColor"
                        preserveAspectRatio="xMidYMid meet"
                        version="1.0"
                    >
                        <path
                            fill="#a6adbb"
                            d="M 187.5 264.832031 C 144.789062 264.832031 110.167969 230.210938 110.167969 187.5 C 110.167969 144.789062 144.789062 110.167969 187.5 110.167969 C 230.210938 110.167969 264.832031 144.789062 264.832031 187.5 C 264.832031 230.210938 230.210938 264.832031 187.5 264.832031 Z M 364.875 151.34375 L 330.253906 147.246094 C 327.125 136.121094 322.6875 125.292969 316.917969 115.007812 L 338.488281 87.644531 C 342.089844 83.074219 341.703125 76.539062 337.59375 72.429688 L 302.570312 37.40625 C 298.460938 33.296875 291.925781 32.910156 287.355469 36.511719 L 259.992188 58.082031 C 249.707031 52.3125 238.875 47.875 227.753906 44.746094 L 223.65625 10.121094 C 222.972656 4.347656 218.078125 0 212.261719 0 L 162.734375 0 C 156.921875 0 152.027344 4.347656 151.34375 10.121094 L 147.246094 44.746094 C 136.121094 47.875 125.292969 52.3125 115.007812 58.082031 L 87.640625 36.511719 C 83.074219 32.910156 76.539062 33.296875 72.425781 37.40625 L 37.40625 72.429688 C 33.296875 76.539062 32.910156 83.074219 36.511719 87.644531 L 58.082031 115.007812 C 52.3125 125.292969 47.871094 136.121094 44.746094 147.246094 L 10.121094 151.34375 C 4.347656 152.027344 0 156.921875 0 162.734375 L 0 212.261719 C 0 218.078125 4.347656 222.972656 10.121094 223.65625 L 44.746094 227.753906 C 47.871094 238.875 52.3125 249.707031 58.082031 259.992188 L 36.511719 287.355469 C 32.910156 291.925781 33.296875 298.460938 37.40625 302.570312 L 72.425781 337.59375 C 76.539062 341.703125 83.074219 342.089844 87.640625 338.488281 L 115.007812 316.917969 C 125.292969 322.6875 136.121094 327.125 147.246094 330.253906 L 151.34375 364.875 C 152.027344 370.652344 156.921875 375 162.734375 375 L 211.445312 375 C 217.152344 375 221.996094 370.800781 222.800781 365.140625 L 227.753906 330.253906 C 238.875 327.125 249.707031 322.6875 259.992188 316.917969 L 287.355469 338.488281 C 291.925781 342.089844 298.460938 341.703125 302.570312 337.59375 L 337.59375 302.570312 C 341.703125 298.460938 342.089844 291.925781 338.488281 287.355469 L 316.917969 259.992188 C 322.6875 249.707031 327.125 238.875 330.253906 227.753906 L 364.875 223.65625 C 370.652344 222.972656 375 218.078125 375 212.261719 L 375 162.734375 C 375 156.921875 370.652344 152.027344 364.875 151.34375 "
                            fill-opacity="1"
                            fill-rule="nonzero"
                        />
                    </svg>
                </button>
                {/* Profile Button */}
                <button className={profileClassName} onClick={() => navigate('/profile')}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        className="h-10 w-10"
                        zoomAndPan="magnify"
                        viewBox="0 0 375 374.999991"
                        stroke="currentColor"
                        preserveAspectRatio="xMidYMid meet"
                        version="1.0"
                    >
                        <path
                            fill="#a6adbb"
                            d="M 181.277344 95.410156 C 181.304688 91.648438 181.0625 87.902344 180.546875 84.171875 C 180.03125 80.445312 179.25 76.773438 178.203125 73.15625 C 177.15625 69.542969 175.851562 66.019531 174.292969 62.59375 C 172.734375 59.167969 170.9375 55.871094 168.902344 52.707031 C 168.480469 52.027344 168.035156 51.359375 167.574219 50.707031 C 167.113281 50.054688 166.628906 49.417969 166.128906 48.792969 C 165.628906 48.171875 165.109375 47.5625 164.570312 46.972656 C 164.03125 46.378906 163.476562 45.804688 162.90625 45.246094 C 162.332031 44.6875 161.742188 44.148438 161.136719 43.625 C 160.53125 43.105469 159.910156 42.601562 159.273438 42.117188 C 158.640625 41.632812 157.988281 41.167969 157.324219 40.722656 C 156.660156 40.277344 155.984375 39.851562 155.292969 39.449219 C 154.601562 39.042969 153.902344 38.660156 153.1875 38.300781 C 152.476562 37.9375 151.75 37.597656 151.015625 37.28125 C 150.285156 36.960938 149.539062 36.667969 148.789062 36.394531 C 148.039062 36.121094 147.277344 35.871094 146.511719 35.644531 C 145.742188 35.417969 144.972656 35.214844 144.191406 35.035156 C 143.414062 34.855469 142.628906 34.699219 141.839844 34.570312 C 141.050781 34.4375 140.257812 34.328125 139.464844 34.242188 C 138.667969 34.160156 137.871094 34.101562 137.074219 34.0625 C 136.273438 34.027344 135.472656 34.015625 134.675781 34.03125 C 133.875 34.042969 133.078125 34.078125 132.28125 34.140625 C 131.480469 34.203125 130.6875 34.285156 129.894531 34.394531 C 129.101562 34.503906 128.316406 34.640625 127.53125 34.796875 C 126.746094 34.953125 125.96875 35.132812 125.195312 35.339844 C 124.421875 35.542969 123.65625 35.769531 122.898438 36.023438 C 122.136719 36.273438 121.386719 36.546875 120.644531 36.84375 C 119.902344 37.140625 119.167969 37.457031 118.445312 37.796875 C 117.722656 38.140625 117.007812 38.503906 116.308594 38.886719 C 115.605469 39.269531 114.917969 39.675781 114.238281 40.101562 C 113.5625 40.527344 112.898438 40.972656 112.25 41.4375 C 111.601562 41.90625 110.964844 42.390625 110.34375 42.894531 C 109.722656 43.398438 109.121094 43.921875 108.53125 44.464844 C 107.941406 45.007812 107.371094 45.566406 106.816406 46.140625 C 106.261719 46.714844 105.726562 47.308594 105.207031 47.917969 C 104.6875 48.527344 104.1875 49.148438 103.707031 49.789062 C 83.542969 74.285156 84.6875 119.703125 105.84375 143.109375 C 141.15625 179.925781 182.636719 138.746094 181.277344 95.410156 Z M 181.277344 95.410156 "
                            fill-opacity="1"
                            fill-rule="nonzero"
                        />
                        <path
                            fill="#a6adbb"
                            d="M 90.292969 179.984375 C 90.320312 177.445312 90.214844 174.914062 89.976562 172.390625 C 89.738281 169.863281 89.371094 167.355469 88.871094 164.871094 C 88.371094 162.382812 87.746094 159.929688 86.988281 157.507812 C 86.230469 155.085938 85.351562 152.710938 84.347656 150.378906 C 83.34375 148.050781 82.21875 145.78125 80.976562 143.570312 C 79.734375 141.355469 78.378906 139.214844 76.914062 137.144531 C 75.449219 135.074219 73.878906 133.085938 72.203125 131.179688 C 70.53125 129.273438 68.761719 127.460938 66.898438 125.742188 C 66.4375 125.3125 65.960938 124.894531 65.476562 124.496094 C 64.992188 124.09375 64.492188 123.707031 63.984375 123.335938 C 63.476562 122.964844 62.957031 122.605469 62.429688 122.265625 C 61.898438 121.925781 61.359375 121.597656 60.8125 121.289062 C 60.261719 120.980469 59.707031 120.6875 59.140625 120.410156 C 58.574219 120.132812 58 119.871094 57.417969 119.628906 C 56.839844 119.382812 56.25 119.160156 55.65625 118.949219 C 55.0625 118.742188 54.460938 118.550781 53.855469 118.375 C 53.25 118.203125 52.640625 118.046875 52.027344 117.910156 C 51.410156 117.773438 50.792969 117.652344 50.171875 117.550781 C 49.550781 117.449219 48.925781 117.367188 48.296875 117.300781 C 47.671875 117.238281 47.042969 117.191406 46.414062 117.164062 C 45.785156 117.136719 45.15625 117.125 44.523438 117.136719 C 43.894531 117.144531 43.265625 117.171875 42.636719 117.21875 C 42.011719 117.265625 41.382812 117.328125 40.757812 117.410156 C 40.132812 117.496094 39.511719 117.597656 38.894531 117.714844 C 38.277344 117.835938 37.660156 117.972656 37.050781 118.128906 C 36.441406 118.285156 35.835938 118.457031 35.234375 118.648438 C 34.632812 118.839844 34.039062 119.046875 33.453125 119.273438 C 32.863281 119.5 32.285156 119.742188 31.710938 120.003906 C 31.136719 120.261719 30.570312 120.539062 30.011719 120.832031 C 29.457031 121.125 28.90625 121.4375 28.367188 121.761719 C 27.828125 122.085938 27.300781 122.429688 26.78125 122.785156 C 26.261719 123.140625 25.753906 123.515625 25.253906 123.902344 C 24.757812 124.289062 24.273438 124.6875 23.796875 125.101562 C 23.324219 125.519531 22.863281 125.945312 22.414062 126.390625 C 21.964844 126.832031 21.53125 127.285156 21.109375 127.753906 C 20.6875 128.222656 20.277344 128.703125 19.882812 129.195312 C 19.492188 129.683594 19.113281 130.1875 18.746094 130.703125 C 18.382812 131.214844 18.035156 131.742188 17.703125 132.273438 C 17.367188 132.808594 17.050781 133.355469 16.75 133.90625 C 16.449219 134.460938 16.164062 135.023438 15.894531 135.589844 C 0.152344 167.210938 16.773438 224.585938 55.363281 226.640625 C 79.242188 226.242188 90.726562 203.417969 90.292969 179.984375 Z M 90.292969 179.984375 "
                            fill-opacity="1"
                            fill-rule="nonzero"
                        />
                        <path
                            fill="#a6adbb"
                            d="M 310.695312 260.015625 C 292.550781 242.585938 272.523438 223.597656 247.640625 200.332031 C 243.859375 196.773438 239.78125 193.601562 235.40625 190.808594 C 231.03125 188.019531 226.433594 185.660156 221.613281 183.730469 C 216.796875 181.800781 211.839844 180.335938 206.746094 179.335938 C 201.65625 178.332031 196.511719 177.816406 191.324219 177.777344 C 186.242188 177.769531 181.203125 178.230469 176.207031 179.167969 C 171.210938 180.101562 166.347656 181.492188 161.613281 183.335938 C 156.875 185.183594 152.355469 187.453125 148.046875 190.148438 C 143.734375 192.839844 139.714844 195.910156 135.980469 199.359375 C 110.835938 222.753906 90.226562 242.261719 71.175781 260.664062 C 31.902344 296.125 61.667969 365.546875 113.558594 363.835938 C 135.699219 363.390625 154.886719 354.761719 175.964844 351.070312 C 196.765625 347.699219 216.339844 352.039062 239.734375 358.132812 C 245.546875 360.164062 251.5 361.621094 257.59375 362.503906 C 263.6875 363.386719 269.808594 363.679688 275.957031 363.382812 C 324.972656 359.941406 348.292969 292.554688 310.695312 260.015625 Z M 310.695312 260.015625 "
                            fill-opacity="1"
                            fill-rule="nonzero"
                        />
                        <path
                            fill="#a6adbb"
                            d="M 322.101562 121.269531 C 297.898438 136.222656 288.761719 166.605469 293.519531 194.304688 C 298.828125 227.6875 335.566406 239.167969 357.613281 209.792969 C 359.953125 206.695312 362.042969 203.433594 363.878906 200.015625 C 365.71875 196.59375 367.28125 193.054688 368.574219 189.394531 C 369.867188 185.730469 370.871094 181.992188 371.585938 178.175781 C 372.300781 174.363281 372.71875 170.511719 372.84375 166.632812 C 374.953125 135.425781 352.375 105.585938 322.101562 121.269531 Z M 322.101562 121.269531 "
                            fill-opacity="1"
                            fill-rule="nonzero"
                        />
                        <path
                            fill="#a6adbb"
                            d="M 293.390625 95.542969 C 295.175781 48.707031 249.910156 9.699219 214.847656 51.214844 C 196.109375 75.90625 197.136719 118.367188 217.117188 141.941406 C 251.691406 180.808594 295.453125 138.960938 293.390625 95.542969 Z M 293.390625 95.542969 "
                            fill-opacity="1"
                            fill-rule="nonzero"
                        />
                    </svg>
                </button>
                {/* Feed Button */}
                <button  className={feedClassName} onClick={() => navigate('/feed')}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        className="h-10 w-10"
                        zoomAndPan="magnify"
                        viewBox="0 0 375 374.999991"
                        stroke="currentColor"
                        preserveAspectRatio="xMidYMid meet"
                        version="1.0"
                    >
                        <defs>
                            <clipPath id="9f14bc6777">
                                <path
                                    d="M 0 73.59375 L 375 73.59375 L 375 301.59375 L 0 301.59375 Z M 0 73.59375 "
                                    clip-rule="nonzero"
                                />
                            </clipPath>
                        </defs>
                        <g clip-path="url(#9f14bc6777)">
                            <path
                                fill="#a6adbb"
                                d="M 187.484375 136.546875 C 118.578125 136.546875 62.714844 125.363281 62.714844 111.570312 C 62.714844 97.777344 118.578125 86.597656 187.484375 86.597656 C 256.394531 86.597656 312.253906 97.777344 312.253906 111.570312 C 312.253906 125.363281 256.394531 136.546875 187.484375 136.546875 Z M 249.390625 218.753906 C 247.316406 222.402344 243.148438 225.664062 238.804688 225.449219 C 232.15625 225.125 230.222656 218.695312 230.757812 213.003906 C 231.195312 208.347656 233.15625 203.714844 236.742188 200.617188 C 240.722656 197.183594 246.117188 196.125 249.851562 200.527344 C 254.097656 205.527344 252.71875 212.898438 249.390625 218.753906 Z M 208.796875 172.300781 C 211.914062 166.207031 218.257812 162.058594 224.617188 166.167969 C 231.65625 170.714844 233.515625 181.429688 231.382812 189.472656 C 230.054688 194.472656 225.96875 199.710938 220.460938 200.875 C 214.722656 202.09375 209.226562 199.09375 207.460938 193.746094 C 205.175781 186.800781 205.421875 178.890625 208.796875 172.300781 Z M 235.523438 253.753906 C 231.496094 259.488281 224.199219 262.523438 217.289062 261.871094 C 213.523438 261.515625 210.011719 259.917969 206.308594 259.238281 C 202.5625 258.546875 198.714844 258.367188 194.996094 259.328125 C 189.835938 260.671875 184.65625 262.875 179.214844 261.953125 C 174.078125 261.078125 169.140625 258.324219 166.023438 254.109375 C 160.855469 247.128906 162.644531 239.933594 167.75 233.574219 C 171.414062 229.011719 175.699219 225 179.429688 220.5 C 182.847656 216.371094 185.125 210.863281 189.375 207.515625 C 195.171875 202.945312 203.753906 203 210.039062 206.523438 C 215.074219 209.34375 217.179688 214.054688 220.253906 218.664062 C 224.042969 224.339844 229.722656 227.5625 233.835938 232.925781 C 238.332031 238.792969 240 247.378906 235.523438 253.753906 Z M 176.589844 166.148438 C 182.96875 162.082031 189.21875 166.28125 192.304688 172.382812 C 195.644531 178.972656 195.847656 186.875 193.527344 193.796875 C 191.738281 199.125 186.226562 202.089844 180.488281 200.84375 C 174.988281 199.652344 170.929688 194.40625 169.628906 189.40625 C 167.539062 181.367188 169.527344 170.652344 176.589844 166.148438 Z M 151.996094 218.753906 C 148.667969 212.898438 147.289062 205.527344 151.535156 200.527344 C 155.269531 196.125 160.664062 197.183594 164.644531 200.617188 C 168.230469 203.714844 170.191406 208.347656 170.628906 213.003906 C 171.164062 218.695312 169.230469 225.125 162.582031 225.449219 C 158.238281 225.664062 154.070312 222.402344 151.996094 218.753906 Z M 374.488281 257.699219 C 369.289062 195.851562 357.730469 113.585938 337.195312 96.011719 C 323.09375 83.230469 261.425781 73.609375 187.484375 73.609375 C 113.542969 73.609375 51.878906 83.230469 37.773438 96.011719 C 17.238281 113.585938 5.6875 195.851562 0.480469 257.699219 C 0.441406 257.945312 0.417969 258.183594 0.417969 258.425781 C 0.417969 273.875 84.171875 301.382812 187.484375 301.382812 C 290.800781 301.382812 374.550781 273.875 374.550781 258.425781 C 374.550781 258.183594 374.527344 257.945312 374.488281 257.699219 "
                                fill-opacity="1"
                                fill-rule="nonzero"
                            />
                        </g>
                    </svg>
                </button>
                {/* Chat Button */}
                <button className={chatClassName} onClick={() => navigate('/chat')}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        className="h-10 w-10"
                        zoomAndPan="magnify"
                        viewBox="0 0 375 374.999991"
                        preserveAspectRatio="xMidYMid meet"
                        stroke="currentColor"
                        version="1.0"
                    >
                        <defs>
                            <clipPath id="ab7c8532b7">
                                <path
                                    d="M 15.9375 0 L 281 0 L 281 203 L 15.9375 203 Z M 15.9375 0 "
                                    clip-rule="nonzero"
                                />
                            </clipPath>
                            <clipPath id="ff8406b20c">
                                <path
                                    d="M 94 171 L 359.4375 171 L 359.4375 375 L 94 375 Z M 94 171 "
                                    clip-rule="nonzero"
                                />
                            </clipPath>
                        </defs>
                        <g clipPath="url(#ab7c8532b7)">
                            <path
                                fill="#a6adbb"
                                d="M 201.832031 156.699219 C 245.023438 156.699219 280.136719 121.585938 280.136719 78.394531 C 280.136719 35.203125 245.023438 0.0898438 201.832031 0.0898438 L 94.242188 0.0898438 C 51.050781 0.0898438 15.9375 35.203125 15.9375 78.394531 C 15.9375 111.253906 36.210938 140.152344 66.355469 151.570312 L 66.355469 191.34375 C 66.355469 195.929688 69.074219 200.125 73.265625 201.988281 C 74.820312 202.6875 76.375 202.996094 78.007812 202.996094 C 80.878906 202.996094 83.675781 201.988281 85.851562 199.96875 L 133.703125 156.621094 L 201.832031 156.621094 Z M 205.5625 63.945312 C 214.027344 63.945312 220.941406 70.78125 220.941406 79.328125 C 220.941406 87.871094 214.105469 94.707031 205.5625 94.707031 C 197.09375 94.707031 190.179688 87.871094 190.179688 79.328125 C 190.179688 70.78125 197.09375 63.945312 205.5625 63.945312 Z M 91.757812 94.628906 C 83.289062 94.628906 76.375 87.792969 76.375 79.25 C 76.375 70.703125 83.210938 63.867188 91.757812 63.867188 C 100.300781 63.867188 107.136719 70.703125 107.136719 79.25 C 107.136719 87.792969 100.300781 94.628906 91.757812 94.628906 Z M 148.699219 63.945312 C 157.164062 63.945312 164.078125 70.78125 164.078125 79.328125 C 164.078125 87.871094 157.242188 94.707031 148.699219 94.707031 C 140.152344 94.707031 133.316406 87.871094 133.316406 79.328125 C 133.316406 70.78125 140.230469 63.945312 148.699219 63.945312 Z M 148.699219 63.945312 "
                                fill-opacity="1"
                                fill-rule="nonzero"
                            />
                        </g>
                        <g clipPath="url(#ff8406b20c)">
                            <path
                                fill="#a6adbb"
                                d="M 280.679688 171.925781 L 173.089844 171.925781 C 129.898438 171.925781 94.785156 207.039062 94.785156 250.230469 C 94.785156 293.421875 129.898438 328.53125 173.089844 328.53125 L 241.296875 328.53125 L 289.148438 371.878906 C 291.324219 373.820312 294.121094 374.910156 296.992188 374.910156 C 298.625 374.910156 300.179688 374.597656 301.734375 373.898438 C 305.925781 372.035156 308.644531 367.839844 308.644531 363.257812 L 308.644531 323.484375 C 338.710938 312.0625 359.0625 283.167969 359.0625 250.304688 C 358.984375 207.039062 323.792969 171.925781 280.679688 171.925781 Z M 169.359375 266.464844 C 160.894531 266.464844 153.980469 259.628906 153.980469 251.082031 C 153.980469 242.617188 160.816406 235.703125 169.359375 235.703125 C 177.90625 235.703125 184.742188 242.539062 184.742188 251.082031 C 184.664062 259.550781 177.828125 266.464844 169.359375 266.464844 Z M 226.226562 266.464844 C 217.757812 266.464844 210.84375 259.628906 210.84375 251.082031 C 210.84375 242.617188 217.679688 235.703125 226.226562 235.703125 C 234.769531 235.703125 241.605469 242.539062 241.605469 251.082031 C 241.527344 259.550781 234.691406 266.464844 226.226562 266.464844 Z M 283.089844 266.464844 C 274.621094 266.464844 267.707031 259.628906 267.707031 251.082031 C 267.707031 242.617188 274.542969 235.703125 283.089844 235.703125 C 291.632812 235.703125 298.46875 242.539062 298.46875 251.082031 C 298.46875 259.550781 291.554688 266.464844 283.089844 266.464844 Z M 283.089844 266.464844 "
                                fill-opacity="1"
                                fill-rule="nonzero"
                            />
                        </g>
                    </svg>
                </button>
                {/* Friends Button */}
                <button className={friendsClassName}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        className="h-10 w-10"
                        zoomAndPan="magnify"
                        viewBox="0 0 375 374.999991"
                        stroke="currentColor"
                        preserveAspectRatio="xMidYMid meet"
                        version="1.0"
                    >
                        <defs>
                            <clipPath id="88b255e65d">
                                <path
                                    d="M 0.792969 103.609375 L 240.933594 103.609375 L 240.933594 271.40625 L 0.792969 271.40625 Z M 0.792969 103.609375 "
                                    clip-rule="nonzero"
                                />
                            </clipPath>
                        </defs>
                        <path
                            fill="#a6adbb"
                            d="M 371.953125 167.578125 L 360.105469 162.265625 C 358.871094 154.710938 352.296875 148.925781 344.398438 148.925781 L 341.304688 148.925781 C 336.027344 144.480469 329.480469 142.066406 322.46875 142.066406 C 313.777344 142.066406 305.539062 145.949219 301.480469 151.957031 C 298.445312 156.449219 297.910156 161.746094 299.972656 166.878906 C 300.597656 168.429688 301.3125 169.753906 302.089844 170.878906 C 301.796875 171.351562 301.519531 171.835938 301.265625 172.328125 C 298.378906 177.933594 298.808594 184.070312 302.441406 189.160156 C 304.929688 192.644531 307.660156 194.460938 310.152344 195.355469 L 256.710938 195.355469 C 257.121094 194.304688 257.351562 193.175781 257.351562 191.980469 C 257.351562 186.832031 253.160156 182.636719 248.003906 182.636719 C 242.851562 182.636719 238.65625 186.832031 238.65625 191.980469 C 238.65625 196.097656 241.332031 199.589844 245.035156 200.835938 C 242.070312 206.25 238.976562 216.523438 245.921875 230.636719 L 237.660156 241.859375 C 237.035156 242.710938 236.785156 243.785156 236.980469 244.824219 L 240.738281 265.214844 C 241.074219 267.03125 242.65625 268.34375 244.503906 268.34375 L 248.332031 268.34375 C 249.46875 268.34375 250.546875 267.84375 251.269531 266.96875 C 252 266.097656 252.304688 264.953125 252.097656 263.835938 L 249.710938 250.722656 L 271.542969 234.84375 C 287.980469 240.269531 308.882812 246.070312 323.175781 246.085938 L 326.167969 265.113281 C 326.460938 266.972656 328.066406 268.34375 329.949219 268.34375 L 333.335938 268.34375 C 335.445312 268.34375 337.160156 266.632812 337.160156 264.519531 L 337.160156 241.394531 C 353.339844 223.445312 346.808594 194.015625 346.808594 194.015625 C 356.0625 193.402344 362.199219 189.960938 365.816406 187.027344 C 371.152344 182.699219 374.207031 176.882812 374.207031 171.070312 C 374.210938 169.5625 373.328125 168.195312 371.953125 167.578125 Z M 371.953125 167.578125 "
                            fill-opacity="1"
                            fill-rule="nonzero"
                        />
                        <g clip-path="url(#88b255e65d)">
                            <path
                                fill="#a6adbb"
                                d="M 236.875 183.414062 L 228.671875 162.375 C 232.511719 156.449219 232.992188 148.914062 230.03125 142.570312 L 238.261719 133.355469 C 240.085938 131.3125 240.527344 128.378906 239.382812 125.890625 C 238.242188 123.402344 235.746094 121.839844 232.992188 121.878906 L 228.011719 121.972656 L 232.746094 114.027344 C 234.273438 111.457031 233.976562 108.199219 232.003906 105.953125 C 230.035156 103.710938 226.839844 102.988281 224.097656 104.175781 L 141.851562 139.675781 C 141.851562 139.675781 59.550781 144.335938 59.492188 144.335938 C 40.546875 145.476562 22.601562 135.335938 13.78125 118.511719 C 12.019531 115.140625 7.855469 113.839844 4.484375 115.605469 C 1.117188 117.371094 -0.1875 121.535156 1.582031 124.90625 C 9.566406 140.144531 23.378906 151.105469 39.363281 155.742188 C 34.230469 162.976562 24.972656 181.457031 38.238281 208.679688 L 24.847656 226.863281 C 23.71875 228.394531 23.273438 230.324219 23.621094 232.195312 L 29.816406 265.765625 C 30.417969 269.03125 33.265625 271.40625 36.585938 271.40625 L 42.894531 271.40625 C 44.9375 271.40625 46.871094 270.5 48.183594 268.933594 C 49.492188 267.363281 50.039062 265.296875 49.671875 263.285156 L 45.957031 242.886719 L 86.292969 212.613281 C 86.398438 212.539062 86.496094 212.460938 86.59375 212.378906 C 89.832031 209.65625 92.382812 206.71875 94.371094 203.683594 C 109.515625 207.097656 128.160156 211.097656 143.511719 213.753906 L 151.660156 265.585938 C 152.1875 268.941406 155.078125 271.40625 158.46875 271.40625 L 163.65625 271.40625 C 167.460938 271.40625 170.542969 268.324219 170.542969 264.519531 L 170.542969 211.445312 C 183.542969 196.246094 181.535156 175.234375 181.535156 175.234375 L 184.058594 173.507812 C 191.132812 186.445312 204.316406 194.410156 219.640625 194.410156 L 219.644531 194.410156 C 223.902344 194.410156 228.203125 193.777344 232.417969 192.519531 C 234.261719 191.96875 235.796875 190.671875 236.644531 188.941406 C 237.492188 187.214844 237.574219 185.210938 236.875 183.414062 Z M 236.875 183.414062 "
                                fill-opacity="1"
                                fill-rule="nonzero"
                            />
                        </g>
                    </svg>
                </button>
            </div>
        </div>
    );
}
