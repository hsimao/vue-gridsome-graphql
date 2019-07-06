<template>
    <Layout>
        <div class="blog">
            <h1>blog</h1>
            <article v-for="edge in $page.allPost.edges" :key="edge.node.id">
                <g-image :src="edge.node.cover_image" style="width: 100%;" />
                <h2>{{edge.node.title}}</h2>
                <p>{{edge.node.excerpt}}</p>
                <p>Posted {{edge.node.date}} . {{edge.node.timeToRead}} min read</p>
                <div>
                    <g-link :to="tag.path" class="tag" v-for="tag in edge.node.tags" :key="tag.id">#{{tag.id}}</g-link>
                </div>
                <g-link :to="edge.node.path">Read Post</g-link>
                <!-- <div v-html="edge.node.content" /> -->
            </article>
            <Pager class="pagination" :info="$page.allPost.pageInfo" />
        </div>
    </Layout>
</template>

<page-query>
query ($page: Int) {
  # perPage: 每頁顯示數量
  # page: 當前頁面
  # sortBy: 依據誰排序, 默認 date
  # order: 排序 (DESC 由高到低(默認), ASC 由低到高)
  allPost (perPage: 2, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
		edges {
      node {
        content
        title
        excerpt
        date (format: "YYYY/MM/DD")
        timeToRead
        path
        # quality: 圖片畫質, blur: lazy load 時候的模糊程度
        cover_image (width: 1000, height: 500, quality: 100, blur: 60)
        tags {
          id
          path
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";
export default {
    name: "blog",
    components: {
        Pager
    }
};
</script>

<style lang="scss" src="./style.scss" scoped></style>
