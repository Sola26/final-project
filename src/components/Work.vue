<template>
  <div class="background">
    <p class="work">Work</p>
    <div class="title">
      <h2>What I've been up to.</h2>
      <h3>Here's a selection of some recent work.</h3>
    </div>
    <div class="textbox1">
      <h2 class="art">App's title</h2>
      <p>
        app Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam.
      </p>
    </div>
    <img class="img1" src="/static/app.png" />
    <div class="textbox2">
      <h2 class="art">Berlin's title</h2>
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
    <div class="textbox3">
      <h2 class="art">Hood magazine</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
    <div class="flex">
      <img class="img3" src="/static/hoodcover.jpg" />
      <img class="img3" src="/static/hood1.jpg" />
      <img class="img3" src="/static/hood2.jpg" />
      <img class="img3" src="/static/hood3.jpg" />
      <img class="img3" src="/static/hood5.jpg" />
      <img class="img3" src="/static/hood6.jpg" />
    </div>
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
.background {
  height: 3000px;
}
.p {
  font-size: 1.5em;
}

.work {
  font-family: Courier;
  font-size: 100px;
  margin-top: 2em;
  margin-left: 0em;
  color: pink;
}
h2 {
  font-family: Courier;
  font-size: 30px;
  font-weight: bold;
  margin-top: 11em;
  margin-left: 1em;
  /* position: absolute;
  top: 8%;
  left: 36%; */
}
h3 {
  font-size: 19px;
  margin-top: 0em;
  margin-left: 1em;
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
  top: 140%;
  left: 34%;
}

.textbox2 {
  display: flex;
  flex-direction: column;

  width: 400px;
  position: absolute;
  top: 235%;
  left: 34%;
}
.img1 {
  height: 600px;
  width: 900px;
  margin-top: 29%;
  object-fit: cover;
}
.responsive-video {
  height: 400px;
  width: 600px;
  margin-top: 200px;
}
.img3 {
  height: 600px;
  width: 900px;
  margin-top: 50%;
  object-fit: cover;
}
.flex {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin-top: 40%;
  margin-left: 10%;
}
.img3 {
  display: flex;
  justify-content: center;
  padding: 11px;
  margin-left: 20px;
  margin-top: 20px;

  height: 400px;
  width: 400px;
}
.textbox3 {
  display: flex;
  flex-direction: column;

  width: 400px;
  position: absolute;
  top: 470%;
  left: 34%;
}
.art {
  padding-left: 7px;
  padding-top: 1px;
  padding-bottom: 1px;
  padding-right: 7px;
  border: none;
  background: none;
  color: #2c3e50;
  font-size: 30px;
  cursor: pointer;
  border: 2px solid pink;
  border-radius: 50px 20px;
}
</style>
