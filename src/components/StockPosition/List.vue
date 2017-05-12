<template lang="html">
  <!--数据列表-->
  <div class="list">
    <!--分页-->.
    <div class="pagination" style="display:inherit">
      <el-pagination layout="total, prev, pager, next, jumper" :total="List.totalData" @current-change="handleCurrentChange" :current-page="List.currentpage" :page-size="List.pageSize">
      </el-pagination>
    </div>
    <el-table :data="List.tableData" v-loading="List.loading2" element-loading-text="拼命加载中" stripe style="width: 100%; margin-top:20px;">
      <el-table-column  prop="Identification" label="ID" style"hidden:hidden"></el-table-column>
      <el-table-column  prop="Stockpositioncode" label="库位编码"></el-table-column>
      <el-table-column prop="Stockpositionname" label="库位名称"></el-table-column>
      <el-table-column prop="StockpositionType" label="库位类型"></el-table-column>
      <el-table-column prop="Capacity" label="最大容量"></el-table-column>
      <el-table-column prop="Areacode" label="区域编码"></el-table-column>
      <el-table-column prop="Warehousecode" label="仓库编码"></el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'List',
  data() {
    return {

    }
  },
  computed: mapGetters({
    List: 'List',
    CriteriaModel: 'CriteriaModel'
  }),
  methods: {
    SearchAction() {
      this.$store.dispatch('SearchList', this.CriteriaModel)
    },
    handleSizeChange(val) {
      console.log(`每页${val}条`);
    },
    handleCurrentChange(val) {
        this.List.currentpage = val
        this.$store.dispatch('SearchList', this.CriteriaModel)
        console.log(`当前页: ${val}`);
    },
    handleEdit(index, model) {
      console.log(index, model)
      this.$store.dispatch('SetEditModel', model)
    }
  }
}
</script>

<style lang="css">
</style>
