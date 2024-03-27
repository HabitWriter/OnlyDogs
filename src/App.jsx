import { Outlet } from "react-router";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';




function App() {
    const navigate = useNavigate();
    useEffect(() => {
        const dogtchaPassed = Cookies.get('dogtchaPassed');
        if (dogtchaPassed === 'false') {
            navigate('/notADog');
        }
    }, [navigate]);

    return (
        <>
            
            <Outlet/>

           
        </>
    );
}

export default App;
