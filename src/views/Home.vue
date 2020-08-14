<template>
  <div class="home">
    <h2>fetch分支</h2>
    <h2>fetch second</h2>
    <h2>fetch third</h2>
    <h3>fetch four</h3>
    <h2>num数据绑定：{{ state.num }}</h2>
    <button @click="ageChange">age++</button>
    <hr>
    <HomeComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComponent from '@/components/Home_1'
import { reactive , provide} from 'vue'
// import { useStore } from 'vuex'
// console.log(useStore)

export default {
  name: 'Home',
  components:{
    HomeComponent
  },
  setup(props,context){
    console.log(context)
    const state = reactive({
      num:18,
      city:'重庆',
      name:'DDS'
    })
    provide('user',state)
    const ageChange = ()=>{
      // console.log('ageChange')
      state.num++
    }
    return {
      state,
      ageChange
    }
  
  }
  
}
</script>
