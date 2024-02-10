import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchForm from "@/components/SearchForm";
import JobListings from "@/components/JobListings";

type SearchParams = {
  jobTitle: string | undefined,
  location: string | undefined, 
  jobType: string | undefined
}

const getJobsData = async (searchParams: SearchParams) => {
  const url = new URL("http://localhost:3000/api/scraping/");
  if(searchParams.hasOwnProperty("jobTitle") && searchParams.jobTitle)
    url.searchParams.append("jobTitle", searchParams.jobTitle);
  if(searchParams.hasOwnProperty("location") && searchParams.location)
    url.searchParams.append("location", searchParams.location);
  if(searchParams.hasOwnProperty("jobType") && searchParams.jobType)
    url.searchParams.append("jobType", searchParams.jobType);

  const responce = await fetch(url);
  const data = (await responce.json()) as { jobs: Array<JobInfo> };
  return data.jobs;
}

export default async function Home({ searchParams }: { searchParams: SearchParams }) {

  const jobsData = await getJobsData(searchParams);

  return (
    <main className="min-h-screen bg-background flex flex-col items-center">
      <Navbar pathname="/" />
      <Hero />
      <SearchForm />
      <JobListings jobsData={jobsData} />
    </main>
  );
}
