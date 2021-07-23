<template>
    <section class="main" v-show="todos.length">
        <input id="toggle-all" class="toggle-all" type="checkbox" v-model="allDone">
		<label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
            <li class="todo" v-for="todo in filteredTodos" :key="todo.id" :class="{completed: todo.completed, editing: todo == editedTodo}">
                <div class="view">
                    <input class="toggle" type="checkbox" v-model="todo.completed">
                    <label @dblclick="editTodo(todo)" >{{todo.title}}</label>
                    <button class="destroy" @click="removeTodo(todo)"></button>
                </div>
                <input class="edit" type="text" v-model="todo.title" v-focus="todo == editedTodo"  @blur="doneEdit(todo)" @keydown.enter="doneEdit(todo)" @keydown.esc="cancelEdit(todo)">
            </li>
        </ul>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    props: ['todos'],
    data(){
        return{
            editedTodo: null,
            filteredTodos:null
        }
    },
    mounted(){
        this.todofun(this.$route)
    },
    watch:{
        $route: {
            handler:function(to){
                this.todofun(to)
            },
            deep: true
        }
    },
    computed:{
        ...mapGetters([
            'remaining'
        ]),
        allDone: {
            get: function () {
                return this.remaining === 0;
            },
            set: function (value) {
                this.filteredTodos.forEach(function (todo) {
                    todo.completed = value;
                });
            }
        }
    },
    methods:{
        todofun(rou){
            const rouPath = rou.path
            if(rouPath == '/todoList/all' || rouPath =='/todoList'){
                this.filteredTodos = this.todos
            }
            else if(rouPath == '/todoList/active'){
                this.filteredTodos = this.todos.filter(todo=>todo.completed == false )
            }else if(rouPath == '/todoList/complete'){
                this.filteredTodos = this.todos.filter(todo=>todo.completed == true )
            }
        },
        editTodo(todo){
			this.beforeEditCache = todo.title;
			this.editedTodo = todo;
		},
        removeTodo(todo) {
            const index = this.todos.indexOf(todo)
			this.todos.splice(index, 1)
		},
        doneEdit(todo) {
            if (!this.editedTodo) {
                return;
            }
            this.editedTodo = null;
            todo.title = todo.title.trim();
            if (!todo.title) {
                this.removeTodo(todo);
            }
        },
		cancelEdit(todo) {
			this.editedTodo = null;
			todo.title = this.beforeEditCache;
		},
    },
   directives: {
        focus: {
    // 指令的定义
            inserted: function (el) {
            el.focus()
        }
  }
    },
}
</script>
<style scoped>
.view {
    text-align: left;
}
</style>