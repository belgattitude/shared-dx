---
"@belgattitude/eslint-config-bases": major
---

Typescript eslint v7.4, drop react query eslint plugin < 5, allow prettier 4 alpha.

If you encounter issues like 'ESLint couldn't determine the plugin "import" uniquely.'. Ensure
that other plugins are on typescript-eslint v7 as well. 

> For Next.js users, the Next.js eslint config < 14.2.0 doesn't support typescript-eslint v7.
> See this PR: https://github.com/vercel/next.js/pull/62137. To allow v7 either wait for 
> 14.2.0 to be releases or override the package version
[PR]

```json
{
  "resolutions": {
    "@typescript-eslint/eslint-plugin": "^7.4.0",
    "@typescript-eslint/parser": "^7.4.0",
    "@typescript-eslint/typescript-estree": "^7.4.0",
    "@typescript-eslint/utils": "^7.4.0"
  }
}
```
