import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id == idInt)
    // console.log(job)
    return (
        <div>
            <h1>Job Details of:{job.job_title}</h1>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="grid md:col-span-3">
                    <h2 className="text-3xl">Details coming here</h2>
                    <p><span className="text-2xl font-semibold w-2/3">Company_name:</span>{job.company_name}</p>
                    <p><span className="text-2xl font-semibold w-2/3">Job_description:</span>{job.job_description}</p>
                    <p><span className="text-2xl font-semibold w-2/3">Job_responsibility:</span>{job.job_responsibility}</p>
                    <p><span className="text-2xl font-semibold w-2/3">Educational_requirements:</span>{job.educational_requirements}</p>
                    <p><span className="text-2xl font-semibold w-2/3">Experiences:</span>{job.experiences}</p>
                </div>

                <div className="border p-5 space-y-5">
                    <div>
                        <h1>Job Details</h1>
                        <p><span className="text-2xl font-semibold w-2/3">Salary:</span>{job.salary}</p>
                        <p><span className="text-2xl font-semibold w-2/3">Job_title:</span>{job.job_title}</p>

                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold">Contact information</h1>
                        {
                            // job.contact_information.map(item=><li key={ item.address}>{item}</li>)
                        }
                    </div>
                    <button className="btn btn-primary">Apply Now</button>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;