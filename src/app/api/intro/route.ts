import { client } from "@/lib/sanityClient";
import { IntroQuery } from "@/lib/sanityQuery";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    // const q = req.nextUrl.searchParams.get("q");
    // const json = await req.json();
    // console.log("this is json", json);

    // const resp = await client.fetch(IntroQuery, { q: json["q"] });

    console.log("this is resp");

    return new Response(JSON.stringify({ done: "submitted" }), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      },
      status: 200,
    });
  } catch (err) {
    //  new Response(
    //   JSON.stringify({ error: "not started", message: err }),
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
  }
}
