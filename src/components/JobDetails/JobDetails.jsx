import { useParams } from "react-router-dom";
import { toast, Bounce, ToastContainer } from "react-toastify";

const JobDetails = () => {
    const { id } = useParams();
    const job = JSON.parse(localStorage.getItem(id));
    const { job_id, job_role, company, company_logo, onsite_or_remote, location, employment_type, experience_level, salary, posted_date, application_deadline, job_description, job_responsibility } = job;

    function handleApplyJobs() {
        const currentJobs = JSON.parse(localStorage.getItem("applied"));

        if (!currentJobs) {
            const newJob = [job];
            localStorage.setItem("applied", JSON.stringify(newJob));
            toast.success('Successfully Applied!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });

        }
        else {
            const isFound = currentJobs.find(job => job.job_id === job_id);

            if (!isFound) {
                const allJobs = [...currentJobs, job];
                localStorage.setItem("applied", JSON.stringify(allJobs));

                toast.success('Successfully Applied!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            }
            else {
                toast.error('Already Applied!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            }
        }
    }

    return (
        <div>
            <h2 className="mt-11 text-4xl md:text-5xl font-bold text-[#1A1919] text-center">Job Details</h2>
            <div className="flex flex-col md:flex-row justify-between mt-10 md:mt-[130px] gap-10">
                <div className="max-w-[920px]">
                    <p className="text-[17px] text-[#757575] leading-7"><span className="font-bold text-black">Job Description:</span> {job_description}</p>
                    <p className="mt-6 text-[17px] text-[#757575] leading-7"><span className="font-bold text-black">Job Responsibility:</span> {job_responsibility}</p>
                    <p className="mt-6 text-[17px] text-[#757575] leading-7"><span className="font-bold text-black">Experience:</span> {experience_level}</p>
                    <p className="mt-2 text-lg">Posted: <span className="font-medium">{posted_date}</span></p>
                    <p className="mt-2 text-lg">Application Deadline: <span className="font-medium">{application_deadline}</span></p>
                </div>
                <div className="w-[340px]">
                    <div className="bg-[#9873ff78] p-[30px] rounded-lg">
                        <h4 className="text-[#1A1919] text-xl font-bold">Job Details</h4>

                        <div className="w-full h-[1px] bg-[#888299ce] mt-4"></div>

                        <p className="text-lg text-[#474747] font-medium mt-4"><span className="font-bold">Salary:</span> {salary}</p>

                        <p className="text-lg text-[#474747] font-medium mt-4"><span className="font-bold">Job Title:</span> {job_role}</p>

                        <p className="text-lg text-[#474747] font-medium mt-4"><span className="font-bold">Job Type:</span> {employment_type}</p>

                        <h4 className="text-[#1A1919] text-xl font-bold mt-8">Contact Information</h4>

                        <div className="w-full h-[1px] bg-[#888299ce] mt-4"></div>

                        <p className="text-lg text-[#474747] font-medium mt-4"><span className="font-bold">Phone:</span> 01750-00 00 00</p>

                        <p className="text-lg text-[#474747] font-medium mt-4"><span className="font-bold">Email:</span>  info@gmail.com</p>

                        <p className="text-lg text-[#474747] font-medium mt-4"><span className="font-bold">Address:</span> {location}</p>
                    </div>
                    <button onClick={handleApplyJobs} className="w-full text-center py-[19px] text-white text-xl font-bold bg-linear-to-r from-[#7E90FE] to-[#9873FF] rounded-lg mt-6 cursor-pointer">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;