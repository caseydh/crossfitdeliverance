import React from 'react'
import '../style/footer.scss'
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => (
    <>
    <section id="footer" className="pt-5">
            <div className="container">
              <div className="row footerCol">
                <div className="col-md-3 my-2">
                  <h2 className="text-white teko">CROSSFIT DELIVERANCE</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <br/>
                  <span><i className="fa fa-phone mr-2 my-2"></i> 253.686.4898</span>
                  <br/>
                  <span><i className="fa fa-map-marker mr-2 my-2"></i> 4535 Union Bay Pl NE </span>
                  <br/>
                  <span><i className="fa fa-clock-o  mr-2 my-2"></i> Mon - Fri 5:00am - 7:30pm</span>
                </div>

                <div className="col-md-3 my-2">
                  <h2 className="text-white teko">USEFULL LINKS</h2>
                  <a href="https://journal.crossfit.com/">Crossfit Journal</a>
                  <br/>
                  <br/>
                  <a href="https://romwod.com/?gclid=EAIaIQobChMI5sO53MXN3gIVD6vsCh06wA_pEAAYASAAEgI_LvD_BwE">ROMWOD</a>
                  <br/>
                  <br/>
                  <a href="www.crossfit.com">Crossfit.com</a>
                </div>

                
               <div className="col-md-3 my-2">
                        <h2 className="text-white teko">LATEST POST</h2>
                        
                </div>

                <div className="col-md-3 my-2">
                    <h2 className="text-white teko">CONTACT US</h2>
                    <form>
                        <input type="text" placeholder="Name"/>
                        <input type="text"placeholder="E-mail"/>
                        <textarea placeholder="Comment" id=""></textarea>
                        <button className="primary-button my-2">SEND MESSAGE <i className="fa fa-arrow-right"></i></button>
                    </form>      
                </div>
              </div>
            </div>
        </section>
        <div className="py-2 footer">
            <div className="footer-logo ml-5 ">
                    <img src="img/logo.png" width="30" alt=""/>
                    <p className="d-inline">Copyrights 2017 © Crossfit Deliverance</p>
            </div>
            <div className="social mr-5">
                <p className="d-inline mr-2">Follow Us</p>
                <i className="fa fa-facebook mr-2 d-inline"></i>
                <i className="fa fa-youtube mr-2 d-inline"></i>
                <i className="fa fa-instagram mr-2 d-inline"></i>
            </div>
                
        </div>
    </>
)


export default Footer;
