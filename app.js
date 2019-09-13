new Vue({
    el: '#vue-app',
    data: {
        name: 'Tuhin',
        job: 'Engineer',
        website:'http://google.com',
        websiteTag:'<a href="http://google.com"> GOOGLE Website</a>'
    },
    methods: {
        greet:function (time) {
            return 'Good '+time+' '+this.name;
        }
    }
});