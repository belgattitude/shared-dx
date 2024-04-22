---
"@belgattitude/eslint-config-bases": minor
---

Add eslint-plugin-import-x

```js
require("@belgattitude/eslint-config-bases/patch/modern-module-resolution");

module.exports = {
  extends: [
      
    // Group 1: recommended always  
    "@belgattitude/eslint-config-bases/typescript",
    "@belgattitude/eslint-config-bases/simple-import-sort",
      
      
    "@belgattitude/eslint-config-bases/import-x",

      // ...
  ],
};
```

