import Home from "./components/homePageComponent/Home"
import CreateEstate from "./components/CreateEstatePageComponent/CreateEstate";
import Navigation from "./components/navigationComponent/Navigation";
import Footer from "./components/footerComponent/Footer";
import Details from "./components/detailsPageComponent/Details";
import Catalog from "./components/catalogPageComponent/Catalog";
import Register from "./components/RegisterPageComponent/Register"
import Login from "./components/loginPageComponent/Loing"
import Spinenr from "./components/spinnerComponent/Spinner";

export default function App() {
    return (
        <>
            <div className="container-xxl bg-white p-0">
                <Navigation />
                {/* <Spinenr/> */}
                {/* <Home /> */}
                {/* <Catalog/> */}

                {/* <Register /> */}
                {/* <Login/> */}

                {/* <Details/> */}

                <CreateEstate />
                <Footer />
                <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
                    <i className="bi bi-arrow-up" />
                </a>
            </div>
        </>
    )
}