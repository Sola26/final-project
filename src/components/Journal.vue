<template>
  <div class="background">
    <p class="title">What I do.</p>
    <div class="text1">
      <div class="art"><h2>Design what you want.</h2></div>
      <p>
        The bizarre blending of family and myth also unsettles a companion work
        to Geppetto Washing Pinocchio. Created the same year, Blue Fairy
        Whispers to Pinocchio features the artist’s daughter (sister-in-law of
        Mueck), the actress Victoria Willing, in the role of The Fairy with
        Turquoise Hair. In Collodi’s tale, the Fairy is the maternal voice of
        moral conscience who reminds Pinocchio that he must behave ethically.
        It’s the Blue Fairy who shows pity on the remorseful marionette by
        summoning woodpeckers to chip Pinocchio’s over-extended nose back down
        to a less humiliating size. By inserting her own daughter and son-in-law
        into her restaging of the children’s legend, Rego blurs the boundaries
        between cultural lore and family portraiture and entangles herself in
        the process.
      </p>
    </div>

    <div class="text2">
      <div class="art"><h2>Develop what you need.</h2></div>
      <p>
        I'm a developer, so I know how to create your website to run across
        devices using the latest technologies available.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notes",
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
  top: 65%;
  left: 34%;
}
.text2 {
  display: flex;
  flex-direction: column;

  width: 400px;
  position: absolute;
  top: 120%;
  left: 34%;
}
.background {
  background-color: white;
  height: 1000px;
}
</style>
