const app = Vue.createApp({
    data(){
        return {
            courseGoal : 'Finish the course and learn Vue!',
            vueLink : 'https://ko.vuejs.org/',
            courseA : 'Hello-Course A',
            courseB : 'Hello-Course B',
            htmlCourse : '<div style="color:white">Hello-Wolrd</div>'
        }
    },
    methods : {
        outputRandom(){
            const randomNum = Math.random()
            if(randomNum > 0.5){
                return this.courseA
            } else {
                return this.courseB
            }
        }
    }
});

app.mount('#user-goal')