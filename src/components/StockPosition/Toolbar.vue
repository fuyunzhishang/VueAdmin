<template lang="html">
  <!--工具栏-->
  <div class="tool-bar">
    <el-button class="el-icon-search" @click="SearchAction()" type="primary">查询</el-button>
    <el-button class="el-icon-plus" @click="openAddAction()" type="primary">添加</el-button>
  </div>
</template>

  <script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'Toolbar',
    data() {
      return {

      }
    },
    methods: {
      openAddAction() {
        this.Edit.addStockposition = true
      },
      SearchAction() {
      this.$store.dispatch('SearchList', this.CriteriaModel)
    }
    },
    computed: mapGetters({
      SearchList: 'SearchList',
      CriteriaModel: 'CriteriaModel',
      Edit: 'Edit'
    })
  }
  </script>

<style lang="css">
</style>
