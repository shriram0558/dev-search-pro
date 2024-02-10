import { NextRequest, NextResponse } from "next/server";
import { scrapeData } from "./scrapeData";

export async function GET(request: NextRequest) {
  const reqUrl = new URL(request.url);
  const jobs = await scrapeData(reqUrl.searchParams);
  const data = JSON.stringify({ jobs });

  return new NextResponse(
    data,
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
}
