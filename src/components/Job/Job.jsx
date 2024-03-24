import { IoLocationOutline } from "react-icons/io5";
import PropTypes from 'prop-types';
const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div>
            <div className="card card-compact p-10 space-y-10 bg-base-100 shadow-xl">
                <h1 className="w-24 cover"><img src={logo} alt="logo" /></h1>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div>
                        <button className="px-4 py-2 my-6 border rounded font-semibold mr-4">{remote_or_onsite}</button>
                        <button className="px-4 py-2 border rounded font-semibold ">{job_type}</button>
                    </div>
                    <div className="flex justify-start items-center">
                        <IoLocationOutline />
                        <div>
                        <button className="px-4 py-2 my-6  rounded font-semibold mr-4">{location}</button>
                        <button className="px-4 py-2  rounded font-semibold ">{salary}</button>
                        </div>
                    </div>

                    <div className="card-actions ">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>

        </div>
    );
};
Job.propTypes = {
    
    job: PropTypes.object,
}
export default Job;