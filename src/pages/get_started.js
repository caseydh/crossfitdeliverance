import React from 'react';
import {Component} from 'react';
import { Link } from 'gatsby';
import '../components/header';
import Header from '../components/header';
import Footer from '../components/footer';
import background from '../images/showcase.jpg'
import Showcase from '../components/showcase';
import '../style/get_started.scss'

class Start extends Component {

  handleClick(){
    console.log('hi');
  }

  render() {
    
    return(
  <>
    <Header color='white'/>
    <Showcase background={background} name='START TODAY'/>
      <section id="get_started" className='container py-5 my-5'>
        <h2 className="teko my-5">HAVE YOU DONE CROSSFIT BEFORE?</h2>
        <p>Welcome to the MisFit Athletics. The mission of this site is to provide all-inclusive programming to competitive athletes. You are asked to be exceptional at an overwhelming amount of disciplines in this sport and because of that there cannot be a one size fits all program. Plain and simple any claims to having such a program are bullshit. We have created a variable programming style to help blunt this predicament (which is explained below). The program you see under the first two tabs of each post is written for regionals level athletes and their direct competition (top 100 or so in each region). The weights, movements, times, reps, and volume are what is carefully chosen by us for these athletes. If you do not fall under that category you still have a few options. The easy answer is always to scale. Scale the weights, movements, times, reps, and volume in an effort to prioritize intensity. It will work. Your other options fall under the Garage Gym Athlete Program and our Remote Coaching options.</p>
        <p>During the offseason (August-February) you will see the new blog posts the night before each training day. We rest on Thursdays and Sundays during this time of year. Another thing to pay attention to but not to obsess about is our schedule of cycle’s throughout the year. Beginning after the Games each year we start back over on Cycle 1 and continue up to the open through Cycle 4. These cycle’s are just as much for our planning as they are for your benefit. If you happen upon the site in season, or during the middle of a cycle, jump right in. We will always suggest an athlete be as close to the current post as possible.</p>
        <p>Now on to the variable programming style description. As you see listed below we have a number of categories laid out on most days. You will see at the top of the posts what we ask to be mandatory pieces for the day. These are the non-negotiable aspects of our program each cycle and should be your priority. Below the mandatory list you will see more options which we ask you to either choose one or two extra pieces from. This is how MisFit Athletics ensures that you are getting a program that forces you to work on what you really need to work on. If you are honest with yourself, these extra pieces are really what will tie this all together for you.</p>
        <h2 className="teko my-5">OUR FOUNDATIONS COURSE</h2>
        <p>During the offseason (August-February) you will see the new blog posts the night before each training day. We rest on Thursdays and Sundays during this time of year. Another thing to pay attention to but not to obsess about is our schedule of cycle’s throughout the year. Beginning after the Games each year we start back over on Cycle 1 and continue up to the open through Cycle 4. These cycle’s are just as much for our planning as they are for your benefit. If you happen upon the site in season, or during the middle of a cycle, jump right in. We will always suggest an athlete be as close to the current post as possible.</p>
        <p>Now on to the variable programming style description. As you see listed below we have a number of categories laid out on most days. You will see at the top of the posts what we ask to be mandatory pieces for the day. These are the non-negotiable aspects of our program each cycle and should be your priority. Below the mandatory list you will see more options which we ask you to either choose one or two extra pieces from. This is how MisFit Athletics ensures that you are getting a program that forces you to work on what you really need to work on. If you are honest with yourself, these extra pieces are really what will tie this all together for you.</p>
        <h2 className="teko my-5">MOVING FOREWARD</h2>
        <p>Welcome to the MisFit Athletics. The mission of this site is to provide all-inclusive programming to competitive athletes. You are asked to be exceptional at an overwhelming amount of disciplines in this sport and because of that there cannot be a one size fits all program. Plain and simple any claims to having such a program are bullshit. We have created a variable programming style to help blunt this predicament (which is explained below). The program you see under the first two tabs of each post is written for regionals level athletes and their direct competition (top 100 or so in each region). The weights, movements, times, reps, and volume are what is carefully chosen by us for these athletes. If you do not fall under that category you still have a few options. The easy answer is always to scale. Scale the weights, movements, times, reps, and volume in an effort to prioritize intensity. It will work. Your other options fall under the Garage Gym Athlete Program and our Remote Coaching options.</p>
        <ul>
          <li>Hyrdation is key for performance.</li>
          <li>Focuing on nutrition and what to eat.</li>
          <li>Building strength takes time.</li>
          <li>Setting goals and sticking to them is important.</li>
          <li>Use ROMWOD to improve your mobility and increase duriabilty.</li>
        </ul>
      </section>
    <Footer />
  </>
);
}
}

export default Start;
