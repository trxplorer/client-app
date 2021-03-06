import Vue from 'vue'
import Vuex from 'vuex'

import BlockModule from './Block.module'
import AddressModule from './Address.module'
import TransactionModule from './Transaction.module'
import TokenModule from './Token.module'
import StatsModule from './Stats.module'
import SearchModule from './Search.module'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      BlockModule,
      AddressModule,
      TransactionModule,
      TokenModule,
      StatsModule,
      SearchModule
    }
  })

  return Store
}
