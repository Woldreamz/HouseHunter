import Link from 'next/link';

// Navigation bar
export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
         <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src="images/house hunter logo.png" alt="house hunter logo" width="40px" height="40px" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" aria-current="page" href="home-page">Home</a>
              <Link className="nav-link" href="/about">About Us</Link>
              <Link className="nav-link" href="/services">Services</Link>
              <Link className="nav-link" href="contact-us">Contact Us</Link>
              <Link className="nav-link" href="/register">Register</Link>
              <Link href="/add-property"><button type="button" className="btn btn-01">+Add Property</button></Link>
            </div>
          </div>
          </div>
        
        </nav>
    );
  }