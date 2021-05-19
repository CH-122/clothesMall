<template>
  <div class="info">
    <div class="info-item">
      <p><span>0.00</span>元</p>
      <p>我的余额</p>
    </div>
    <div class="info-item">
      <p><span>0</span>个</p>
      <p>我的优惠</p>
    </div>
    <div class="info-item">
      <p><span>0</span>分</p>
      <p>我的积分</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.info {
  display: flex;
  font-size: 14px;
  color: #ccc;
  background-color: #fff;
  text-align: center;
  padding: 15px 0;
}

.info-item {
  flex: 1;
}

.info-item span {
  color: orange;
  font-weight: 700;
  font-size: 18px;
}
.info-item {
  border-right: 1px solid #eee;
}

.info-item p:nth-child(1) {
  margin-bottom: 5px;
}
</style>