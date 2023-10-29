import { NextResponse } from "next/server";

export async function GET() {
  // Actual Route
  const route = process.env.API_URL + '/spiders';

  const response = await fetch(route);
  const data = await response.json();

  return NextResponse.json({ data });
}
