import img5 from "../assets/img5.webp";
import img6 from "../assets/img6.webp";
import img7 from "../assets/img7.webp";
import img8 from "../assets/img8.webp";
import img9 from "../assets/img9.webp";
import img10 from "../assets/img10.webp";

function Portfolio() {
    return (
        <div className=" py-5">

            <div className="container">

                <h2 className="text-center mb-3" data-aos="fade-up">
                    Portfolio
                </h2>

                <p className="text-center text-muted mb-4" data-aos="fade-up" data-aos-delay="200">
                    Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                </p>

                <div className="text-center mb-5" data-aos="fade-up" data-aos-delay="300">
                    <span className="me-4 fw-bold active-tab">All Projects</span>
                    <span className="me-4">Branding</span>
                    <span className="me-4">Web Design</span>
                    <span className="me-4">Print Design</span>
                    <span>Motion</span>
                </div>

                <div className="row g-4">

                    <div className="col-md-4" data-aos="zoom-in">
                        <div className="portfolio-card text-center">
                            <img src={img5} className="img-fluid rounded" alt="" />
                            <h5 className="mt-3">Brand Identity</h5>
                            <p className="text-muted small">
                                Corporate branding and visual identity system
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200">
                        <div className="portfolio-card text-center">
                            <img src={img7} className="img-fluid rounded" alt="" />
                            <h5 className="mt-3">E-commerce Platform</h5>
                            <p className="text-muted small">
                                Modern online shopping experience
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4" data-aos="zoom-in" data-aos-delay="400">
                        <div className="portfolio-card text-center">
                            <img src={img8} className="img-fluid rounded" alt="" />
                            <h5 className="mt-3">Logo Collection</h5>
                            <p className="text-muted small">
                                Diverse brand mark explorations
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4" data-aos="zoom-in">
                        <div className="portfolio-card text-center">
                            <img src={img9} className="img-fluid rounded" alt="" />
                            <h5 className="mt-3">Packaging Design</h5>
                            <p className="text-muted small">
                                Sustainable product packaging solutions
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200">
                        <div className="portfolio-card text-center">
                            <img src={img10} className="img-fluid rounded" alt="" />
                            <h5 className="mt-3">Brand Animation</h5>
                            <p className="text-muted small">
                                Dynamic brand identity system
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4" data-aos="zoom-in" data-aos-delay="400">
                        <div className="portfolio-card text-center">
                            <img src={img6} className="img-fluid rounded" alt="" />
                            <h5 className="mt-3">Motion Graphics</h5>
                            <p className="text-muted small">
                                Animated visual storytelling
                            </p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Portfolio;