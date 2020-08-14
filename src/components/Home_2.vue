<template>
  <div>
      <h2>home_2</h2>
      <h2>provide inject 类似react的虫洞隔空传递</h2>
      <h2>{{user.num}}</h2>
      <h2>{{ user.name }}</h2>
      <h2>{{ user.city }}</h2>
  </div>
</template>

<script>
import { inject } from 'vue'
export default {
    name:'Home_2',
    setup(){
        const user = inject('user')
        console.log(user.num)
        return {
            user
        }
    }
}
</script>

<style>

</style>