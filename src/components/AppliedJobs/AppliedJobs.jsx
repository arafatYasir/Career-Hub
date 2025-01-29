import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
    const appliedJobs = JSON.parse(localStorage.getItem("applied"));

    return (
        <div>
            <h2 className="mt-11 text-4xl md:text-5xl font-bold text-[#1A1919] text-center">Track Your Applications</h2>
            <p className="text-[15px] md:text-lg text-[#757575] leading-7 text-center mt-4 font-medium max-w-[800px] mx-auto">Effortlessly manage your job applications in one place, with key details like titles, companies, and locations displayed for easy access. Stay organized and focused on your career goals!</p>
            <h4 className="text-center text-lg font-semibold mt-6">Total Applied: {appliedJobs ? appliedJobs.length : 0}</h4>

            {
                appliedJobs && (
                    <div className="flex flex-wrap justify-between gap-6 mt-11">
                        {
                            appliedJobs.map(job => <AppliedJob key={job.job_id} job={job} />)
                        }
                    </div>
                )
            }
        </div>
    );
};

export default AppliedJobs;