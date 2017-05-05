<template>
    <div id="siderbar" class="collapse in">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="light" unique-opened router>
            <el-menu-item index="readme">
                <i class="el-icon-setting"></i>自述
            </el-menu-item>
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-menu"></i>系统功能</template>
                <el-menu-item index="stockposition">库位信息</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu"></i>表格</template>
                <el-menu-item index="basetable">基础表格</el-menu-item>
                <el-menu-item index="vuetable">Vue表格组件</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title"><i class="el-icon-date"></i>表单</template>
                <el-menu-item index="baseform">基本表单</el-menu-item>
                <el-menu-item index="vueeditor">编辑器</el-menu-item>
                <el-menu-item index="markdown">markdown</el-menu-item>
                <el-menu-item index="upload">文件上传</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title"><i class="el-icon-star-on"></i>图表</template>
                <el-menu-item index="basecharts">基础图表</el-menu-item>
                <el-menu-item index="mixcharts">混合图表</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
    //开关导航菜单
    $(document).ready(() => {
        //$('.collapse').collapse()
        //$("#siderbar").animate('collapse in width')
        $('#siderbar').on('hidden.bs.collapse', function () {
            $(".content").animate({left:'0px'})
        })
        $('#siderbar').on('shown.bs.collapse', function () {
            $(".content").animate({left:'150px'})
        })
    })
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 180px;
        left: 0;
        top: 50px;
        bottom:0;
        background: #20A0FF;
    }
    .sidebar > ul {
        height:100%;
    }
   .collapse {
  display: none;
  visibility: hidden;
}
.collapse.in {
  display: block;
  visibility: visible;
}
tr.collapse.in {
  display: table-row;
}
tbody.collapse.in {
  display: table-row-group;
}
.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  -webkit-transition-property: height, visibility;
  transition-property: height, visibility;
  -webkit-transition-duration: 0.35s;
  transition-duration: 0.35s;
  -webkit-transition-timing-function: ease;
  transition-timing-function: ease;
}
.collapsing.width {
  -webkit-transition-property: width, visibility;
  transition-property: width, visibility;
  width: 0;
  height: auto;
}
</style>
