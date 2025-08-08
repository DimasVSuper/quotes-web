<template>
  <div>
    <h1>DymsQuotes</h1>
    <p>Selamat datang di aplikasi Quotes!</p>
    <button class="theme-toggle" @click="toggleTheme">
      {{ isDark ? '🌙 Dark Mode' : '☀️ Light Mode' }}
    </button>
    <nav>
      <ul>
        <li><router-link to="/quotes">Random Quote</router-link></li>
        <li><router-link to="/quotes/list">Daftar Quotes</router-link></li>
        <li><router-link to="/quotes/image">Quotes Image</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isDark = ref(false)

function setTheme(dark: boolean) {
  isDark.value = dark
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  localStorage.setItem('theme', dark ? 'dark' : 'light')
}

function toggleTheme() {
  setTheme(!isDark.value)
}

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved) {
    setTheme(saved === 'dark')
  } else {
    setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches)
  }
})
</script>

<style scoped>
h1 {
  color: var(--color-primary);
  margin-bottom: 1rem;
  text-align: center;
}

p {
  color: var(--color-secondary);
  text-align: center;
  margin-bottom: 2rem;
}

.theme-toggle {
  display: block;
  margin: 0 auto 1.5rem auto;
  padding: 0.5rem 1.25rem;
  background: var(--color-primary);
  color: #fff;
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  font-size: 1rem;
  transition: background var(--transition);
}
.theme-toggle:hover {
  background: var(--color-link-hover);
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0 auto 2rem auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

nav li {
  display: inline-block;
  margin: 0 1rem 1rem 0;
}

a {
  color: var(--color-link);
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 0.5rem 1.25rem;
  text-decoration: none;
  font-weight: 500;
  transition: background var(--transition), color var(--transition), box-shadow var(--transition);
  box-shadow: var(--shadow);
  display: inline-block;
}
a:hover {
  color: #fff;
  background: var(--color-primary);
  box-shadow: 0 4px 16px 0 rgba(60,72,100,.12);
}

/* Responsive nav for mobile */
@media (max-width: 600px) {
  nav ul {
    flex-direction: column;
    align-items: center;
  }
  nav li {
    margin: 0 0 1rem 0;
  }
}
</style>