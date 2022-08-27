import { useLocation } from "react-router";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import jobData from "./../data.json";
import JobListComponent from "./../components/JobListComponent";
import SearchBar from "../components/SearchBar";

export default function SearchPage() {
    const location = useLocation();
    const searchval = location.pathname.split("/")[2];
    const [searchTerm, setSearchTerm] = useState(searchval);
    const [statusCodes, setStatusCodes] = useState(location.state.status_code);
    console.log(location);
    useEffect(() => {
        setSearchTerm(location.pathname.split("/")[2]);
        setStatusCodes(location.state.status_code);
    }, [location]);

    return (
        <>
            <h1>SearchPage</h1>
            <SearchBar />
            {jobData.map((job, idx) => {
                return (statusCodes.length === 0 ? <JobListComponent job={job} key={idx} /> : statusCodes.findIndex(code => code === job.status_code) === -1 ? <></> : <JobListComponent job={job} key={idx} />)
            })}




        </>

    )
}