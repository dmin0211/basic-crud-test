<template>
  <v-main>
    <v-row justify="center">
      <v-col><v-text-field v-model="name"></v-text-field></v-col>
      <v-col><v-btn @click="newData"></v-btn></v-col>
    </v-row>
  </v-main>
</template>

<script>
import {EventBus} from "@/main";

export default {
name: "DataCreate",
  data(){
    return{
      name:''
    }
  },
  methods:{
    newData(){
      let createData = {
        name: this.name
      }
       EventBus.$emit('newData',createData)
    }
  }
}
</script>

<style scoped>

</style>