<template>
    <div class="content">
            <q-card class="hero-content">
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" >
                    <div class="absolute-bottom text-h6 text-center">
                        Title
                    </div>
                </q-img>

                <q-card-section>
                    Text here
                </q-card-section>
                <q-card-actions>
                    <q-btn flat @click="router.push('/list')">Voltar</q-btn>
                </q-card-actions>
            </q-card>
    </div>
</template>

<script setup>
import {ref} from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();

</script>

<style scoped lang="scss">
.content {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.hero-content{
    width: 800px;
}
</style>