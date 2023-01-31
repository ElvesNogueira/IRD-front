import { Routes,Route } from "react-router-dom";



import Home from "../pages/Home"
import Register from "../pages/Register"
import Erro from "../pages/Erro";

function RoutesApp(){

    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path="*" element={<Erro/>}/>
        </Routes>

    );
};

export default RoutesApp;
