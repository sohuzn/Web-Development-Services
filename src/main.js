import { createApp } from 'vue'
import App from './App.vue'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faDisplay,faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faGift } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faPaintRoller } from '@fortawesome/free-solid-svg-icons'
import { faComputer } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitch } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faBrain } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'


library.add(faUserSecret, faBars, faGift, faLightbulb,faDisplay, faClock, faDatabase, faPaintRoller, faComputer, faFacebook, faInstagram, faTwitch, faTwitter, faBrain, faYoutube)


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')




