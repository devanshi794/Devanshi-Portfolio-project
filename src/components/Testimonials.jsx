import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.webp";

function Testimonials() {
    return (
        <div className="bg-light py-5">

            <div className="container text-center">

                <h2 className="mb-3" data-aos="fade-up">
                    Testimonials
                </h2>

                <p className="text-muted mb-5" data-aos="fade-up" data-aos-delay="200">
                    Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                </p>

                <div
                    id="testimonialCarousel"
                    className="carousel slide"
                    data-bs-ride="carousel"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                >

                    <div className="carousel-inner">

                        <div className="carousel-item active">
                            <div className="d-flex flex-column align-items-center">

                                <img
                                    src={img4}
                                    className="rounded-circle mb-3"
                                    width="90"
                                    height="90"
                                    alt="user"
                                />

                                <h5 className="mb-2">Adam Aderson</h5>

                                <p className="text-muted w-50">
                                    “There live the blind texts. Separated they live in Bookmarksgrove
                                    right at the coast of the Semantics, a large language ocean.”
                                </p>

                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="d-flex flex-column align-items-center">

                                <img
                                    src={img3}
                                    className="rounded-circle mb-3"
                                    width="90"
                                    height="90"
                                    alt="user"
                                />

                                <h5 className="mb-2">Kayla Bryant</h5>

                                <p className="text-muted w-50">
                                    “There live the blind texts. Separated they live in Bookmarksgrove
                                    right at the coast of the Semantics, a large language ocean.”
                                </p>

                            </div>
                        </div>

                    </div>

                    <div className="carousel-indicators mt-4 position-static">
                        <button
                            type="button"
                            data-bs-target="#testimonialCarousel"
                            data-bs-slide-to="0"
                            className="active bg-dark"
                        ></button>

                        <button
                            type="button"
                            data-bs-target="#testimonialCarousel"
                            data-bs-slide-to="1"
                            className="bg-dark"
                        ></button>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Testimonials;