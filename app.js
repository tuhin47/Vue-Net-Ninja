new Vue({
    el: '#vue-app',
    data: {
        name: 'Tuhin',
        job: 'Engineer'
    },
    methods: {
        greet:function (time) {
            return 'Good '+time+' '+this.name;
        }
    }
});