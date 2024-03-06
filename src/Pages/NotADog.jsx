
import dogDuckHunt from '../components/Dog/dogGif.js'

export default function NotADog() {
    return (
        <div>
            <div className=" flex flex-col items-center mb-12">
                {/* Access denied X */}
                <div className=' flex justify-center mt-16 object-contain object-cover w-40 h-40 mb-4 md:w-60 md:h-60 md:mb-8'>
                    <img src="src/assets/redX.svg" alt="Red X" />
                </div>
                <h1 className="flex justify-center mb-4 text-2xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">Access Denied</h1>
                <p className="flex justify-center mb-6 mx-2 text-xs text-center font-normal md:text-base lg:text-xl xl:px-48 ">You do not have permission to view this page. If you are a cat go run up a tree and cough up a fur ball.</p>

                {/* Gif of Dog */}
                <div className='flex justify-center object-cover mb-4 w-[147px] h-[160px] md:w-[184px] md:h-[200px]'>
                    <img src={dogDuckHunt.src} alt="Animated GIF" />
                </div>

                <h2 className="flex justify-center mb-4 text-xl font-bold leading-none tracking-tight md:text-4xl lg:text-5xl">You are not a dog!</h2>
            </div>
        </div>
    )
};