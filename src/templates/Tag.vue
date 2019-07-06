<template>
    <Layout>
        <div class="pageTag">
            <h1>{{$page.tag.title}}</h1>
            <article v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id">
                <g-image :src="edge.node.cover_image" style="width: 100%;" />
                <h2>{{edge.node.title}}</h2>
                <p>{{edge.node.excerpt}}</p>
                <p>Posted {{edge.node.date}} . {{edge.node.timeToRead}} min read</p>
                <div>
                    <g-link :to="tag.path" class="tag" v-for="tag in edge.node.tags" :key="tag.id">#{{tag.id}}</g-link :to="">
                </div>
                <g-link :to="edge.node.path">Read Post</g-link>
            </article>
            <Pager class="pagination" :info="$page.tag.belongsTo.pageInfo" />
        </div>
    </Layout>
</template>

<page-query>
query ($id: String, $page: Int){
  tag (id: $id) {
    title
    belongsTo (perPage: 2,  page: $page) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ... on Post {
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
  }
}
</page-query>

<script>
import { Pager } from "gridsome";
export default {
    name: "TagTemplate",
    components: {
        Pager
    }
};
</script>