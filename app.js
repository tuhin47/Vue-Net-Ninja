var one=new Vue({
    el: '#vue-app-one',
    data: {
        title:'one',
    },
    methods: {
       
    },
    computed: {

        greet:function(){
            return 'from one';
        }

    }
});


var two=new Vue({
    el: '#vue-app-two',
    data: {
        title:'two',
        
    },
    methods: {
        changeOther:function(){
            one.title='From 2';
        }
    },
    computed: {
        greet:function(){
            return 'from two';
        }

    }
});