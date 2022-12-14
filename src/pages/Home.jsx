import { Link } from "react-router-dom";
import userProfile from "./../images/user profile.jpg";
import jobData from "./../data.json";
import { findNotApplied, recentApplied } from "./../filterFunctions";
import JobModal from "../components/JobModal";


export default function Home() {
    const UserName = "M Soumya Prakash Sahoo";
    const Profile = "Web/Software Development";
    const userLocation = "Bhubaneswar";
    const [notApplied1, notApplied2] = findNotApplied(jobData);
    const [recentApplied1, recentApplied2] = recentApplied(jobData);
    return (
        <>
            <div className="welcome-container">
                <div className="user">
                    <img src={userProfile} className="profile-img" />
                    <div className="text-detail">
                        <h3> {UserName}</h3>
                        <p><b>Profile : {Profile}</b></p>
                        <p>{userLocation}</p>
                    </div>

                </div>
                <div className="profile-faqs">
                    <Link to="/profile">View Profile</Link>
                    <Link to="/faqs">View FAQs</Link>
                </div>

            </div>

            <div className="home-applied-container">

                <h3>Recently Applied Jobs</h3>
                <JobModal job={recentApplied1} />
                <JobModal job={recentApplied2} />
                <div style={{ "display": "flex", "justifyContent": "center", "alignItems": "center", "flexDirection": "row", "margin": "auto" }}>
                    <Link to="/search/" state={{ status_code: [1, 2], jobLocation: "" }}>See more applied jobs</Link>
                </div>

                <div style={{ backgroundColor: "#61dafb", width: "100%", height: "0.1rem" }}></div>

                <h3>Opportunities</h3>
                <JobModal job={notApplied1} />
                <JobModal job={notApplied2} />
                <div style={{ "display": "flex", "justifyContent": "center", "alignItems": "center", "flexDirection": "row", "margin": "auto" }}>
                    <Link to="/search/" state={{ status_code: [0], jobLocation: "" }}>See more opportunities</Link>
                </div>

            </div>
        </>
    )

}