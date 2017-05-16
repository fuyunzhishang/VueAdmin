<template lang="html">
  <!--查询面板开始-->
  <div class="criteria panel panel-info">
    <div class="panel-heading">查询面板</div>
    <div class="panel-body">
      <el-form :inline="true"  :model="CriteriaModel" class="search-panel">
      <el-form-item label="订单编号">
        <el-input v-model="CriteriaModel.orderNo"></el-input>
      </el-form-item>
      </el-form-item>
      <el-form-item label="Notes">
        <el-input v-model="CriteriaModel.notes"></el-input>
      </el-form-item>
      <el-form-item label="URI">
        <el-input v-model="CriteriaModel.uri"></el-input>
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
    CriteriaModel: 'DeclpoCancelCriteriaModel',
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
