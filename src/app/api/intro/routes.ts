import { client } from "@/lib/sanityClient";
import { IntroQuery } from "@/lib/sanityQuery";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    // const q = req.nextUrl.searchParams.get("q");
    // const json = await req.json();
    // console.log("this is json", json);

    // const resp = await client.fetch(IntroQuery, { q: json["q"] });

    // console.log("this is resp", resp);

    return new Response(JSON.stringify("done"), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 200,
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "not started", message: err }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

export const getStaticProps = async () => {
  // Fetch static data during build time
  const data = "Static data fetched during build time";
  return { props: { data } };
};
