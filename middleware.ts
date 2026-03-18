import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();
//update middle ware to match all routes except for the ones that are used for static assets and the API routes. This is done to ensure that the middleware is applied to all relevant routes while excluding those that do not require authentication or session management. The matcher uses a regular expression to exclude paths that start with "_next" (which is used for Next.js static assets) and any paths that contain a dot (indicating a file extension), as well as paths that start with "api" or "trpc" (which are typically used for API routes).
export const config = {
  matcher: [
    '/((?!_next|.*\\..*).*)',
    '/(api|trpc)(.*)',
  ],
};