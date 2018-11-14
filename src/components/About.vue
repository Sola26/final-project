<template>
  <div class="container">
    <img src="/assets/logo3" alt="" />
    <h1>What I can do.</h1>

    <h2>Design what you want.</h2>
    <h3>
      I like to keep it simple. My goals are to focus on typography, content and
      conveying the message that you want to send.
    </h3>
    <h2>Develop what you need.</h2>
    <h3>
      I'm a developer, so I know how to create your website to run across
      devices using the latest technologies available.
    </h3>
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
.about {
  color: rgb(255, 255, 255);
}
img {
  border-style: none;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100px;
  width: 100px;
}
</style>
