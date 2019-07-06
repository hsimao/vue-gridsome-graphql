<template>
    <div class="layout">
        <header class="header">
            <strong>
                <g-link to="/">{{ $static.metaData.siteName }}</g-link>
            </strong>
            <nav class="nav">
                <g-link class="nav__link" to="/">Home</g-link>
                <g-link class="nav__link" to="/about">About</g-link>
                <g-link class="nav__link" to="/products">Products</g-link>
                <g-link class="nav__link" to="/blog">Blog</g-link>
            </nav>
        </header>
        <slot />
        <Footer v-if="showFooter" />
    </div>
</template>

<script>
import Footer from "~/components/Footer";
export default {
    name: "LayoutDefault",
    components: {
        Footer
    },
    props: {
        showFooter: {
            type: Boolean,
            default: true
        }
    }
};
</script>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style lang="scss" src="./style.scss" ></style>
