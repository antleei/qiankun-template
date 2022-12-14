<script setup lang="ts">

</script>

<template>
  <header h-15 px-5 border="b gray-300" flex="~" items-center justify-between>
    <div flex="~" gap-5>
      <RouterLink to="/" active-class="color-purple-500">
        主应用
      </RouterLink>
      <RouterLink to="/app1" active-class="color-purple-500">
        app1
      </RouterLink>
      <RouterLink to="/app2" active-class="color-purple-500">
        app2
      </RouterLink>
    </div>
    <nav text-xl inline-flex gap-2>
      <a icon-btn @click="toggleDark()">
        <div dark:i-carbon-moon i-carbon-sun />
      </a>

      <a
        icon-btn i-carbon-logo-github rel="noreferrer" href="https://github.com/antfu/vitesse-lite" target="_blank"
        title="GitHub"
      />
    </nav>
  </header>
</template>
