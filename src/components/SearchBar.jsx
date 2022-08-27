import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SearchBar(props) {
    const [searchTextInput, setSearchTextInput] = useState(props.searchTerm);
    const [cb1, setcb1] = useState(true);
    const [cb2, setcb2] = useState(true);
    const [cb3, setcb3] = useState(true);
    const [cb4, setcb4] = useState(true);
    const [cb5, setcb5] = useState(true);

    useEffect(() => {

        setSearchTextInput(props.searchTerm);
        if (props.statusCodes.length) {
            if (props.statusCodes.findIndex(code => code === 0) !== -1) {
                setcb1(true);
            } else {
                setcb1(false);
            }
            if (props.statusCodes.findIndex(code => code === 1) !== -1) {
                setcb2(true);
            } else {
                setcb2(false);
            }
            if (props.statusCodes.findIndex(code => code === 2) !== -1) {
                setcb3(true);
            } else {
                setcb3(false);
            }
            if (props.statusCodes.findIndex(code => code === 3) !== -1) {
                setcb4(true);
            } else {
                setcb4(false);
            }
            if (props.statusCodes.findIndex(code => code === -1) !== -1) {
                setcb5(true);
            } else {
                setcb5(false);
            }
        }
    }, [props])
    const navigate = useNavigate();
    function formSubmit(e) {
        e.preventDefault();

        const statusArray = [];
        if (e.target[3].checked) {
            statusArray.push(0);
        }
        if (e.target[4].checked) {
            statusArray.push(1);
        }
        if (e.target[5].checked) {
            statusArray.push(2);
        }
        if (e.target[6].checked) {
            statusArray.push(3);
        }
        if (e.target[7].checked) {
            statusArray.push(-1);
        }
        navigate(`/search/${e.target[0].value}`, { state: { status_code: statusArray, jobLocation: e.target[1].value } });

    }

    return (

        <section className="search-sec">
            <div className="container">
                <form onSubmit={formSubmit}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                    <input type="text" className="form-control search-slt" placeholder="Enter Job/Role (Software, Analyst, etc.)" value={searchTextInput} onChange={(e) => setSearchTextInput(e.target.value)} />
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                    <input type="text" className="form-control search-slt" placeholder="Enter Location (New York, Berlin, Remote, etc.)" />
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 p-0">

                                    <div className="dropdown">
                                        <button className="dropbtn" type="button">Filter Application Status</button>
                                        <div className="dropdown-content">
                                            <ul>
                                                <li>
                                                    <input type="checkbox" id="cb1" name="cb1" checked={cb1} onChange={(e) => { setcb1(e.target.checked) }} />
                                                    <label htmlFor="cb1">Not Applied</label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" id="cb2" name="cb2" checked={cb2} onChange={(e) => { setcb2(e.target.checked) }} />
                                                    <label htmlFor="cb2">Applied (Pending)</label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" id="cb3" name="cb3" checked={cb3} onChange={(e) => { setcb3(e.target.checked) }} />
                                                    <label htmlFor="cb3">Application recieved</label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" id="cb4" name="cb4" checked={cb4} onChange={(e) => { setcb4(e.target.checked) }} />
                                                    <label htmlFor="cb4">Accepted</label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" id="cb5" name="cb5" checked={cb5} onChange={(e) => { setcb5(e.target.checked) }} />
                                                    <label htmlFor="cb5">Rejected</label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/*  */}
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                    <button type="submit" className="btn btn-outline-primary wrn-btn">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )

};
