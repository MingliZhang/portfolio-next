import type { NextFetchEvent, NextRequest } from 'next/server';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
	console.log(req);
	console.log(req.headers);
	console.log(req.body);
	return new Response('Hello, world!');
}
