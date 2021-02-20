<template>
  <div id="actionBar">
    <button class="actionItem">
      <img src="@/assets/ball.png" />
      <br />
      Ball
    </button>
    <button class="actionItem">
      <img src="@/assets/strike.png" />
      <br />
      Strike
    </button>
    <button class="actionItem">
      <img src="@/assets/hit-by-pitch.png" />
      <br />
      Hit by Pitch
    </button>
    <button class="actionItem">
      <img src="@/assets/single.png" />
      <br />
      Single
    </button>
    <button class="actionItem">
      <img src="@/assets/double.png" />
      <br />
      Double
    </button>
    <button class="actionItem">
      <img src="@/assets/triple.png" />
      <br />
      Triple
    </button>
    <button class="actionItem">
      <img src="@/assets/out.png" />
      <br />
      Out
    </button>
    <button class="actionItem">
      <img src="@/assets/error.png" />
      <br />
      Error
    </button>
  </div>
</template>

<style lang="scss" scoped>
#actionBar {
  background-color: rgb(212, 212, 212);
  height: 63px;
  display: flex;
  justify-content: space-around;
}
.actionItem {
  height: 100%;
  width: 90px;
  font-size: small;
  text-align: center;
  background-color: transparent;
  border: none;
  img:active {
    opacity: 0.6;
  }
}
</style>
