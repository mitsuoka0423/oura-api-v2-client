sed -ie 's/exports.default/module.exports/' ./dist/cjs/index.js
sed -ie 's/export default/export =/' ./dist/cjs/index.d.ts
