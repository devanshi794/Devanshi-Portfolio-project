import { useState } from "react";

function Header() {

    const [openDropdown, setOpenDropdown] = useState(false);
    const [openDeep, setOpenDeep] = useState(false);

    return (
        <>
            <nav className="navbar bg-white px-4 py-3 fixed-top shadow-sm">
                <h4 className="mb-0">MinimalFolio</h4>

                <button
                    className="btn"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#menu"
                >
                    <i className="fa-solid fa-bars fs-4"></i>
                </button>
            </nav>

            <div
                className="offcanvas offcanvas-end"
                tabIndex="-1"
                id="menu"
            >

                <div className="offcanvas-header">
                    <h5 className="offcanvas-title">MinimalFolio</h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                    ></button>
                </div>

                <div className="offcanvas-body">
                    <ul className="list-unstyled fs-5">

                        <li className="mb-3">
                            <a href="javascript:void(0)" className="text-dark text-decoration-none">Home</a>
                        </li>

                        <li className="mb-3">
                            <a href="javascript:void(0)" className="text-muted text-decoration-none">About</a>
                        </li>

                        <li className="mb-3">
                            <a href="javascript:void(0)" className="text-muted text-decoration-none">Resume</a>
                        </li>

                        <li className="mb-3">
                            <a href="javascript:void(0)" className="text-muted text-decoration-none">Portfolio</a>
                        </li>

                        <li className="mb-3">
                            <a href="javascript:void(0)" className="text-muted text-decoration-none">Services</a>
                        </li>

                        <li className="mb-3">

                            <div className="d-flex justify-content-between align-items-center">
                                <span
                                    className="text-muted"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => setOpenDropdown(!openDropdown)}
                                >
                                    Dropdown
                                </span>

                                <span
                                    onClick={() => setOpenDropdown(!openDropdown)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <i className={`fa-solid ${openDropdown ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                                </span>
                            </div>

                            {openDropdown && (
                                <div className="border mt-3 p-3">

                                    <p className="text-muted mb-3">Dropdown 1</p>

                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <span
                                            className="text-muted"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => setOpenDeep(!openDeep)}
                                        >
                                            Deep Dropdown
                                        </span>

                                        <span
                                            onClick={() => setOpenDeep(!openDeep)}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <i className={`fa-solid ${openDeep ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                                        </span>
                                    </div>

                                    {openDeep && (
                                        <div className="border p-3 mb-3">
                                            <p className="text-muted">Deep Dropdown 1</p>
                                            <p className="text-muted">Deep Dropdown 2</p>
                                            <p className="text-muted">Deep Dropdown 3</p>
                                            <p className="text-muted">Deep Dropdown 4</p>
                                            <p className="text-muted mb-0">Deep Dropdown 5</p>
                                        </div>
                                    )}

                                    <p className="text-muted">Dropdown 2</p>
                                    <p className="text-muted">Dropdown 3</p>
                                    <p className="text-muted mb-0">Dropdown 4</p>

                                </div>
                            )}

                        </li>

                        <li className="mb-3">
                            <a href="javascript:void(0)" className="text-muted text-decoration-none">Contact</a>
                        </li>

                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header;