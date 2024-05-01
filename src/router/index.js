import {createRouter, createWebHistory} from "vue-router";
import CheckAccountComponent from "../public/pages/check-account.component.vue";

const router = createRouter( {
    history: createWebHistory(),
    routes: [
        { path: '/check-account', component: CheckAccountComponent, meta: {title: 'Check Account'}},
        { path: '/', redirect: '/check-account'}
    ]
})

export default router;