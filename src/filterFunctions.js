
function findNotApplied(jobs) {
    var job1, job2;
    var found1 = false;
    jobs.forEach(job => {
        if (job.status_code === 0) {
            if (found1) {
                job2 = job;

            } else {
                found1 = true;
                job1 = job;
            }
        }
    });
    return [job1, job2];
}

function recentApplied(jobs) {
    var job1, job2;
    var found1 = false, found2 = false;
    jobs.forEach(job => {
        if (job.status_code === 1 || job.status_code === 2) {
            if (found1) {
                if (new Date(job.applied_date).getTime > new Date(job1.applied_date).getTime) {
                    job2 = job1;
                    job1 = job;
                } else if (found2 && (new Date(job.applied_date).getTime > new Date(job2.applied_date).getTime)) {
                    job2 = job;
                } else if (!found2) {
                    found2 = true;
                    job2 = job;
                }
            } else {
                found1 = true;
                job1 = job;
            }
        }
    });
    return [job1, job2];
}

function statusToText(status) {
    if (status === 0) {
        return "Not Applied";
    } else if (status == 1) {
        return "Pending Response";
    } else if (status == 2) {
        return "Application Recieved";
    } else if (status == 3) {
        return "Accepted";
    } else {
        return "Rejected";
    }
}

export { findNotApplied, recentApplied, statusToText };