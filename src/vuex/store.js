import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

const state = {
    count: 0
}

export default new VueX.Store({
    state
})