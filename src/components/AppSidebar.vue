<template>
  <aside class="w-[280px]">
    <div class="bg-[#A2A2A240] h-[95vh] shadow-md rounded-2xl p-4">
      <div class="flex items-center gap-2">
        <div class="flex items-center justify-center rounded-full">
          <!-- Logo -->
          <img src="@/assets/logo.svg" alt="Logo" />
        </div>
        <span class="text-xl font-medium text-gray-800">Pappays</span>
      </div>

      <nav class="mt-6 space-y-1 px-2">
        <div v-for="item in menuItems" :key="item.to">
          <router-link
            :to="item.to"
            class="flex items-center justify-between gap-3 rounded-xl px-3 py-2 text-sm transition-all duration-200"
            :class="{
              'bg-orange-500 text-white': route.path === item.to,
              'text-gray-700': route.path !== item.to,
            }"
          >
            <div class="flex items-center gap-3">
              <div
                class="flex h-6 w-6 items-center justify-center rounded-full transition-all duration-200"
                :class="
                  route.path === item.to
                    ? 'bg-white text-orange-500'
                    : 'bg-blue-100 text-blue-600'
                "
              >
                <Icon :icon="item.icon" width="20" height="20" />
              </div>
              <p>{{ item.label }}</p>
            </div>
            <button
              v-if="item.hasDropdown"
              @click.prevent="toggleDropdown(item.to)"
              class="focus:outline-none"
            >
              <Icon
                :icon="openDropdown === item.to ? 'mdi:minus' : 'mdi:plus'"
                width="20"
                height="20"
              />
            </button>
          </router-link>
          <div
            v-if="item.hasDropdown && openDropdown === item.to"
            class="mt-2 space-y-2"
          >
            <!-- Dropdown content dynamically rendered -->
            <div
              v-for="dropdownItem in item.dropdownItems"
              :key="dropdownItem"
              class="pl-10 py-1 rounded cursor-pointer"
            >
              {{ dropdownItem }}
            </div>
          </div>
        </div>
      </nav>
    </div>
  </aside>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { useRoute } from "vue-router";
import { ref } from "vue";

const route = useRoute();
const openDropdown = ref(null);

const menuItems = [
  {
    to: "/dashboard",
    label: "Dashboard",
    icon: "mdi:home",
    hasDropdown: true,
    dropdownItems: ["Dashboard Item 1", "Dashboard Item 2"],
  },
  {
    to: "/pp-hesaplar",
    label: "PP Hesaplar",
    icon: "mdi:account-group",
    hasDropdown: true,
    dropdownItems: [
      "Sözleşmeli Hesaplar",
      "Bankalı Hesaplar",
      "Onaysız Hesaplar",
      "Çekime Kapalılar",
      "Hesap Ekle",
      "Yeni Hesap Aç",
      "Çekim Hareketleri",
      "Çekim Oluştur",
      "Hesap Kategorileri",
    ],
  },
  {
    to: "/pp-sorunlular",
    label: "PP Sorunlular",
    icon: "mdi:account-group",
    hasDropdown: true,
    dropdownItems: ["PP Sorunlular Item 1", "PP Sorunlular Item 2"],
  },
  {
    to: "/tasima-istatistikleri",
    label: "Taşıma İstatistikleri",
    icon: "mdi:account-tie",
    hasDropdown: false,
  },
  {
    to: "/stats",
    label: "İstatistik",
    icon: "mdi:chart-line",
    hasDropdown: false,
  },
  {
    to: "/telegram-bildirimleri",
    label: "Telegram Bildirimleri",
    icon: "mdi:chart-bar",
    hasDropdown: false,
  },
  {
    to: "/users",
    label: "Kullanıcılar",
    icon: "mdi:account-group",
    hasDropdown: false,
  },
  {
    to: "/sifre-degistir",
    label: "Şifremi Değiştir",
    icon: "mdi:lock-reset",
    hasDropdown: false,
  },
  {
    to: "/2fa-guvenlik",
    label: "2FA Güvenlik",
    icon: "mdi:shield-lock",
    hasDropdown: false,
  },
  { to: "/sss", label: "SSS", icon: "mdi:help-circle", hasDropdown: false },
];

const toggleDropdown = (to) => {
  if (openDropdown.value === to) {
    openDropdown.value = null;
  } else {
    openDropdown.value = to;
  }
};
</script>
