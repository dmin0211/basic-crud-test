import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Chat = () => import('../components/community/chatSite')

const Home = () => import('../components/Home')

const Question = () => import('../components/community/Qna/QuestionBoard')

const QnaBoardCreate = () => import('../components/community/Qna/QnaBoardCreate')

const QnaBody =()=>import('../components/community/Qna/QnaBody')

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
            path: '/qna',
            name: 'Qna',
            component: Question
        },
        {
            path: '/qna/create',
            name: 'qna-create-board',
            component: QnaBoardCreate
        },
        {
            path: '/qna/:id',
            name: 'qna-body',
            props: { qnaBody:true},
            component: QnaBody
        }

    ],
})