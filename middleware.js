import { NextResponse } from "next/server";
export function middleware(req) {
  const token = req.cookies.get("jwt");

  console.log("token: ", token); // طباعة التوكن

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url)); // قد تكون هنا المشكلة
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashpoard/:path*"],
};
