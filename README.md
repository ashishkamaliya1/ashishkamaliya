# ashishcodes

## Deploy & SEO

- Ensure `sitemap.xml` is submitted in Google Search Console.
- Keep canonical set to `https://ashishcode.netlify.app/`.
- Add `_redirects` on Netlify to enforce HTTPS and primary host.

### Netlify redirects

Create a file named `_redirects` at the project root with:

```
http://ashishcode.netlify.app/* https://ashishcode.netlify.app/:splat 301!
https://www.ashishcode.netlify.app/* https://ashishcode.netlify.app/:splat 301!
```