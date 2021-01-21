import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Chat = () => import('../components/community/chatSite')

const Home = () => import('../components/Home')

const QuestionMain = () => import('../components/community/Qna/Qnamain')

const Question = () => import('../components/community/Qna/QuestionBoard')

const QnaBoardCreate = () => import('../components/community/Qna/QnaBoardCreate')

const QnaBody = () => import('../components/community/Qna/QnaBody')

const Vuex = () => import('@/components/community/Vuex-Test/testBody')
export default new Router({
    mode: 'history',
    base: process.env.BASE,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/chat',
            name: 'Chat',
            component: Chat
        },
        {
            path: '/vuex',
            name: 'Vuex',
            component: Vuex
        },
        {
            path: '/qna',
            name: 'Qna',
            redirect: {name:'qna-board'},
            component: QuestionMain,
            children: [
                {
                    path: '/',
                    name: 'qna-board',
                    component: Question
                },
                {
                    path: 'create',
                    name: 'qna-create-board',
                    component: QnaBoardCreate
                },
                {
                    path: ':id',
                    name: 'qna-body',
                    props: {qnaBody: true},
                    component: QnaBody
                }
            ]
        },

    ],
})