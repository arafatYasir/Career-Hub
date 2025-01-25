import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [jobsLength, setJobsLength] = useState(4);
    const [showButton, setShowbutton] = useState(true);

    useEffect(() => {
        fetch("featured_jobs.json")
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);

    function handleSeeAll() {
        setShowbutton(false);
        setJobsLength(6);
    }

    return (
        <div className="mt-11 md:mt-32">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1919] text-center">Featured Jobs</h2>
            <p className="text-[15px] md:text-lg text-[#757575] leading-7 text-center mt-4 font-medium">Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className="flex flex-wrap justify-between gap-6 mt-11">
                {
                    jobs.slice(0, jobsLength).map(job => <Job key={job.job_id} job={job} />)
                }
            </div>
            <div className="text-center">
                <button onClick={handleSeeAll} className={`text-white text-xl font-bold bg-linear-to-r from-[#7E90FE] to-[#9873FF] py-1.5 px-2 md:py-[19px] md:px-[28px] rounded-lg cursor-pointer mt-6 ${!showButton ? "hidden" : ""}`}>See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;