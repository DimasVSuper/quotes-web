<template>
  <div class="card random-quote">
    <h2>Random Quote</h2>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else-if="quote">
      <blockquote>
        “{{ quote.q }}”
        <footer>— {{ quote.a }}</footer>
      </blockquote>
    </div>
    <button @click="fetchQuote" class="refresh-btn">Ambil Quote Baru</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const quote = ref<{ q: string; a: string } | null>(null)
const loading = ref(false)
const error = ref('')

async function fetchQuote() {
  loading.value = true
  error.value = ''
  try {
    const res = await fetch('https://zenquotes.io/api/random')
    const data = await res.json()
    if (Array.isArray(data) && data[0]?.q && data[0]?.a) {
      quote.value = data[0]
    } else {
      error.value = data.message || data.error || JSON.stringify(data)
      quote.value = null
    }
  } catch (e) {
    error.value = 'Gagal mengambil quote. Kemungkinan API limit atau kesalahan jaringan.'
    quote.value = null
  } finally {
    loading.value = false
  }
}

fetchQuote()
</script>

<style scoped>
.random-quote {
  max-width: 500px;
  margin: 2rem auto;
  background: var(--color-card);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  border: 1px solid var(--color-border);
  padding: 2rem;
  transition: background var(--transition), box-shadow var(--transition);
}

.random-quote h2 {
  color: var(--color-primary);
  margin-bottom: 1.5rem;
  text-align: center;
}

blockquote {
  font-size: 1.2rem;
  color: var(--color-text);
  margin: 1.5rem 0;
  padding-left: 1rem;
  border-left: 4px solid var(--color-accent);
  background: var(--color-bg-secondary);
  border-radius: var(--radius);
}

blockquote footer {
  margin-top: 0.5rem;
  font-size: 1rem;
  color: var(--color-secondary);
  text-align: right;
  display: block;
}

.refresh-btn {
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
.refresh-btn:hover {
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
  transition: background var(--transition), color var(--transition), border var(--transition);
}
</style>