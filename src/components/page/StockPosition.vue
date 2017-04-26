<template>
<div id="StockPosition">
    <CriteriaPanel></CriteriaPanel>
   
</div>
</template>

<script>
import CriteriaPanel from '../StockPosition/CriteriaPanel'
//import Edit from '../StockPosition/Edit'
//import List from '../StockPosition/List'
//import Toolbar from '../StockPosition/Toolbar'

export default {
    components: {
        CriteriaPanel,
        //Edit,
        //List,
        //Toolbar
    },
    data() {
        return {
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        },
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
