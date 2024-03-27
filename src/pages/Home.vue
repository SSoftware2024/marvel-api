<template>
    <div>
        Home {{ store.count }} <br>
        Home {{ store.name }} <br>

        <button @click="store.increment">
            Click
        </button>
    </div>
</template>

<script setup>
import { useCounterStore } from '../stores/counter.js'

const store = useCounterStore();
</script>