import { Routes,Route } from "react-router-dom";



import Home from "../pages/Home"
import IRD from "../pages/IRD"
import Erro from "../pages/Erro";

function RoutesApp(){

    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/IRD' element={<IRD/>}/>
            <Route path="*" element={<Erro/>}/>
        </Routes>

    );
};

export default RoutesApp;
