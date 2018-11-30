import React from 'react';
import { Link } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/index.scss';
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import lines from '../images/lines.png'
import logo from '../images/logo.png'
import water from '../images/water.png'
import planning from '../images/planning.png'
import health from '../images/health.png'
import barbell from '../images/barbell.png'
import moment from 'moment';



const IndexPage = () => (
  <>
    <Header color='black' />
    {/* <!-- Showcase --> */}
      <section id="showcaseIndex" className="pt-5">
        <img src={lines} className="lines slide-in"/>
        <div> 
            <div className="container">
                <div className="row">
                        <div className="col-lg-6">
                            <h1 className="display-2 mt-5 zero fade-in teko">
                                 CROSSFIT <br/>
                                 DELIVERANCE
                            </h1>
                            <button className="primary-button zero fade-in">START TODAY <i className="fa fa-arrow-right"></i></button>
                        </div>
                        <img src={logo} className='large_logo' />
                </div>                  
            </div>
        </div>
    </section>

    {/* <!-- Class Grid --> */}
    <section id="class-grid">
            <div className="box a"></div>
            <div className="box b">
                <div className="container mt-4 px-5">
                    <p className="primary teko">FITNESS</p>
                    <br/>
                    <h3 className="text-white teko">CROSSFIT</h3>
                    <br/>
                    <p className="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <br/>
                    <Link to="/crossfit" className="read-link">
                        READ MORE <i className="fa fa-arrow-right"></i>
                    </Link>
                </div>
            </div>
            <div className="box c"></div>
            <div className="box d">
                <div className="container mt-4 px-5">
                    <p className="primary teko">PERSONALIZED</p>
                    <br/>
                    <h3 className="text-white teko">1-ON-1 COACHING</h3>
                    <br/>
                    <p className="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <br/>
                    <Link to="/training" className="read-link">
                        READ MORE <i className="fa fa-arrow-right"></i>
                    </Link>
                </div>
            </div>
            <div className="box e">
                <div className="container mt-4 px-5">
                    <p className="teko">HEALTH</p>
                    <br/>
                    <h3 className="text-white teko">NUTRITION</h3>
                    <br/>
                    <p className="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <br/>
                    <Link to="/nutrition" className="read-link">
                        READ MORE <i className="fa fa-arrow-right"></i>
                    </Link>
                </div>
            </div>
            <div className="box f"></div>
            <div className="box g">
                <div className="container mt-4 px-5">
                    <p className="teko">EXPIRTISE</p>
                    <br/>
                    <h3 className="text-white teko">SEMINARS</h3>
                    <br/>
                    <p className="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <br/>
                    <Link to="/seminars" className="read-link">
                        READ MORE <i className="fa fa-arrow-right"></i>
                    </Link>
                </div>
            </div>
            <div className="box h"></div>
    </section>

    {/* <!-- About --> */}
    <section id="about">
        <div className="photo-box">
            <img src={lines} className="lines2"/>
            <img src={logo} className="logo2"/>
        </div>
        <div> 
            <div className="container py-5">
                    <div className="text-center py-5">
                        <h1 className="display-3 zero fade-in teko">
                            BECOME FIT FOR LIFE
                        </h1>
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nam placeat molestiae commodi dolores officia nemo cumque, alias atque. Dolor optio alias iusto provident, molestias debitis ullam culpa magnam. Laboriosam asperiores quod quia reiciendis earum minus, molestiae maxime animi eaque?<br/><br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi recusandae iusto qui fugit tenetur dolorum officia, asperiores deserunt accusamus atque ipsam enim dolor temporibus explicabo ad. Eligendi, a eaque. Repellendus fugit officiis aperiam dolorem at.</p>
                    </div>                 
            </div>
        </div>
    </section>
  
    {/* Gym Benefits */}
    <section id="benefits" className="py-5">
            {/* <!-- <img src="img/lines.png" className="lines3 slide-in"> --> */}
            <div className="container text-center py-5">
                <h1 className="display-3 teko">BECOME FIT FOR LIFE</h1>
                <p className="secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id sed ab, nostrum, doloremque mollitia architecto molestias rerum ipsam accusantium sint velit eligendi. Nisi rem, placeat eligendi nobis praesentium quibusdam alias.</p>
                <div className="row py-5">
                    <div className="col-md-3">
                            <img src={barbell}/>
                            <h5>EQUIPMENT</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, distinctio.</p>
                    </div>
                    <div className="col-md-3">
                            <img src={health}/>
                            <h5>EQUIPMENT</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, distinctio.</p>
                    </div>
                    <div className="col-md-3">
                            <img src={planning}/>
                            <h5>EQUIPMENT</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, distinctio.</p>
                    </div>
                    <div className="col-md-3">
                            <img src={water}/>
                            <h5>EQUIPMENT</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, distinctio.</p>
                    </div>
                </div>
            </div>
    
    </section>
    <Footer/>
  </>
)

