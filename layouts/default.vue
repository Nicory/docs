<template>
  <div>
    <b-navbar toggleable="xs" type="light" variant="light" class="fixed-top">
      <div class="container">
        <b-navbar-brand href="#">NicoryBot Docs</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item exact active-class="active" v-for="page in pages" :to="page.path" :key="page.title" :title="page.description">{{page.title}}</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>

    </b-navbar>
    <nuxt />
  </div>
</template>


<script>
export default {
  data(){
    return {
      pages: []
    }
  },
  async mounted(){
    const pages = await this.$content().fetch();
    this.pages = pages;

  }
}
</script>
