<template>
    <div>
        <div class="content">
            <div style="width: 600px; padding: 10px 0 0 0;">
                <q-input v-model="search" outlined label="O próximo herói está à sua espera:" @keyup.enter="searchHero">
                    <template v-slot:append>
                        <q-icon v-if="!!search" name="close" @click="allHeros" class="cursor-pointer" />
                        <q-icon name="search" />
                    </template>
                </q-input>
                <div class="flex justify-start" style="margin-top: 3px;">
                    <q-btn color="primary" label="Início" @click="goHome" />
                    <q-btn color="secondary" class="q-ml-sm" :label="'Tema: '+($q.dark.isActive ? 'Claro':'Escuro')" @click="$q.dark.toggle()" />
                </div>
            </div>
        </div>
        <div class="pagination">
            <q-pagination v-model="current_page" direction-links flat color="grey" active-color="primary"
                :max="totalPage" :max-pages="15" @update:model-value="paginate" />
        </div>
        <div class="cards-heros">
            <q-card class="hero-content" v-for="value in heros">
                <q-img :src="`${value.thumbnail.path}/portrait_xlarge.${value.thumbnail.extension}`">
                    <div class="absolute-bottom text-h6 text-center">
                        {{ value.name }}
                    </div>
                </q-img>

                <q-card-section>
                    {{ value.description ? value.description : 'Not found' }}
                </q-card-section>
            </q-card>
        </div>

        <div class="pagination">
            <q-pagination v-model="current_page" direction-links flat color="grey" active-color="primary"
                :max="totalPage" :max-pages="15" @update:model-value="paginate" />
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue';
import instance from '@/js/configAPI.js';
import { useRouter } from 'vue-router';
import URL from '@/js/URL.js';
import { useQuasar } from 'quasar'

const search = ref('');
const router = useRouter();
const current_page = ref(1);
const old_page = ref(1);
const $q = useQuasar();
const heros = ref({});
const total = ref(0);

const marvel_options = reactive({
    offset: 0,
    limit: 20,
})

const totalPage = computed(() => Math.ceil(total.value / marvel_options.limit));

function paginate(page) {
    loadHeros(page);
    current_page.value = page;
    URL.set('page', page);
}

function searchHero() {
    old_page.value = current_page.value;
    current_page.value = 1;
    URL.set('name', search.value);
    loadHeros(current_page.value);
}
function allHeros() {
    search.value = '';
    URL.delete('name');
    paginate(old_page.value);
}

async function loadHeros(page = 1) {
    $q.loading.show();
    _loadOffset(page);
    let axios = await instance();
    let data = search.value ? { ...marvel_options, nameStartsWith: search.value } : { ...marvel_options };
    axios.get('characters', {
        params: data
    }).then((result) => {
        heros.value = result.data.data.results;
        total.value = result.data.data.total;
        $q.loading.hide()
    }).catch((error) => {
        const data = error.response.data;
        let message = data.code + ': ' + data.message;
        $q.notify({
            message: message,
            color: 'red'
        })
        $q.loading.hide()
    });

}

function goHome() {
    URL.delete('page');
    URL.delete('name');
    router.push('/');
    $q.dark.set(false)
}

function _loadName() {
    search.value = URL.get("name") ?? null;
}
function _loadOffset(page = 1) {
    if (page == 1) {
        marvel_options.offset = 0;
    } else if (page == 2) {
        marvel_options.offset = marvel_options.offset = marvel_options.limit;
    } else if (page > 2) {
        marvel_options.offset = marvel_options.limit * page - marvel_options.limit;
    }
    return marvel_options.offset;
}

onMounted(() => {
    let page = URL.get('page') ?? 1;
    _loadName();
    paginate(parseInt(page));
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
    margin: 10px 0;
    padding-bottom: 10px;
}
</style>