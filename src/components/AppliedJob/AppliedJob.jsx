import { LuMapPin } from "react-icons/lu";
import { ImCoinDollar } from "react-icons/im";
import { Link } from "react-router-dom";

const AppliedJob = ({ job }) => {
    const { job_id, job_role, company, company_logo, onsite_or_remote, location, salary, posted_date } = job;

    return (
        <div className="w-full p-10 md:w-[620px] rounded-lg border box-border border-slate-300">
            <div>
                <img className="w-[180px]" src={company_logo} alt="Company Logo" />
            </div>
            <h4 className="mt-4 text-2xl font-bold text-[#474747]">{job_role}</h4>
            <p className="mt-2 text-[#757575] text-xl font-semibold">{company}</p>

            <div className="w-24 text-center text-[16px] mt-4 font-bold text-[#7E90FE] py-[9px] border rounded-lg">{onsite_or_remote}</div>

            <div className="mt-4 text-xl text-[#757575] font-semibold flex gap-6">
                <p className="flex items-center gap-2"><span><LuMapPin /></span> {location}</p>
                <p className="flex items-center gap-2"><span><ImCoinDollar /></span>{salary}</p>
            </div>
            <p className="mt-2 text-xl text-[#757575]">Posted: <span className="font-medium">{posted_date}</span></p>

            <Link to={`/jobs/${job_id}`}>
                <button className="text-white text-xl font-bold bg-linear-to-r from-[#7E90FE] to-[#9873FF] py-1.5 px-2 md:py-[11px] md:px-[18px] rounded-lg cursor-pointer mt-6">View Details</button>
            </Link>
        </div>
    );
};

export default AppliedJob;