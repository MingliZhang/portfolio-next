import redirects from '@lib/redirects';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
	return NextResponse.redirect(
		`https://${req.nextUrl.hostname}${req.nextUrl.pathname}`,
		307
	);
}
