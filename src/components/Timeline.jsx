import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Timeline({ job }) {
    let job_status_code = job.status_code;
    if (job_status_code === -1) {
        job_status_code = 4;
    }
    return (
        <VerticalTimeline lineColor='#2ea3d1'>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2011 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title mb-2">{job.title}</h3>
                <h5 className="vertical-timeline-element-subtitle">{job.company}</h5>
                <p>
                    Job created on: {new Date(job.created_at).toDateString()}
                </p>
            </VerticalTimelineElement>
            {job_status_code === 0 ?
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: '#bab9b5', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid #bab9b5' }}
                    date=""
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Not Applied Yet!</h3>
                </VerticalTimelineElement>
                :
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date=""
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Applied</h3>
                    <p>Applied On: {new Date(job.created_at).toDateString()}</p>
                </VerticalTimelineElement>
            }
            {(job_status_code < 1) ? <></> : (job_status_code === 1) ? <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: '#bab9b5', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid #bab9b5' }}
                date=""
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Applied (Pending Response)</h3>
            </VerticalTimelineElement>
                :
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date=""
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title mb-2">Application recieved</h3>
                    <text><strong>Task: </strong>{job.task} {new Date(job.test_date).toDateString()}</text>
                    <p>Recieved On: {new Date(job.applied_date).toDateString()}</p>
                </VerticalTimelineElement>
            }
            {(job_status_code < 2) ? <></> : (job_status_code === 2) ? <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: '#bab9b5', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid #bab9b5' }}
                date=""
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Waiting for Interview/Result</h3>
                <p>Interview/Test On: {new Date(job.test_date).toDateString()}</p>
            </VerticalTimelineElement>
                :
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date=""
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Interview completed and result declared</h3>
                    <p>Result Date: {new Date(job.result_date).toDateString()}</p>
                </VerticalTimelineElement>
            }
            {(job_status_code < 3) ? <></> : (job_status_code === 4) ? <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: '#bab9b5', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid #bab9b5' }}
                date=""
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Rejected</h3>
                <p>Please keep contact with our other job postings and try for the roles!</p>
            </VerticalTimelineElement>
                :
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date=""
                    contentStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(16, 204, 82)' }}
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Selected</h3>
                    <p>Remaining Task: {job.task}</p>
                </VerticalTimelineElement>
            }

        </VerticalTimeline>
    )

}

export default Timeline;

