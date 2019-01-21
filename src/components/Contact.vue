<template>
  <div class="contact">
    <p class="hi">Say Hi :)</p>
    <h3>
      If you have a project that you want to get started, think you need my help
      with something or just fancy saying hey, then get in touch.
    </h3>
    <div>
      <a class="message" href="mailto:islahalthawr@gmail.com"
        >Message me <i></i
      ></a>
    </div>

    <p></p>
  </div>
</template>
<script>
export default {
  name: "Contact",
  data() {
    return {};
  }
};
</script>
<style>
.hi {
  font-family: Courier;
  font-size: 50px;
  font-weight: bold;
  color: pink;
}
h3 {
  font-family: Courier;
  font-size: 16px;
  font-weight: bold;
}
.contact {
  display: flex;
  flex-direction: column;

  width: 500px;
  position: absolute;
  top: 40%;
  left: 33%;
}
.message {
  padding-left: 12px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 12px;
  border: none;
  background: none;
  color: #2c3e50;
  font-size: 12px;
  cursor: pointer;
  border: 2px solid pink;
  border-radius: 50px 20px;
  position: absolute;
  top: 100%;
  left: 40%;
}
.message:hover {
  color: rgba(255, 197, 110, 0.93);
}
</style>
