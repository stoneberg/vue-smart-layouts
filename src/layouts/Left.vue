<template>
  <div>
    <div class='left'>
      <ul>
        <li>
          <div><router-link to="/">Home</router-link></div>
        </li>
        <li>
          <div><router-link to="/about">About</router-link></div>
        </li>
        <li>
          <div><router-link to="/contacts">Contacts</router-link></div>
        </li>
        <li>
          <div><router-link to="/login">Login</router-link></div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Left',
}
</script>
<style>
  a{color:black}
  a:hover{color:rgb(255,98,124);}
  .left{
    position:fixed; 
    top:0px; 
    left:0px; 
    width:250px; 
    height:1000px; 
    background:rgba(255,98,124,0.6); 
    padding:40px 0; 
    overflow: hidden
  }
  .left ul {padding: 0 30px}
  .left ul li { font-size:25px;  height:75px;} 
  .left ul li#logo {font-family: 'Passion One', cursive; font-size:50px; height:170px;}
  .left ul li#logo div {line-height: 0.8}
  .left ul li#company {font-size:16px; margin-top:150px; }
  #left_btn {position:fixed; top:495px; left:-60px; cursor:pointer}
</style>