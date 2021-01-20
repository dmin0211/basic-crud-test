<template>
  <div>
    <v-list>
      <v-list-item v-for="(item,index) in items"
                   :key="index"
                   no-action
                   router :to="{name:item.title}" exact
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title class="white--text" v-text="item.title"></v-list-item-title>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  props: ['items'],
  name: "menu.vue",
  created() {
    console.log(this.items)
  },

}
</script>

<style scoped>

</style>