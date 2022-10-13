<template>
  <div class="common-notification">{{ this.notificationInfo.type }}</div>
</template>
  
<script>
export default {
  name: "CommonNotification",
  data() {
    return {
      notificationType: ["success", "warning", "info", "error"],
    };
  },
  props: {
    notificationInfo: {
      type: Object,
      default() {},
    },
  },
  beforeUpdate() {
    this.showNotification();
  },
  methods: {
    showNotification() {
      if (!this.notificationType.includes(this.notificationInfo.type)) {
        return;
      }
      this.$notify({
        title: this.notificationInfo.title,
        message: this.notificationInfo.message,
        type: this.notificationInfo.type,
      });
    },
  },
};
</script>
  
<style lang="css" scoped>
.common-notification {
  display: none;
}
</style>