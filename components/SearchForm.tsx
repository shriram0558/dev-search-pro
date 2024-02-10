"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";

export default function SearchForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [jobTitle, setJobTitle] = useState(searchParams.get("jobTitle") ?? "");
  const [location, setLocation] = useState(searchParams.get("location") ?? "");
  const [jobType, setJobType] = useState(searchParams.get("jobType") ?? "");
  const [isJobTypeOpen, setIsJobTypeOpen] = useState(false);

  const handleSearch: FormEventHandler = (ev) => {
    ev.preventDefault();

    const params = [];
    if (jobTitle) params.push(`jobTitle=${jobTitle}`);
    if (location) params.push(`location=${location}`);
    if (jobType) params.push(`jobType=${jobType}`);

    router.push(`/?${params.join("&")}`);
  };

  return (
    <form
      action="submit"
      onSubmit={handleSearch}
      className="flex gap-5 bg-secondary-dark rounded-md text-tertiary-dark py-2 px-4"
    >
      <div className="flex justify-center items-center gap-1">
        <span className="material-symbols-outlined">search</span>
        <input
          value={jobTitle}
          onChange={(ev) => setJobTitle(ev.target.value)}
          type="text"
          placeholder="Job Title"
          className="bg-secondary-dark font-semibold text-tertiary-dark outline-none placeholder:text-tertiary-dark"
        />
      </div>
      <div className="flex justify-center items-center gap-1">
        <span className="material-symbols-outlined">location_on</span>
        <input
          value={location}
          onChange={(ev) => setLocation(ev.target.value)}
          type="text"
          placeholder="Location"
          className="bg-secondary-dark font-semibold text-tertiary-dark outline-none placeholder:text-tertiary-dark"
        />
      </div>
      <div
        className="flex justify-between items-center gap-1 relative min-w-[101px]"
        onClick={() => setIsJobTypeOpen(!isJobTypeOpen)}
      >
        <div className="font-semibold">
          {jobType == "" ? "Job Type" : jobType}
        </div>
        <span className="material-symbols-outlined">arrow_drop_down</span>
        <div
          className={`${
            isJobTypeOpen ? "flex" : "hidden"
          } cursor-pointer flex-col absolute w-full top-[140%] left-0 font-semibold px-2 py-3 gap-2 bg-secondary-dark rounded-lg text-center text-tertiary-dark`}
        >
          <p
            onClick={() => {
              setJobType("fulltime");
            }}
            className={`rounded-lg hover:text-secondary ${
              jobType == "fulltime" ? "text-secondary" : ""
            } cursor-pointer`}
          >
            Full Time
          </p>
          <p
            onClick={() => {
              setJobType("intern");
            }}
            className={`rounded-lg hover:text-secondary ${
              jobType == "intern" ? "text-secondary" : ""
            } cursor-pointer`}
          >
            Intern
          </p>
        </div>
      </div>
      <button
        type="submit"
        className="bg-secondary text-background px-4 py-2 font-semibold rounded-md"
      >
        Search
      </button>
    </form>
  );
}
