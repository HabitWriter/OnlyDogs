import { useAtomValue } from "jotai";

import ChatPage from "./ChatPage";
import Home from "./components/Home";
import CreateUser from "./components/CreateUser";
import Login from "./components/Login";
import { Outlet } from "react-router";
import Dogtcha from "./components/Dogtcha";
import NotADog from "./components/NotADog";




function App() {


    return (
        <>
            
            <Outlet/>

           
        </>
    );
}

export default App;
