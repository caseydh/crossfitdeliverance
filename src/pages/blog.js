import React from 'react';
import {Component} from 'react';
import { Link } from 'gatsby';
import '../components/header';
import Header from '../components/header';
import Footer from '../components/footer';
import background from '../images/showcase.jpg'
import Showcase from '../components/showcase';

class Blog extends Component {

  handleClick(){
    console.log('hi');
  }

  render() {
    
    return(
  <>
    <Header />
    <Showcase background={background} name='BLOG'/>
    <Footer />
  </>
);
}
}

export default Blog;