<template>
    <h1>task Details</h1>
    <form @submit.prevent="handleUpdate()">
        <input type="text" v-model="currentTask.title">
        <textarea rows="3" v-model="currentTask.description"></textarea>
        <button>update</button>
    </form>
    <button>delete</button>
</template>

<script lang="ts">
import { getTask, updateTask } from '@/services/taskService';
import { defineComponent } from '@vue/runtime-core';
import { Task } from '@/interfaces/tasks';

export default defineComponent({
    data(){
        return{
            currentTask : {} as Task
        }
    },
    methods: {
        async loadTask(id: string){
            const res = await getTask(id);
            this.currentTask = res.data;
        },
        async handleUpdate(){
            if(typeof this.$route.params.id === "string"){
                const res = await updateTask(this.$route.params.id, this.currentTask);
                console.log(res);
            }
        }
    },  
    mounted(){
    if(typeof this.$route.params.id === "string")
        this.loadTask(this.$route.params.id);
    },  
})
</script>