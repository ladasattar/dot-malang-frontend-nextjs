import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get("isLoggedin");
  const isLoggedin = cookie?.value === "true";

  if (!isLoggedin) return NextResponse.redirect(new URL("/login", request.url));
  if (request.nextUrl.pathname.startsWith("/login") && isLoggedin)
    return NextResponse.redirect(new URL("/pokemon/explore", request.url));

  return NextResponse.next();
}

export const config = {
  matcher: ["/pokemon/:path*"],
};
