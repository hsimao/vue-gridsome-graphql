<template>
    <Layout>
        {{$static.metaData.siteDescription}}
        <h1>About us</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
    </Layout>
</template>

<static-query>
{
  metaData {
    siteDescription
  }
}
</static-query>
<script>
export default {
    metaInfo() {
        return {
            title: "About us",
            meta: [
                {
                    name: "description",
                    content: this.$static.metaData.siteDescription
                }
            ]
        };
    }
};
</script>