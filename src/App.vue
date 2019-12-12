<template>
  <div class="app" id="app">
    <div class="header">
      <ul>
        <li class="nav-item">
          <img class="nav-item__logo" src="./data/images/build-a-bot-logo.png" /> <router-link class="nav-item__link" :to="{name: 'Home'}" exact> Get started </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-item__link" :to="{name: 'Build'}" > Build </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-item__cart" to="/cart" exact> Cart </router-link>
          <div v-if="cart.length" class="nav-item__counter">
            {{ cart.length }}
          </div>
        </li>
        
      </ul>
    </div>
    <div class="container">
      <div class="aside">
          <router-view name="sidebar" />
      </div>
      <div class="main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    cart() {
      return this.$store.state.cart;
    }
  }
}
</script>

<style>
body
{
  background: linear-gradient(to bottom, #888, #222);
  background-attachment: fixed;
}
</style>

<style lang="scss" scoped>
.app
{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.main
{
  box-sizing: border-box;
  width: 984px;
  background-color: #FFF;
  // margin: 0 auto;
  padding-top: 15px;
  padding-bottom: 15px;
  min-width: 300px;
}

.header
{
  background-color: #999;
  width: 1084px;
  margin: 0 auto;
  ul {
    padding: 3px;
    display: flex;
  }
}

.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  &:first-of-type
  {
    border-right: 1px solid #bbb;
  }
  &__logo
  {
    vertical-align: middle;
    height: 30px;
  }
  &__link{
    text-decoration: none;
    color: inherit;
  }
  &__cart {
    text-decoration: none;
    color: inherit;
    position: relative;
    margin-left: auto;
    border-right: none;
  }
  &__counter{
    display: inline-block; 
    padding: 0 5px;
    font-size: 0.8rem;
    background-color: green;
    border-radius: 10px;
    vertical-align: top;
  }
}

.router-link-active
{
  color: white
}
.aside
{
  width: 100px;
  background-color: #333;
  padding-top: 20px;
  color: red;
}
.container
{
  display: flex;
  width: 1084px;
  margin: 20px auto 0px auto;
}
</style>
