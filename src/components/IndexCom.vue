<template>
    <div>
       <section class="todoapp" >
            <head-com :todos="todos"></head-com>
			<main-com :todos="todos"></main-com>
			<footer-bar :todos="todos"></footer-bar>
		</section>
        <!-- <router-link to="/">echartsDemo</router-link>  -->
    </div>
</template>

<script>
import FooterBar from './Footerbar.vue' 
import HeadCom from './HeadCom.vue'
import MainCom from './MainCom.vue'
export default {
    components : { FooterBar, HeadCom, MainCom },
    
    data(){
        return {
            todos: this.$store.state.todos
        }
    },
    mounted(){
    },
    watch:{
        todos:{
            // 监听深层内容
            deep: true,
            handler:(val)=>{
            localStorage.setItem('todoData', JSON.stringify(val))
            },
        }
    },
}
</script>