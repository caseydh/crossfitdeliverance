import React from 'react';
import {Component} from 'react';
import { Link } from 'gatsby';
import '../style/pricing.scss';
import Layout from '../components/layout'
import '../components/header';
import Header from '../components/header';
import Footer from '../components/footer';
import background from '../images/stretch.jpg'
import Showcase from '../components/showcase';
import lines from '../images/lines.png'

class Pricing extends Component {
  render() {
    return(
  <>
    <Header color='white' />
    <Showcase background={background} name='PRICING' />
    {/* <img src={lines} className="lines4"/> */}
    <section id="about" className="container py-5 my-5 text-center">
            
            {/* <h2 className="teko">CROSSFIT</h2>
            <hr/> */}
            <div className="priceRow row flex-items-xs-middle flex-items-xs-center">

            <div className="col-xs-12 col-lg-4">
            <div className="card text-xs-center">
                <div className="card-header">
                <h3 className="display-2"><span className="currency">$</span>185<span className="period">/month</span></h3>
                </div>
                <div className="card-block">
                <h4 className="card-title"> 
                    Punch Card 10 Sessions
                </h4>
                <ul className="list-group">
                    <li className="list-group-item">10 Crossfit Classes</li>
                    <li className="list-group-item"><br/></li>
                    <li className="list-group-item"><br/></li>
                    <li className="list-group-item"><br/></li>
                </ul>
                </div>
            </div>
            </div>


            <div className="col-xs-12 col-lg-4">
            <div className="card text-xs-center">
                <div className="card-header">
                <h3 className="display-2"><span className="currency">$</span>209<span className="period">/month</span></h3>
                </div>
                <div className="card-block">
                <h4 className="card-title"> 
                    Unlimited Classes
                </h4>
                <ul className="list-group">
                    <li className="list-group-item">Unlimited Classes</li>
                    <li className="list-group-item">Quarterly Athlete Check In</li>
                    <li className="list-group-item"><br/></li>
                    <li className="list-group-item"><br/></li>
                </ul>
                </div>
            </div>
            </div>


            <div className="col-xs-12 col-lg-4">
            <div className="card text-xs-center">
                <div className="card-header">
                <h3 className="display-2"><span className="currency">$</span>475<span className="period">/month</span></h3>
                </div>
                <div className="card-block">
                <h4 className="card-title"> 
                    Gold Club Member
                </h4>
                <ul className="list-group">
                    <li className="list-group-item">Unlimited Classes</li>
                    <li className="list-group-item">4 - 1:1 30min Sessions</li>
                    <li className="list-group-item">1 - 1:1 60min Nutrition Consult</li>
                    <li className="list-group-item">Unlimited Fit 3d Scans</li>
                </ul>
                </div>
            </div>
            </div>

            </div>
            {/* <h2 className="teko mt-5">1-ON-1 COACHING</h2>
            <hr/> */}
            <div className="row flex-items-xs-middle flex-items-xs-center">

            <div className="col-xs-12 col-lg-4">
            <div className="card text-xs-center">
                <div className="card-header">
                <h3 className="display-2"><span className="currency">$</span>50<span className="period">/session</span></h3>
                </div>
                <div className="card-block">
                <h4 className="card-title"> 
                    30 Minute 1:1 Session
                </h4>
                <ul className="list-group">
                    <li className="list-group-item">10 Crossfit Classes</li>
                    <li className="list-group-item"><br/></li>
                    <li className="list-group-item"><br/></li>
                    <li className="list-group-item"><br/></li>
                </ul>
                </div>
            </div>
            </div>


            <div className="col-xs-12 col-lg-4">
            <div className="card text-xs-center">
                <div className="card-header">
                <h3 className="display-2"><span className="currency">$</span>85<span className="period">/session</span></h3>
                </div>
                <div className="card-block">
                <h4 className="card-title"> 
                    60 Minute 1:1 Session
                </h4>
                <ul className="list-group">
                    <li className="list-group-item">Unlimited Classes</li>
                    <li className="list-group-item">Quarterly Athlete Check In</li>
                    <li className="list-group-item"><br/></li>
                    <li className="list-group-item"><br/></li>
                </ul>
                </div>
            </div>
            </div>


            <div className="col-xs-12 col-lg-4">
            <div className="card text-xs-center">
                <div className="card-header">
                <h3 className="display-2"><span className="currency">$</span>249<span className="period"></span></h3>
                </div>
                <div className="card-block">
                <h4 className="card-title"> 
                    Fundementals
                </h4>
                <ul className="list-group">
                    <li className="list-group-item">First Month Of Crossfit</li>
                    <li className="list-group-item">5 - 1:1 30min Sessions</li>
                    <li className="list-group-item"><br/></li>
                    <li className="list-group-item"><br/></li>
                </ul>
                </div>
            </div>
            </div>

            </div>
    </section>
    <Footer />
  </>
);
}
}

export default Pricing
