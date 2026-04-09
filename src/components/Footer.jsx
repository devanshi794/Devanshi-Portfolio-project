function Footer() {
    return (
        <footer className="py-5">

            <div className="container text-center">

                <p className="mb-4 text-muted" data-aos="fade-up">
                    <i className="fa-regular fa-copyright" /> Copyright <strong>MinimalFolio</strong> All Rights Reserved
                </p>

                <div
                    className="d-flex justify-content-center gap-3"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >

                    <a href="javascript:void(0)" className="btn btn-outline-secondary rounded-circle">
                        <i className="fa-brands fa-x-twitter"></i>
                    </a>

                    <a href="javascript:void(0)" className="btn btn-outline-secondary rounded-circle">
                        <i className="fa-brands fa-facebook"></i>
                    </a>

                    <a href="javascript:void(0)" className="btn btn-outline-secondary rounded-circle">
                        <i className="fa-brands fa-instagram"></i>
                    </a>

                    <a href="javascript:void(0)" className="btn btn-outline-secondary rounded-circle">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>

                </div>

            </div>

        </footer>
    );
}

export default Footer;