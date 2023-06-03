<template>
  <div id="login" class="d-flex flex-column flex-md-row">
    <div class="d-block d-md-none ms-5 my-5">
      <RouterLink to="/"><img src="../assets/logo.svg" alt="logo" /></RouterLink>
    </div>
    <div class="col-12 col-md-4 sidebar order-1 order-md-0">
      <div class="d-none d-md-block">
        <RouterLink to="/"><img src="../assets/logo.svg" alt="logo" /></RouterLink>
      </div>
      <div class="d-flex flex-column flex-sm-row flex-md-column align-items-center justify-content-center">
        <div class="col-4 col-md-12">
          <img src="../assets/login-img.svg" alt="img" class="w-100" />
        </div>
        <div class="col-10 col-sm-6 col-md-12 d-flex flex-column text-center align-items-center mt-0 mt-md-4">
          <h5>Services</h5>
          <span>An expert team help you to analyze your polticalt power.An expert team .</span>
        </div>
      </div>
      <span style="font-size: 14px;">©2020 All Rights Reserved. PT Indonesia Indicator</span>
    </div>
    <div class="col-12 col-md-8 d-flex justify-content-center align-items-center order-0 order-md-1 mb-5 mb-md-0">
      <div class="col-7">
        <h3>Welcome to Logo ipsum</h3>
        <div class="d-flex gap-2">
          <span>Don't have an account?</span>
          <span><a href="javascript:;">Sign Up</a></span>
        </div>
        <p class="mb-5" style="font-size: 12px;">Test account -> ( user: kminchelle - pass: 0lelplR ) or ( user: rshawe2 - pass: OWsTbMUgFc )</p>
        <form @submit.prevent="login">
          <div class="mb-4">
            <label class="form-label mb-2">Username <span style="color: var(--primaryColor);">*</span></label>
            <input type="text" class="form-control" name="username" v-model="formUsername" required />
          </div>
          <div class="mb-4">
            <label class="form-label mb-2">Password <span style="color: var(--primaryColor);">*</span></label>
            <input type="password" class="form-control" name="password" v-model="formPassword" required />
          </div>
          <div class="mb-4">
            <input type="checkbox" id="remember-me" name="remember-me" value="remember" />
            <label for="remember-me" class="ms-2" style="font-weight: 400; color: var(--greyColor);">Remember Me</label>
          </div>
          <button v-if="!isLoading" class="btnLogin w-100 mt-2">Log in</button>
          <button v-if="isLoading" class="btnLogin w-100 mt-2" disabled>
            <span class="spinner-border spinner-border-sm" style="color: white;" role="status" aria-hidden="true"></span>
            <span class="visually-hidden">Loading...</span>
          </button>
          <p class="text-danger fst-italic mt-3 text-end">{{ warningMessage }}</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  methods: {
    login() {
      this.isLoading = true
      setTimeout(() =>{
        fetch('https://dummyjson.com/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: this.formUsername, password: this.formPassword })
        })
        .then(res => {
          if (!res.ok) { return null }
          else { return res.json() }
        })
        .then(data => {
          if (data !== null) {
            console.log(data)
            localStorage.setItem('user', data.token)
            if (this.rememberMe.checked){
              localStorage.setItem('is-remember', 'yes')
              localStorage.setItem('username', data.username)
            } else {
              localStorage.setItem('is-remember', 'no')
            }
            this.$router.push('/admin')
          } else { 
            this.warningMessage = 'Wrong username or password !'
          }
        })
        .then(() => {this.isLoading = false, this.formUsername = '', this.formPassword = ''})
      }, 2000)
    }
  },
  data() {
    return {
      formUsername: '',
      formPassword: '',
      warningMessage: '',
      isLoading: false,
      rememberMe: ''
    }
  },
  mounted() {
    this.rememberMe = document.getElementById('remember-me')
    if (localStorage.user && localStorage.user !== '') {
      this.$router.push('/admin')
    } else {
      if (localStorage.getItem('is-remember') === 'yes'){
        this.rememberMe.setAttribute('checked', 'checked')
        this.formUsername = localStorage.getItem('username')
      } else {
        this.rememberMe.removeAttribute('checked')
        localStorage.removeItem('username')
      }
    }
  }
}
</script>