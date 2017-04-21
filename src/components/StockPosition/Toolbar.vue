<template lang="html">
  <!--工具栏-->
  <div class="tool-bar">
    <el-button class="el-icon-search" @click="SerarchList()" type="primary">查询</el-button>
    <el-button class="el-icon-plus" @click="openAddModel()" type="primary">添加</el-button>
  </div>

</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    SerarchList(page) {
      this.loading2 = true
      this.$http.post('/api/stockposition/list/?currentPage=' + page, {
        LikeStockpositioncode: this.model.StockpositionCode,
        Stockpositionname: this.model.StockpositionName,
        Areacode: this.model.AreaCode,
        Stockpositiontype: this.model.StockpositionType

      })
      .then(res => {
        this.loading2 = false
        var ojson = JSON.parse(res.data)
        console.dir(ojson)
        this.tableData = ojson.list
        this.totalData = ojson.listLength
      })
      .catch(err => {
        console.log(err)
      })
    },
    openAddModel() {
      this.addStockposition = true
    }
  }
}
</script>

<style lang="css">
</style>
