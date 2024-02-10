import puppeteer from "puppeteer";

export const scrapeData: ScrapeDataFunction = async (searchParams: URLSearchParams) => {
  let url: URL;
  if (searchParams.has("customUrl")) {
    url = new URL(searchParams.get("customUrl")!);
  } else {
    url = new URL(
      `https://www.google.com/about/careers/applications/jobs/results`
    );
    const jobTitle = searchParams.get("jobTitle");
    const location = searchParams.get("location");
    const jobType = searchParams.get("jobType");

    if (jobTitle) url.searchParams.append("q", jobTitle);
    if (location) url.searchParams.append("location", location);
    if (jobType) {
      if (jobType === "fulltime")
        url.searchParams.append("employment_type", "FULL_TIME");
      if (jobType === "intern")
        url.searchParams.append("employment_type", "INTERN");
    }
  }
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url.href);
  await page.waitForSelector(".lLd3Je");

  const jobs: Array<JobInfo> = await page.evaluate(() => {
    const jobList = document.querySelectorAll(".lLd3Je");
    const jobArray: Array<JobInfo> = [];
    jobList.forEach((job) => {
      let jobType = "fulltime";
      if (job.querySelector(".wVSTAb")?.textContent?.includes("Intern")) {
        jobType = "intern";
      }

      let jobMode = "onsite";
      if (job.querySelectorAll(".RP7SMd").length > 1) {
        jobMode = "remote";
      }

      const jobInfo: JobInfo = {
        company: "Google",
        jobTitle: job.querySelector(".QJPWVe")?.textContent as string,
        location: job.querySelector(".r0wTof")?.textContent as string,
        jobMode,
        jobType,
        salary: "Not Mentioned",
      };

      jobArray.push(jobInfo);
    });

    return jobArray;
  });

  await browser.close();
  return jobs;
};