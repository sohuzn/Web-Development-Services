<template>
    <p class="top-tit">Our <span>Services</span></p><br>
    <p class="top-des">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, sequi.</p><br>
    <div class="container">
        <div class="box-1">
            <div class="img">
                <font-awesome-icon icon="fa-solid fa-gift" class="logo" />
            </div>
            <p class="title">Web Development</p>
            <p class="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt odio, quae illoest
                ipsa dolor cupiditate reiciendis quas a nostrum?</p>
        </div>

        <div class="box-2">
            <div class="img">
                <font-awesome-icon icon="fa-solid fa-lightbulb" class="logo" />
            </div>
            <p class="title">App Development</p>
            <p class="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt odio, quae illoest
                ipsa dolor cupiditate reiciendis quas a nostrum?</p>
        </div>
        <div class="box-3">
            <div class="img">
                <font-awesome-icon icon="fa-solid fa-paint-roller" class="logo" />
            </div>
            <p class="title">Graphic Design</p>
            <p class="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt odio, quae illoest
                ipsa dolor cupiditate reiciendis quas a nostrum?</p>
        </div>


        <div class="box-4">
            <div class="img">
                <font-awesome-icon icon="fa-solid fa-computer" class="logo" />
            </div>
            <p class="title">System Development</p>
            <p class="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt odio, quae illoest
                ipsa dolor cupiditate reiciendis quas a nostrum?</p>
        </div>


        <div class="box-5">
            <div class="img">
                <font-awesome-icon icon="fa-solid fa-database" class="logo" />
            </div>
            <p class="title">Database System</p>
            <p class="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt odio, quae illoest
                ipsa dolor cupiditate reiciendis quas a nostrum?</p>
        </div>

        <div class="box-6">
            <div class="img">
                <font-awesome-icon icon="fa-solid fa-clock" class="logo" />
            </div>
            <p class="title">Domain and Hosting</p>
            <p class="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt odio, quae illoest
                ipsa dolor cupiditate reiciendis quas a nostrum?</p>
        </div>
    </div>
</template>













<script>
import './Box.css'
export default {
    name: "BoxComponent",
    data() {
        return {
            boxData: [
                {
                    logo: 'fa-solid fa-gift',
                    title: 'Web Development',
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt odio, quae illoest ipsa dolor cupiditate reiciendis quas a nostrum?'
                },
                {
                    logo: 'fa-solid fa-lightbulb',
                    title: 'Mobile App Development',
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt odio, quae illoest ipsa dolor cupiditate reiciendis quas a nostrum?'
                },
                {
                    logo: 'fa-solid fa-gift',
                    title: 'Software Development',
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt odio, quae illoest ipsa dolor cupiditate reiciendis quas a nostrum?'
                }
            ]
        };
    },
};
</script>