<template>
  <div class="page-shell">
    <header class="topbar">
      <a class="brand" href="/">Dafa Hambali</a>
      <nav class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/experience">Experience</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

