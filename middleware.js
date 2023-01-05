import { NextResponse } from "next/server";

export async function middleware(req) {
  if (req.nextUrl.pathname.startsWith("/_proxy-req")) {
    console.log("pathname", req.nextUrl.pathname);

    return NextResponse.rewrite(
      req.nextUrl.pathname.replace(/\/_proxy-req\//, "")
    );
  }
}
