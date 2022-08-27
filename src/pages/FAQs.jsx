export default function FAQs() {

    return <>
        <div style={{ "display": "flex", "justifyContent": "center", "alignItems": "center", "flexDirection": "row", "margin": "auto" }}>
            <h1>FAQs</h1>
        </div>
        <div className="faq">
            <a data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                <div className="job-list-component">
                    <h4>What does each job application status mean?</h4>
                </div>
                <div class="collapse" id="collapseExample">
                    <div class="card card-body">
                        <text>
                            <ul>
                                <li><strong>Not Applied</strong> means you have never applied for this particular job.</li>
                                <li><strong>Applied (Pending)</strong> means you have submitted your application but there has ben no response from the company.</li>
                                <li><strong>Application Recieved</strong> means company has responded to your application for further screening/test.</li>
                                <li><strong>Accepted / Rejected</strong> means company has accepted / rejected you for the given role.</li>
                            </ul>
                        </text>
                    </div>
                </div>
            </a>
            <a data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1">
                <div className="job-list-component">
                    <h4>How to apply for a job?</h4>
                </div>
                <div class="collapse" id="collapseExample1">
                    <div class="card card-body">
                        <text>
                            For every job, carefully read the job description and ensure that your and company's needs are met from each other. See the requirements and make sure that you have similar work experience in the fields required by the company. Don't apply randomly as it will be a waste of your's as well as company's time and energy.
                        </text>
                    </div>
                </div>
            </a>
            <a data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
                <div className="job-list-component">
                    <h4>When to contact the company's representative personally?</h4>
                </div>
                <div class="collapse" id="collapseExample2">
                    <div class="card card-body">
                        <text>
                            In most cases, you will never need to contact the representative as they will contact you as soon as possible. However, if you application has been stuck for a long time, you can mail them before messaging or calling.
                        </text>
                    </div>
                </div>
            </a>
            <a data-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3">
                <div className="job-list-component">
                    <h4>What to do after getting selected in a company?</h4>
                </div>
                <div class="collapse" id="collapseExample3">
                    <div class="card card-body">
                        <text>
                            Keep all relevant documents with you to submit as quickly as possible. Keep frequent communication with your company's representative to get up-to-date with the latest update regarding your employment.
                        </text>
                    </div>
                </div>
            </a>
            <a data-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample4">
                <div className="job-list-component">
                    <h4>What documents might be needed?</h4>
                </div>
                <div class="collapse" id="collapseExample4">
                    <div class="card card-body">
                        <text>
                            Document like your Identity document, Passport, Address Proof are essential to have when you are going to be employed.
                        </text>
                    </div>
                </div>
            </a>
            <a data-toggle="collapse" href="#collapseExample5" role="button" aria-expanded="false" aria-controls="collapseExample5">
                <div className="job-list-component">
                    <h4>What things are to be expected from a company?</h4>
                </div>
                <div class="collapse" id="collapseExample5">
                    <div class="card card-body">
                        <text>
                            You should be given Offer Letter with Salary and Terms and Conditions. Make sure you read all these properly before signing and submitting these documents.
                        </text>
                    </div>
                </div>
            </a>
        </div>




    </>
}