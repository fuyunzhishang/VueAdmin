<template lang="html">
  <!--工具栏-->
  <div class="tool-bar">
    <el-button class="el-icon-search" @click="SerarchList()" type="primary">查询</el-button>
    <el-button class="el-icon-plus" @click="openAddModel()" type="primary">添加</el-button>
  </div>

</template>

  <script>
  import SearchList from '../../vuex/actions'
  export default {
    name: 'Toolbar',
    data() {
      return {

      }
    },
    methods: {

      openAddModel() {
        this.addStockposition = true
      }
    },
    vuex: {
      getters:{

    },
    actions: {
      SerarchList
    }
  }
  }
  </script>

<style lang="css">
</style>
