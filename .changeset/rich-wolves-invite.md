---
'@belgattitude/eslint-config-bases': minor
---

Make import/no-cycle opt-in through process.env.ESLINT_IMPORT_NO_CYCLE=true

Due to performance considerations the [import/no-cycle](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md) isn't enabled by default. This rule
can prevent subtle and hard to debug bugs. Depending on the project you can enable it either
by setting and env variable `ESLINT_IMPORT_NO_CYCLE=true yarn lint` (will default to `import/no-cycle: 2`) or by adding it
to the extended rules.
