const HeroBanner = ({ children }) => {
    return (

        <div id="hero-banner">
            {children}
            <div className="textArea">
                <div className="container">
                    <h1><span className="highlight">Oxiee</span> Store</h1>
                    <p>Welcome to our website. On this site you can watch and buy cars. If you
                        like the page, you can follow it!</p>
                    <a href="#main" className="btn">Get Started</a>
                </div>
            </div>
            <svg className="banner-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
                <path fill="#f8f8f8" fillOpacity="1"
                    d="M0,96L120,122.7C240,149,480,203,720,218.7C960,235,1200,213,1320,202.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z">
                </path>
            </svg>
        </div>
    );
};

export default HeroBanner