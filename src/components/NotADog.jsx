

export default function NotADog() {
    return (
        <div><br></br><br></br><br></br><br></br>
            <div className="artboard artboard-horizontal phone-5 flex flex-col items-center">
                {/* Access denied X */}

                <h1 className="flex justify-center mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">Access Denied</h1>
                <p className="flex justify-center mb-6 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 ">You do not have permission to view this page. If you are a cat go run up a tree and cough up a fur ball.</p>

                {/* Gif of Dog */}

                <h2 className="flex justify-center mb-4 text-3xl font-bold leading-none tracking-tight md:text-4xl lg:text-5xl">You are not a dog!</h2>
            </div>
        </div>
    )
};