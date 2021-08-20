import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
 class About extends Component {
 render() {
  return (
    
   <div>
     <main>

        {/* <!-- Hero Start --> */}
        <div class="slider-area ">
            <div class="slider-height2 d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="hero-cap">
                                <h2>Kutuhusu sisi</h2>
                                <nav aria-label="breadcrumb ">
                                    <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><NavLink to="/">Nyumbani</NavLink></li>
                                    <li class="breadcrumb-item"><NavLink to="/about">Kutuhusu</NavLink></li> 
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Hero End --> */}
        {/* <!-- About Me Start --> */}
        <div class="about-me pb-top">
            <div class="container">
                <div class="row justify-content-between align-items-center">
                    <div class="col-lg-6 col-md-6">
                        <div class="about-me-img mb-30">
                             <img src="assets/img/service/services6.png" alt=""/>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-6">
                        <div class="about-me-caption">
                            <h3>Hatua Tano QuickbizReg </h3> 
                            
                            <h5>Kukusanya Taarifa Muhimu</h5>
                            <h5>Kufungua Akaunti</h5>
                            <h5>Kujaza Maombi kwenye Mtandao</h5>
                            <h5>Kuandaa Nyaraka na Kuingiza Kwenye Mfumo</h5>
                            <h5>Kupakua Cheti Chako</h5>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- About Me End --> */}
        {/* <!-- About Area start --> */}
        <section class="about-area section-paddingt30">
            <div class="container">
                <div class="row ">
                    <div class="col-lg-5">
                        <div class="about-caption mb-50">
                            <h3>QuickBizReg </h3>
                            <p class="pera1">Kwa nini uache majukumu mengine wa ajili ya kufatilia usajili wa , Ongea nasi tukusaidie. </p>
                        </div>
                    </div>
                    <div class="col-lg-5 offset-lg-1">
                        <div class="about-caption2">
                            <h4>Tumia Muda kidogo kusikiliza(video)</h4>
                            <img className="card-img rounded-0" src="assets/img/blog/single_blog_4.png" alt=""/>
                          
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- About Area End --> */}
        
        {/* <!-- client-comments --> */}
        <div class="client-comments section-paddingt20">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-8 col-md-10">
                        {/* <!-- Section Tittle --> */}
                        <div class="section-tittle mb-70">
                            <h3>Watu wanasemaje Hukusu sisi</h3>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- latest-blog-area start --> */}
            <div class="latest-blog-area">
                <div class="container">
                    <div class="row">
                            {/* <!-- single-items --> */}
                            <div class="col-xl-4">
                                <div class="blog-wrapper">
                                    <div class="blog-inner">
                                    <div class="blog-top">
                                        <div class="person-img">
                                            {/* <img src="assets/img/gallery/blog3.png" alt=""/> */}
                                        </div>
                                        <div class="comment-person">
                                            <h2>Samwel Mchomvu</h2>   
                                            <span>Jisa Tech</span>
                                        </div>
                                    </div>
                                        <p>Consectetur adipisicing elit, seddosdoe eiusmod tempor incididunt utore etstes dolore magna aliqua. Ut imminim restai veniam, quis nostrud.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- single-items --> */}
                            <div class="col-xl-4">
                                <div class="blog-wrapper">
                                    <div class="blog-inner">
                                    <div class="blog-top">
                                            <div class="person-img">
                                                {/* <img src="assets/img/gallery/blog3.png" alt=""/> */}
                                            </div>
                                            <div class="comment-person">
                                                 <h2>Samwel Mchomvu</h2>   
                                            <span>Jisa Tech</span>
                                            </div>
                                    </div>
                                        <p>Consectetur adipisicing elit, seddosdoe eiusmod tempor incididunt utore etstes dolore magna aliqua. Ut imminim restai veniam, quis nostrud.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- single-items --> */}
                            <div class="col-xl-4">
                                <div class="blog-wrapper">
                                    <div class="blog-inner">
                                    <div class="blog-top">
                                            <div class="person-img">
                                                {/* <img src="assets/img/gallery/blog3.png" alt=""/> */}
                                            </div>
                                            <div class="comment-person">
                                                 <h2>Samwel Mchomvu</h2>   
                                            <span>Jisa Tech</span>
                                            </div>
                                    </div>
                                        <p>Consectetur adipisicing elit, seddosdoe eiusmod tempor incididunt utore etstes dolore magna aliqua. Ut imminim restai veniam, quis nostrud.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- single-items --> */}
                          
                       
                    </div>
                </div>
            </div>           
            {/* <!-- End latest-blog-area --> */}
        </div>
    </main>
  </div>
  
  )
 }
}

export default About
