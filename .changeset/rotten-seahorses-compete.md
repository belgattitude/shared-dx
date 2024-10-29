---
"@belgattitude/eslint-config-bases": minor
---

@typescript-eslint/no-unused-expressions disabled for test files

This to allow testing types with vitest, ie:

```ts
expectTypeOf(test).toEqualTypeOf<Test>;
```
