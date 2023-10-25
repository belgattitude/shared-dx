---
'@belgattitude/eslint-config-bases': minor
---

Ban node.js buffer by default, prefer UInt8Array

> See reasoning in https://sindresorhus.com/blog/goodbye-nodejs-buffer

There's a transitional package that helps to fill current gaps in UInt8Array
till limitations lands into ecmascript.

https://github.com/sindresorhus/uint8array-extras