// moment.suppressDeprecationWarnings = true; 

// let curr = new Date; // get current date
// let first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
// let firstday = new Date(curr.setDate(first));
// let dateString = firstday.getFullYear() + '-' + (firstday.getMonth() + 1) + '-' + parseInt(firstday.getDate());
// let now = moment(dateString);
// now = now.add(1,"days");
// let dateArray=[]

// console.log(dateArray);

// let crossfit = {
//     Sunday:[],
//     Monday:[],
//     Tuesday:[],
//     Wednesday:[],
//     Thursday:[],
//     Friday:[],
//     Saturday:[],

// }

// for(let i=0;i<7;i++){
//     dateArray.push(now.format('L'));
//     now = now.add(1,"days");

// }

// let counter = 0;
// function loadSchedule(apiKey, date, i) { 
//     let day = "";
//     switch(i){
//         case 0:
//             day = 'Monday';
//             break;
//         case 1:
//             day = 'Tuesday';
//             break;
//         case 2:
//             day = 'Wednesday';
//             break;
//         case 3:
//             day = 'Thursday';
//             break;
//         case 4:
//             day = 'Friday';
//             break;
//         case 5:
//             day = 'Saturday';
//             break;
//         case 6:
//             day = 'Sunday';
//             break;
        
//     }
//     $.ajax({ 
//         url: 'http://app.wodify.com/API/Classes_v1.aspx', 
//         data: {
//             apiKey: apiKey,
//             date: date, 
//             type: "json",
//         },  
//         dataType: "json",  
//         success: function(data){  
//             if(data) {
//                 data.RecordList.Class.forEach(x =>{
//                     switch(x.ProgramName){
                        
//                         case "CrossFit":
//                         case "Competitive Programing":
//                         case "Open Gym":
//                         case "OUTLAST":
//                             crossfit[day].push(x);
//                             break;
//                     }
//                 });
//             } 
//             counter++;
//             if(counter < 7) loadSchedule('vtaR6x7gTaDT21oOgt4LDsHbd', dateArray[counter], counter);
            
//             if(day == "Saturday"){
//                 buildCrossfit(crossfit);
//                 buildMobile(crossfit);    
//             } 
//         }  
//     });  
// }
// loadSchedule('vtaR6x7gTaDT21oOgt4LDsHbd', dateArray[counter], counter);


// console.log(crossfit);

// let crossfitTable = document.createElement('tbody');

