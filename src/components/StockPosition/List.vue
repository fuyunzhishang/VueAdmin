<template lang="html">
  <!--数据列表-->
  <div class="list">
    <!--分页-->.
    <div class="pagination">
      <el-pagination layout="total, prev, pager, next, jumper" :total="totalData" @current-change="handleCurrentChange" :current-page="currentpage" :page-size="pageSize">
      </el-pagination>
    </div>
    <el-table :data="tableData" v-loading="loading2" element-loading-text="拼命加载中" stripe style="width: 100%; margin-top:20px;">
      <el-table-column prop="Stockpositioncode" label="库位编码"></el-table-column>
      <el-table-column prop="Stockpositionname" label="库位名称"></el-table-column>
      <el-table-column prop="Capacity" label="最大容量"></el-table-column>
      <el-table-column prop="Areacode" label="区域编码"></el-table-column>
      <el-table-column prop="Warehousecode" label="仓库编码"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'List',
  data() {
    return {
      loading2 : false,
      totalData: 0,
      currentpage: 1,
      pageSize: 10,
      currentData: [],
      tableData: [],

    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页${val}条`);
    },
    // handleCurrentChange(val) {
    //   this.currentpage = val;
    //   console.log(`当前页:${val}`);
    // },
    //分页
    //获取数据
    getList() {
        this.$http.get('api/stockposition/list')
            .then(res => {
                console.dir(res.data)
                this.tableData = res.data
            })
            .catch(err => {
                console.log(err)
            })
    },
    handleCurrentChange(val) {
        this.currentpage = val
        console.log(`当前页: ${val}`);
        this.SerarchList(val)
    }
  }
}
</script>

<style lang="css">
</style>
