<template>
  <div>
      <h2>home_1</h2>
      <h2>store:{{ state.city }}</h2>
      <h2>store:{{ state.count }}</h2>
      <hr>
      <HomeComponent_1/>
  </div>
</template>

<script>
import HomeComponent_1 from './Home_2'
import {
  useStore,
  // mapState,
  // mapMutations,
  // mapActions,
  // mapGetters
} from 'vuex'
export default {
    name:"Home_1",
    // inject:['user'],
    components:{
        HomeComponent_1
    },
    setup(){
       
    const state = useStore().state
    console.log(state, 'store')

    return {
        state
    }
    }
   
   
}
</script>

<style>

</style>