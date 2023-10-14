import "./styles/navbar.css";
export default function Navbar() {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-dark navb '>
        <div className='container-fluid'>
          <a className='navbar-brand text' href='#h1'>
            Ampolu Lakshmi Gangadhar
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='true'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ms-auto me-2 mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link text' aria-current='page' href='#h1'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link text' href='#h1'>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link text' href='#contact'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
