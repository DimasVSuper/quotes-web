<template>
  <div>
    <h2>Daftar Quotes</h2>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <ul v-else>
      <li v-for="(q, i) in quotes" :key="i">
        "{{ q.q }}" — <b>{{ q.a }}</b>
      </li>
    </ul>
    <button @click="fetchQuotes">Refresh Quotes</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const quotes = ref<{ q: string; a: string }[]>([])
const loading = ref(false)
const error = ref('')

async function fetchQuotes() {
  loading.value = true
  error.value = ''
  try {
    const res = await fetch('https://zenquotes.io/api/quotes')
    const data = await res.json()
    // Cek jika API mengembalikan error/limit
    if (Array.isArray(data) && data.length && data[0]?.q && data[0]?.a) {
      quotes.value = data
    } else {
      error.value = data.message || data.error || JSON.stringify(data)
      quotes.value = []
    }
  } catch (e) {
    error.value = 'Gagal mengambil daftar quotes. Kemungkinan API limit atau kesalahan jaringan.'
    quotes.value = []
  } finally {
    loading.value = false
  }
}

fetchQuotes()
</script>

<style scoped>
h2 {
  color: var(--color-primary);
  margin-bottom: 1.5rem;
  text-align: center;
}

ul {
  padding: 0;
  margin: 1.5rem 0;
  list-style: none;
}

li {
  background: var(--color-card);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  border: 1px solid var(--color-border);
  margin-bottom: 1rem;
  padding: 1rem 1.25rem;
  font-size: 1.05rem;
  color: var(--color-text);
  transition: background var(--transition), box-shadow var(--transition);
}

b {
  color: var(--color-secondary);
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

div[role="alert"], .error {
  color: var(--color-primary);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  padding: 0.75rem 1rem;
  border-radius: var(--radius);
  margin-bottom: 1rem;
  text-align: center;
  transition: background var(--transition), color var(--transition), border var(--transition);
}
</style>
