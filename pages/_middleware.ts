import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
	if (req.headers.get('x-forwarded-proto') !== 'https') {
		console.log(req.nextUrl.hostname);
		console.log(req.nextUrl.pathname);
		return NextResponse.redirect(
			`https://${req.nextUrl.hostname}${req.nextUrl.pathname}`,
			301
		);
	}
	return NextResponse.next();
}
