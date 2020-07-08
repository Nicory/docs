<template>
  <div class="container">
    <div class="h1">{{page.title}}</div>
    <div class="text-black-50 font-italic doc-description">{{page.description}}</div>
    <div class="text-muted font-italic">Создано: {{moment(page.createdAt).fromNow()}}; Изменено: {{moment(page.updatedAt).fromNow()}}; Название файла: {{page.slug + page.extension}}</div>
    <hr>
    <nuxt-content :document="page"></nuxt-content>
  </div>
</template>


<script>
import moment from 'moment'
import docWarn from '@/components/docWarn.vue'
moment.locale('ru');

export default {
  data(){
    return {
      page: {}
    }
  },
  async mounted(){
    const page = await this.$content(this.$route.params.doc).without("index").fetch();
    this.page = page;
  },
  computed: {
    moment: () => moment,
    console: () => console
  },
  components: {
    docWarn
  }
}
</script>


<style scoped>
.container{
  margin-top: 5rem;

}
</style>
