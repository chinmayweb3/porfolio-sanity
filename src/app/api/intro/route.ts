import { client } from "@/lib/sanityClient";
import { IntroQuery } from "@/lib/sanityQuery";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q");

  const resp = await client.fetch(
    IntroQuery,
    { q },
    {
      next: {
        revalidate: 0,
      },
    }
  );

  //   console.log("this is resp", resp);

  return new Response(JSON.stringify(resp), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
