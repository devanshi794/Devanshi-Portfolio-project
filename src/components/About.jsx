import aboutImg from "../assets/img2.webp";

function About() {
    return (
        <div className="bg-light mt-5 pt-5 pb-5">

            <div className="container">

                <h2 className="text-center mb-3" data-aos="fade-up">
                    About
                </h2>

                <p className="text-center text-muted mb-5" data-aos="fade-up" data-aos-delay="200">
                    Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                </p>

                <div className="row align-items-center mb-5">

                    <div className="col-md-6" data-aos="fade-right">

                        <p className="text-uppercase text-muted small">
                            Hello There
                        </p>

                        <h1 className="fw-light" data-aos="fade-up" data-aos-delay="200">
                            Hi, I’m Alex — a calm-minded creative developer crafting serene digital journeys
                        </h1>

                        <p className="text-muted mt-3" data-aos="fade-up" data-aos-delay="400">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus.
                        </p>

                        <p className="text-muted" data-aos="fade-up" data-aos-delay="600">
                            Integer posuere lacus in mi fringilla, eget luctus risus pulvinar. Curabitur a arcu a nisl tempus sagittis.
                        </p>

                        <div className="mt-4 d-flex gap-3" data-aos="fade-up" data-aos-delay="800">
                            <button className="btn btn-outline-dark">
                                View My Work <i className="fa-solid fa-angle-down"></i>
                            </button>

                            <button className="btn btn-link text-dark text-decoration-none">
                                Download Resume <i className="fa-solid fa-angle-down"></i>
                            </button>
                        </div>

                    </div>

                    <div className="col-md-6 text-center" data-aos="zoom-in" data-aos-delay="300">
                        <img
                            src={aboutImg}
                            alt="about"
                            className="img-fluid rounded-4"
                        />
                    </div>

                </div>

                <div className="row g-4 mb-5">
                    <div className="col-md-3" data-aos="zoom-in">
                        <div className="border rounded p-4 h-100">
                            <i className="fa-regular fa-file fs-3 mb-3"></i>
                            <h5>UI/UX</h5>
                            <p className="text-muted small">Vivamus sagittis lacus molestie placerat.</p>
                        </div>
                    </div>

                    <div className="col-md-3" data-aos="zoom-in" data-aos-delay="200">
                        <div className="border rounded p-4 h-100">
                            <i className="fa-solid fa-code fs-3 mb-3"></i>
                            <h5>React.js</h5>
                            <p className="text-muted small">Maecenas pharetra magna sit amet risus.</p>
                        </div>
                    </div>

                    <div className="col-md-3" data-aos="zoom-in" data-aos-delay="400">
                        <div className="border rounded p-4 h-100">
                            <i className="fa-solid fa-mobile-screen-button fs-3 mb-3"></i>
                            <h5>Mobile-first</h5>
                            <p className="text-muted small">Donec id elit non mi porta gravida.</p>
                        </div>
                    </div>

                    <div className="col-md-3" data-aos="zoom-in" data-aos-delay="600">
                        <div className="border rounded p-4 h-100">
                            <i className="fa-regular fa-camera fs-3 mb-3"></i>
                            <h5>Photography</h5>
                            <p className="text-muted small">Aliquam euismod nunc at augue cursus.</p>
                        </div>
                    </div>
                </div>

                <div className="row text-center mb-5">
                    <div className="col-md-3" data-aos="fade-up">
                        <p className="text-muted small"><i className="fa-solid fa-circle" /> 2018</p>
                        <h6>B.A. in Design</h6>
                        <p className="text-muted small">Quisque euismod turpis ut sapien luctus bibendum.</p>
                    </div>

                    <div className="col-md-3" data-aos="fade-up" data-aos-delay="200">
                        <p className="text-muted small"><i className="fa-solid fa-circle" /> 2020</p>
                        <h6>Freelance Start</h6>
                        <p className="text-muted small">Mauris non arcu non urna convallis vulputate.</p>
                    </div>

                    <div className="col-md-3" data-aos="fade-up" data-aos-delay="400">
                        <p className="text-muted small"><i className="fa-solid fa-circle" /> 2022</p>
                        <h6>Joined Creative Studio</h6>
                        <p className="text-muted small">Nunc sed nibh et libero fermentum posuere.</p>
                    </div>

                    <div className="col-md-3" data-aos="fade-up" data-aos-delay="600">
                        <p className="text-muted small"><i className="fa-solid fa-circle" /> 2024</p>
                        <h6>Lead Frontend</h6>
                        <p className="text-muted small">Proin commodo massa sit amet urna pretium.</p>
                    </div>
                </div>

                <div className="text-center mb-4" data-aos="fade-up">
                    <h4 className="fw-light">
                        “Building clean and meaningful experiences through thoughtful <br />
                        code and quiet design.”
                    </h4>
                </div>

                <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">

                    <span className="tag-pill border rounded-pill px-3 py-2" data-aos="zoom-in">
                        <i className="fa-solid fa-wand-magic-sparkles me-2"></i> Minimalism
                    </span>

                    <span className="tag-pill border rounded-pill px-3 py-2" data-aos="zoom-in" data-aos-delay="200">
                        <i className="fa-solid fa-headphones me-2"></i> Lo-fi Beats
                    </span>

                    <span className="tag-pill border rounded-pill px-3 py-2" data-aos="zoom-in" data-aos-delay="400">
                        <i className="fa-solid fa-location-dot me-2"></i> City Walks
                    </span>

                    <span className="tag-pill border rounded-pill px-3 py-2" data-aos="zoom-in" data-aos-delay="600">
                        <i className="fa-solid fa-pen me-2"></i> Sketching
                    </span>

                </div>

            </div>
        </div>
    );
}

export default About;