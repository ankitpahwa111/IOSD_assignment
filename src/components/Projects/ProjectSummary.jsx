import React from 'react';
import moment from 'moment';
import { Avatar, Card } from "antd";
import 'antd/dist/antd.css';
const { Meta } = Card;
const ProjectSummary = (props) => {
    console.log(props)
    return (
      
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <div className="row">
                        <Avatar size={40} src="https://avatars2.githubusercontent.com/u/32906809?s=460&u=4285e5bbc385e2177c342e1293f24492ec381746&v=4" className="col m4"/>
                        <Meta title="Ankit Pahwa" description = {moment(props.project.createdAt.toDate()).calendar()}/>
                    </div>
                    {/* <p className="grey-text">{moment(props.project.createdAt.toDate()).calendar()}</p> */}
                    {/* <span className="card-title ">{props.project.title}</span> */}
                    {/* <p>Posted by {props.project.authorFirstName} {props.project.authorLastName}</p> */}
                    <br/>
                    <p>
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure), to help people create their product prototypes beautifully
                        and efficiently.
                    </p>
                </div>
            </div>

    )
}
// const mapStateToProps=(state)=>{
//     return {
//         profile : state.firebase.profile
//     }
// }
export default ProjectSummary;