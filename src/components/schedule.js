import React, { Component } from 'react'

export default class Schedule extends Component {
  render() {
    return (
    <>
    {/* Schedule  */}
    <section id="schedule" className="py-5">
        <h1 className="display-3 text-center text-white my-5 teko">CLASS SCHEDULE</h1>

        {/* <!-- Schedule Table --> */}
        <table className="mx-auto py-5">
                <thead id="#thead">
                    <tr>
                        <th></th>
                        <th>MONDAY</th>
                        <th>TUESDAY</th>
                        <th>WEDNESDAY</th>
                        <th>THURSDAY</th>
                        <th>FRIDAY</th>
                        <th>SATURDAY</th>
                        <th>SUNDAY</th>
                    </tr>
                </thead>
            </table>
    </section>


    {/* Mobile Schedule */}
    <section id="mobileSchedule" className="py-5 my-3">
            <h3 className="display-5 text-center my-5 teko">CLASS SCHEDULE</h3>
            
                <div className="listBox container px-5 py-5">
                    <ul id="mainList">
                        <ul id="monday">
                            <li><h4 className="py-4">MONDAY</h4></li>
                        </ul>
                        <ul id="tuesday">
                            <li><h4 className="py-4">TUESDAY</h4></li>
                        </ul>
                        <ul id="wednesday">
                            <li><h4 className="py-4">WEDNESDAY</h4></li>
                        </ul>
                        <ul id="thursday">
                            <li><h4 className="py-4">THURSDAY</h4></li>
                        </ul>
                        <ul id="friday">
                            <li><h4 className="py-4">FRIDAY</h4></li>
                        </ul>
                        <ul id="saturday">
                            <li><h4 className="py-4">SATURDAY</h4></li>
                        </ul>
                        <ul id="sunday">
                            <li><h4 className="py-4">SUNDAY</h4></li>
                        </ul>
                    </ul> 
                </div>
    </section>
    </>
    )
  }
}
