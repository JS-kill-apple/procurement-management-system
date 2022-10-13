<template>
  <div class="nav-box">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">主页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">审批中心</template>
        <el-menu-item index="2-1">所有审批单</el-menu-item>
        <el-menu-item index="2-2">待我审批</el-menu-item>
        <el-menu-item index="2-3">我已处理</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">采购中心</template>
        <el-menu-item index="3-1">所有采购单</el-menu-item>
        <el-menu-item index="3-2">待我采购</el-menu-item>
        <el-menu-item index="3-3">我已采购</el-menu-item>
      </el-submenu>
      <el-menu-item index="4">仓储中心</el-menu-item>
      <el-menu-item index="5">消息中心</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key) {
      if (key === "1") {
        this.$router.push("/home-center");
      } else if (key === "2-1") {
        this.$router.push("/audit-center/all");
      } else if (key === "2-2") {
        this.$router.push("/audit-center/pending");
      } else if (key === "2-3") {
        this.$router.push("/audit-center/processed");
      } else if (key === "3-1") {
        this.$router.push("/procurement-center/all");
      } else if (key === "3-2") {
        this.$router.push("/procurement-center/pending");
      } else if (key === "3-3") {
        this.$router.push("/procurement-center/processed");
      } else if (key === "4") {
        this.$router.push("/warehouse-center");
      } else if (key === "5") {
        this.$router.push("/message-center");
      }
    },
  },
};
</script>

<style lang="css" scoped></style>