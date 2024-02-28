import { useAtomValue } from "jotai";

import ChatPage from "./ChatPage";
import Home from "./components/Home";
import CreateUser from "./components/CreateUser";
import Login from "./components/Login";
import { Outlet } from "react-router";




function App() {


    return (
        <>
            <ChatPage/>
            <Outlet/>

           
        </>
    );
}

export default App;
