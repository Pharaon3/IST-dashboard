<template>
  <div
    class="p-5 flex h-screen w-full bg-gradient-to-b from-[#BFDCFD] to-[#FDFCFF] gap-5"
  >
    <!-- Left Sidebar -->
    <AppSidebar />

    <main class="flex-1 overflow-auto rounded-2xl">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import AppSidebar from "./components/AppSidebar.vue";

export default {
  components: {
    AppSidebar,
  },
};
</script>
