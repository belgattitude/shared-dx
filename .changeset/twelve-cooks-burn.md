---
"@belgattitude/eslint-config-bases": minor
---

Add vitest base with @vitest/eslint-plugin, to enable add `"@belgattitude/eslint-config-bases/vitest"`
and remove `"@belgattitude/eslint-config-bases/jest"` from your `.eslintrc.js` file.

```javascript
// next line only required if you're using a monorepo
require("@belgattitude/eslint-config-bases/patch/modern-module-resolution");

module.exports = {
  extends: [
    // For tests: use either jest or vitest
      
    /// --- "@belgattitude/eslint-config-bases/jest",
      
    "@belgattitude/eslint-config-bases/vitest", 
      
  ],
};
```

