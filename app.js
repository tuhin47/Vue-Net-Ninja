Vue.component('greeting', {
    template: "<p>{{name}}<button v-on:click='changeName'>change</button></p>",
    data:function () {
        return {
            name:'Tuhin'
        }
    },
    methods:{
        changeName:function () {
            this.name='Towhid';
        }
    }
});

/* new Vue({
    el: '.test',
    template: '<p>I am a template</p>'
}); */

new Vue({
    el: '#vue-app-one'
});

new Vue({
    el: '#vue-app-two'
});
