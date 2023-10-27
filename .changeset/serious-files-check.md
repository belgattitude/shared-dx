---
'@belgattitude/eslint-config-bases': minor
---

Allow eslint-plugin-react-hooks dep to be "^4.6.0 || 5.0.0-canary-7118f5dd7-20230705".
If you experience issue with your package manager (ie: yarn will automatically install
the canary version rather than the stable one), you can always force the resolution:


```json
{
  "resolutions?": {
    "eslint-plugin-react-hooks": "https://github.com/vercel/next.js/issues/52365"
  },
  "resolutions": {
    "eslint-plugin-react-hooks": "^4.6.0"
  }
}
```

This change was made to accommodate usage with nextjs latest versions (based on react canaries)

See also https://github.com/vercel/next.js/issues/52365

This is a temporary solution to not have to declare the plugin as a peerDependency for now.
(eslint flat config will help in the future)


