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
            <q-card class="hero-content" v-for="value in heros">
                <q-img :src="`${value.thumbnail.path}/portrait_xlarge.${value.thumbnail.extension}`">
                    <div class="absolute-bottom text-h6 text-center">
                        {{ value.name }}
                    </div>
                </q-img>

                <q-card-section>
                    {{ value.description ? value.description:'Not found' }}
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
import { ref, onMounted } from 'vue';
import instance from '@/js/configAPI.js';
import { useRouter,useRoute } from 'vue-router';
import { useQuasar } from 'quasar'

const search = ref('');
const router = useRouter();
const route = useRoute();
const current = ref(1);
const $q = useQuasar();
const heros = ref({});

function _loadName(){
    search.value = route.params.name ?? null;
}
async function _loadHeros() {
    let axios = await instance();
    let data = search.value ? {name: search.value} : {};
    axios.get('characters', {
        params: data
    }).then((result) => {
        heros.value = result.data.data.results;
    }).catch((error) => {
        const data = error.response.data;
        let message = data.code + ': ' + data.message;
        $q.notify({
            message: message,
            color: 'red'
        })
    });
}

onMounted(() => {
    _loadName();
    _loadHeros();
});
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