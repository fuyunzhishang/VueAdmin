<template lang="html">
  <!--查询面板开始-->
  <div class="criteria">
    <el-form :inline="true"  :model="model" class="search-panel">
      <el-form-item label="库位编码">
        <el-input v-model="model.StockpositionCode"></el-input>
      </el-form-item>
      <el-form-item label="库位类型">
        <el-select v-model="model.StockpositionType" placeholder="请选择库位类型">
           <el-option v-for="item in StockpositionType" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="区域编码">
        <el-input v-model="model.AreaCode"></el-input>
      </el-form-item>
      <el-form-item label="仓库编码">
        <el-input v-model="model.Warehousecode"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      StockpositionType: [{},{
        label: '正常存库位',
        value: '1'
      }, {
        label: '残次库位',
        value: '2'
      }, {
        label: '虚拟库位',
        value: '3'
      }, {
        label: '暂存库位',
        value: '4'
      }]
    }
  },
  vuex: {
    getters: {
      model: ({ StockPosition }) => StockPosition.criteriaModel
    },
    actions: {
      
    }
  }
}

//相关的mutations
const mutations = {

}
</script>

<style lang="css">
</style>
