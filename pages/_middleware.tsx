import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
	return NextResponse.redirect(
		`https://${req.headers.get('host')}${req.nextUrl.pathname}`,
		307
	);
}
