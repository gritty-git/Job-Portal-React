import { useLocation } from "react-router";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import jobData from "./../data.json";
import JobListComponent from "./../components/JobListComponent";
import SearchBar from "../components/SearchBar";
import JobModal from "../components/JobModal";

export default function SearchPage() {
    const location = useLocation();
    let matched = false;

    const searchval = location.pathname.split("/")[2];
    const [searchTerm, setSearchTerm] = useState(searchval);
    const [statusCodes, setStatusCodes] = useState(location.state.status_code);
    const [jobLocation, setJobLocation] = useState("");

    useEffect(() => {
        setSearchTerm(location.pathname.split("/")[2]);
        setStatusCodes(location.state.status_code);
        setJobLocation(location.state.jobLocation);
    }, [location]);

    return (
        <>

            <SearchBar statusCodes={statusCodes} searchTerm={searchTerm} jobLocation={jobLocation} />
            {jobData
                .filter((job) => {
                    if ((statusCodes.length === 0) || (statusCodes.findIndex(code => code === job.status_code) !== -1)) {
                        if (searchTerm.length === 0 && jobLocation.length === 0) {
                            return true;
                        }

                        if (searchTerm.length && jobLocation.length === 0) {
                            return (job.title.toLowerCase().includes(searchTerm.toLowerCase()));
                        }

                        return (job.location.toLowerCase().includes(jobLocation.toLowerCase()));
                    }
                    return false;
                })
                .map((job, idx) => {
                    matched = true;
                    return <JobModal job={job} key={idx} />
                })
            }
            {matched ? <></> : <h4 style={{ "textAlign": "center", "color": "#69b597", "marginTop": "6rem" }}>No Jobs found according to search filters.</h4>}



        </>

    )
}