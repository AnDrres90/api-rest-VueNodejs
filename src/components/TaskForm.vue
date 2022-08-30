<template>
    <div>
        <form @submit.prevent="saveTask()">
            <input type="text" placeholder="Write a title" v-model="task.title">
            <textarea rows="3" placeholder="write a descrption" v-model="task.description"></textarea>
            <button>Save</button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';  
import {Task} from '../interfaces/tasks';
import {createTask} from '../services/taskService';

export default defineComponent({
    data(){
        return {
            task: {} as Task
        }
    },
    methods: {
        async saveTask (){
            const res = await createTask(this.task);
            console.log(res);
        }
    }
})
</script>