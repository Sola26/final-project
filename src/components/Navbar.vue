<template>
  <div class="art">
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
a.router-link-exact-active {
  font-weight: bold;
  transition: all 0.5s ease-out;
  font-size: 20px;
  color: pink;
}
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
  font-size: 17px;
  position: absolute;
  top: 10%;
  left: 67%;
}
.li {
  color: #2c3e50;
  margin: 20px;
}
.art {
  padding-top: 30px;
  padding-bottom: 30px;
  padding-right: 1px;
  border: none;
  margin-top: 70px;
  background: none;
  color: #2c3e50;
  font-size: 12px;
  cursor: pointer;
  border-radius: 50px 20px;
}
</style>
