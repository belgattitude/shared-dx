---
'@belgattitude/eslint-config-bases': minor
---

Make "eslint-plugin-tailwindcss" optional

To enable

```bash
yarn add --dev eslint-plugin-tailwindcss
```

In eslint config,

```
module.exports = {
  extends: [
    // ....
    '@belgattitude/eslint-config-bases/tailwind',
    // ....
  ],
};
```