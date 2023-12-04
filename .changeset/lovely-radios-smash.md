---
'@belgattitude/eslint-config-bases': minor
---

Disable eslint-plugin-import sort

In preparation for dprint support, you must now opt-in for import/export sort. 

```js
module.exports = {
    // for brevity
    extends: [
        // Group 1: recommended always
        '@belgattitude/eslint-config-bases/typescript',
        '@belgattitude/eslint-config-bases/simple-import-sort',
        // ...rest
    ],
}
```

Note that the [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import) has been changed to [simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort)
internally. Expect to relint your codebase.

This change bring some speedups. In a next release those rules can be opt-out
easily in favour of dprint, biome... which does as faster job (stylistic)

