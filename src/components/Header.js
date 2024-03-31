import Link from 'next/link';

// Navigation bar
export default function Header() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
         <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src="images/house hunter logo.png" alt="house hunter logo" width="40px" height="40px" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link" aria-current="page" href="home-page">Home</a>
              <Link class="nav-link" href="/about">About Us</Link>
              <Link class="nav-link" href="/services">Services</Link>
              <Link class="nav-link" href="contact-us">Contact Us</Link>
              <Link class="nav-link" href="/register">Register</Link>
              <Link href="/add-property"><button type="button" class="btn btn-01">+Add Property</button></Link>
            </div>
          </div>
          </div>
        
        </nav>
    );
  }