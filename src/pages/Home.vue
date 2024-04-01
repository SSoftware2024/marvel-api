<template>
    <div class="center">
        <div class="content" style="background-color: white; border-radius: 40px;">
            <q-input rounded outlined v-model="search" @keyup.enter="searcHero" label="Quem vai salvar seu dia hoje?">
                <template v-slot:append>
                    <q-icon v-if="search !== ''" name="close" @click="search = ''" class="cursor-pointer" />
                    <q-icon name="search" />
                </template>
            </q-input>
        </div>
        <div class="content q-mt-sm" style="text-align: center;">
            <q-btn class="bg-red-14 q-mr-sm" text-color="white" label="Todos" @click="router.push('/list')"/>
            <q-btn class="bg-teal-4" text-color="white" label="BUSCAR" @click="searcHero"/>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';
import { useRouter } from 'vue-router';
import URL from '@/js/URL.js';
const search = ref('');
const router = useRouter();

function searcHero() {
    URL.set('name', search.value);
    router.push('/list');
}

</script>

<style scoped lang="scss">
.center {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('../assets/img/marvel.jpg');
    background-size: cover;

    .content {
        width: 600px;
        @media (max-width: 603px) {
            width: 300px;
        }
    }
}
</style>