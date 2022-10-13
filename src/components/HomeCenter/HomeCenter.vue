<template>
  <div class="home-center">
    这是主页
    <el-button plain @click="showSuccess()"> 成功 </el-button>
    <CommonNotification
      :notificationInfo="notificationInfo"
    ></CommonNotification>
  </div>
</template>

<script>
import CommonNotification from "../CommonService/CommonNotification.vue";

export default {
  name: "HomeCenter",
  components: {
    CommonNotification,
  },
  data() {
    return {
      notificationInfo: {
        title: "",
        message: "",
        type: "",
      },
    };
  },
  methods: {
    showSuccess() {
      this.notificationInfo = {
        title: "成功",
        message: "自定义成功信息",
        type: "success",
      };
    },
  },
};
</script>
