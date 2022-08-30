<template>
    <nav>
        <ul>
            <li>
                <router-link to="/">Tasks</router-link>
            </li>
            <li>
                <router-link to="/tasks/new">create Tasks</router-link>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'myNavBar'
})
</script>