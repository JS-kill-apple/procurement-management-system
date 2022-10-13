<template>
  <div class="all-approvals">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column label="审批单号">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="goApprovalDetail(scope.row)">{{scope.row.approvalCode}}</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="applicant" label="申请人"> </el-table-column>
      <el-table-column prop="approver" label="审批人"> </el-table-column>
      <el-table-column prop="applicationTime" label="申请时间"> </el-table-column>
      <el-table-column prop="approvalTime" label="审批时间"> </el-table-column>
      <el-table-column prop="status" label="审批状态"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleClick(scope.row)">审批</el-button>
          <el-button type="text" size="small" @click="handleClick(scope.row)">催办</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
  
<script>
export default {
  name: "AllApprovals",
  data() {
    return {
      tableData: [
        {
          approvalCode: "001",
          applicant: "ymc",
          approver: ["ymc", "tds"],
          applicationTime: "",
          approvalTime: "",
          status: "pending",
        },
        {
          approvalCode: "002",
          applicant: "ymc",
          approver: ["ymc", "tds"],
          applicationTime: "",
          approvalTime: "",
          status: "refused",
        },
      ],
    };
  },
  methods: {
    goApprovalDetail(row) {
      this.$router.push({
        path: "/audit-center/approval-details/" + row.approvalCode,
        query: { approvalCode: row.approvalCode },
      });
    },
    handleClick(row) {
      console.log(row);
    },
  },
};
</script>
  
<style lang="css" scoped></style>