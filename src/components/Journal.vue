<template>
  <div class="background">
    <p class="title">Keep it real;</p>
    <div class="art"><h1>accurat[e]</h1></div>
    <div class="text1">
      <p>
        The bizarre blending of family and myth also unsettles a companion work
        to Geppetto Washing Pinocchio. Created the same year, Blue Fairy
        Whispers to Pinocchio features the artist’s daughter (sister-in-law of
        Mueck), the actress Victoria Willing, in the role of The Fairy with
        Turquoise Hair.
      </p>
      <p>
        In Collodi’s tale, the Fairy is the maternal voice of moral conscience
        who reminds Pinocchio that he must behave ethically. It’s the Blue Fairy
        who shows pity on the remorseful marionette by summoning woodpeckers to
        chip Pinocchio’s over-extended nose back down to a less humiliating
        size. By inserting her own daughter and son-in-law into her restaging of
        the children’s legend, Rego blurs the boundaries between cultural lore
        and family portraiture and entangles herself in the process.
      </p>
      <p>
        In Collodi’s tale, the Fairy is the maternal voice of moral conscience
        who reminds Pinocchio that he must behave ethically. It’s the Blue Fairy
        who shows pity on the remorseful marionette by summoning woodpeckers to
        chip Pinocchio’s over-extended nose back down to a less humiliating
        size. By inserting her own daughter and son-in-law into her restaging of
        the children’s legend, Rego blurs the boundaries between cultural lore
        and family portraiture and entangles herself in the process.
      </p>
    </div>

    <section id="comments">
      <div class="comments-wrap">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div id="disqus_thread"></div>

              <noscript
                >Please enable JavaScript to view the
                <a href="http://disqus.com/?ref_noscript"
                  >comments powered by Disqus.</a
                ></noscript
              >
              <a href="http://disqus.com" class="dsq-brlink"
                >blog comments powered by
                <span class="logo-disqus">Disqus</span></a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Notes",
  data() {
    return {};
  },
  mounted() {
    var disqus_shortname = "Sola"; // required: replace example with your forum shortname
    var disqus_title = "Notes";
    var disqus_developer = "false"; // developer mode
    var disqus_identifier = "notes";
    var disqus_url = "https://solaa.herokuapp.com/";

    (function() {
      var dsq = document.createElement("script");
      dsq.type = "text/javascript";
      dsq.async = true;
      dsq.src = "http://" + disqus_shortname + ".disqus.com/embed.js";
      (
        document.getElementsByTagName("head")[0] ||
        document.getElementsByTagName("body")[0]
      ).appendChild(dsq);
    })();
  }
};
</script>

<style scoped>
h1 {
  font-size: 30px;
}
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
  border-radius: 50px 10px;
  width: 400px;
  margin-left: 33%;
  margin-top: 250px;
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
  align-items: center;
  justify-content: center;
  width: 900px;
  margin-top: 150px;
  margin-left: 15%;
}

.background {
  background-color: white;
  height: 1400px;
}
#comments {
  background: #f0f0f0;
  margin-top: 4em;
}
section {
  display: block;
}
:before,
:after {
  box-sizing: border-box;
}
::selection {
  background: #e0ebe8;
  color: #545454;
  text-shadow: none;
}
#comments {
  margin-top: 300px;
  width: 1280px;
  margin-left: 30px;
  margin-bottom: 200px;
  height: 700px;
}
</style>
