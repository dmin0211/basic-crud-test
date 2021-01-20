<template>
  <v-container fluid>
    <v-data-iterator
        :items="qnaField"
        :search="question"
        :page="page"
        :items-per-page="itemsPerPage"
        hide-default-footer
    >
      <template v-slot:header>
        <v-container class="mt-10">
          <v-row justify="center"><h1>What's your question</h1></v-row>
          <v-row justify="center">
            <v-col
                sm="10"
                md="8"
                lg="6"
            >
              <v-text-field v-model="question"
                            append-icon="mdi-table-search"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row justify="end">
            <v-btn icon @click="$router.push({name:'qna-create-board'})">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </v-row>
        </v-container>
      </template>
      <template v-slot:default="props">
        <v-simple-table>
          <thead>
            <tr>
              <th class="text-left"
                  v-for="head in headers"
                  :key="head"
              >{{head}}</th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="(item,index) in props.items"
                :key="index"
                @click="$router.push({name:'qna-body',params:{id:item.id, qnaBody:item}})"
            >
              <td>{{item.title}}</td>
              <td>{{item.clicks}}</td>
              <td>{{item.comments}}</td>
              <td>{{item.user}}</td>
              <td>{{item.upload}}</td>
            </tr>
            </tbody>

        </v-simple-table>
      </template>
      <template v-slot:footer>
        <v-row class="mt-2" align="center" justify="center">
          <span class="grey--text ml-3">Select ItemPerPage</span>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  dark
                  text
                  color="primary"
                  class="ml-2"
                  v-bind="attrs"
                  v-on="on"
              >{{ itemsPerPage }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                  v-for="(item,index) in itemsPerArray"
                  :key="index"
                  @click="changePerPage(item)"
              >
                <v-list-item-title>{{ item }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-spacer/>
          <v-btn fab color="#7c4def" class="mr-1" elevation="0" dark
                 @click="formerPage"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab color="#7c4def" class="ml-1 mr-3" elevation="0" dark
                 @click="nextPage"
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
import {qnaRead as readQna} from './qnafiresotre'

export default {
  name: "QuestionBoard.vue",
  data() {
    return {
      question: '',
      page: 1,
      itemsPerPage: 10,
      itemsPerArray: [5, 10, 25],
      // nameRules: [
      //   v => !!v || 'Name is required',
      //   v => v.length <= 10 || 'Name must be less than 10 characters',
      // ],
      qnaField: [],
      headers: ['ContentTitles','Clicks','Comments','Users','UploadTimes']
    }
  },
  created() {
    readQna(this.qnaField)
  },
  methods: {
    changePerPage(number) {
      this.itemsPerPage = number
    },
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1
    },
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.qnaField.length / this.itemsPerPage)
    },

  }
}

</script>

<style scoped>

</style>