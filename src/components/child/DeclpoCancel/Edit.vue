<template lang="html">
  <!--添加表单-->
  <vodal :show="Edit.addStockposition" animation="door" :width="500" :height="400" :closeButton="false">
    <el-form :model="editModel" label-width="100px"  ref="ruleForm">
      <el-form-item label="库位编码">
        <el-input v-model="editModel.Stockpositioncode"></el-input>
      </el-form-item>
      <el-form-item label="库位类型">
        <el-select v-model="editModel.StockpositionType" placeholder="请选择库位类型">
          <el-option v-for="item in StockpositionTypeList" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="区域编码">
        <el-input v-model="editModel.Areacode"></el-input>
      </el-form-item>
      <el-form-item label="仓库编码">
        <el-input v-model="editModel.Warehousecode"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="el-icon-s" @click="closeModal()" type="primary">取消</el-button>
        <el-button class="el-icon-save" @click="addModelAction()" type="primary">保存</el-button>
      </el-form-item>
    </el-form>
  </vodal>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default { 
    name: 'Edit',
    data() {
        return {
            addStockposition: true,
            // editModel: {
            //     StockpositionCode: '',
            //     StockpositionName: '',
            //     AreaCode: '',
            //     WarehouseCode: '',
            //     Capacity: '',
            //     Use: [],
            //     StateName: '',
            //     StockpositionType: '',
            //     closeModal() {
            //         this.addStockposition = false;
            //         this.resetForm('ruleForm');
            //     },
            //     rules: {
            //         StockpositionCode: [{
            //                 required: true, 
            //                 message: '请输入库位编码',
            //                 trigger: 'blur'
            //             },
            //             {
            //                 min: 5,
            //                 max: 8,
            //                 message: '长度在5-8个字符',
            //                 trigger: 'blur'
            //             }
            //         ]
            //     }
            // }
        }
    },
    computed: mapGetters ({
      editModel: 'DeclpoCancelEditModel',
      Edit: 'DeclpoCancelEdit',
      StockpositionTypeList: 'StockpositionTypeList',
    }),
    watch: {
      'this.$store.state.StockPosition.Edit.saveResult': function () {
        debugger
        console.log(this.Edit.saveResult)
      }
    },
    methods: {
       closeModal() {
           this.Edit.addStockposition = false;
           this.resetEditModelAction()
          //this.resetForm('ruleForm');
      },
      resetEditModelAction() {
        this.$store.dispatch('ResetEditModel')
      },
      addModelAction() {
        this.$store.dispatch('AddModel', this.editModel).then(() => {
          console.log(this.editModel)
          setTimeout(() => {
            if(this.Edit.saveResult) {
              this.$message({
                message: this.Edit.saveResult.message,
                type: 'success'
              })
            } else {
              this.$message({
                message: this.Edit.saveResult.message,
                type: 'error'
              })
            }
          }, 1000)
          //setTimeout(() => this.$toastr.info(this.Edit.saveResult), 1000)
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
       submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('validated')
          } else {
            console.log('error submit!!');
            return false;
          }
        });
        return true;
      },
    }
}
</script>

<style lang="css">
</style>
