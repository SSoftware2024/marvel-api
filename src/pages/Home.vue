<template>
    <div>
        Home {{ store.count }} <br>
        Home {{ store.name }} <br>

        <button @click="store.increment">
            Click
        </button>


        <div class="q-pa-md q-gutter-sm">
            <q-btn color="white" text-color="black" label="Standard" />
            <q-btn color="primary" label="Primary" />
            <q-btn color="secondary" label="Secondary" />
            <q-btn color="amber" glossy label="Amber" />
            <q-btn color="brown-5" label="Brown 5" />
            <q-btn color="deep-orange" glossy label="Deep Orange" />
            <q-btn color="purple" label="Purple" />
            <q-btn color="black" label="Black" />
        </div>
    </div>
</template>

<script setup>
import { useCounterStore } from '../stores/counter.js'

const store = useCounterStore();
</script>