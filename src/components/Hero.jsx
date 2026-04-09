import heroImg from "../assets/img1.webp";

function Hero() {
    return (
        <section className="container pt-5" style={{ marginTop: "85px" }}>
            <div className="row align-items-center">

                <div className="col-md-6">

                    <p className="text-muted" data-aos="fade-up">
                      <i className="fa-solid fa-circle" />  LOREM IPSUM DOLOR SIT AMET
                    </p>

                    <h1 className="display-4 fw-light" data-aos="fade-up" data-aos-delay="200">
                        Crafting calm digital experiences with thoughtful details
                    </h1>

                    <p className="text-muted mt-3" data-aos="fade-up" data-aos-delay="400">
                        Integer euismod nisl vitae sapien dictum, sed tempor urna posuere.
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                        cubilia curae; Vivamus vel hendrerit augue.
                    </p>

                    <div className="mt-4 d-flex gap-3" data-aos="fade-up" data-aos-delay="600">
                        <button className="btn btn-outline-dark">
                            View Selected Work <i className="fa-solid fa-arrow-right"></i>
                        </button>

                        <button className="btn btn-link text-dark">
                            Get in touch <i className="fa-regular fa-envelope"></i>
                        </button>
                    </div>

                    <div
                        className="mt-4 d-flex align-items-center gap-4 text-muted"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >

                        <div className="d-flex align-items-center gap-2">
                            <i className="fa-solid fa-location-dot"></i>
                            <span>San Francisco, CA</span>
                        </div>

                        <div className="d-flex align-items-center gap-2">
                            <span><i className="fa-regular fa-circle" /></span>
                            <span>Available for freelance</span>
                        </div>

                    </div>
                </div>

                <div className="col-md-6 text-center" data-aos="zoom-in" data-aos-delay="300">
                    <img
                        src={heroImg}
                        alt="hero"
                        className="img-fluid rounded"
                    />
                </div>

            </div>
        </section>
    );
}

export default Hero;