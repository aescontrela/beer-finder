<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

  html
    box-sizing border-box
    font-size 16px
    background-color $red

  *, *:before, *:after
    box-sizing inherit

  body, h1, h2, h3, h4, h5, h6, p, ol, ul
    margin 0
    padding 0
    font-weight normal

  ol, ul
    list-style none

  img
    max-width 100%
    height auto

  a
    text-decoration none

  button
    border none

</style>
