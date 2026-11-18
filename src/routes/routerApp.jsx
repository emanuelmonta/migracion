import Home from "../pages/Home"
import Contacto from "../pages/Contacto"
import Information from "../pages/Information"
import Products from "../pages/Products"

export let router = [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/contacto",
        element: <Contacto/>
    },
    {
        path: "/information",
        element: <Information/>
    },
    {
        path: "/products",
        element: <Products/>
    }
]