// function buildCrossfit(obj){
//     let times = ["5.00","6.00","8.00","9.00","10.00","10.15","12.00","13.00","15.30","16.00","17.00","17.30","18.30","19.00","20.00"];
//     let timeCheck = ["05:00:00","06:00:00","08:00:00","09:00:00","10:00:00","10:15:00","12:00:00","13:00:00","15:30:00","16:00:00","17:00:00","17:30:00","18:30:00","19:00:00","20:00:00"]
//     for(let i=0;i<times.length;i++){
//         var tr = document.createElement("tr");
//         for(let j=0;j<8;j++){
//             let td = "";
//             let endtime = "";
//             let coach = "";
//                 if(j==0){
//                     td = document.createElement("td");
//                     td.innerHTML = "<h3 class='times'>"+ times[i] + "</h3>";
//                     tr.appendChild(td);
//                 }else if (j==1){
//                     let arr = obj.Monday;
//                     td = document.createElement("td");
//                     for(let z=0;z<15;z++){
//                         if(arr[z]){
//                             if(arr[z].StartTime == timeCheck[i]){
//                                 if(arr[z].Coaches.APICoach.Name == undefined){
//                                     coach = ""
//                                 }
//                                 else{
//                                     coach = arr[z].Coaches.APICoach.Name
//                                 }
//                                 endtime = new Date(arr[z].EndDateTime)
//                                 endtime = endtime.getHours() +"."+ endtime.getMinutes();
//                                 if(endtime.length <= 4){
//                                     endtime += "0";
//                                 }
//                                 if(arr[z].ProgramName == "CrossFit"){
//                                     td.innerHTML = "<h3 class='crossfit'>CrossFit</h3> <h4 class='time'>"+times[i]+" - "+ endtime + "</h4><h4 class='coach'>" + coach +"</h4>";
//                                 }
//                                 else if(arr[z].ProgramName == "OUTLAST"){
//                                     td.innerHTML = "<h3 class='outlast'>Outlast</h3> <h4 class='time'>"+times[i]+" - "+ endtime + "</h4><h4 class='coach'>" + coach +"</h4>";
//                                 }
//                                 else if(arr[z].ProgramName == "Open Gym"){
//                                     td.innerHTML = "<h3 class='opengym'>Open Gym</h3> <h4 class='time'>"+times[i]+" - "+ endtime + "</h4><h4 class='coach'>" + coach +"</h4>";
//                                 }
//                                 else{
//                                     td.innerHTML = "<h3 class='comp'>Competitive</h3> <h4 class='time'>"+times[i]+" - "+ endtime + "</h4><h4 class='coach'>" + coach +"</h4>";
//                                 }  
//                             }
//                         }
//                         tr.appendChild(td);
//                     }
                     
//                 }else if(j==2){
//                     let arr = obj.Tuesday;
//                     td = document.createElement("td");
//                     for(let z=0;z<15;z++){
//                         if(arr[z]){
//                             if(arr[z].StartTime == timeCheck[i]){
//                                 if(arr[z].Coaches.APICoach.Name == undefined){
//                                     coach = ""
//                                 }
//                                 else{
//                                     coach = arr[z].Coaches.APICoach.Name
//                                 }
//                                 endtime = new Date(arr[z].EndDateTime)
//                                 endtime = endtime.getHours() +"."+ endtime.getMinutes();
//                                 if(endtime.length <= 4){
//                                     endtime += "0";
//                                 }
//                                 if(arr[z].ProgramName == "CrossFit"){
//                                     td.innerHTML = "<h3 class='crossfit'>CrossFit</h3> <h4 class='time'>"+times[i]+" - "+ endtime + "</h4><h4 class='coach'>" + coach +"</h4>";
//                                 }
//                                 else if(arr[z].ProgramName == "OUTLAST"){
//                                     td.innerHTML = "<h3 class='outlast'>Outlast</h3> <h4 class='time'>"+times[i]+" - "+ endtime + "</h4><h4 class='coach'>" + coach +"</h4>";
//                                 }
//                                 else if(arr[z].ProgramName == "Open Gym"){
//                                     td.innerHTML = "<h3 class='opengym'>Open Gym</h3> <h4 class='time'>"+times[i]+" - "+ endtime + "</h4><h4 class='coach'>" + coach +"</h4>";
//                                 }
//                                 else{
//                                     td.innerHTML = "<h3 class='comp'>Competitive</h3> <h4 class='time'>"+times[i]+" - "+ endtime + "</h4><h4 class='coach'>" + coach +"</h4>";
//                                 }
                                
