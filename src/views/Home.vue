<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div>
      <!-- <mt-button type="default" @click="btn">default</mt-button> -->
      <!-- <div>as
        {{$store.state}}
        <div>
          {{g_a}}
        </div>
      </div>
      <div>
        <button @click="a_arr()">添加</button>
      </div>
      {{$store.state.arr}}
      {{g_arr}} -->
      <lee :arr="arr"/>
    </div>
  </div>
</template>

<script>
import {Indicator} from 'mint-ui'
// @ is an alias to /src
import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'Home',
  data() {
    return {
      arr:[
        {title:'河南省',arr:[
          {title:'郑州市',arr:[
            {title:'荥阳市'},
            {title:'二七区'}
          ]},
          {title:'新乡市',arr:[
            {title:'新乡县'},
            {title:'原阳县'}
          ]}
        ]},
        {title:'河北省',arr:[
          {title:'石家庄市',arr:[
            {title:'新华区'},
            {title:'西三庄乡'}
          ]},
          {title:'邯郸市',arr:[
            {title:'大名县'},
            {title:'魏县'}
          ]}
        ]}
      ]
    }
  },
  computed:{
    ...mapGetters(['g_arr','g_a']),
  },
  mounted() {
    console.log(this.$store)
  },
  methods: {
    ...mapActions(['a_arr']),
    btn(){
      // this.$router.push({path:'/about'})
      // location.href = '/about/12'
      // console.log(this.$router)
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
    }
  },
}
</script>
