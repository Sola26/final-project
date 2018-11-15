<template>
  <div class="background">
    <p class="work">Work</p>
    <div class="title">
      <h2>What I've been up to.</h2>
      <h3>Here's a selection of some recent work.</h3>
    </div>
    <div class="bigcontainer">
      <div class="container1">
        <h2 class="art1">Neartastic</h2>
        <div class="textbox1">
          <img class="img1" src="/static/app.png" />
          <p>
            app Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      </div>

      <div class="container3">
        <h2 class="art3">Hood magazine</h2>

        <div class="flex">
          <img class="img3" src="/static/hoodcover.jpg" />
          <img class="img3" src="/static/hood1.jpg" />
          <img class="img3" src="/static/hood2.jpg" />
          <img class="img3" src="/static/hood3.jpg" />
          <img class="img3" src="/static/hood5.jpg" />
          <img class="img3" src="/static/hood6.jpg" />
        </div>
        <div class="textbox3">
          <p>
            HOOD is a magazine geared toward collecting and commemorating all
            things ordinarily wonderful. The most random discoveries: bazaar
            drawings, cheeky messages, you name it. Schoeneberg, a street in
            Tempelhof, is well known for its plethora of art galleries and
            institutions.
          </p>
        </div>
      </div>

      <div class="container2">
        <h2 class="art2">Das is Berlin</h2>
        <video class="responsive-video" controls>
          <source src="/static/Das ist Berlin+.mp4" type="video/mp4" />
        </video>
        <div class="textbox2">
          <p>
            Here is a music video that I love made by Berliner Morgenpost. I
            added some effects with Adobe After Effect.
          </p>
        </div>
      </div>
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
  height: 5400px;
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
.container1 {
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
}
.container2 {
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
}
.container3 {
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
}

.textbox1 {
  display: flex;
  flex-direction: column;
  width: 400px;
}

.textbox2 {
  display: flex;
  flex-direction: column;
  width: 630px;
  margin-top: 50px;
  margin-left: 30px;
  text-align: left;
}
.img1 {
  height: 600px;
  width: 900px;
  object-fit: cover;
  align-self: center;
}
.responsive-video {
  height: 400px;
  width: 600px;
  align-self: center;
}

.flex {
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  grid-template-rows: 1fr 1fr 1fr;
}
.img3 {
  display: flex;
  justify-content: center;
  padding: 19px;
  margin-top: 20px;
  object-fit: cover;
  height: 450px;
  width: 450px;
}
.textbox3 {
  display: flex;
  flex-direction: row;
  width: 950px;
  justify-content: flex-start;
  text-align: left;
  margin-top: 50px;
  margin-left: 30px;
}
.art1 {
  padding-left: 10px;
  padding-top: 1px;
  padding-bottom: 5px;
  padding-right: 10px;
  border: none;
  background: none;
  color: #2c3e50;
  font-size: 30px;
  cursor: pointer;
  border: 2px solid pink;
  border-radius: 50px 20px;
  margin-top: 40%;
}
.art2 {
  padding-left: 10px;
  padding-top: 1px;
  padding-bottom: 5px;
  padding-right: 10px;
  border: none;
  background: none;
  color: #2c3e50;
  font-size: 30px;
  cursor: pointer;
  border: 2px solid pink;
  border-radius: 50px 20px;
  margin-top: 40%;
}
.art3 {
  padding-left: 1px;
  padding-top: 1px;
  padding-bottom: 1px;
  padding-right: 1px;
  border: none;
  background: none;
  color: #2c3e50;
  font-size: 30px;
  cursor: pointer;
  border: 2px solid pink;
  border-radius: 50px 20px;
  margin-top: 80%;
}
.bigcontainer {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0px;
}
</style>
