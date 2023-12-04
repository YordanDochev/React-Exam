import { Routes, Route } from 'react-router-dom'

import Home from "./components/homePageComponent/Home"
import CreateEstate from "./components/CreateEstatePageComponent/CreateEstate";
import Navigation from "./components/navigationComponent/Navigation";
import Footer from "./components/footerComponent/Footer";
import Details from "./components/detailsPageComponent/Details";
import Catalog from "./components/catalogPageComponent/Catalog";
import Register from "./components/RegisterPageComponent/Register"
import Login from "./components/loginPageComponent/Loing"
import Spinenr from "./components/spinnerComponent/Spinner";
import { AuthProvider } from './contexts/authContext';
import EditEstate from './components/editEstatePageComponent/EditEstate';

export default function App() {
    return (
        <div className="container-xxl bg-white p-0">
            <AuthProvider>
                <Navigation />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/catalog' element={<Catalog />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/create-estate' element={<CreateEstate />} />
                    <Route path='/:estateId-details' element={<Details />} />
                    <Route path='/:estateId-edit' element={<EditEstate />} />
                </Routes>
            </AuthProvider>
            {/* <Spinenr/> */}


            <Footer />
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
                <i className="bi bi-arrow-up" />
            </a>
        </div>
    )
}