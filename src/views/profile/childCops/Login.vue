<template>
  <div>
    <div class="login">
      <div class="profile-photo">
        <img src="../../../assets/img/profile/avatar.svg" alt="" />
      </div>

      <div class="center">
        <span>登录/注册</span>
        <div class="content">
          <img src="../../../assets/img/profile/phone.svg" alt="" />
          <span>暂无绑定手机号</span>
        </div>
      </div>

      <div class="right">
        <div class="arrow"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
};
</script>
<style scoped>
.login {
  display: flex;
  height: 80px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
}

.profile-photo {
  margin-top: 10px;
  margin-left: 5px;
  width: 60px;
}

.profile-photo img {
  width: 100%;
}

.center {
  flex: 1;
  text-align: left;
  padding-left: 15px;
}

.center > span {
  display: block;
  margin-top: 15px;
  font-size: 18px;
}

.content {
  line-height: 27.5px;
}

.content span {
  font-size: 14px;
}

.content img {
  width: 20px;
  vertical-align: middle;
}

.arrow {
  margin: 32px auto;
  height: 15px;
  width: 15px;
  border-top: 2px solid #eee;
  border-right: 2px solid #eee;
  transform: rotateZ(45deg);
}
</style>