//                             }
//                         }
//                         tr.appendChild(td);
//                     }
                     
//                 }else if(j==3){
//                     let arr = obj.Wednesday;
//                     td = document.createElement("td");
//                     for(let z=0;z<15;z++){
//                         if(arr[z]){
//                             if(arr[z].StartTime == timeCheck[i]){
//                                 if(arr[z].Coaches.APICoach.Name == undefined){
//                                     coach = ""
//                                 }
//                                 else{
//                                     coach = arr[z].Coaches.APICoach.Name
//                                 }
//                                 endtime = new Date(arr[z].EndDateTime)
//                                 endtime = endtime.getHours() +"."+ endtime.getMinutes();
//                                 if(endtime.length <= 4){
//                                     endtime += "0";
//                                 }
//                                 if(arr[z].ProgramName == "CrossFit"){
//                                     td.innerHTML = "<h3 class='crossfit'>CrossFit</h3> <h4 class='time'>"+times[i]+" - "+ endtime + "</h4><h4 class='coach'>" + coach +"</h4>";
//                                 }
//                                 else if(arr[z].ProgramName == "OUTLAST"){
//                                     td.innerHTML = "<h3 class='outlast'>Outlast</h3> <h4 class='time'>"+times[i]+" - "+ endtime + "</h4><h4 class='coach'>" + coach +"</h4>";
//                                 }
//                                 else if(arr[z].ProgramName == "Open Gym"){
//                                     td.innerHTML = "<h3 class='opengym'>Open Gym</h3> <h4 class='time'>"+times[i]+" - "+ endtime + "</h4><h4 class='coach'>" + coach +"</h4>";
//                                 }
//                                 else{
//                                     td.innerHTML = "<h3 class='comp'>Competitive</h3> <h4 class='time'>"+times[i]+" - "+ endtime + "</h4><h4 class='coach'>" + coach +"</h4>";
//                                 }
                                
//                             }
//                         }
//                         tr.appendChild(td);
//                     }
                     
//                 }else if(j==4){
//                     let arr = obj.Thursday;
//                     td = document.createElement("td");
//                     for(let z=0;z<15;z++){
//                         if(arr[z]){
//                             if(arr[z].StartTime == timeCheck[i]){
//                                 if(arr[z].Coaches.APICoach == undefined || arr[z].Coaches.APICoach.Name == undefined){
//                                     coach = ""
//                                 }
//                                 else{
//                                     coach = arr[z].Coaches.APICoach.Name
//                                 }
//                                 endtime = new Date(arr[z].EndDateTime)
//                                 endtime = endtime.getHours() +"."+ endtime.getMinutes();
//                                 if(endtime.length <= 4){
//                                     endtime += "0";
//                                 }
//                                 if(arr[z].ProgramName == "CrossFit"){
//                                     td.innerHTML = "<h3 class='crossfit'>CrossFit</h3> <h4 class='time'>"+times[i]+" - "+ endtime + "</h4><h4 class='coach'>" + coach +"</h4>";
//                                 }
//                                 else if(arr[z].ProgramName == "OUTLAST"){
//                                     td.innerHTML = "<h3 class='outlast'>Outlast</h3> <h4 class='time'>"+times[i]+" - "+ endtime + "</h4><h4 class='coach'>" + coach +"</h4>";
//                                 }
//                                 else if(arr[z].ProgramName == "Open Gym"){
//                                     td.innerHTML = "<h3 class='opengym'>Open Gym</h3> <h4 class='time'>"+times[i]+" - "+ endtime + "</h4><h4 class='coach'>" + coach +"</h4>";
//                                 }
//                                 else{
//                                     td.innerHTML = "<h3 class='comp'>Competitive</h3> <h4 class='time'>"+times[i]+" - "+ endtime + "</h4><h4 class='coach'>" + coach +"</h4>";
//                                 }
                                
