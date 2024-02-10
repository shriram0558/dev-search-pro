'use client'

import JobCard from "./JobCard";

export default function JobListings({ jobsData }: { jobsData: Array<JobInfo> }) {
  return (
    <ul className="w-[80%] grid grid-cols-3 gap-6 my-20">
      {jobsData.map((job, jobIndex) => {
        return <JobCard
          key={jobIndex}
          company={job.company}
          jobTitle={job.jobTitle}
          location={job.location}
          jobMode={job.jobMode}
          jobType={job.jobType}
          salary={job.salary}
          description="Explore the best job offers across several industries"
        />;
      })}
      <JobCard
        company="Google"
        jobTitle="Software Engineer"
        location="Banglore"
        jobMode="Onsite"
        jobType="Full Time"
        salary="Rs. 10k - 20k"
        description="Explore the best job offers across several industries"
      />
      <JobCard
        company="Google"
        jobTitle="Software Engineer"
        location="Banglore"
        jobMode="Onsite"
        jobType="Full Time"
        salary="Rs. 10k - 20k"
        description="Explore the best job offers across several industries"
      />
      <JobCard
        company="Google"
        jobTitle="Software Engineer"
        location="Banglore"
        jobMode="Onsite"
        jobType="Full Time"
        salary="Rs. 10k - 20k"
        description="Explore the best job offers across several industries"
      />
    </ul>
  );
}
