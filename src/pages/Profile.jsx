import userProfile from "./../images/user profile.jpg";

export default function Profile() {
    const UserName = "M Soumya Prakash Sahoo";
    const Profile = "Web/Software Development";
    const userLocation = "Bhubaneswar";
    return <div className="welcome-container">
        <div className="user">
            <img src={userProfile} className="profile-img" />
            <div className="text-detail">
                <h3> {UserName}</h3>
                <p><b>Profile : {Profile}</b></p>
                <p>{userLocation}</p>
                <p>
                    I'm looking for an amazing software team experience and an opportunity to work with the best technologies being used currently in this industry from which I can learn and contribute.
                </p>
                <h5>Experience</h5>
                <h6>ServiceNow</h6>
                <p>
                    I created an app with React.js which would show the relevant unit functional and integration test results at a single place. I automated the running of scripts in the background which would allow users to get the required test results with a click of a button. I also implemented a feature to save and store the history of previous test results so that the progress for packages being developed could be monitored.
                </p>
                <h5>Education</h5>
                <h6 style={{ "marginBottom": "0" }}>Indian Institute of Technology(BHU), Varanasi</h6>
                <p>
                    Bachelor's, Electrical Engineering
                </p>
                <h5 style={{ "marginTop": "1rem" }}>Skills</h5>
                <ul >
                    <li>React</li>
                    <li>Full-Stack Web Development (Node/Redux/React)</li>
                    <li>MERN Stack - Javascript (ES5 & ES6), MongoDB, Express.Js, React, Node.Js</li>

                </ul>
            </div>

        </div>
        <div className="profile-faqs">
            <a href="www.linkedin.com/in/m-soumya-739bb31a0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
            </a>
        </div>


    </div>
}
