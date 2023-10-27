---
'@belgattitude/eslint-config-bases': minor
---

Allow @tanstack/eslint-plugin-query dep to be "^4.36.1 || ^5.0.5".
If you experience issue with your package manager (ie: yarn will automatically install
the highest version rather than the stable one), you can always force the resolution:


```json
{
  "resolutions": {
    "eslint-plugin-react-hooks": "^4.36.1"
  }
}
```

This is a temporary solution to not have to declare the plugin as a peerDependency for now.
(eslint flat config will help in the future)
