<template>
    <Layout>
        <div class="pagePost">
            <div v-html="$page.post.content" />
            <vue-disqus class="disqus-content" shortname="vue-shop" :identifier="$page.post.id"></vue-disqus>
        </div>
    </Layout>
</template>

<page-query>
query ($path: String!) {
  post(path: $path) {
    id
    content
  }
}
</page-query>