import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routerOptions = {
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',

    routes: [{
        path: "/main",
        component: '@/component/Main.vue',
        name: "Main"
    }]
}

export function createRouter() {
    return new Router(routerOptions)
}