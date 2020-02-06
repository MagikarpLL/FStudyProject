var vm = new Vue({
    el:'#template',
    data:{
        dynamicParam1:'Href',
        dynamicparam1:'href',
        special_symbol:'h' + 'ref',
        htmlCode: '<strong>htmlcode</strong>',
        hrefValue: "www.baidu.com",
        testValue: 'test'
    },
    methods:{
        greet: function(){
            alert('hello world');
        }


    }
})