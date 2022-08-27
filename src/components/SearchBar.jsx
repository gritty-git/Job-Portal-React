export default function SearchBar() {
    function formSubmit(e) {
        e.preventDefault();
        console.log(e);
    }
    return (
        // <form>
        //     <label htmlFor="header-search">
        //         <span className="visually-hidden">Search job details</span>
        //     </label>
        //     <input
        //         type="text"
        //         id="header-search"
        //         placeholder="Search job details"
        //         name="s"
        //     />
        //     <button type="submit">Search</button>
        // </form>
        <section className="search-sec">
            <div className="container">
                <form onSubmit={formSubmit}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                    <input type="text" className="form-control search-slt" placeholder="Enter Job (Software, Node, etc.)" />
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                    <input type="text" className="form-control search-slt" placeholder="Enter Location (New York, Berlin, Remote, etc.)" />
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                    {/* <select className="form-control search-slt" id="exampleFormControlSelect1" multiple>
                                        <option>All</option>
                                        <option>Not Applied</option>
                                        <option>Applied (Pending)</option>
                                        <option>Application recieved</option>
                                        <option>Accepted</option>
                                        <option>Rejected</option>
                                    </select> */}
                                    <div class="dropdown">
                                        <button class="dropbtn">Filter Application Status</button>
                                        <div class="dropdown-content">
                                            <ul>
                                                <li>
                                                    <input type="checkbox" id="cb1" name="cb1" />
                                                    <label for="cb1">Not Applied</label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" id="cb2" name="cb2" />
                                                    <label for="cb2">Applied (Pending)</label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" id="cb3" name="cb3" />
                                                    <label for="cb3">Application recieved</label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" id="cb4" name="cb4" />
                                                    <label for="cb4">Accepted</label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" id="cb5" name="cb5" />
                                                    <label for="cb5">Rejected</label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/*  */}
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                    <button type="submit" className="btn btn-danger wrn-btn">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )

};
