<template>
<div>
<nav class="navbar navbar-white navbar-fixed-top">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 text-center">
              <a class="custom_head animated fadein" href="#">
                <img id="logo-login" src= "../assets/images/logo.png" width="40%" height="40%"/>
              </a>
            </div>
        </div>
      </div>
    </nav>
    <section class="inner-pg">
  <div class="main-container">
    <form>
      <div class="box-container">
        <h2 class="heading">Sign In</h2>
        <div class="form-fields">
          <input id="email" name="email" type="text" placeholder="Email Address">
        </div>
        <div class="form-fields">
          <input id="password" name="password" type="text" placeholder="Password">
        </div>
        <div class="form-fields">
          <button class="signIn" name="commit" type="submit">
            Sign In
          </button>
        </div>
        <div class="login-choice"><span>or Sign In with</span></div>
        <SocialLogin />
      </div>
    </form>
</div>

    </section>
  </div>
</template>

<script>
import SocialLogin from '@/components/SocialLogin'

export default {
  name: 'login',
  components: {
    SocialLogin
  }
}
</script>
