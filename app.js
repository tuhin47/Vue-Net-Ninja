new Vue({
    el: '#vue-app',
    data: {
        name: 'Tuhin',
        job: 'Engineer',
        website:'http://google.com'
    },
    methods: {
        greet:function (time) {
            return 'Good '+time+' '+this.name;
        }
    }
});