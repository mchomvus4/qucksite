import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
 class Blog extends Component {
 render() {
  return (
      
   <div>
      <main>

        {/* <!-- Hero Start --> */}
        <div className="slider-area ">
            <div className="slider-height2 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-cap">
                                <h2>Blogu Yetu</h2>
                                <nav aria-label="breadcrumb ">
                                    <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><NavLink to="/">Nyumbani</NavLink></li>
                                    <li className="breadcrumb-item"><NavLink to="/blog">Blogu</NavLink></li> 
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Hero End --> */}
        {/* <!--================Blog Area =================--> */}
        <section className="blog_area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mb-5 mb-lg-0">
                        <div className="blog_left_sidebar">
                            <article className="blog_item">
                                <div className="blog_item_img">
                                    <img className="card-img rounded-0" src="assets/img/blog/single_blog_4.png" alt=""/>
                                    <NavLink to="#" className="blog_item_date">
                                        <h3>20</h3>
                                        <p>Aug</p>
                                    </NavLink>
                                </div>

                                <div className="blog_details">
                                    <NavLink  className="d-inline-block" to="/">
                                        <h2>Kichwa cha habari</h2>
                                    </NavLink>
                                    <p>maelezo.</p>
                                    {/* <ul class="blog-info-link">
                                        <li><Link to="#"><i class="fa fa-user"></i> Travel, Lifestyle</Link></li>
                                        <li><Link to="#"><i class="fa fa-comments"></i> 03 Comments</Link></li>
                                    </ul> */}
                                </div>
                            </article>

                            <article className="blog_item">
                                <div className="blog_item_img">
                                    <img className="card-img rounded-0" src="assets/img/blog/single_blog_4.png" alt=""/>
                                    <NavLink to="#" className="blog_item_date">
                                        <h3>20</h3>
                                        <p>Aug</p>
                                    </NavLink>
                                </div>

                                <div className="blog_details">
                                    <NavLink className="d-inline-block" to="/">
                                        <h2>Kichwa cha habari</h2>
                                    </NavLink>
                                    <p>Maelezo.</p>
                                    {/* <ul class="blog-info-link">
                                        <li><Link to="#"><i class="fa fa-user"></i> Travel, Lifestyle</Link></li>
                                        <li><Link to="#"><i class="fa fa-comments"></i> 03 Comments</Link></li>
                                    </ul> */}
                                </div>
                            </article>

                            <article className="blog_item">
                                <div className="blog_item_img">
                                    <img className="card-img rounded-0" src="assets/img/blog/single_blog_4.png" alt=""/>
                                    <NavLink to ="/" className="blog_item_date">
                                        <h3>20</h3>
                                        <p>Aug</p>
                                    </NavLink >
                                </div>

                                <div className="blog_details">
                                    <NavLink className="d-inline-block" to="/">
                                        <h2>Kichwa cha habari</h2>
                                    </NavLink >
                                    <p>Maelezo.</p>
                                    {/* <ul class="blog-info-link">
                                        <li><Link to="#"><i class="fa fa-user"></i> Travel, Lifestyle</Link></li>
                                        <li><Link to="#"><i class="fa fa-comments"></i> 03 Comments</Link></li>
                                    </ul> */}
                                </div>
                            </article>

                            <article className="blog_item">
                                <div className="blog_item_img">
                                    <img className="card-img rounded-0" src="assets/img/blog/single_blog_4.png" alt=""/>
                                    <NavLink to="#" className="blog_item_date">
                                        <h3>20</h3>
                                        <p>Aug</p>
                                    </NavLink>
                                </div>

                                <div className="blog_details">
                                    <NavLink className="d-inline-block" to="/">
                                        <h2>Kichwa habari</h2>
                                    </NavLink>
                                    <p>Maelezo.</p>
                                    {/* <ul class="blog-info-link">
                                        <li><Link to="#"><i class="fa fa-user"></i> Travel, Lifestyle</Link></li>
                                        <li><Link to="#"><i class="fa fa-comments"></i> 03 Comments</Link></li>
                                    </ul> */}
                                </div>
                            </article>

                            <article className="blog_item">
                                <div className="blog_item_img">
                                    <img className="card-img rounded-0" src="assets/img/blog/single_blog_4.png" alt=""/>
                                    <NavLink to="/" class="blog_item_date">
                                        <h3>20</h3>
                                        <p>Aug</p>
                                    </NavLink>
                                </div>

                                <div className="blog_details">
                                    <NavLink className="d-inline-block" to="/">
                                        <h2>Kichwa cha habari</h2>
                                    </NavLink>
                                    <p>Maelezo.</p>
                                    {/* <ul class="blog-info-link">
                                        <li><Link to="#"><i class="fa fa-user"></i> Travel, Lifestyle</Link></li>
                                        <li><Link to="#"><i class="fa fa-comments"></i> 03 Comments</Link></li>
                                    </ul> */}
                                </div>
                            </article>

                            <nav className="blog-pagination justify-content-center d-flex">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <NavLink to="#" className="page-link" aria-label="Previous">
                                            <i className="ti-angle-left"></i>
                                        </NavLink>
                                    </li>
                                    <li className="page-item">
                                        <NavLink  to="#" className="page-link">1</NavLink>
                                    </li>
                                    <li className="page-item active">
                                        <NavLink  to="#" className="page-link">2</NavLink>
                                    </li>
                                    <li className="page-item">
                                        <NavLink  to="#" className="page-link" aria-label="Next">
                                            <i className="ti-angle-right"></i>
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog_right_sidebar">
                            <aside className="single_sidebar_widget search_widget">
                                <form action="#">
                                    <div className="form-group">
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder='Ingiza neno Tafuta'
                                                onfocus="this.placeholder = ''"
                                                onblur="this.placeholder = 'Ingiza neno Tafuta'"/>
                                            <div className="input-group-append">
                                                <button className="btns" type="button"><i className="ti-search"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                                        type="submit">Tafuta</button>
                                </form>
                            </aside>

                            <aside className="single_sidebar_widget post_category_widget">
                                <h4 className="widget_title">Eneo La Huduma</h4>
                                <ul className="list cat-list">
                                    <li>
                                        <NavLink to="#" className="d-flex">
                                            <p>Usajili Wa Kampuni</p>
                                            {/* <p>(37)</p> */}
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="#" className="d-flex">
                                            <p>Usajili Wa Jina La Biashara</p>
                                            {/* <p>(10)</p> */}
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="#" className="d-flex">
                                            <p>Huduma za Kisheria</p>
                                            {/* <p>(03)</p> */}
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="#" className="d-flex">
                                            <p>Andiko La Biashara</p>
                                            {/* <p>(11)</p> */}
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="#" className="d-flex">
                                            <p>Kuanzisha Biashara</p>
                                            {/* <p>21</p> */}
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="#" className="d-flex">
                                            <p>Ushauri Wa Mambo Ya kodi</p>
                                            {/* <p>09</p> */}
                                        </NavLink>
                                    </li>
                                </ul>
                            </aside>

                            <aside className="single_sidebar_widget popular_post_widget">
                                <h3 className="widget_title">Posti Mpya</h3>
                                <div className="media post_item">
                                    <img src="assets/img/post/post_1.png" alt="post"/>
                                    <div className="media-body">
                                        <NavLink to="blog_details.html">
                                            <h3>Posti ya kwanza..</h3>
                                        </NavLink>
                                        <p>Augusti 20, 2021</p>
                                    </div>
                                </div>
                                <div className="media post_item">
                                    <img src="assets/img/post/post_2.png" alt="post"/>
                                    <div className="media-body">
                                        <NavLink to="blog_details.html">
                                            <h3>Posti ya Pili</h3>
                                        </NavLink>
                                        <p>02 Masaa Yaliyopita</p>
                                    </div>
                                </div>
                                <div className="media post_item">
                                    <img src="assets/img/post/post_3.png" alt="post"/>
                                    <div className="media-body">
                                        <NavLink to="blog_details.html">
                                            <h3>Posti ya Tatu</h3>
                                        </NavLink>
                                        <p>03 Masaa Yaliyopita</p>
                                    </div>
                                </div>
                                <div className="media post_item">
                                    <img src="assets/img/post/post_4.png" alt="post"/>
                                    <div className="media-body">
                                        <NavLink to="blog_details.html">
                                            <h3>Posti ya Nne</h3>
                                        </NavLink>
                                        <p>01 Masaa Yaliyopita</p>
                                    </div>
                                </div>
                            </aside>
                            

                            <aside className="single_sidebar_widget newsletter_widget">
                                <h4 className="widget_title">Majarida</h4>

                                <form action="#">
                                    <div className="form-group">
                                        <input type="email" className="form-control" onfocus="this.placeholder = ''"
                                            onblur="this.placeholder = 'Enter email'" placeholder='Andika Barua Pepe' required/>
                                    </div>
                                    <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                                        type="submit">Jiunge</button>
                                </form>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--================Blog Area =================--> */}
    </main>
   </div>
  
  )
 }
}

export default Blog
