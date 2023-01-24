<template>
    <div class="header">
        <div class="logo">
            <p>YOUR LOGO</p>
        </div>
        <font-awesome-icon icon="fa-solid fa-bars" class="ham" @click="popup" />
        <div class="nav-bar">
            <ul class="nav">
                <li>Home</li>
                <li>Services</li>
                <li>About US</li>
                <li>Carrers</li>
                <li>Portfolio</li>
                <li class="contact">Contact US</li>
            </ul>
        </div>
    </div>
</template>

<script>
import '../Header/Header.css'
export default {
    data() {
        return {
            popup: function () {
                const nav = document.querySelector('.nav-bar');
                nav.classList.toggle('show');
            }
        }
    }
}
</script>