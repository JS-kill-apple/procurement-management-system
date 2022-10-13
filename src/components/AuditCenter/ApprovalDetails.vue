<template>
  <div class="approval-details">审批详情{{approvalCode}}</div>
</template>
  
<script>
export default {
  name: "ApprovalDetails",
  data() {
    return {
      approvalCode: this.$route.query.approvalCode,
    };
  },
  mounted: {},
  methods: {},
};
</script>
  
<style lang="css" scoped></style>