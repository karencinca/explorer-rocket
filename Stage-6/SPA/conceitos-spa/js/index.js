import { Router } from './router.js'

const router = new Router()
router.add("/", "/SPA/conceitos-spa/pages/home.html")
router.add("/about", "/SPA/conceitos-spa/pages/about.html")
router.add("/contact", "/SPA/conceitos-spa/pages/contact.html")
router.add(404, "/SPA/conceitos-spa/pages/404.html")


router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()