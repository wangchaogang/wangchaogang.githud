<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-for="(i,$index) in $store.state.arr" :key="$index">
          {{i}} <button @click="btn($index)">移除</button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    btn(index){
      this.$store.commit('m_arr2',index)
    }
  },
}
</script>