<template>
  <div>
    <nav>
      <router-link to="/">
        <div class="logo"><img src="/static/logo3.png" alt="logo" /></div>
      </router-link>

      <div class="right">
        <a href="#" data-activates="mobile-demo">
          <div>
            <div class="right">
              <span>
                <router-link :to="{ name: 'About' }" class="li"
                  >About</router-link
                >
              </span>
              <span>
                <router-link :to="{ name: 'Work' }" class="li"
                  >Work</router-link
                >
              </span>
              <span>
                <router-link :to="{ name: 'Contact' }" class="li"
                  >Contact</router-link
                >
              </span>
            </div>
          </div></a
        >
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  }
};
</script>

<style>
/* a.router-link-exact-active {
  font-weight: bold;
  transition: all 0.5s ease-out;
  font-size: 20px;
} */
.logo {
  position: absolute;
  top: 10%;
  left: 5%;
}
img {
  width: 40px;
  height: 40px;
}
.right {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  position: absolute;
  top: 10%;
  left: 75%;
}
.li {
  color: #2c3e50;
  margin: 20px;
}
</style>
