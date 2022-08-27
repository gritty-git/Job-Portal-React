import React, { useState } from 'react';
import parse from 'html-react-parser';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import JobListComponent from './JobListComponent';
import { statusToText } from '../filterFunctions';
import Timeline from "./Timeline";

function JobModal({ job }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <a onClick={handleShow}>
                <JobListComponent job={job} />
            </a>


            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <JobListComponent job={job} />
                </Modal.Header>
                <Modal.Body>
                    <h4><u>Status</u></h4>

                    <Timeline job={job} />

                    <h4><u>Description</u></h4>
                    {parse(job.description)}
                    <h4><u>How to Apply</u></h4>
                    {parse(job.how_to_apply)}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <a href={job.url}>
                        <Button variant="primary" onClick={handleClose}>
                            Apply
                        </Button>
                    </a>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default JobModal;