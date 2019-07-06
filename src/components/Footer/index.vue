<template>
    <footer>
        Copyright {{getCurrentYear}} by <a :href="href" target="_blank">Mars</a>
    </footer>
</template>

<script>
export default {
    name: "Footer",
    data() {
        return {
            href: "https://github.com/hsimao"
        };
    },
    computed: {
        getCurrentYear() {
            return new Date().getFullYear();
        }
    }
};
</script>

<style lang="scss" src="./style.scss" scoped></style>
