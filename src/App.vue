<template>
  <div id="app">
    <div id="nav">
      <router-link to="/todoList"><h3>TodosListApp</h3></router-link> &nbsp;&nbsp;&nbsp;
      <router-link to="/echart"><h3>echartsDemo</h3></router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    // IndexCom
  },
  data(){
    return {
      listRot: null
    }
  },
  mounted(){
  },
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: flex;
  justify-content: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-active {
  color: #42b983;
}
</style>
