import { PaginaInicial } from "./Paginas/Inicial";
import {BrowserRouter, Routes, Route  } from "react-router-dom";
import NovoVideo from "./Paginas/NovoVideo";


export function AppRoutes(){

return(


<BrowserRouter>

<Routes>

    <Route path='/' elemente={<PaginaInicial/>}/>

    <Route path='cadastrar-video' element={<NovoVideo/>}/>

</Routes>

</BrowserRouter>





)
}