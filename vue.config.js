module.exports = {
  pages: {
    index: {
      entry: "src/front/front.js",
      template: "src/front/front.html",
      filename: "index.html",
      title: '前台',
      chunks: ['chunk-vendors', 'chunk-common','front']
    },
    admin: {
      entry: "src/admin/admin.js",
      template: "src/admin/admin.html",
      filename: "admin.html",
      title: '後台',
      chunks: ['chunk-vendors', 'chunk-common','admin']
    }
  }
}