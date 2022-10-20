# next-ssl-redirect-middleware

[Nextjs Middleware](https://nextjs.org/docs/middleware) to redirect `http` to `https`.  This is helpful if you are hosting your site on a service that doesn't have "force ssl" support out of the box (IE: heroku).

## Install 

`npm i -S next-ssl-redirect-middleware`

## Usage

Create a file `middleware.ts` (or `.js`) with the following:

```typescript
import sslRedirect from 'next-ssl-redirect-middleware';

export default sslRedirect({});
```

### Options:

- `environments`: List of `NODE_ENV` to run this middleware for.  Defaults `['production']`

- `status`: The status code to redirect with.  defaults to `301`

## Credits

[paulomcnally/node-heroku-ssl-redirect](https://github.com/paulomcnally/node-heroku-ssl-redirect) was referenced heavily in the creation of this library.
