var vm = new Vue({
    el:'#class-style',
    data:{
        question: '',
        answer: 'I cannot give you an answer until you ask a question!',
        isDay: true
    },
    watch:{
        // 如果 `question` 发生改变，这个函数就会运行
        question: function(){
            this.answer = "Waiting for you to stop typing...";
            this.debouncedGetAnswer();
        }
    },
    computed:{
        reverseQuestion: {
            get: function(){
            return this.question.split('').reverse().join('');
            },
            set: function(newValue){
                this.question = newValue.split('').reverse().join('');
            }
        },
        propertiesClass: function(){
            return {
                day: this.isDay,
                night: !this.isDay
            }
        }
    },
    created: function(){
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    methods:{
        changeDay: function(){
            this.isDay = !this.isDay;
        },
        getAnswer: function(){
            if(this.question.indexOf('?') === -1){
                this.answer = 'Questions usually contain a question mark. ;-)';
                return;
            }

            this.answer = 'Thinking...'
            var vm = this
            axios.get('https://yesno.wtf/api')
                .then(function (response) {
                vm.answer = _.capitalize(response.data.answer)
                })
                .catch(function (error) {
                vm.answer = 'Error! Could not reach the API. ' + error
                })
            }
    }
});

var vm2 = new Vue({
    el:'#class-style2',
    data:{
        isDay: true
    }
})