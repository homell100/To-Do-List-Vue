import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'

const app = Vue.createApp({
    data() {
        return {
            items: [],
            currentItem: ''
        }
    },
    methods: {
        getItemById: function(id){
            return this.items.find((item) => item.id == id )
        },
        addItem: function() {
            console.log(this.currentItem)
            if(this.currentItem){
                this.items.push({
                    id: nanoid(), //Unique identifier
                    task: this.currentItem, //Text inside the input
                    isCompleted: false, //Check whether the task has been completed
                    editMode : false //Check if we want to modify the task
                })
                this.currentItem = ''
            }
        },
        deleteItem: function(id){
            this.items = this.items.filter((item) => item.id != id)
        },
        completeItem: function(id){
            let item = this.getItemById(id)
            item.isCompleted = !item.isCompleted
        },
        clearItems: function(){
            this.items = this.items.filter((item) => !item.isCompleted)
        },
        editItem: function(id){ 
            let item = this.getItemById(id)
            item.editMode = !item.editMode
        }
    },
    computed:{
        isListEmpty: function(){
            return !this.items.length 
        }
    }
})

app.mount('#app')