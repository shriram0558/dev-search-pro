"use client";
import { useState } from "react";

export default function SearchForm() {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");

  return (
    <form
      action="submit"
      className="flex gap-5 bg-secondary-dark rounded-md text-[#707172] py-2 px-4"
    >
      <div className="flex justify-center items-center gap-1">
        <span className="material-symbols-outlined">search</span>
        <input
          value={jobTitle}
          onChange={(ev) => setJobTitle(ev.target.value)}
          type="text"
          placeholder="Job Title"
          className="bg-secondary-dark font-semibold text-[#707172]"
        />
      </div>
      <div className="flex justify-center items-center gap-1">
        <span className="material-symbols-outlined">location_on</span>
        <input
          value={location}
          onChange={(ev) => setLocation(ev.target.value)}
          type="text"
          placeholder="Location"
          className="bg-secondary-dark font-semibold text-[#707172]"
        />
      </div>
      <div className="flex justify-center items-center gap-1">
        <div className="font-semibold">Job Type</div>
        <span className="material-symbols-outlined">arrow_drop_down</span>
      </div>
      <button className="bg-secondary text-background px-4 py-2 font-semibold rounded-md">
        Search
      </button>
    </form>
  );
}