//                             }
//                         }
//                         tr.appendChild(td);
//                     }
                     
//                 }else if(j==5){
//                     let arr = obj.Friday;
//                     td = document.createElement("td");
//                     for(let z=0;z<15;z++){
//                         if(arr[z]){
//                             if(arr[z].StartTime == timeCheck[i]){
//                                 if(arr[z].Coaches.APICoach == undefined || arr[z].Coaches.APICoach.Name == undefined){
//                                     coach = ""
//                                 }
//                                 else{
//                                     coach = arr[z].Coaches.APICoach.Name
//                                 }
//                                 endtime = new Date(arr[z].EndDateTime)
//                                 endtime = endtime.getHours() +"."+ endtime.getMinutes();
//                                 if(endtime.length <= 4){
//                                     endtime += "0";
//                                 }
//                                 if(arr[z].ProgramName == "CrossFit"){
//                                     td.innerHTML = "<h3 class='crossfit'>CrossFit</h3> <h4 class='time'>"+times[i]+" - "+ endtime + "</h4><h4 class='coach'>" + coach +"</h4>";
//                                 }
//                                 else if(arr[z].ProgramName == "OUTLAST"){
//                                     td.innerHTML = "<h3 class='outlast'>Outlast</h3> <h4 class='time'>"+times[i]+" - "+ endtime + "</h4><h4 class='coach'>" + coach +"</h4>";
//                                 }
//                                 else if(arr[z].ProgramName == "Open Gym"){
//                                     td.innerHTML = "<h3 class='opengym'>Open Gym</h3> <h4 class='time'>"+times[i]+" - "+ endtime + "</h4><h4 class='coach'>" + coach +"</h4>";
//                                 }
//                                 else{
//                                     td.innerHTML = "<h3 class='comp'>Competitive</h3> <h4 class='time'>"+times[i]+" - "+ endtime + "</h4><h4 class='coach'>" + coach +"</h4>";
//                                 }
//                             }
//                         }
//                         tr.appendChild(td);
//                     }
                     
//                 }else if(j==6){
//                     let arr = obj.Saturday;
//                     td = document.createElement("td");
//                     for(let z=0;z<15;z++){
//                         if(arr[z]){
//                             if(arr[z].StartTime == timeCheck[i]){
//                                 if(arr[z].Coaches.APICoach == undefined || arr[z].Coaches.APICoach.Name == undefined){
//                                     coach = ""
//                                 }
//                                 else{
//                                     coach = arr[z].Coaches.APICoach.Name
//                                 }
//                                 endtime = new Date(arr[z].EndDateTime)
//                                 endtime = endtime.getHours() +"."+ endtime.getMinutes();
//                                 if(endtime.length <= 4){
//                                     endtime += "0";
//                                 }
//                                 if(arr[z].ProgramName == "CrossFit"){
//                                     td.innerHTML = "<h3 class='crossfit'>CrossFit</h3> <h4 class='time'>"+times[i]+" - "+ endtime + "</h4><h4 class='coach'>" + coach +"</h4>";
//                                 }
//                                 else if(arr[z].ProgramName == "OUTLAST"){
//                                     console.log("outlast")
//                                     td.innerHTML = "<h3 class='outlast'>Outlast</h3> <h4 class='time'>"+times[i]+" - "+ endtime + "</h4><h4 class='coach'>" + coach +"</h4>";
//                                 }
//                                 else if(arr[z].ProgramName == "Open Gym"){
//                                     td.innerHTML = "<h3 class='opengym'>Open Gym</h3> <h4 class='time'>"+times[i]+" - "+ endtime + "</h4><h4 class='coach'>" + coach +"</h4>";
//                                 }
//                                 else{
//                                     td.innerHTML = "<h3 class='comp'>Competitive</h3> <h4 class='time'>"+times[i]+" - "+ endtime + "</h4><h4 class='coach'>" + coach +"</h4>";
//                                 }
//                             }
//                         }
//                         tr.appendChild(td);
//                     }
                     
