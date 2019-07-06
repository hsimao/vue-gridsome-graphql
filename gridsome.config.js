// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Vue SHOP",
  siteDescription: "Your one-stop shop for finding all manner of stylish, luxury apparel and accessories",
  plugins: [
    {
      use: "gridsome-plugin-sass-resources-loader",
      options: {
        // 全領域引用 scss 變數檔案路徑
        resources: "~/assets/styles/variables.scss"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/posts/**/*.md",
        // Graphql 的查詢 key
        typeName: "Post",
        route: "/posts/:slug",
        // 設定 tag
        refs: {
          // Create a Tag content type and its nodes automatically.
          tags: {
            // Graphql 的查詢 key
            typeName: "Tag",
            route: "/tag/:id",
            create: true
          }
        }
      }
    },
    {
      use: "@gridsome/source-contentful",
      options: {
        space: process.env.CONTENTFUL_SPACE,
        accessToken: process.env.CONTENTFUL_ACESS_TOKEN, // required
        host: "cdn.contentful.com",
        environment: "master",
        typeName: "Contentful"
      }
    }
  ]
};
