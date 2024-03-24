import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";

const FeatureJob = () => {
    const [jobs, setJobs]=useState([]);
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data));
    },[]);
    const [dataLength, setDataLength]=useState(4);
    return (
        <div>
            <h1  className="text-5xl text-center">Feature Job:{jobs.length}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate nemo porro beatae autem voluptatem amet. Rerum officia eum voluptatem eligendi quo reiciendis assumenda numquam ex, dicta aut! Dignissimos, excepturi nobis?</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {
                    jobs.slice(0,4).map(job=><Job key={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default FeatureJob;