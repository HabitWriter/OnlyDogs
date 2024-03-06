import { useAtomValue } from "jotai";

import ChatPage from "./Pages/ChatPage";
import Home from "./Pages/Home";
import CreateUser from "./components/CreateUser";
import Login from "./Pages/Login";
import { Outlet } from "react-router";
import Dogtcha from "./Pages/Dogtcha";
import NotADog from "./Pages/NotADog";




function App() {


    return (
        <>
            
            <Outlet/>

           
        </>
    );
}

export default App;
