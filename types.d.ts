
declare type JobInfo = {
  company: string;
  jobTitle: string;
  location: string;
  jobMode: string;
  jobType: string;
  salary: string;
};

declare type ScrapeDataFunction = (searchParams: URLSearchParams) => Promise<JobInfo[]>; 