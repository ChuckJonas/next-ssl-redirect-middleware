import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

type Environment = "production" | "development" | "other";

type Params = {
    environments?: Environment[]
    status?: 301 | 302
}

const middleware = ({
    environments = ["production"],
    status = 302
}: Params) => (req: NextRequest, ev: NextFetchEvent) => {
    const currentEnv = process.env.NODE_ENV as Environment;

    if (environments.includes(currentEnv) && req.headers.get("x-forwarded-proto") !== "https") {
        return NextResponse.redirect(`https://${req.nextUrl.hostname}${req.nextUrl.pathname}`, status);
    }
    return NextResponse.next();
}

export default middleware;