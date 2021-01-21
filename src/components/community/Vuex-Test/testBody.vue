<template>
  <v-main>
    <DataRead></DataRead>
    <DataCreate></DataCreate>
  </v-main>
</template>

<script>
import DataCreate from "@/components/community/Vuex-Test/DataCreate";
import DataRead from "@/components/community/Vuex-Test/DataRead";
export default {
name: "testBody",
  components: {DataCreate, DataRead}
}
</script>

<style scoped>

</style>