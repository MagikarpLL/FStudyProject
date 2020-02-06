var a = 'outside a';
var b = 'outside b';
var c = 'outside c';



var vm = new Vue({
    el: '#instance',
    data: {
        a: 'vue a',
        b: 'vue b'
    },
    created: function(){
        console.log('a is ' + this.a)
    },
    updated: function(){
        console.log('c is ' + this.c)
    },
    mounted: () => console.log('b is ' + this.b),
})

vm.c = 'vue c';
vm.$data.c = 'vue data c';