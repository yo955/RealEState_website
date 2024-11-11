import { NextResponse } from "next/server";

export function middleware(req) {
  const user = req.cookies.get("jwt");

  if (!user) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashpoard/:path*"], 
};
