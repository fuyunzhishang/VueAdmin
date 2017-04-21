<template>
<div id="StockPosition">
    <CriteriaPanel></CriteriaPanel>
    <Toolbar></Toolbar>
    <List></List>
</div>
</template>

<script>
import CriteriaPanel from '../StockPosition/CriteriaPanel'
import Edit from '../StockPosition/Edit'
import List from '../StockPosition/List'
import Toolbar from '../StockPosition/Toolbar'

export default {
    components: {
        CriteriaPanel,
        Edit,
        List,
        Toolbar
    },
    data() {
        return {


        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
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



    }
}
</script>

<style type="text/css">
.tool-bar {
    margin-top: 10px;
}


/*	.list{
		margin-top: 30px;
	}*/
</style>
