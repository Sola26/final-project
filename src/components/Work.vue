<template>
  <div class="background">
    <div>
      <p class="work">Work</p>
      <div class="title">
        <h2>What I've been up to.</h2>
        <h3>Here's a selection of some recent work.</h3>
      </div>
    </div>

    <div class="container1">
      <p class="title2">Imageboard</p>
      <a href="https://github.com/Sola26/imageboard">
        <img
          class="githublogo"
          title="open in github"
          src="/static/GitHub-Mark-120px-plus.png"
      /></a>
      <p class="text">
        Imageboard is a page to upload, see uploaded pictures and leave
        comments. Features implemented: Display of all uploaded images | Image
        upload | Comments | Delete images. Technologies used: Javascript | Vue |
        Node.js | Express | PostgreSQL | HTML/CSS | AWS .
      </p>

      <a href="/static/2019-01-11_15-35-16 (1).gif">
        <img class="img1" src="/static/2019-01-11_15-35-16 (1).gif"
      /></a>
    </div>

    <div class="container2">
      <p class="title2">Petition</p>
      <a href="https://github.com/Sola26/petition">
        <img
          class="githublogo"
          title="open in github"
          src="/static/GitHub-Mark-120px-plus.png"
      /></a>
      <p class="text">
        Keep stores opened on sundays! A petition page I created using
        javascript, CSS, handlebars.js, postgreSQL ,node.js, express.js. You can
        register an account, edit your profile, submit your signature and see
        everyone else who support the petition by the city they registered.
      </p>

      <a href="/static/2019-01-12_15-56-57 (1).gif">
        <img class="img2" src="/static/2019-01-12_15-56-57 (1).gif"
      /></a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Work",
  data() {
    return {
      data: [
        '<div class="example-slide imga"><img src="/static/app.png"/></div>',
        '<div class="example-slide img3"><video class="responsive-video" controls></div>',
        '<div class="example-slide">Slide 3</div>'
      ]
    };
  },
  mounted() {
    Vue.component(VueCarousel.name, VueCarousel);
  }
};
</script>
<style scoped>
/* .background {
  height: 3000px;
} */
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
.title2 {
  font-size: 60px;
  font-weight: bold;
}
.container1 {
  display: flex;
  flex-direction: column;
  padding-top: 13%;
  align-items: center;
}
.container2 {
  display: flex;
  flex-direction: column;
  padding-top: 20%;
  align-items: center;
}
.text {
  height: 600px;
  width: 600px;
  object-fit: cover;
}
.img1 {
  height: 400px;
  width: 700px;
  object-fit: cover;
  position: absolute;
  top: 180%;
  left: 24%;
}
.img2 {
  height: 400px;
  width: 700px;
  object-fit: cover;
  position: absolute;
  top: 350%;
  left: 24%;
}
.githublogo {
  height: 30px;
  width: 30px;
  object-fit: cover;
  /* padding-top: 12px; */
}
</style>
