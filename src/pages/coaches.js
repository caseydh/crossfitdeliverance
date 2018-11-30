import React from 'react';
import {Component} from 'react';
import { Link } from 'gatsby';
import '../style/showcase.scss';
import '../style/coaches.scss';
import Layout from '../components/layout'
import '../components/header';
import Header from '../components/header';
import Footer from '../components/footer';
import background from '../images/team.jpg'
import stairs from '../images/stretch.jpg'
import a from '../images/1.jpg'
import b from '../images/4.jpg'
import c from '../images/3.jpg'
import d from '../images/5.jpg'
import Showcase from '../components/showcase';

class Coaches extends Component {
 
  render() {
    return(
  <>
    <Header color='white' />
    <Showcase background={background} name='PRICING' />
    <section id="coaches" className="py-5">
        <div className="container">
            <h1 className="teko display-3 my-5">MEET OUR <br/> COACHING TEAM</h1>
        </div>
        <div className="coach-grid">
            <div className="coachBox coach1">
                <div className="coachOverlay text-center">
                    <div className="overlay-content py-5">
                            <h4 className="teko text-white coachName">MATT CHAN</h4>
                            <h5 className="coachTitle">OWNER / COACH</h5>
                    </div>
                    
                </div>
                <div className="coachTag"><h5>OWNER / COACH</h5></div>
            </div>
            <div className="coachBox coach1">
                <div className="coachOverlay text-center">
                    <div className="overlay-content py-5">
                            <h4 className="teko text-white coachName">MATT CHAN</h4>
                            <h5 className="coachTitle">OWNER / COACH</h5>
                    </div>
                    
                </div>
                <div className="coachTag"><h5>OWNER / COACH</h5></div>
            </div>
            <div className="coachBox coach1">
                <div className="coachOverlay text-center">
                    <div className="overlay-content py-5">
                            <h4 className="teko text-white coachName">MATT CHAN</h4>
                            <h5 className="coachTitle">OWNER / COACH</h5>
                    </div>
                    
                </div>
                <div className="coachTag"><h5>OWNER / COACH</h5></div>
            </div>
            <div className="coachBox coach1">
                <div className="coachOverlay text-center">
                    <div className="overlay-content py-5">
                            <h4 className="teko text-white coachName">MATT CHAN</h4>
                            <h5 className="coachTitle">OWNER / COACH</h5>
                    </div>
                    
                </div>
                <div className="coachTag"><h5>OWNER / COACH</h5></div>
            </div>
            <div className="coachBox coach1">
                <div className="coachOverlay text-center">
                    <div className="overlay-content py-5">
                            <h4 className="teko text-white coachName">MATT CHAN</h4>
                            <h5 className="coachTitle">OWNER / COACH</h5>
                    </div>
                    
                </div>
                <div className="coachTag"><h5>OWNER / COACH</h5></div>
            </div>
            <div className="coachBox coach1">
                <div className="coachOverlay text-center">
                    <div className="overlay-content py-5">
                            <h4 className="teko text-white coachName">MATT CHAN</h4>
                            <h5 className="coachTitle">OWNER / COACH</h5>
                    </div>
                    
                </div>
                <div className="coachTag"><h5>OWNER / COACH</h5></div>
            </div>
            <div className="coachBox coach1">
                <div className="coachOverlay text-center">
                    <div className="overlay-content py-5">
                            <h4 className="teko text-white coachName">MATT CHAN</h4>
                            <h5 className="coachTitle">OWNER / COACH</h5>
                    </div>
                    
                </div>
                <div className="coachTag"><h5>OWNER / COACH</h5></div>
            </div>
            <div className="coachBox coach1">
                <div className="coachOverlay text-center">
                    <div className="overlay-content py-5">
                            <h4 className="teko text-white coachName">MATT CHAN</h4>
                            <h5 className="coachTitle">OWNER / COACH</h5>
                    </div>
                    
                </div>
                <div className="coachTag"><h5>OWNER / COACH</h5></div>
            </div>
         
        </div>
    </section>
    <Footer />
  </>
);
}
}

export default Coaches
