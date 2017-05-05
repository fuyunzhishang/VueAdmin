<template lang="html">
  <!--查询面板开始-->
  <div class="criteria panel panel-info">
    <div class="panel-heading">查询面板</div>
    <div class="panel-body">
      <el-form :inline="true"  :model="CriteriaModel" class="search-panel">
      <el-form-item label="库位编码">
        <el-input v-model="CriteriaModel.StockpositionCode"></el-input>
      </el-form-item>
      <el-form-item label="库位类型">
        <el-select v-model="CriteriaModel.StockpositionType" placeholder="请选择库位类型">
           <el-option v-for="item in StockpositionTypeList" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="区域编码">
        <el-input v-model="CriteriaModel.AreaCode"></el-input>
      </el-form-item>
      <el-form-item label="仓库编码">
        <el-input v-model="CriteriaModel.Warehousecode"></el-input>
      </el-form-item>
    </el-form>
    </div>
  </div>
</template>

 <script>
 import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'CriteriaPanel',
  data() {
    return {
     
    }
  },
  computed: mapGetters({
    CriteriaModel: 'CriteriaModel',
    StockpositionTypeList: 'StockpositionTypeList',
  }),
  // computed: {
  //   ...mapGetters([
  //     'CriteriaModel'
  //   ])
  // },
  vuex: {
    getters: {

    },
    actions: {
      //SearchList
    }
  },
  methods: {
    
  }
}

//相关的mutations
const mutations = {

}

</script>

<style lang="css">

</style>
