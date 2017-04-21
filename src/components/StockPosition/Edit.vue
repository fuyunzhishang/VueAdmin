<template lang="html">
  <!--添加表单-->
  <vodal :show="addStockposition" animation="door" :width="500" :height="400" :closeButton="false">
    <el-form :model="editModel" label-width="100px" :rules="rules" ref="ruleForm">
      <el-form-item label="库位编码" prop="StockpositionCode">
        <el-input v-model="editModel.StockpositionCode"></el-input>
      </el-form-item>
      <el-form-item label="库位类型">
        <el-select v-model="editModel.StockpositionType" placeholder="请选择库位类型">
          <el-option v-for="item in StockpositionType" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="区域编码">
        <el-input v-model="editModel.AreaCode"></el-input>
      </el-form-item>
      <el-form-item label="仓库编码">
        <el-input v-model="editModel.Warehousecode"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="el-icon-s" @click="closeModal()" type="primary">取消</el-button>
        <el-button class="el-icon-save" @click="addModel(editModel)" type="primary">保存</el-button>
      </el-form-item>
    </el-form>
  </vodal>
</template>

<script>
export default {
    data() {
        return {
            addStockposition: false,
            editModel: {
                StockpositionCode: '',
                StockpositionName: '',
                AreaCode: '',
                WarehouseCode: '',
                Capacity: '',
                Use: [],
                StateName: '',
                StockpositionType: '',
                closeModal() {
                    this.addStockposition = false;
                    this.resetForm('ruleForm');
                },
                rules: {
                    StockpositionCode: [{
                            required: true,
                            message: '请输入库位编码',
                            trigger: 'blur'
                        },
                        {
                            min: 5,
                            max: 8,
                            message: '长度在5-8个字符',
                            trigger: 'blur'
                        }
                    ]
                }
            }
        }
    },
    methods: {
      addModel() {
        try{
          if (this.submitForm('ruleForm')) {
            this.$http.post('/api/stockposition/add/', {
              Stockpositioncode: this.editModel.StockpositionCode,
              Stockpositiontype: this.editModel.StockpositionType,
              Areacode: this.editModel.AreaCode,
              WarehouseCode: this.Warehousecode
            })
            .then(res => {
              if (res.data.Success) {
              this.toastr.success(res.data.Message)
               console.log(res.data)
               this.addStockposition = false
               this.editModel.StockpositionCode = ''
               this.editModel.StockpositionType = ''
               this.editModel.AreaCode = ''
               this.editModel.Warehousecode = ''
               closeModal()
             }

            })
            .catch(e => {
              this.toastr.warn('保存失败！')
              console.log(e)
            })
          }else {
            console.log('提交失败！')
          }
        }
        catch(e) {
          console.log(e)
        }
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
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<style lang="css">
</style>
