<template>
    <div class="login-form">
        <Login/>
    </div>
</template>

<script>
import Login from '@/components/Login'
export default {
    components: {
        Login
    }
}
</script>

<style>
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    background-color: #1BBC9B;
}

.login-form {
    width: 300px;
    background-color: #EEEFF1;
    padding: 20px;
    margin: auto;
    border-radius: 10px;
}

.text-field {
    font-size: 14px;
    margin-bottom: 10px;
    border: none;
    border-radius: 5px;
    padding: 10px;
    width: 100%;
}

.submit-btn {
    color: #EEEFF1;
    font-size: 14px;
    background-color: #1BBC9B;
    margin-bottom: 30px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    width: 100%;
}

.links {
    text-align: center;
}

.links a {
    font-size: 12px;
    color: #9b9b9b;
}
</style>