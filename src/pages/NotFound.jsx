// import "../assets/styles/style.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";

const NotFoundd = () => {
    return (
        <>
            <Helmet>
                <link rel="stylesheet" href="/src/assets/styles/404.css" />
            </Helmet>
            <Header></Header>
            <main>
                <div className="notFound">
                    <h1>404</h1>
                    <p>Page Not Found</p>
                </div>
            </main>
            <Footer></Footer>
        </>
    );
};

export default NotFoundd;
