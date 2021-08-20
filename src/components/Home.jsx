import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import TAARIFA from '../Documents/TAARIFA.pdf';
import video1 from '../Videos/video1.mp4'
class Home extends Component {
  render() {
    return (
     
         <main>
        {/* <!-- slider Area Start--> */}
        <div class="slider-area ">
            <div class="slider-active">
                {/* <!-- Single Slider --> */}
                <div class="single-slider slider-height d-flex align-items-center">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-6 col-lg-6 col-md-8">
                                <div class="hero__caption">
                                    {/* <div class="hero__btn">
                                        <Link to="industries.html" class="btn hero-btn"  data-animation="fadeInLeft" data-delay=".8s">Soma Zaidi</Link>
                                        
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             
            </div>
        </div>
        {/* <!-- slider Area End--> */}
        {/* <!-- About Area start --> */}
        <section class="about-area section-paddingt30">
            <div class="container">
                <div class="row ">
                    <div class="col-lg-5">
                        <div class="about-caption mb-50">
                            <h3>Mambo Muhimu yanayohitaka.</h3>
                            <div className="btn-taarifa">
                                        <a href={TAARIFA} target="_blank" rel="noreferrer" className="btn header-btn">Bonyeza Kusoma</a>
                                    </div>
                        </div>
                    </div>
                    <div class="col-lg-5 offset-lg-1">
                         <h4>Tumia Muda kidogo kusikiliza video Hii</h4>
                       <video src={video1} width="600" height="300" controls="controls" autoplay="true" />
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- About Area End --> */}
        {/* <!-- Categories Area Start --> */}
        <section class="categories-area section-padding3">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        {/* <!-- Section Tittle --> */}
                        <div class="section-tittle mb-70">
                            <h2>Utapata Huduma zipi kutoka kwetu!</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-cat text-center mb-50">
                            <div class="cat-icon">
                                <span class="flaticon-pen"></span>
                            </div>
                            <div class="cat-cap">
                                <h5><NavLink to="/service">Kusajili Kampuni</NavLink></h5>
                                <p>Maelezo kidogo.....</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-cat text-center mb-50">
                            <div class="cat-icon">
                                <span class="flaticon-speaker"></span>
                            </div>
                            <div class="cat-cap">
                                <h5><NavLink to="/service">Kusajili Jina La Biashara</NavLink></h5>
                                <p>Maelezo kidogo....</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-cat text-center mb-50">
                            <div class="cat-icon">
                                <span class="flaticon-portfolio"></span>
                            </div>
                            <div class="cat-cap">
                                <h5><NavLink to="/service">Huduma Za Kisheria</NavLink></h5>
                                <p>Maelezo kidogo.......</p>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </section>
        {/* <!-- Categories Area End --> */}
        {/* <!-- Services Area Start --> */}
        <section class="services-area  services-padding">
            <div class="container">
               <div class="project-heading mb-35">
                    <div class="row align-items-end">
                        <div class="col-lg-6">
                            {/* <!-- Section Tittle --> */}
                            <div class="section-tittle">
                                <h2>Watu Wanaotumia Huduma Yetu!</h2>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="properties__button">
                                {/* <!--Nav Button  -->                                             */}
                                <nav>
                                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                        <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="false"> Wote</a>
                                        <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Makampuni</a>
                                        <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Majina Ya Biashara</a>
                                        <a class="nav-item nav-link" id="nav-last-tab" data-toggle="tab" href="#nav-last" role="tab" aria-controls="nav-contact" aria-selected="false">Huduma Za Kisheria </a>
                                        <a class="nav-item nav-link" id="nav-last-tab" data-toggle="tab" href="#nav-last" role="tab" aria-controls="nav-contact" aria-selected="false">Andiko La Biashara </a>
                                        <a class="nav-item nav-link" id="nav-last-tab" data-toggle="tab" href="#nav-last" role="tab" aria-controls="nav-contact" aria-selected="false">Kodi </a>
                                        {/* <a class="nav-item nav-link" id="nav-technology" data-toggle="tab" href="#nav-techno" role="tab" aria-controls="nav-contact" aria-selected="false">Web Design</a> */}
                                    </div>
                                </nav>
                                {/* <!--End Nav Button  --> */}
                            </div>
                        </div>
                    </div>
               </div>
                <div class="row">
                    <div class="col-12">
                        {/* <!-- Nav Card --> */}
                        <div class="tab-content active" id="nav-tabContent">
                            {/* <!-- card ONE --> */}
                            <div class="tab-pane fade active show" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">           
                                <div class="services-caption">
                                    <div class="row">
                                        <div class="col-lg-8 col-md-8 col-sm-8">
                                            {/* <!-- Single --> */}
                                            <div class="single-services mb-30">
                                                <img src="assets/img/service/services1.png" alt=""/>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-4">
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    {/* <!-- Single --> */}
                                                    <div class="single-services mb-30">
                                                        <img src="assets/img/service/services2.png" alt=""/>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    {/* <!-- Single --> */}
                                                    <div class="single-services mb-30">
                                                        <img src="assets/img/service/services3.png" alt=""/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-4">
                                            {/* <!-- Single --> */}
                                            <div class="single-services mb-30">
                                                <img src="assets/img/service/services4.png" alt=""/>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-4">
                                            {/* <!-- Single --> */}
                                            <div class="single-services mb-30">
                                                <img src="assets/img/service/services5.png" alt=""/>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-4">
                                            {/* <!-- Single --> */}
                                            <div class="single-services mb-30">
                                                <img src="assets/img/service/services6.png" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Card TWO --> */}
                            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <div class="services-caption">
                                    <div class="row">
                                        <div class="col-lg-8 col-md-8 col-sm-8">
                                            {/* <!-- Single --> */}
                                            <div class="single-services mb-30">
                                                <img src="assets/img/service/services6.png" alt=""/>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-4">
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    {/* <!-- Single --> */}
                                                    <div class="single-services mb-30">
                                                        <img src="assets/img/service/services2.png" alt=""/>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    {/* <!-- Single --> */}
                                                    <div class="single-services mb-30">
                                                        <img src="assets/img/service/services3.png" alt=""/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-4">
                                            {/* <!-- Single --> */}
                                            <div class="single-services mb-30">
                                                <img src="assets/img/service/services4.png" alt=""/>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-4">
                                            {/* <!-- Single --> */}
                                            <div class="single-services mb-30">
                                                <img src="assets/img/service/services5.png" alt=""/>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-4">
                                            {/* <!-- Single --> */}
                                            <div class="single-services mb-30">
                                                <img src="assets/img/service/services1.png" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Card THREE --> */}
                            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                <div class="services-caption">
                                    <div class="row">
                                        <div class="col-lg-8 col-md-8 col-sm-8">
                                            {/* <!-- Single --> */}
                                            <div class="single-services mb-30">
                                                <img src="assets/img/service/services2.png" alt=""/>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-4">
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    {/* <!-- Single --> */}
                                                    <div class="single-services mb-30">
                                                        <img src="assets/img/service/services1.png" alt=""/>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    {/* <!-- Single --> */}
                                                    <div class="single-services mb-30">
                                                        <img src="assets/img/service/services3.png" alt=""/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-4">
                                            {/* <!-- Single --> */}
                                            <div class="single-services mb-30">
                                                <img src="assets/img/service/services4.png" alt=""/>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-4">
                                            {/* <!-- Single --> */}
                                            <div class="single-services mb-30">
                                                <img src="assets/img/service/services5.png" alt=""/>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-4">
                                            {/* <!-- Single --> */}
                                            <div class="single-services mb-30">
                                                <img src="assets/img/service/services6.png" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- card FUR --> */}
                            <div class="tab-pane fade" id="nav-last" role="tabpanel" aria-labelledby="nav-last-tab">
                                <div class="services-caption">
                                    <div class="row">
                                        <div class="col-lg-8 col-md-8 col-sm-8">
                                            {/* <!-- Single --> */}
                                            <div class="single-services mb-30">
                                                <img src="assets/img/service/services1.png" alt=""/>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-4">
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    {/* <!-- Single --> */}
                                                    <div class="single-services mb-30">
                                                        <img src="assets/img/service/services2.png" alt=""/>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    {/* <!-- Single --> */}
                                                    <div class="single-services mb-30">
                                                        <img src="assets/img/service/services3.png" alt=""/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-4">
                                            {/* <!-- Single --> */}
                                            <div class="single-services mb-30">
                                                <img src="assets/img/service/services4.png" alt=""/>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-4">
                                            {/* <!-- Single --> */}
                                            <div class="single-services mb-30">
                                                <img src="assets/img/service/services5.png" alt=""/>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-4">
                                            {/* <!-- Single --> */}
                                            <div class="single-services mb-30">
                                                <img src="assets/img/service/services6.png" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- card FIVE --> */}
                            <div class="tab-pane fade" id="nav-techno" role="tabpanel" aria-labelledby="nav-technology">
                                <div class="services-caption">
                                    <div class="row">
                                        <div class="col-lg-8 col-md-8 col-sm-8">
                                            {/* <!-- Single --> */}
                                            <div class="single-services mb-30">
                                                <img src="assets/img/service/services3.png" alt=""/>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-4">
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    {/* <!-- Single --> */}
                                                    <div class="single-services mb-30">
                                                        <img src="assets/img/service/services2.png" alt=""/>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    {/* <!-- Single --> */}
                                                    <div class="single-services mb-30">
                                                        <img src="assets/img/service/services1.png" alt=""/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-4">
                                            {/* <!-- Single --> */}
                                            <div class="single-services mb-30">
                                                <img src="assets/img/service/services4.png" alt=""/>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-4">
                                            {/* <!-- Single --> */}
                                            <div class="single-services mb-30">
                                                <img src="assets/img/service/services5.png" alt=""/>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-4">
                                            {/* <!-- Single --> */}
                                            <div class="single-services mb-30">
                                                <img src="assets/img/service/services6.png" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* <!-- End Nav Card --> */}
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Services Area End --> */}
       


    </main>
    
    )
  }
}

export default Home
