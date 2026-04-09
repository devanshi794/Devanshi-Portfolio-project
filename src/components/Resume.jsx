function Resume() {
    return (
        <div className="py-5">

            <div style={{ maxWidth: "930px", margin: "0 auto" }}>

                <div className="container">

                    <h2 className="text-center mb-2" data-aos="fade-up">
                        Resume
                    </h2>

                    <p className="text-center text-muted mb-5" data-aos="fade-up" data-aos-delay="200">
                        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                    </p>

                    <div className="d-flex justify-content-center gap-5 mb-5 small" data-aos="fade-up" data-aos-delay="300">
                        <span className="border-bottom border-dark pb-2">
                            01&nbsp;&nbsp; Experience
                        </span>
                        <span className="text-muted">
                            02&nbsp;&nbsp; Education
                        </span>
                        <span className="text-muted">
                            03&nbsp;&nbsp; Skills
                        </span>
                    </div>

                    <div className="text-center mb-5" data-aos="fade-up" data-aos-delay="400">
                        <h3 className="fw-light">Professional Experience</h3>
                        <p className="text-muted small">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium <br />
                            doloremque laudantium totam rem aperiam.
                        </p>
                    </div>

                    <div className="d-flex justify-content-between mb-3" data-aos="fade-up">
                        <div>
                            <h6>Senior Product Manager</h6>
                            <p className="mb-1 fw-semibold small">Innovate Tech Solutions</p>
                            <p className="text-muted small">
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores <br />eos qui ratione voluptatem sequi nesciunt.
                            </p>
                        </div>
                    </div>

                    <hr />

                    <div className="d-flex justify-content-between mb-3" data-aos="fade-up" data-aos-delay="200">
                        <div>
                            <h6>Product Development Lead</h6>
                            <p className="mb-1 fw-semibold small">Digital Ventures Ltd</p>
                            <p className="text-muted small">
                                Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea <br />commodi consequatur.
                            </p>
                        </div>
                    </div>

                    <hr />

                    <div className="d-flex justify-content-between" data-aos="fade-up" data-aos-delay="400">
                        <div>
                            <h6>Junior Product Analyst</h6>
                            <p className="mb-1 fw-semibold small">StartUp Dynamics</p>
                            <p className="text-muted small">
                                Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui <br />dolorem.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;