import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"

let backend_port = '3000'
axios.defaults.baseURL = window.location.protocol + "//" + window.location.hostname + ':' + backend_port

createApp(App).mount('#app')
