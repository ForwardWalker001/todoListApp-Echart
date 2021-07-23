<template>
    <header class="header">
        <h1>todos</h1>
        <input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?" v-model="newTodo" @keydown.enter="addTodo">
    </header>
</template>

<script>
export default {
    props:['todos'],
    data(){
        return {
            newTodo:''
        }
    },
    mounted(){
    },
    methods:{
        addTodo() {
            const value = this.newTodo && this.newTodo.trim();
            if (!value) {
                return;
            }
            this.todos.push({ id: Date.now(), title: value, completed: false });
            this.newTodo = '';
		},
    },
    // watch:{
    //     todos(val){
    //         localStorage.setItem('todoData', JSON.stringify(val))
    //     }
    // }
}
</script>