import {Outlet} from "react-router-dom";
import Header from "../components/Header";

const PageTemplate = () => {
    return (
        <>
            <Header/>
                <Outlet/>
            <footer>foot</footer>
        </>
    )
}

export default PageTemplate;

