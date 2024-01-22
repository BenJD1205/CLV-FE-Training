import { NextRequest, NextResponse } from 'next/server';

const loginRoute = ['/login', '/register'];

const isPublicRoute = (currentPath: string) =>
  loginRoute.some((item) => currentPath.startsWith(item));

export function middleware(req: NextRequest) {
  const hasToken = true;
  const currentPath = req.nextUrl.pathname;

  if (hasToken && isPublicRoute(currentPath)) {
    return NextResponse.redirect(new URL('/', req.nextUrl.origin).toString());
  }
}
