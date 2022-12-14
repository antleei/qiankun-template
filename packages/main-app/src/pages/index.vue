<script setup lang="ts">
import { onMounted } from 'vue'

defineOptions({
  name: 'IndexPage',
})

const name = $ref('')

const router = useRouter()
const go = () => {
  if (name)
    router.push('/app1')
}

onMounted(() => {
  console.log('mounted=========================')
  try {
    console.log('test', test)
  }
  catch (e) {
    throw new Error('test is not defined')
  }
})
</script>

<template>
  <div>
    <h1>主应用首页</h1>
    <div i-carbon-campsite text-4xl inline-block />
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse-lite" target="_blank">
        Vitesse Lite
      </a>
    </p>
    <p>
      <em text-sm op75>Opinionated Vite Starter Template</em>
    </p>

    <div py-4 />

    <TheInput v-model="name" placeholder="What's your name?" autocomplete="false" @keydown.enter="go" />

    <div>
      <button class="m-3 text-sm btn" :disabled="!name" @click="go">
        Go
      </button>
    </div>
  </div>
</template>
