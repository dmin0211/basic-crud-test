<template>
  <v-list>
    <v-list-item-title
        v-for="(data, index) in $store.state.textData"
        :key="index"
    >
      {{data.name}}
    </v-list-item-title>
  </v-list>
</template>

<script>
import {EventBus} from "@/main";

export default {
name: "DataRead",
  created() {
    EventBus.$on('newData', data=>{
      this.$store.state.textData.push(data)
      console.log('newData')
    })
  }
}
</script>

<style scoped>

</style>