import { NextRequest } from "next/server";

export async function GET(request: Request) {
  return new Response(JSON.stringify({ message: "hello" }), {
    headers: { "content-type": "application/json" },
    status: 200
  });
}