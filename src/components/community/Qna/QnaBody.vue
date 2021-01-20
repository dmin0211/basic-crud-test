<template>
  <v-container>
    <v-card outlined>
      <v-card-title v-text="currentQnaData.title"></v-card-title>
      <v-card-subtitle v-text="currentQnaData.user"></v-card-subtitle>
      <v-card-text v-text="currentQnaData.Content"></v-card-text>
      <v-card-actions><v-btn @click="$router.push('/qna')"></v-btn></v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
// import {qnaOneRead} from './qnafiresotre'

export default {
  name: "QnaBody",
  data() {
    return {
      currentQnaData: {}
    }
  },
  created() {
    console.log(this.$route.params.qnaBody)
    this.currentQnaData=this.$route.params.qnaBody
    console.log(this.$route)
  }
}
</script>

<style scoped>

</style>