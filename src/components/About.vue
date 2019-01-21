<template>
  <div class="background">
    <p class="title">What I do;</p>
    <div class="text1">
      <div class="art"><h2>I Design.</h2></div>
      <p>
        I like to keep it simple. My goals are to focus on typography, content
        and conveying the message that you want to send.
      </p>
    </div>

    <div class="text2">
      <div class="art"><h2>I Develop.</h2></div>
      <p>
        I'm a developer, so I know how to create your website to run across
        devices using the latest technologies available.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {};
  }
};
</script>

<style scoped>
.art {
  padding-left: 1px;
  padding-top: 1px;
  padding-bottom: 1px;
  padding-right: 1px;
  border: none;
  background: none;
  color: #2c3e50;
  font-size: 12px;
  cursor: pointer;
  border: 2px solid pink;
  border-radius: 50px 20px;
}
.title {
  font-family: Courier;
  font-size: 100px;
  margin-top: 2em;
  color: pink;
}
img {
  border-style: none;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100px;
  width: 100px;
}
.text1 {
  display: flex;
  flex-direction: column;

  width: 400px;
  position: absolute;
  top: 90%;
  left: 34%;
}
.text2 {
  display: flex;
  flex-direction: column;
  width: 400px;
  position: absolute;
  top: 145%;
  left: 34%;
}

.background {
  background-color: white;
  height: 1100px;
}
</style>
