import { NextRequest, NextResponse } from "next/server";

const companies: Array<string> = ["google"];

export async function GET(request: NextRequest) {
  const reqUrl = new URL(request.url);
  const searchParams = reqUrl.searchParams;

  const jobs: Array<JobInfo> = [];
  for (const company of companies) {
    const { scrapeData } = (await import(`./${company}/scrapeData`)) as {
      scrapeData: ScrapeDataFunction;
    };
    const listings = await scrapeData(searchParams);
    jobs.push(...listings);
  }

  const data = JSON.stringify({ jobs });

  return new NextResponse(data, {
    headers: {
      "content-type": "application/json",
    },
  });
}
