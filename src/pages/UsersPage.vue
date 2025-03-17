<template>
  <div class="w-full min-h-screen bg-white">
    <!-- Users Management Card -->
    <div class="bg-gradient-to-r from-[#003c62] via-[#006b8f] to-[#003c62] p-5">
      <!-- Header with search and user -->
      <div class="mb-6 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div
            class="flex h-8 w-8 items-center justify-center rounded-full bg-white text-blue-600"
          >
            <Icon icon="mdi:chart-line" width="20" height="20" />
          </div>

          <span class="text-lg text-white font-medium">{{ headerText }}</span>
        </div>

        <div class="flex items-center gap-2">
          <span class="text-sm text-white">User (anonymous)</span>
          <div class="h-8 w-8 rounded-full bg-gray-200"></div>
        </div>
      </div>

      <hr class="h-[1px] w-full bg-gray-400 border-0" />

      <!-- Blue info box -->
      <div class="mb-6 rounded-lg p-4 text-white h-full">
        <p class="mb-2 text-xl font-medium text-left">{{ headerText }}</p>
        <p class="text-sm opacity-90 text-left">
          Burada bugün banlanen PANELDEKİ TÜM FİRMALARIN KESİNTİLİ HESAPLARININ
          toplam yatırımcı ve toplam çekim adedine göre <br />
          gruplandırılıp ortalamalarını görebilirsiniz.
        </p>
      </div>
    </div>

    <!-- Main Content Box -->
    <div class="-mt-5 bg-white rounded-t-2xl overflow-hidden">
      <!-- Search Bar -->
      <div class="p-4 flex items-center justify-between">
        <div>2 kayittan 1 - 2 arasindaki kayrtiar gösteriliyor</div>
        <!-- Search -->
        <div class="flex items-center gap-2">
          <div class="relative">
            <input
              type="text"
              placeholder="Ara..."
              class="search-input w-60 pl-2 py-[10px] rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
            <div class="absolute right-1 top-1">
              <button class="bg-secondary text-white p-2 rounded-md">
                <Icon icon="mdi:magnify" width="16" height="16" />
              </button>
            </div>
          </div>
        </div>
        <!-- input select -->
        <div class="flex items-center gap-2">
          <span class="text-sm text-gray-500">Sayfa başı kayıt göster:</span>
          <div class="relative">
            <select
              class="appearance-none pl-3 pr-8 py-1.5 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            >
              <option>10</option>
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </select>
            <div class="absolute right-2 top-2 pointer-events-none">
              <Icon
                icon="mdi:chevron-down"
                class="text-gray-400"
                width="14"
                height="14"
              />
            </div>
          </div>
          <button
            class="bg-secondary text-white px-3 py-1.5 rounded-md text-sm"
          >
            Ekle
          </button>
        </div>
      </div>

      <div class="bg-[#ECF0F5] rounded-2xl px-5 h-[71.8vh]">
        <!-- Table -->
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr>
                <th
                  class="px-4 py-3 text-left text-sm font-medium text-gray-600"
                >
                  İsim
                </th>
                <th
                  class="px-4 py-3 text-left text-sm font-medium text-gray-600"
                >
                  E-Posta Adresi
                </th>
                <th
                  class="px-4 py-3 text-left text-sm font-medium text-gray-600"
                >
                  Yetki
                </th>
                <th
                  class="px-4 py-3 text-left text-sm font-medium text-gray-600"
                >
                  Son Giriş
                </th>
                <th
                  class="px-4 py-3 text-left text-sm font-medium text-gray-600"
                >
                  Çalışma Yetkisi
                </th>
                <th
                  class="px-4 py-3 text-left text-sm font-medium text-gray-600"
                >
                  API Kullanımı
                </th>
                <th
                  class="px-4 py-3 text-left text-sm font-medium text-gray-600"
                >
                  İşlem
                </th>
              </tr>
            </thead>
            <tbody>
              <!-- Row 1 -->
              <tr class="border-b rounded-xl bg-gray-50">
                <td class="px-4 py-3 text-sm rounded-l-xl">Ekin Tılmazoğlu</td>
                <td class="px-4 py-3 text-sm">ekin@pappays.com</td>
                <td class="px-4 py-3 text-sm">Süper Yönetici</td>
                <td class="px-4 py-3 text-sm">2023-05-22 15:51:41</td>
                <td class="px-4 py-3 text-sm">Çalışma Yapabilir</td>
                <td class="px-4 py-3">
                  <span
                    class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-orange-100 text-orange-800"
                  >
                    API Kapalı
                  </span>
                </td>
                <td class="px-4 py-3 rounded-r-xl">
                  <div class="flex space-x-1">
                    <button class="p-1 rounded-lg bg-black text-white">
                      <Icon icon="mdi:pencil" width="16" height="16" />
                    </button>
                    <button class="p-1 rounded-lg bg-secondary text-white">
                      <Icon icon="mdi:trash-can" width="16" height="16" />
                    </button>
                  </div>
                </td>
              </tr>
              <!-- Row 2 -->
              <tr class="border-b bg-gray-50">
                <td class="px-4 py-3 text-sm rounded-l-xl">Ekin Tılmazoğlu</td>
                <td class="px-4 py-3 text-sm">ekin@pappays.com</td>
                <td class="px-4 py-3 text-sm">Süper Yönetici</td>
                <td class="px-4 py-3 text-sm">2023-05-22 15:51:41</td>
                <td class="px-4 py-3 text-sm">Çalışma Yapabilir</td>
                <td class="px-4 py-3">
                  <span
                    class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-orange-100 text-orange-800"
                  >
                    API Kapalı
                  </span>
                </td>
                <td class="px-4 py-3 rounded-r-xl">
                  <div class="flex space-x-1">
                    <button class="p-1 rounded-lg bg-black text-white">
                      <Icon icon="mdi:pencil" width="16" height="16" />
                    </button>
                    <button class="p-1 rounded-lg bg-secondary text-white">
                      <Icon icon="mdi:trash-can" width="16" height="16" />
                    </button>
                  </div>
                </td>
              </tr>
              <!-- Row 3 -->
              <tr class="border-b bg-gray-50">
                <td class="px-4 py-3 text-sm rounded-l-xl">Ekin Tılmazoğlu</td>
                <td class="px-4 py-3 text-sm">ekin@pappays.com</td>
                <td class="px-4 py-3 text-sm">Süper Yönetici</td>
                <td class="px-4 py-3 text-sm">2023-05-22 15:51:41</td>
                <td class="px-4 py-3 text-sm">Çalışma Yapabilir</td>
                <td class="px-4 py-3">
                  <div
                    class="w-6 h-6 rounded-full bg-success flex items-center justify-center"
                  >
                    <Icon
                      icon="mdi:check"
                      class="text-white"
                      width="14"
                      height="14"
                    />
                  </div>
                </td>
                <td class="px-4 py-3 rounded-r-xl">
                  <div class="flex space-x-1">
                    <button class="p-1 rounded-lg bg-black text-white">
                      <Icon icon="mdi:pencil" width="16" height="16" />
                    </button>
                    <button class="p-1 rounded-lg bg-secondary text-white">
                      <Icon icon="mdi:trash-can" width="16" height="16" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div class="p-4 flex justify-center items-center">
          <button
            class="flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100 text-gray-600 mr-2"
          >
            <Icon icon="mdi:chevron-left" width="17" height="17" />
            <span>Önceki</span>
          </button>
          <button
            class="w-8 h-8 flex items-center justify-center rounded-full pagination-active"
          >
            1
          </button>
          <button
            class="flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100 text-gray-600 ml-2"
          >
            <span>Sonraki</span>
            <Icon icon="mdi:chevron-right" width="16" height="16" />
          </button>
        </div>

        <!-- Footer Notes -->
        <div class="absolute bottom-5 p-4 text-xs text-gray-500">
          <p class="mb-1">
            • Yetki ile ilişkilendirilen parametreler çalışma izinleri ile
            ilişkilidir bu şekilde ilgili yetki verilir ve ilgili görevleri
            yapabilir, hesap işlemleri yapabilir.
          </p>
          <p class="mb-1">
            • Çalışma yetkisi olmayan kullanıcılar sadece görüntüleme yapabilir,
            işlem yapamazlar. Çalışma yetkisi olan kullanıcılar işlem
            yapabilirler.
          </p>
          <p>
            • Lütfen kullanıcıların yetki seviyelerini doğru belirleyiniz bu
            şekilde güvenlik açığı oluşmaması için önemlidir. Kullanıcı hesap
            işlemleri için yetki verilmesi gereklidir.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const headerText = computed(() => {
  switch (route.path) {
    case "/dashboard":
      return "Dashboard";
    case "/pp-hesaplar":
      return "PP Hesaplar";
    case "/pp-sorunlular":
      return "PP Sorunlular";
    case "/tasima-istatistikleri":
      return "Taşıma İstatistikleri";
    case "/stats":
      return "İstatistik";
    case "/telegram-bildirimleri":
      return "Telegram Bildirimleri";
    case "/users":
      return "Kullanıcılar";
    case "/sifre-degistir":
      return "Şifremi Değiştir";
    case "/2fa-guvenlik":
      return "2FA Güvenlik";
    case "/sss":
      return "SSS";
    default:
      return "İstatistik";
  }
});
</script>
