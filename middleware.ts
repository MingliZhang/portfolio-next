import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

type Environment = 'production' | 'development';
export function middleware(req: NextRequest, ev: NextFetchEvent) {
    const currentEnv = process.env.ENVIRONMENT as Environment;

    if (
        currentEnv === 'production' &&
        req.headers.get('x-forwarded-proto') !== 'https'
    ) {
        return NextResponse.redirect(
            `https://${req.nextUrl.hostname}${req.nextUrl.pathname}`,
            301
        );
    }
    return NextResponse.next();
}
