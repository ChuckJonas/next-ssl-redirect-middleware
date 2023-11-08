import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

type Environment = "production" | "development" | "other";

type Params = {
    environments?: Environment[]
    status?: 301 | 302
}

const middleware = ({
    environments = ["production"],
    status = 301
}: Params) => (req: NextRequest, ev: NextFetchEvent) => {
    const currentEnv = process.env.NODE_ENV as Environment;
    console.log('environments', environments, 'currentEnv', currentEnv);
    if (environments.includes(currentEnv) && !req.headers?.get("x-forwarded-proto")?.includes("https")) {
        const hostname = req.headers.get('host') || req.nextUrl.hostname;
        return NextResponse.redirect(`https://${hostname}${req.nextUrl.pathname}`, status);
    }
    return NextResponse.next();
}

export default middleware;
