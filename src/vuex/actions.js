//stockposition actions
import * as types from './mutation-types'
import axios from 'axios'

//查询方法
// export const SearchList = (CriteriaModel) => {
//     this.loading2 = true
//     axios.post('/api/stockposition/list/?currentPage=' , {
//       LikeStockpositioncode: this.CriteriaModel.StockpositionCode,
//       Stockpositionname: this.model.StockpositionName,
//       Areacode: this.model.AreaCode,
//       Stockpositiontype: this.model.StockpositionType

//     })
//     .then(res => {
//       this.loading2 = false
//       var ojson = JSON.parse(res.data)
//       console.dir(ojson)
//       this.tableData = ojson.list
//       this.totalData = ojson.listLength
//     })
//     .catch(err => {
//       console.log(err)
//     })
//     dispatch(types.SET_MODEL_VAL, CriteriaModel)
//   }

export const SearchList = (CriteriaModel) => {
  dispatch(type.SET_MODEL_VAL,CriteriaModel)
}