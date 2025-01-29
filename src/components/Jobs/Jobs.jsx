import { useState, useEffect } from "react";
import Job from "../Job/Job";

const Jobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("jobs.json")
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);

    return (
        <div className="mt-11">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1919] text-center">Current Available Jobs</h2>
            <p className="text-[15px] md:text-lg text-[#757575] leading-7 text-center mt-4 font-medium max-w-[800px] mx-auto">Browse the latest job openings designed to match your skills and interests. Stay updated on top opportunities, apply directly, and advance your career today!</p>

            <div className="flex flex-wrap justify-between gap-6 mt-11">
                {
                    jobs.map(job => <Job key={job.job_id} job={job} />)
                }
            </div>
        </div>
    );
};

export default Jobs;