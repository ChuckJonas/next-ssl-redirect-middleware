# nextjs-ssl-redirect-middlewear

> Nextjs Middleware to redirect http to https

## Install 

`npm i -S next-ssl-redirect-middleware`

## Usage

Create a file `pages/_middleware.ts` (or `.js`) with the following:

```typescript
import sslRedirect from 'next-ssl-redirect-middleware';

export default sslRedirect({});
```

### Options:

- `environments`: List of `NODE_ENV` to run this middleware for.  Defaults `['production']`

- `status`: The status code to redirect with.  defaults to `302`

## Notes:

[paulomcnally/node-heroku-ssl-redirect](https://github.com/paulomcnally/node-heroku-ssl-redirect) was referenced in the creation of this library.
