function Skills() {
    return (
        <div className="py-5">
            <div className="container">

                <h2 className="text-center mb-3" data-aos="fade-up">
                    Skills
                </h2>

                <p className="text-center text-muted mb-5" data-aos="fade-up" data-aos-delay="200">
                    Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                </p>

                <div className="row g-5 mb-5">

                    <div className="col-md-4" data-aos="fade-up">
                        <div className="d-flex justify-content-between align-items-center">
                            <h6 className="mb-0">Interface Design</h6>
                            <span className="badge border text-dark">Expert</span>
                        </div>
                        <p className="text-muted small">
                            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero.
                        </p>
                        <div className="bg-light mt-3" style={{ height: "4px" }}>
                            <div style={{ width: "90%", height: "100%", background: "#222" }}></div>
                        </div>
                    </div>

                    <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                        <div className="d-flex justify-content-between align-items-center">
                            <h6 className="mb-0">Prototyping</h6>
                            <span className="badge border text-dark">Advanced</span>
                        </div>
                        <p className="text-muted small">
                            Donec id elit non mi porta gravida at eget metus. Cras mattis consectetur purus sit amet fermentum.
                        </p>
                        <div className="bg-light mt-3" style={{ height: "4px" }}>
                            <div style={{ width: "75%", height: "100%", background: "#222" }}></div>
                        </div>
                    </div>

                    <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
                        <div className="d-flex justify-content-between align-items-center">
                            <h6 className="mb-0">Design Systems</h6>
                            <span className="badge border text-dark">Advanced</span>
                        </div>
                        <p className="text-muted small">
                            Etiam porta sem malesuada magna mollis euismod. Sed posuere consectetur est at lobortis.
                        </p>
                        <div className="bg-light mt-3" style={{ height: "4px" }}>
                            <div style={{ width: "80%", height: "100%", background: "#222" }}></div>
                        </div>
                    </div>

                    <div className="col-md-4" data-aos="fade-up">
                        <div className="d-flex justify-content-between align-items-center">
                            <h6 className="mb-0">HTML/CSS</h6>
                            <span className="badge border text-dark">Expert</span>
                        </div>
                        <p className="text-muted small">
                            Maecenas faucibus mollis interdum. Praesent commodo cursus magna, vel scelerisque nisl.
                        </p>
                        <div className="bg-light mt-3" style={{ height: "4px" }}>
                            <div style={{ width: "95%", height: "100%", background: "#222" }}></div>
                        </div>
                    </div>

                    <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                        <div className="d-flex justify-content-between align-items-center">
                            <h6 className="mb-0">JavaScript</h6>
                            <span className="badge border text-dark">Pro</span>
                        </div>
                        <p className="text-muted small">
                            Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo.
                        </p>
                        <div className="bg-light mt-3" style={{ height: "4px" }}>
                            <div style={{ width: "85%", height: "100%", background: "#222" }}></div>
                        </div>
                    </div>

                    <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
                        <div className="d-flex justify-content-between align-items-center">
                            <h6 className="mb-0">Accessibility</h6>
                            <span className="badge border text-dark">Strong</span>
                        </div>
                        <p className="text-muted small">
                            Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis.
                        </p>
                        <div className="bg-light mt-3" style={{ height: "4px" }}>
                            <div style={{ width: "80%", height: "100%", background: "#222" }}></div>
                        </div>
                    </div>

                </div>

                <div className="row">

                    <div className="col-md-8" data-aos="fade-right">
                        <p className="text-muted">
                            Quisque consectetur, ipsum sed luctus finibus, lectus dui gravida lacus,
                            et dictum tortor elit ut arcu. Vestibulum ante ipsum primis in faucibus orci luctus.
                        </p>
                    </div>

                    <div className="col-md-4" data-aos="fade-left">
                        <div className="border rounded p-4">

                            <h6 className="mb-4">Toolbox</h6>

                            <div className="d-flex align-items-center mb-3">
                                <i className="fa-solid fa-check me-2"></i>
                                Figma, Sketch, Adobe XD
                            </div>
                            <hr />

                            <div className="d-flex align-items-center mb-3">
                                <i className="fa-solid fa-check me-2"></i>
                                Framer, ProtoPie
                            </div>
                            <hr />

                            <div className="d-flex align-items-center mb-3">
                                <i className="fa-solid fa-check me-2"></i>
                                Sass, Bootstrap, Tailwind
                            </div>
                            <hr />

                            <div className="d-flex align-items-center">
                                <i className="fa-solid fa-check me-2"></i>
                                Git, GitHub, Vite
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Skills;