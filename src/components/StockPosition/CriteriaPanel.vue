<template lang="html">
  <!--查询面板开始-->
  <div class="criteria">
    <el-form :inline="true"  :model="CriteriaModel" class="search-panel">
      <el-form-item label="库位编码">
        <el-input v-model="CriteriaModel.StockpositionCode"></el-input>
      </el-form-item>
      <el-form-item label="库位类型">
        <el-select v-model="CriteriaModel.StockpositionType" placeholder="请选择库位类型">
           <el-option v-for="item in StockpositionType" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="区域编码">
        <el-input v-model="CriteriaModel.AreaCode"></el-input>
      </el-form-item>
      <el-form-item label="仓库编码">
        <el-input v-model="CriteriaModel.Warehousecode"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="el-icon-search" @click="SearchAction()" type="primary">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

 <script>
 import { mapGetters, mapActions } from 'vuex'
 import {SearchList} from '../../vuex/actions'
export default {
  name: 'CriteriaPanel',
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
  computed: mapGetters({
    CriteriaModel: 'CriteriaModel'
  }),
  // computed: {
  //   ...mapGetters([
  //     'CriteriaModel'
  //   ])
  // },
  vuex: {
    getters: {
      //state => console.log(state)
      //CriteriaModel: state => state.StockPosition.CriteriaModel
      //state => state.StockPosition.CriteriaModel
      //CriteriaModel: ({state}) => state.StockPosition.CriteriaModel
    },
    actions: {
      SearchList
    }
  },
  methods: {
    SearchAction() {
      SearchList(this.CriteriaModel)
    },
    // SerarchList(page) {
    //     this.loading2 = true
    //   	this.$http.post('/api/stockposition/list/?currentPage=' + page, {
    //   		LikeStockpositioncode: this.CriteriaModel.StockpositionCode,
    //   		Stockpositionname: this.CriteriaModel.StockpositionName,
    //   		Areacode: this.CriteriaModel.AreaCode,
    //   		Stockpositiontype: this.CriteriaModel.StockpositionType
    //   	})
    //   	.then(res => {
    //       this.loading2 = false
    //       var ojson = JSON.parse(res.data)
    //   		console.dir(ojson)
    //   		this.tableData = ojson.list
    //       this.totalData = ojson.listLength
    //   	})
    //   	.catch(err => {
    //   		console.log(err)
    //   	})
    //   }
  }
}

//相关的mutations
const mutations = {

}

</script>

<style lang="css">
</style>
