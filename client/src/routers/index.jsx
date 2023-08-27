import DetailPage from "../pages/Detail";
import HomePage from "../pages/Home";
import RegisterPage from "../pages/Register";
import { createBrowserRouter } from "react-router-dom";
import { redirect } from "react-router-dom";

const router = createBrowserRouter([
    {
        element : <HomePage/>,
        path : '/',
        loader : () => {
            if(!localStorage.access_token) return redirect('/landingPage')

            return null
        }
    },
    
    {
        element : <RegisterPage/>,
        path : '/landingPage',
        loader : () => {
            if(localStorage.access_token) return redirect('/')
            
            return null
        }
    },
    {
        element : <DetailPage/>,
        path : '/:id',
        loader : () => {
            if(!localStorage.access_token) return redirect('/landingPage')
            
            return null
        }
    }

])

export default router
