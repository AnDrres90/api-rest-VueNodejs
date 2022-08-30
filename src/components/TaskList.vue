<template>
    <div>
        <ul>
            <li v-for="(task, index) in tasks" :key="index" @click="this.$router.push(`/tasks/${task._id}`)">
                {{task.title}}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Task } from '@/interfaces/tasks';
import { getTasks } from '@/services/taskService';
import { defineComponent } from 'vue';

export default defineComponent({
    data(){
        return {
            tasks: [] as Task[]
        };
    },
    methods: {
        async loadTasks(){
            const res = await getTasks();
            this.tasks = res.data
        }
    },
    mounted(){
        this.loadTasks();
    },
});
</script>