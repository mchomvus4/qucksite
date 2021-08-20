import React, { Component } from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
 class Service extends Component {
 render() {
  return (
      <Router>
   <div>
    
        <main>

        {/* <!-- Header Start --> */}
        <div class="slider-area ">
            <div class="slider-height2 d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="hero-cap">
                                <h2>Huduma zetu</h2>
                                <nav aria-label="breadcrumb ">
                                    <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><Link to="/">Nyumbani</Link></li>
                                    <li class="breadcrumb-item"><Link to="/service">Huduma zetu</Link></li> 
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Header End --> */}
        {/* <!-- Categories Area Start --> */}
        <section class="categories-area categories-area2  section-padding30">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-cat text-center mb-50">
                            <div class="cat-icon">
                                <span class="flaticon-pen"></span>
                            </div>
                            <div class="cat-cap">
                                <h5><a href="services.html">Kusajili Kampuni</a></h5>
                                <p>Maelezo kidogo.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-cat text-center mb-50">
                            <div class="cat-icon">
                                <span class="flaticon-speaker"></span>
                            </div>
                            <div class="cat-cap">
                                <h5><a href="services.html">Kusajili Jina La Biashara</a></h5>
                                <p>Maelezo Kidogo.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-cat text-center mb-50">
                            <div class="cat-icon">
                                <span class="flaticon-portfolio"></span>
                            </div>
                            <div class="cat-cap">
                                <h5><a href="services.html">Huduma za Kisheria</a></h5>
                                <p>Maelezo Kidogo.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-cat text-center mb-50">
                            <div class="cat-icon">
                                <span class="flaticon-portfolio"></span>
                            </div>
                            <div class="cat-cap">
                                <h5><a href="services.html">Andiko la Biashara</a></h5>
                                <p>Maelezo Kidogo.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-cat text-center mb-50">
                            <div class="cat-icon">
                                <span class="flaticon-speaker"></span>
                            </div>
                            <div class="cat-cap">
                                <h5><a href="services.html">Mafunzo Ya Ujasiriamali</a></h5>
                                <p>Maelezo Kidogo.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-cat text-center mb-50">
                            <div class="cat-icon">
                                <span class="flaticon-pen"></span>
                            </div>
                            <div class="cat-cap">
                                <h5><a href="services.html">Ushauri Mambo Ya Kodi</a></h5>
                                <p>Maelezo Kidogo.</p>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </section>
        {/* <!-- Categories Area End --> */}
       
       
       
      

    </main>
   </div>
   </Router>
  )
 }
}

export default Service
