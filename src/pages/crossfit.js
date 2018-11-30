import React from 'react';
import {Component} from 'react';
import { Link } from 'gatsby';
import '../style/showcase.scss';
import Layout from '../components/layout'
import '../components/header';
import Header from '../components/header';
import Footer from '../components/footer';
import Accordion from '../components/accordion';
import background from '../images/support.jpg'
import stairs from '../images/stretch.jpg'
import a from '../images/1.jpg'
import b from '../images/4.jpg'
import c from '../images/3.jpg'
import d from '../images/5.jpg'
import Showcase from '../components/showcase';

class Crossfit extends Component {

  handleClick(){
    console.log('hi');
  }

  render() {
    let data = [
    	{
        title: "What if I haven't done crossfit before?", 
        content: `Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis 
                  nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit 
                  in voluptate velit esse cillum dolore 
                  eu fugiat nulla pariatur. Excepteur 
                  sint occaecat cupidatat non proident, 
                  sunt in culpa qui officia deserunt 
                  mollit anim id est laborum.`
      }, {
        title: "Should I get in better shape before I start crossfit?", 
        content: `Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis 
                  nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit 
                  in voluptate velit esse cillum dolore 
                  eu fugiat nulla pariatur. Excepteur 
                  sint occaecat cupidatat non proident, 
                  sunt in culpa qui officia deserunt 
                  mollit anim id est laborum.`
      },{
        title: "What is the best way to get started in crossfit?", 
        content: `Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis 
                  nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit 
                  in voluptate velit esse cillum dolore 
                  eu fugiat nulla pariatur. Excepteur 
                  sint occaecat cupidatat non proident, 
                  sunt in culpa qui officia deserunt 
                  mollit anim id est laborum.`
      }
    ];
    
    return(
  <>
    <Header color='white'/>
    <Showcase background={background} name='CROSSFIT' />

    <section id="about" className="container py-5 my-5">
        <div className="row">
            <div className="col-md-8">
                <img src={stairs} className="img-responsive left-column-img"/>
                <h2 className="teko my-4">CROSSFIT</h2>
                <p className="secondary">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Aenean imperdiet</p>
                <br/>
                <p className="secondary">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Aenean imperdiet</p>
                <h2 className="teko my-5">COMMON QUESTIONS</h2>
                <Accordion data={data} />
            </div>
            
            <div className="col-md-4">
                <h3>LATEST POST</h3>
                <hr/>
                <div className="latest-post">
                    <div className="crop d-inline-block">
                            <img src={d} />
                    </div>
                    <div className="d-inline-block text-center">
                       <h5 className="teko">ABDOMINAL BRACING</h5>
                        <p>October 19, 2018</p>
                    </div>
                    <hr/>   
                </div>
                <div className="latest-post">
                    <div className="crop d-inline-block">
                            <img src={c} />
                    </div>
                    <div className="d-inline-block text-center">
                       <h5 className="teko">ABDOMINAL BRACING</h5>
                        <p>October 19, 2018</p>
                    </div>
                    <hr/>   
                </div>
                <div className="latest-post">
                    <div className="crop d-inline-block">
                            <img src={a} />
                    </div>
                    <div className="d-inline-block text-center">
                       <h5 className="teko">ABDOMINAL BRACING</h5>
                        <p>October 19, 2018</p>
                    </div>
                    <hr/>   
                </div>
                <div className="latest-post">
                    <div className="crop d-inline-block">
                            <img src={b} />
                    </div>
                    <div className="d-inline-block text-center">
                       <h5 className="teko">ABDOMINAL BRACING</h5>
                        <p>October 19, 2018</p>
                    </div>
                    <hr/>   
                </div>
            </div> 
            </div> 
    </section>
    <Footer />
  </>
);
}
}

export default Crossfit
