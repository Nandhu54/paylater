import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <div className="container bg-secondary">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <Link to="/contactus" className="mb- me-2 mb-md-0 text-muted text-decoration-none lh-1">
              <svg className="bi" width="50" height="24" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg>
            </Link>
            <span className="text-muted">© 2023 VNR VJIET, Inc</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24" role="img" aria-label="Twitter"><use xlinkHref="#twitter"></use></svg></a></li>
            <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24" role="img" aria-label="Instagram"><use xlinkHref="#instagram"></use></svg></a></li>
            <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24" role="img" aria-label="Facebook"><use xlinkHref="#facebook"></use></svg></a></li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
