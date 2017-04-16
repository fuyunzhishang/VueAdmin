<template>
	<div>
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
		<!--查询面板结束-->
		<!--工具栏-->
		<div class="tool-bar">
			<el-button class="el-icon-search" @click="SerarchList()" type="primary">查询</el-button>
			<el-button class="el-icon-plus" @click="openAddModel()" type="primary">添加</el-button>
		</div>
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
	</div>
</template>

<script>
  export default {
  	created() {
  		//this.getList()
  	},
    data() {
      return {
        addStockposition: false,
        loading2 : false,
        totalData: 0,
        currentpage: 1,
        pageSize: 10,
        currentData: [],
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
        }],
        model: {
          StockpositionCode: '',
          StockpositionName: '',
          AreaCode: '',
          WarehouseCode: '',
          Capacity: '',
          Use: [],
          StateName: '',
          StockpositionType: ''
        },
        tableData: [],
        editModel: {
          StockpositionCode: '',
          StockpositionName: '',
          AreaCode: '',
          WarehouseCode: '',
          Capacity: '',
          Use: [],
          StateName: '',
          StockpositionType: ''
        },
        closeModal() {
          this.addStockposition = false;
          this.resetForm('ruleForm');
        },
        rules: {
          StockpositionCode: [
          { required: true, message: '请输入库位编码', trigger: 'blur'},
          {min: 5, max: 8, message:'长度在5-8个字符', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleSizeChange(val) {
      	console.log(`每页${val}条`);
      },
      handleCurrentChange(val) {
      	this.currentpage = val;
      	console.log(`当前页:${val}`);
      },
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
      //查询数据
      /*SerarchList() {
      	this.$http.get('/api/stockposition/list/' + this.model.Stockpositioncode)
      	.then(res => {
      		console.dir(res.data)
      		this.tableData = res.data
      	})
      	.catch(err => {
      		console.log(err)
      	})
      }*/
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
      },
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
      },
      //分页
      handleCurrentChange(val) {
        this.currentpage = val
        console.log(`当前页: ${val}`);
        this.SerarchList(val)
      }
    }
  }
</script>

<style type="text/css">
	.tool-bar{
		margin-top: 10px;
	}
/*	.list{
		margin-top: 30px;
	}*/
</style>