import { createStore } from 'vuex'
import defencestore from './defencestore'

export default function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      defencestore
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
}