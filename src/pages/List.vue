<template>
    <div>
        <div class="content">
            <div style="width: 600px; padding: 10px 0 0 0;">
                <q-input v-model="search" outlined label="O próximo herói está à sua espera:">
                    <template v-slot:append>
                        <q-icon v-if="search !== ''" name="close" @click="search = ''" class="cursor-pointer" />
                        <q-icon name="search" />
                    </template>
                </q-input>
                <div class="flex justify-start" style="margin-top: 3px;">
                    <q-btn color="primary" label="Início" @click="router.push('/')" />
                </div>
            </div>
        </div>

        <div class="cards-heros">
            <q-card class="hero-content">
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                    <div class="absolute-bottom text-h6 text-center">
                        Title
                    </div>
                </q-img>

                <q-card-section>
                    Text here
                </q-card-section>
                <q-card-actions>
                    <q-btn flat @click="router.push('/hero')">ver mais</q-btn>
                </q-card-actions>
            </q-card>
        </div>

        <div class="pagination">
            <q-pagination v-model="current" max="5" direction-links flat color="grey" active-color="primary" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const search = ref('');
const router = useRouter();

const current = ref(1);
</script>

<style scoped lang="scss">
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}

.cards-heros {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 5px 10px;

    .hero-content {
        margin: 2px 3px;
        width: 300px;
        min-width: 300px;
    }
}

.pagination {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}
</style>