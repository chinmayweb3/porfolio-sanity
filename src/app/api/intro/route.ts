import { client } from "@/lib/sanityClient";
import { IntroQuery } from "@/lib/sanityQuery";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q");

  const resp = await client.fetch(IntroQuery, { q });
  //   return resp;

  return new NextResponse(JSON.stringify(resp));
}
