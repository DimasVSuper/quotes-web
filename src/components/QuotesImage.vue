<template>
  <div>
    <h2>Quotes Image</h2>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else>
      <img
        v-if="imageUrl"
        :src="imageUrl"
        alt="Inspirational Quote"
        @error="onImageError"
      />
    </div>
    <button @click="fetchImage">Ambil Gambar Baru</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const imageUrl = ref('')
const loading = ref(false)
const error = ref('')

async function fetchImage() {
  loading.value = true
  error.value = ''
  try {
    imageUrl.value = 'https://zenquotes.io/api/image?' + Date.now()
  } catch (e) {
    error.value = 'Gagal mengambil gambar.'
    imageUrl.value = ''
  } finally {
    loading.value = false
  }
}

function onImageError() {
  error.value = 'Gagal memuat gambar. Kemungkinan API limit atau gambar tidak tersedia.'
  imageUrl.value = ''
}

fetchImage()
</script>

<style scoped>
h2 {
  color: var(--color-primary);
  margin-bottom: 1.5rem;
  text-align: center;
}

img {
  display: block;
  margin: 1.5rem auto;
  max-width: 100%;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  border: 1px solid var(--color-border);
  background: var(--color-card);
}

button {
  display: block;
  margin: 1.5rem auto 0 auto;
  padding: 0.5rem 1.5rem;
  background: var(--color-primary);
  color: #fff;
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  font-size: 1rem;
  transition: background var(--transition);
}
button:hover {
  background: var(--color-link-hover);
}

.error {
  color: var(--color-primary);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  padding: 0.75rem 1rem;
  border-radius: var(--radius);
  margin-bottom: 1rem;
  text-align: center;
}
</style>