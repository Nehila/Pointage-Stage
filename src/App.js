import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { useGlobalState } from ".";
import Login from "./pages/Login";

const App = () => {
    const [show, setLoading] = useGlobalState('loading')

    return (
        <BrowserRouter>
        <div> 
            <Routes>       
                <Route element={
                    <Login />
                } exact path="/" />
            </Routes>
        </div>
        </BrowserRouter>
    )
}

export default App