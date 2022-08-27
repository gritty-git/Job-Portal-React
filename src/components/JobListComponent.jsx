import jobProfile from "./../images/job profile.png"

import { statusToText } from "../filterFunctions"

export default function JobListComponent({ job }) {
    return (
        <div className="job-list-component">
            <img className="job-image" src={jobProfile} />
            <div className="Job-mini-container">
                <h5 style={{ "marginBottom": "0", }}>{job.title}</h5>
                <span style={{ "fontWeight": "600", "width": "12%", "fontSize": "14px", "lineHeight": "20px" }}>({job.type})</span>
                <span style={{ "fontSize": "14px", "color": "rgb(56, 80, 117)", "marginBottom": "0.2rem" }}>{job.company}</span>
                <span style={{ "fontWeight": "600", "fontSize": "14px", "lineHeight": "20px" }}>{statusToText(job.status_code)}</span>
            </div>
            <span style={{ "fontWeight": "600", "width": "12%", "fontSize": "14px", "lineHeight": "20px" }}>{job.location}</span>
        </div>
    )
}