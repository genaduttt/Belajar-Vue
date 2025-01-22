<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="../assets/popeye.png" alt="Logo" width="100" height="40" class="d-inline-block align-text-top">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item"><router-link class="nav-link active" to="/">Home</router-link></li>
                    <li class="nav-item"><router-link class="nav-link active" to="/shop">Shop</router-link></li>
                    <li class="nav-item"><router-link class="nav-link active" to="/promo">Promo</router-link></li>
                    <li class="nav-item"><router-link class="nav-link active" to="/article">Article</router-link></li>
                    <li class="nav-item"><router-link class="nav-link active" to="/about">About</router-link></li>
                </ul>
                <button class="btn btn-outline-primary ms-auto">Sign up</button>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>