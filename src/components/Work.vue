<template>
  <div>
    <h1>Work</h1>
    <div class="title">
      <h2>What I've been up to.</h2>
      <h3>Here's a selection of some recent work.</h3>
    </div>
    <div class="textbox1">
      <h2>App's title</h2>
      <p>
        app Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam.
      </p>
    </div>
    <img class="img1" src="/static/app.png" />
    <div class="textbox2">
      <h2>Berlin's title</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
    <video class="responsive-video" controls>
      <source src="/static/Das ist Berlin+.mp4" type="video/mp4" />
    </video>
  </div>
</template>
<script>
export default {
  name: "Work",
  data() {
    return {};
  }
};
</script>
<style scoped>
body {
  margin-top: 20%;
}
.p {
  font-size: 1.5em;
}

h1 {
  font-family: Courier;
  font-size: 100px;
  margin-top: 3em;
}
h2 {
  font-family: Courier;
  font-size: 30px;
  font-weight: bold;
  /* position: absolute;
  top: 8%;
  left: 36%; */
}
h3 {
  font-size: 19px;
  margin-top: 1em;
}

.title {
  display: flex;
  flex-direction: column;

  width: 500px;
  position: absolute;
  top: 20%;
  left: 30%;
}

.textbox1 {
  display: flex;
  flex-direction: column;

  width: 400px;
  position: absolute;
  top: 59%;
  left: 36%;
}

.textbox2 {
  display: flex;
  flex-direction: column;

  width: 400px;
  position: absolute;
  top: 106%;
  left: 36%;
}
.img1 {
  height: 600px;
  width: 800px;
  margin-top: 25%;
}
.responsive-video {
  height: 400px;
  width: 600px;
  margin-top: 400px;
}
</style>
