/**
 * Created by ThinkPad on 2018/2/9.
 */
//引入vue类库
import Vue from 'vue';
import App from './app.vue';
import './assets/styles/test.css';
import './assets/styles/test.stylus.styl';
import './assets/images/logo.png';

const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
    render: (h) => h(App)
}).$mount(root);