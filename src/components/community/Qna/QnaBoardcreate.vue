<template>
  <v-app>
    <v-container fuild>
      <v-row>
        <v-col
            offset="1"
            xs="6"
            sm="6"
        >
          <v-text-field
              v-model="newData.title"
              label="Content title"
          >
          </v-text-field>
        </v-col>
        <v-col
            offset="2"
            xs="2"
            sm="2"
        >
          <v-text-field
              v-model="newData.user"
              label="username"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col
            cols="12"
            sm="10"

        >
          <v-textarea
              outlined
              rows="10"
              no-resize
              label="Content"
              v-model="newData.Content"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col
            offset="10"
        >
          <v-btn @click="createdQna" icon><v-icon>mdi-pencil</v-icon></v-btn>
        </v-col>
      </v-row>
    </v-container>

  </v-app>
</template>

<script>
import {qnaCreat as createQna} from './qnafiresotre'
export default {
name: "QnaBoardcreate",
  data(){
    return{
      newData:{
        Content:'',
        user:'',
        title:'',
      }
    }
  },
  methods:{
    createdQna(){
      createQna(this.newData)
      this.$router.push({name:'Qna'})
    }
  }
}
</script>

<style scoped>

</style>