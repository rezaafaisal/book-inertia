import { createApp, h } from "vue"
import { createInertiaApp } from "@inertiajs/inertia-vue3"
import { head } from "lodash"

createInertiaApp({
    resolve: name => import(`./pages/${name}`),
    setup({el, App, props, plugin}){
        createApp({render: ()=> head(App, props)}).use(plugin).mount(el)
    }
})
