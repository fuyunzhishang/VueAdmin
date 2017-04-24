//stockposition actions
export const SearchList = makceAction(actions.SearchList())

function makceAction(type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args)
}

actions: {
  SearchList: function(page) {
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
  }
}
