import {createRouter, createWebHistory} from "vue-router";
import CheckAccountComponent from "../public/pages/check-account.component.vue";
import loginComponent from "../iam/pages/login.component.vue";
import registerComponent from "../iam/pages/register.component.vue";

const router = createRouter( {
    history: createWebHistory(),
    routes: [
        { path: '/check-account', component: CheckAccountComponent, meta: {title: 'Check Account'}},
        { path: '/login', component: loginComponent, meta: {title: 'Login'}},
        { path: '/register', component: registerComponent, meta: {title: 'Register'}},
        { path: '/', redirect: '/check-account'}
    ]
})

export default router;