//                 }else if(j==7){
//                     let arr = obj.Sunday;
//                     td = document.createElement("td");
//                     for(let z=0;z<15;z++){
//                         if(arr[z]){
//                             if(arr[z].StartTime == timeCheck[i]){
//                                 if(arr[z].Coaches.APICoach == undefined || arr[z].Coaches.APICoach.Name == undefined){
//                                     coach = ""
//                                 }
//                                 else{
//                                     coach = arr[z].Coaches.APICoach.Name
//                                 }
//                                 endtime = new Date(arr[z].EndDateTime)
//                                 endtime = endtime.getHours() +"."+ endtime.getMinutes();
//                                 if(endtime.length <= 4){
//                                     endtime += "0";
//                                 }
//                                 if(arr[z].ProgramName == "CrossFit"){
//                                     td.innerHTML = "<h3 class='crossfit'>CrossFit</h3> <h4 class='time'>"+times[i]+" - "+ endtime + "</h4><h4 class='coach'>" + coach +"</h4>";
//                                 }
//                                 else if(arr[z].ProgramName == "OUTLAST"){
//                                     console.log("outlast")
//                                     td.innerHTML = "<h3 class='outlast'>Outlast</h3> <h4 class='time'>"+times[i]+" - "+ endtime + "</h4><h4 class='coach'>" + coach +"</h4>";
//                                 }
//                                 else if(arr[z].ProgramName == "Open Gym"){
//                                     td.innerHTML = "<h3 class='opengym'>Open Gym</h3> <h4 class='time'>"+times[i]+" - "+ endtime + "</h4><h4 class='coach'>" + coach +"</h4>";
//                                 }
//                                 else{
//                                     td.innerHTML = "<h3 class='comp'>Competitive</h3> <h4 class='time'>"+times[i]+" - "+ endtime + "</h4><h4 class='coach'>" + coach +"</h4>";
//                                 }
//                             }
//                         }
//                         tr.appendChild(td);
//                     }
                     
//                 }
                     
//         }
//         crossfitTable.append(tr);
//     }
//     $("table").append(crossfitTable);
// }

// function buildMobile(obj){
//     let times = ["5.00","6.00","8.00","9.00","10.00","10.15","12.00","13.00","15.30","16.00","17.00","17.30","18.30","19.00","20.00"];
//     let timeCheck = ["05:00:00","06:00:00","08:00:00","09:00:00","10:00:00","10:15:00","12:00:00","13:00:00","15:30:00","16:00:00","17:00:00","17:30:00","18:30:00","19:00:00","20:00:00"]
//     let endtime = "";
//     let start = "";

//     obj.Monday.forEach( (x) => {
//         endtime = new Date(x.EndDateTime)
//         endtime = endtime.getHours() +"."+ endtime.getMinutes();
//         if(endtime.length <= 4){
//             endtime += "0";
//         }
        
//         start = new Date(x.StartDateTime)
//         start = start.getHours() +"."+ start.getMinutes();
//         if(start.length <= 4){
//             start += "0";
//         }
        
//         if(x.ProgramName == "Competitive Programing"){
//             x.ProgramName = "Competitive"
//         }

//         $("#monday").append('<li class="classItem"><h5>'+ x.ProgramName +'</h5><h5 class="classTime">'+start+ ' - '+endtime+'</h5></li>');
//     });

//     obj.Tuesday.forEach( (x) => {
//         endtime = new Date(x.EndDateTime)
//         endtime = endtime.getHours() +"."+ endtime.getMinutes();
//         if(endtime.length <= 4){
//             endtime += "0";
//         }

//         start = new Date(x.StartDateTime)
//         start = start.getHours() +"."+ start.getMinutes();
//         if(start.length <= 4){
//             start += "0";
//         }

