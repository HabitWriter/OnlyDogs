import React, { useState, useEffect } from 'react';
import catImageArr from '../components/Cat/catimage.js'
import dogImageArr from '../components/Dog/dogimage.js';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function Dogtcha() {
    const dogImages = dogImageArr.map(img => img.src);
    const catImages = catImageArr.map(img => img.src);
    const [selectedImages, setSelectedImages] = useState([]);
    const [displayedImages, setDisplayedImages] = useState([]);
    const navigate = useNavigate();

    //Checks for Dogtcha Cookies
    useEffect(() => {
        const dogtchaPassed = Cookies.get('dogtchaPassed');
        if (dogtchaPassed === 'false') {
            navigate('/notADog');
        }
    }, [navigate]);

    // Randomly display 3 dog images and 1 cat image
    useEffect(() => {
        const shuffleArray = (array) => array.sort(() => 0.5 - Math.random());

        // Shuffle dog and cat images
        const shuffledDogs = shuffleArray(dogImages);
        const shuffledCats = shuffleArray(catImages);
        // Pick the first 3 dog images
        const randomDogs = shuffledDogs.slice(0, 3);

        // Pick the first cat image
        const randomCat = shuffledCats.slice(0, 1);
        const mixedImages = shuffleArray([...randomDogs, ...randomCat]);
        setDisplayedImages(mixedImages);
    }, []);

    // Toggle selection for an image
    const toggleSelection = (img) => {
        if (selectedImages.includes(img)) {
            setSelectedImages(selectedImages.filter(i => i !== img));
        } else {
            setSelectedImages([...selectedImages, img]);
        }
    };

    // Routing to Create user and Not a dog pages
    const navigateToCreateUserPage = () => {
        navigate("/createUser");
    };

    const navigateToNotADogPage = () => {
        navigate("/notADog");
    };
    // Check if the user passed the dog check
    const checkDogtcha = () => {
        const allDogsSelected = displayedImages.filter(img => dogImages.includes(img)).every(img => selectedImages.includes(img));
        const noCatsSelected = !displayedImages.filter(img => catImages.includes(img)).some(img => selectedImages.includes(img));
        if (allDogsSelected && noCatsSelected) {
            alert("YOU DOGGONE DID IT!!! Click OK to create a profile.");
            navigateToCreateUserPage();
        }

        // Sets a cookie for 1 day
        else {
            Cookies.set('dogtchaPassed', 'false', { expires: 1 });
            navigateToNotADogPage();
        }
    };
    return (
        <div>
            <div className=" flex flex-col items-center mt-4 ">
                <div className="bg-blue-800 mb-1  w-[200px] md:w-[375px] text-white">
                    <div className='ps-2'>
                        <h3>Select all images with</h3>
                    </div>
                    <div className=" font-bold text-2xl ps-2">
                        <h4>Dogs</h4>
                    </div>
                </div>
                <div className="mb-6 grid grid-cols-2 gap-0.5 justify-center">
                    {displayedImages.map((img, index) => (
                        <div key={index} onClick={() => toggleSelection(img)} className={`m-2.5 border-4 md:border-8 cursor-pointer ${selectedImages.includes(img) ? 'border-yellow-300' : 'border-gray-500'}`}>
                            <img src={img} alt={`image-${index}`} className="w-20 h-20 md:w-40 md:h-40 object-cover" />
                        </div>
                    ))}
                </div>
                <div className='flex flex-col items-center'>
                    <button className="btn btn-warning flex flex-col items-center" onClick={checkDogtcha}>Verify</button>
                </div>
            </div>
        </div>
    );
};


