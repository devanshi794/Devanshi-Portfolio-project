function Contact() {
    return (
        <div className="bg-light py-5">

            <div className="container mt-5 pt-5 mb-5">

                <h2 className="text-center mb-3" data-aos="fade-up">
                    Contact
                </h2>

                <p className="text-center text-muted mb-5" data-aos="fade-up" data-aos-delay="200">
                    Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                </p>

                <div className="row g-5">

                    <div className="col-md-7" data-aos="fade-right">

                        <h3 className="mb-3">Let’s Start a Conversation</h3>
                        <p className="text-muted mb-4">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.
                        </p>

                        <div className="row g-4">

                            <div className="col-md-6">
                                <label className="form-label small text-muted">NAME</label>
                                <input type="text" className="form-control border-0 border-bottom" placeholder="Your Name" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label small text-muted">EMAIL</label>
                                <input type="email" className="form-control border-0 border-bottom" placeholder="Your Email" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label small text-muted">PHONE</label>
                                <input type="text" className="form-control border-0 border-bottom" placeholder="Your Phone" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label small text-muted">SUBJECT</label>
                                <input type="text" className="form-control border-0 border-bottom" placeholder="Subject" />
                            </div>

                            <div className="col-12">
                                <label className="form-label small text-muted">MESSAGE</label>
                                <textarea className="form-control border-0 border-bottom" rows="4" placeholder="Tell us about your project"></textarea>
                            </div>

                        </div>

                        <button className="btn btn-outline-dark mt-4 px-4 py-2">
                            SEND MESSAGE <i className="fa-solid fa-arrow-right"></i>
                        </button>

                    </div>

                    <div className="col-md-5" data-aos="fade-left" data-aos-delay="200">

                        <div className="p-4 rounded-3 h-100" style={{ backgroundColor: "#f1f3f5" }}>

                            <h4 className="mb-3">Get in Touch</h4>
                            <p className="text-muted mb-4">
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud.
                            </p>

                            <div className="d-flex mb-4">
                                <i className="fa-solid fa-location-dot me-3 mt-1"></i>
                                <div>
                                    <p className="small mb-1 fw-bold">ADDRESS</p>
                                    <p className="text-muted small mb-0">
                                        892 Park Avenue, Manhattan <br />
                                        New York, NY 10075
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex mb-4">
                                <i className="fa-regular fa-envelope me-3 mt-1"></i>
                                <div>
                                    <p className="small mb-1 fw-bold">EMAIL</p>
                                    <p className="text-muted small mb-0">
                                        hello@businessdemo.com
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex mb-4">
                                <i className="fa-solid fa-phone me-3 mt-1"></i>
                                <div>
                                    <p className="small mb-1 fw-bold">PHONE</p>
                                    <p className="text-muted small mb-0">
                                        +1 (555) 789-2468
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex mb-4">
                                <i className="fa-regular fa-clock me-3 mt-1"></i>
                                <div>
                                    <p className="small mb-1 fw-bold">HOURS</p>
                                    <p className="text-muted small mb-0">
                                        Monday - Friday: 9AM - 6PM <br />
                                        Saturday: 10AM - 4PM
                                    </p>
                                </div>
                            </div>

                            <hr />

                            <p className="small fw-bold mt-3">CONNECT WITH US</p>

                            <div className="d-flex gap-3 mt-2">
                                <i className="fa-brands fa-linkedin"></i>
                                <i className="fa-brands fa-x-twitter"></i>
                                <i className="fa-brands fa-instagram"></i>
                                <i className="fa-brands fa-facebook"></i>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Contact;