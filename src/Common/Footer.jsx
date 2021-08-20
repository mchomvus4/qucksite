import React, { Component } from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';
 class Footer extends Component {
  render() {
    return (
        <Router>
      <div>
     <footer>
    
        {/* <!-- Footer Start--> */}
        <div className="footer-area">
            <div className="container">
               <div className="footer-top footer-padding">
                   <div className="row justify-content-center">
                       <div className="col-lg-6">
                            <div className="footer-top-cap text-center">
                                {/* <img src="assets/img/logo/logo2_footer.png" alt=""/> */}
                                <span><Link to="#">info@quickbiz.tz</Link></span>
                                <p>Plot No. 55 Block B Nera Street  </p>
                                <p>Nyamagana-Mwanza</p>
                            </div>
                       </div>
                   </div>
               </div>
                <div className="footer-bottom">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-xl-9 col-lg-8">
                            <div className="footer-copy-right">
                                {/* <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
  Copyright &copy;<script></script> All rights reserved | Quick Bussiness
  {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p> */}
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4">
                            {/* <!-- Footer Social --> */}
                            <div className="footer-social f-right">
                                <Link>Stay Connected</Link>
                                <Link to="#"><i className="fab fa-twitter"></i></Link>
                                <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link to="#"><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </div>
        {/* <!-- Footer End--> */}
    </footer>
    {/* <!-- Scroll Up --> */}
    <div id="back-top" >
        <Link title="Go to Top" to="#"> <i class="fas fa-level-up-alt"></i></Link>
    </div>

      </div>
      </Router>
    )
  }
}

export default Footer;