//         if(x.ProgramName == "Competitive Programing"){
//             x.ProgramName = "Competitive"
//         }

//         $("#tuesday").append('<li class="classItem"><h5>'+ x.ProgramName +'</h5><h5 class="classTime">'+start+ ' - '+endtime+'</h5></li>');
//     });

//     obj.Wednesday.forEach( (x) => {
//         endtime = new Date(x.EndDateTime)
//         endtime = endtime.getHours() +"."+ endtime.getMinutes();
//         if(endtime.length <= 4){
//             endtime += "0";
//         }

//         start = new Date(x.StartDateTime)
//         start = start.getHours() +"."+ start.getMinutes();
//         if(start.length <= 4){
//             start += "0";
//         }

//         if(x.ProgramName == "Competitive Programing"){
//             x.ProgramName = "Competitive"
//         }

//         $("#wednesday").append('<li class="classItem"><h5>'+ x.ProgramName +'</h5><h5 class="classTime">'+start+ ' - '+endtime+'</h5></li>');
//     });

//     obj.Thursday.forEach( (x) => {
//         endtime = new Date(x.EndDateTime)
//         endtime = endtime.getHours() +"."+ endtime.getMinutes();
//         if(endtime.length <= 4){
//             endtime += "0";
//         }

//         start = new Date(x.StartDateTime)
//         start = start.getHours() +"."+ start.getMinutes();
//         if(start.length <= 4){
//             start += "0";
//         }

//         if(x.ProgramName == "Competitive Programing"){
//             x.ProgramName = "Competitive"
//         }
        
//         $("#thursday").append('<li class="classItem"><h5>'+ x.ProgramName +'</h5><h5 class="classTime">'+start+ ' - '+endtime+'</h5></li>');
//     });

//     obj.Friday.forEach( (x) => {
//         endtime = new Date(x.EndDateTime)
//         endtime = endtime.getHours() +"."+ endtime.getMinutes();
//         if(endtime.length <= 4){
//             endtime += "0";
//         }

//         start = new Date(x.StartDateTime)
//         start = start.getHours() +"."+ start.getMinutes();
//         if(start.length <= 4){
//             start += "0";
//         }

//         if(x.ProgramName == "Competitive Programing"){
//             x.ProgramName = "Competitive"
//         }

//         $("#friday").append('<li class="classItem"><h5>'+ x.ProgramName +'</h5><h5 class="classTime">'+start+ ' - '+endtime+'</h5></li>');
//     });

//     obj.Saturday.forEach( (x) => {
//         endtime = new Date(x.EndDateTime)
//         endtime = endtime.getHours() +"."+ endtime.getMinutes();
//         if(endtime.length <= 4){
//             endtime += "0";
//         }

//         start = new Date(x.StartDateTime)
//         start = start.getHours() +"."+ start.getMinutes();
//         if(start.length <= 4){
//             start += "0";
//         }

//         if(x.ProgramName == "Competitive Programing"){
//             x.ProgramName = "Competitive"
//         }

//         $("#saturday").append('<li class="classItem"><h5>'+ x.ProgramName +'</h5><h5 class="classTime">'+start+ ' - '+endtime+'</h5></li>');
//     });

//     obj.Sunday.forEach( (x) => {
//         endtime = new Date(x.EndDateTime)
//         endtime = endtime.getHours() +"."+ endtime.getMinutes();
//         if(endtime.length <= 4){
//             endtime += "0";
//         }

//         start = new Date(x.StartDateTime)
//         start = start.getHours() +"."+ start.getMinutes();
//         if(start.length <= 4){
//             start += "0";
//         }

//         if(x.ProgramName == "Competitive Programing"){
//             x.ProgramName = "Competitive"
//         }

//         $("#sunday").append('<li class="classItem"><h5>'+ x.ProgramName +'</h5><h5 class="classTime">'+start+ ' - '+endtime+'</h5></li>');
//     });


// }

export default IndexPage
