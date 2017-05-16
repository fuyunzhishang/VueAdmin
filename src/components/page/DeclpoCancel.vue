<template>
<div id="DeclpoCancel">
    <CriteriaPanel></CriteriaPanel>
    <Toolbar></Toolbar>
    <List></List>
    <Edit></Edit>
</div>
</template>

<script>
import CriteriaPanel from '../child/DeclpoCancel/CriteriaPanel'
import Edit from '../child/DeclpoCancel/Edit'
import List from '../child/DeclpoCancel/List'
import Toolbar from '../child/DeclpoCancel/Toolbar'

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
