sed -ie 's/exports.default/module.exports/' ./dist/cjs/src/index.js
sed -ie 's/export default/export =/' ./dist/cjs/src/index.d.ts
