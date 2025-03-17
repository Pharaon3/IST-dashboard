<template>
  <main class="flex-1 overflow-auto rounded-2xl">
    <div class="bg-gradient-to-r from-[#003c62] via-[#006b8f] to-[#003c62] p-5">
      <!-- Header with search and user -->
      <div class="mb-6 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div
            class="flex h-8 w-8 items-center justify-center rounded-full bg-white text-blue-600"
          >
            <Icon icon="mdi:chart-line" width="20" height="20" />
          </div>

          <span class="text-lg text-white font-medium">İstatistik</span>
        </div>

        <div class="flex items-center gap-2">
          <span class="text-sm text-white">User (anonymous)</span>
          <div class="h-8 w-8 rounded-full bg-gray-200"></div>
        </div>
      </div>

      <hr class="h-[1px] w-full bg-gray-400 border-0" />

      <!-- Blue info box -->
      <div class="mb-6 rounded-lg p-4 text-white h-full">
        <p class="mb-2 text-xl font-medium text-left">İstatistik</p>
        <p class="text-sm opacity-90 text-left">
          Burada bugün banlanan PANELDEKİ TÜM FİRMALARIN KESİNTİLİ HESAPLARININ
          toplam yatırımcı ve toplam çekim adedine göre <br />
          gruplandırılıp ortalamalarını görebilirsiniz.
        </p>
      </div>
    </div>

    <!-- Table -->
    <div class="overflow-x-auto rounded-2xl bg-[#ECF0F5] px-5 -mt-5">
      <table class="w-full border-collapse">
        <thead>
          <tr class="border-b text-left text-sm text-gray-600">
            <th class="px-4 py-3">Sıra Sayısı</th>
            <th class="px-4 py-3">Ortalama Toplam Yatırım</th>
            <th class="px-4 py-3">Ortalama Yorum Adedi</th>
            <th class="px-4 py-3">Ortalama Toplam Çekim</th>
            <th class="px-4 py-3">Ortalama Çekim Adedi</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, index) in tableData"
            :key="index"
            class="border-b bg-white text-sm"
          >
            <td class="px-4 py-3 rounded-l-xl">{{ row.siraNo }}</td>
            <td class="px-4 py-3">{{ row.ortalamaYatirim }}</td>
            <td class="px-4 py-3">{{ row.ortalamaYorum }}</td>
            <td class="px-4 py-3">{{ row.ortalamaCekim }}</td>
            <td class="px-4 py-3 rounded-r-xl">
              {{ row.ortalamaCekimAdet }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
  <!-- </div> -->
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
// import AppSidebar from "../components/AppSidebar.vue";

const tableData = ref([
  {
    siraNo: "19",
    ortalamaYatirim: "11264",
    ortalamaYorum: "6",
    ortalamaCekim: "7100",
    ortalamaCekimAdet: "5",
  },
  {
    siraNo: "20",
    ortalamaYatirim: "12500",
    ortalamaYorum: "8",
    ortalamaCekim: "8200",
    ortalamaCekimAdet: "7",
  },
  {
    siraNo: "20",
    ortalamaYatirim: "12500",
    ortalamaYorum: "8",
    ortalamaCekim: "8200",
    ortalamaCekimAdet: "7",
  },
  {
    siraNo: "20",
    ortalamaYatirim: "12500",
    ortalamaYorum: "8",
    ortalamaCekim: "8200",
    ortalamaCekimAdet: "7",
  },
  {
    siraNo: "20",
    ortalamaYatirim: "12500",
    ortalamaYorum: "8",
    ortalamaCekim: "8200",
    ortalamaCekimAdet: "7",
  },
  {
    siraNo: "20",
    ortalamaYatirim: "12500",
    ortalamaYorum: "8",
    ortalamaCekim: "8200",
    ortalamaCekimAdet: "7",
  },
  {
    siraNo: "20",
    ortalamaYatirim: "12500",
    ortalamaYorum: "8",
    ortalamaCekim: "8200",
    ortalamaCekimAdet: "7",
  },
  {
    siraNo: "20",
    ortalamaYatirim: "12500",
    ortalamaYorum: "8",
    ortalamaCekim: "8200",
    ortalamaCekimAdet: "7",
  },
  {
    siraNo: "20",
    ortalamaYatirim: "12500",
    ortalamaYorum: "8",
    ortalamaCekim: "8200",
    ortalamaCekimAdet: "7",
  },
  {
    siraNo: "20",
    ortalamaYatirim: "12500",
    ortalamaYorum: "8",
    ortalamaCekim: "8200",
    ortalamaCekimAdet: "7",
  },
  {
    siraNo: "20",
    ortalamaYatirim: "12500",
    ortalamaYorum: "8",
    ortalamaCekim: "8200",
    ortalamaCekimAdet: "7",
  },
  {
    siraNo: "20",
    ortalamaYatirim: "12500",
    ortalamaYorum: "8",
    ortalamaCekim: "8200",
    ortalamaCekimAdet: "7",
  },
  {
    siraNo: "20",
    ortalamaYatirim: "12500",
    ortalamaYorum: "8",
    ortalamaCekim: "8200",
    ortalamaCekimAdet: "7",
  },
  {
    siraNo: "20",
    ortalamaYatirim: "12500",
    ortalamaYorum: "8",
    ortalamaCekim: "8200",
    ortalamaCekimAdet: "7",
  },
]);
</script>
