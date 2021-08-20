import React, { Component } from 'react'

 class Contact extends Component {
 render() {
  return (
   <div>
     {/* <!-- Contact Info Start --> */}
         <section class="contact-info-area w-padding2 bg-info" data-background="assets/img/gallery/section_bg04.jpg">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-xl-5 col-lg-7">
                      <div class="contact-caption mb-50">
                            <h3>Kama sio sasa, Lini? Tufanye kazi pamoja!</h3>
                            <p>Wasiliana nasi kwa kututumia ujumbe mfupi nasi tutakujibu kwa haraka</p>
                            {/* <img src="assets/img/gallery/sin.png" alt=""/> */}
                      </div>
                    </div>
                    <div class="col-xl-5 col-lg-5">
                        <form action="#" class="contact-wrapper">
                            <input type="text" name="name" placeholder="Jina Kamili"/>
                            <input type="email" name="email" placeholder="Barua pepe"/>
                            <textarea name="message" id="message" placeholder="Ujumbe wako"></textarea>
                            <button class="submit-btn2" type="submit">Tuma Ujumbe</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        
        {/* <!-- Contact Info End --> */}
   </div>
  )
 }
}

export default Contact
