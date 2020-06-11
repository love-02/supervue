import BackTop from '../components/content业务/backTo/BackTop.vue';


export const backTop  = {
    components:{
        BackTop
    },
    data() {
        return {
      isBackTop:false      
        }
    },
    methods: {
        backClick() {
            this.$refs.scroll.scrollTo(0, 0, 500);
          }
    },
}