<template>
    <Layout>
        <div class="products">
            <h1 class="title">Products</h1>
            <div class="product" v-for="edge in $page.allContentfulProduct.edges" :key="edge.node.id">
                <div class="product__head">
                    <g-image class="product__head__image" :src="edge.node.image.file.url" :alt="edge.node.image.title"></g-image>
                    <div class="product__head__info">
                        <h2 class="name" sytle="margin-bottom: 10px;">{{edge.node.name}}</h2>
                        <span class="price">$ {{edge.node.price}}</span>
                        <button
                            class="snipcart-add-item product__btn"
                            :data-item-id="edge.node.id"
                            :data-item-name="edge.node.name"
                            :data-item-image="edge.node.image.file.url"
                            :data-item-price="edge.node.price"
                            :data-item-url="edge.node.path">購買</button>
                    </div>
                </div>
                <div class="product__desc" v-html="edge.node.desc" />
            </div>
            <Pager class="pagination" :info="$page.allContentfulProduct.pageInfo" />
        </div>
    </Layout>
</template>

<page-query>
query ($page: Int) {
  allContentfulProduct (perPage: 2, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        path
        name
        price
        desc (html: true)
        image {
          title
          file {
            url
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
    metaInfo: {
        title: "Products",
        meta: [
            { charset: "utf-8" },
            { name: "author", content: "Mars" },
            {
                name: "description",
                content: "找到我們全系列的奢侈服裝，鞋子和配飾"
            },
            {
                name: "keywords",
                content: "衣服, T恤, 鞋子, 褲子, 短褲, 洋裝, 帽子"
            }
        ]
    },
    name: "PageProducts",
    components: {
        Pager
    }
};
</script>

<style lang="scss" scoped>
.product {
    margin: 20px 0;
    display: flex;
    flex-flow: column nowrap;

    &__head {
        display: flex;

        &__image {
            width: 50%;
            background-color: $colorGrayLight;
        }

        &__info {
            width: 50%;
            display: flex;
            flex-flow: column nowrap;
            padding: 0 20px;

            .name {
                font-weight: normal;
                font-size: 24px;
                line-height: 1;
                margin-bottom: 5px;
            }
        }
    }

    &__desc {
        padding: 30px 0;
        > ::v-deep p {
            font-size: 18px;
        }
    }

    &__btn {
        background-color: $colorSecondary;
        padding: 5px;
        font-size: 17px;
        color: $colorWhite;
        margin-top: 30px;
        cursor: pointer;
        outline: none;
        border: none;
    }
}
</style>