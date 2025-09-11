import { Routes, Route, Link, Navigate } from 'react-router-dom'

function Home() {
    return (
        <div>
            <header className="sticky-top">
                <nav className="primary-menu navbar navbar-expand-lg navbar-dark bg-dark border-bottom-0">
                    <div className="container-fluid position-relative h-100 flex-lg-column ps-3 px-lg-3 pt-lg-3 pb-lg-2">
                        <Link to="/" className="mb-lg-auto mt-lg-4">
                            <span className="bg-dark-2 rounded-pill p-2 mb-lg-1 d-none d-lg-inline-block">
                                <img className="img-fluid rounded-pill d-block" src="/images/portfolio-img.jpg" alt="Ashish Kamaliya" />
                            </span>
                            <h1 className="text-5 text-white text-center mb-0 d-lg-block">Ashish Kamaliya · <span className="text-primary">AshishCode</span></h1>
                        </Link>
                        <div id="header-nav" className="collapse navbar-collapse w-100 my-lg-auto">
                            <ul className="navbar-nav text-lg-center my-lg-auto py-lg-3">
                                <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="#about">About Me</a></li>
                                <li className="nav-item"><a className="nav-link" href="#services">What I Do</a></li>
                                <li className="nav-item"><a className="nav-link" href="#resume">Resume</a></li>
                                <li className="nav-item"><Link className="nav-link" to="/works">Portfolio</Link></li>
                                <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <section id="home" className="section bg-dark-1">
                    <div className="container py-5">
                        <h2 className="text-white">I'm Ashish Kamaliya</h2>
                        <p className="text-white-50">Senior WordPress & WooCommerce Developer</p>
                        <a href="#contact" className="btn btn-outline-primary rounded-pill mt-2">Hire Ashish Kamaliya</a>
                    </div>
                </section>
                <section id="contact" className="section bg-dark-2">
                    <div className="container py-5">
                        <h3 className="text-white">Get in Touch</h3>
                        <form name="contact" method="post" data-netlify="true" netlify-honeypot="bot-field">
                            <input type="hidden" name="form-name" value="contact" />
                            <p className="d-none"><label>Don’t fill this out: <input name="bot-field" /></label></p>
                            <div className="row g-3">
                                <div className="col-md-6"><input className="form-control" name="name" placeholder="Name" required /></div>
                                <div className="col-md-6"><input className="form-control" name="email" type="email" placeholder="Email" required /></div>
                                <div className="col-12"><textarea className="form-control" name="form-message" rows={4} placeholder="Message" required /></div>
                            </div>
                            <button className="btn btn-primary rounded-pill mt-3" type="submit">Send Message</button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    )
}

function Works() {
    return (
        <div className="container py-5">
            <h2 className="text-white">Portfolio</h2>
            <ul>
                <li><Link to="/works/advanced-woocommerce-store">Advanced WooCommerce Store</Link></li>
                <li><Link to="/works/business-crm-solution">Business CRM Solution</Link></li>
                <li><Link to="/works/custom-wordpress-plugin">Custom WordPress Plugin</Link></li>
                <li><Link to="/works/custom-wordpress-theme">Custom WordPress Theme</Link></li>
                <li><Link to="/works/client-management-system">Client Management System</Link></li>
                <li><Link to="/works/ecommerce-integration">E-commerce Integration</Link></li>
            </ul>
        </div>
    )
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}

export default App


