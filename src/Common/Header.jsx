import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Service from '../components/Service';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import NotFound from '../components/NotFound';


 class Header extends Component {
 render() {
  return (
     <Router>
       <div>
    <div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
            <div className="preloader-inner position-relative">
                <div className="preloader-circle"></div>
                <div className="preloader-img pere-text">
                    <img src="assets/img/logo/loder.png" alt=""/>
                    
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Preloader Start --></div> */}
    <header>
        {/* <!-- Header Start --> */}
        <div className="header-area">
                <div className="main-header  header-sticky">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            {/* <!-- Logo --> */}
                            <div className="col-xl-2 col-lg-2 col-md-1">
                                <div className="logo">
                                    <Link to="/"><img src="assets/img/logo/logo.png" alt=""/></Link>
                                </div>
                            </div>
            <div className="col-xl-10 col-lg-10 col-md-10">
                <div className="menu-main d-flex align-items-center justify-content-end">
                    {/* <!-- Main-menu --> */}
                    <div className="main-menu f-right d-none d-lg-block">
                        <nav> 
                            <ul id="navigation">
                                <li><Link to="/">Nyumbani</Link></li>
                                <li><Link to="/about">Kutuhusu</Link></li>
                                <li><Link to="/service">Huduma</Link></li>
                                <li><Link to="/blog">Blogu</Link></li>
                                {/* <li><Link to="#">Page</Link>
                                    <ul class="submenu">
                                        <li><Link to="/blog">Blog</Link></li>
                                        <li><Link to="/blog_details">Blog Details</Link></li>
                                        <li><Link to="/elements">Element</Link></li>
                                        <li><Link to="/portfolio_details">Portfolio Details</Link></li>
                                    </ul>
                                </li> */}
                                <li><Link to="/contact">Mawasiliano</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header-right-btn f-right d-none d-xl-block ml-20">
                        <Link to="#" className="btn header-btn">+255 768 205 514</Link>
                    </div>
                </div>
            </div>   
            {/* <!-- Mobile Menu --> */}
            <div className="col-12">
                <div className="mobile_menu d-block d-lg-none"></div>
            </div>
        </div>
    </div>
</div>
</div>
        {/* <!-- Header End --> */}
    </header>
    <Switch>
     <Route exact path='/' component={Home}/>
     <Route  path='/about' component={About}/>
     <Route  path='/service' component={Service}/>
     <Route  path='/blog' component={Blog}/>
     <Route  path='/contact' component={Contact}/>
     <Route component={NotFound} />
     
     
    </Switch>
  </div>
  </Router>
  );
  
 }
 
}

export default Header;