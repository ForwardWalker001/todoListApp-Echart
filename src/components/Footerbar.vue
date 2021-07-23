<template>
    <div class="footer" v-show="todos.length">
        <span class="todo-count">
            <strong v-text="remaining"></strong> item left
        </span>
        <ul class="filters">
            <li><a @click="select('all')" :class="{selected: visibility == 'all'}">All</a></li>
            <li><a @click="select('active')" :class="{selected: visibility == 'active'}">Active</a></li>
            <li><a @click="select('complete')" :class="{selected: visibility == 'complete'}">Completed</a></li>
        </ul>
        <button class="clear-completed" @click="removeCompleted" v-show="todos.length > remaining">
            Clear completed
        </button>
        <footer class="info">
            <p>Double-click to edit a todo</p>
            <p>Written by 彭宇祥</p>
            <p>Part of TodoMVC</p>
		</footer>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props:['todos'],
    data(){
        return {
            visibility : null,
        }
    },
    mounted(){
        this.visibility = this.$route.name
        if(this.visibility == '/' || !this.visibility )this.visibility = 'all'
    },
    watch:{
        $route: {
            handler:function(){
                this.visibility = this.$route.name
                if(this.visibility == '/' || !this.visibility )this.visibility = 'all'
            },
            deep: true
        }
    },
    methods:{
        select(val){
            if(val != this.visibility){
                this.visibility = val
                this.$router.push('/todoList/'+val)
            }
        },
        removeCompleted(){
            this.todos.forEach((todo,index) => {
                if(todo.completed)this.todos.splice(index,1)
            });
        }
    },
    computed:{
        ...mapGetters([
            'remaining'
        ])
    },
}
</script>