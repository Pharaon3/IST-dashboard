<template>
    <div class="min-h-screen bg-slate-50 p-5">
      <div
        class="min-h-screen rounded-2xl w-full bg-gradient-to-b from-[#0f2d52] via-[#0284c7] to-[#06b6d4] flex items-center justify-center p-4"
      >
        <!-- Main Container -->
        <div class="w-full max-w-6xl">
          <!-- Header Bar -->
          <div
            class="flex justify-between items-center bg-[#0284c7]/80 rounded-t-xl px-6 py-6"
          >
            <div class="flex items-center gap-2 text-white">
              <User class="w-5 h-5" />
              <span>Kayıtlı Kullanıcı</span>
            </div>
            <div class="text-white">
              <div class="text-xl font-semibold flex items-center">
                <Sun class="w-6 h-6 text-orange-400 mr-2" />
                Pappays
              </div>
            </div>
          </div>
  
          <!-- Form Container -->
          <div class="bg-white rounded-xl p-6 -mt-2">
            <!-- Error Message -->
            <div
              class="bg-red-100 text-red-700 py-2 px-4 rounded-lg text-center mb-6"
            >
              Lütfen bilgilerinizi kontrol ediniz.
            </div>
  
            <!-- Login Form -->
            <div class="space-y-4">
              <!-- Email Field -->
              <div class="flex items-center border-b">
                <label class="w-24 text-gray-700">E-Posta</label>
                <input
                  v-model="email"
                  type="text"
                  placeholder="Eldar İbragimov"
                  class="flex-1 px-4 py-2 bg-gray-100 rounded-lg focus:outline-none"
                />
              </div>
  
              <!-- Password Field -->
              <div class="flex items-center">
                <label class="w-24 text-gray-700">Şifre</label>
                <div class="relative flex-1">
                  <input
                    v-model="password"
                    :type="showPassword ? 'text' : 'password'"
                    class="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    @click="showPassword = !showPassword"
                    class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    <Eye v-if="!showPassword" class="w-5 h-5" />
                    <EyeOff v-else class="w-5 h-5" />
                  </button>
                </div>
              </div>
  
              <!-- Remember Me and Login Button Row -->
              <div class="flex items-center justify-between mt-6">
                <!-- Remember Me Toggle -->
                <label class="ml-24 flex items-center gap-2 cursor-pointer">
                  <div class="relative inline-flex">
                    <input v-model="rememberMe" type="checkbox" class="sr-only" />
                    <div
                      class="w-10 h-6 bg-gray-200 rounded-full"
                      :class="{ 'bg-blue-500': rememberMe }"
                    ></div>
                    <div
                      class="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 ease-in-out"
                      :class="{ 'translate-x-4': rememberMe }"
                    ></div>
                  </div>
                  <span class="text-gray-600 text-sm">Beni Hatırla</span>
                </label>
  
                <!-- Login Button -->
                <button
                  type="submit"
                  class="bg-[#ff5722] hover:bg-[#f4511e] text-white px-5 py-2 rounded-full flex items-center gap-1 text-sm"
                >
                  Giriş Yap
                  <ChevronRight class="w-4 h-4" />
                </button>
              </div>
  
              <!-- Telegram Link -->
              <div class="pt-4 flex justify-center">
                <a href="#" class="flex items-center gap-2 text-[#229ED9]">
                  <MessageCircle class="w-5 h-5" />
                  <span>Telegram Kanalımız</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import {
    User,
    Eye,
    EyeOff,
    Sun,
    ChevronRight,
    MessageCircle,
  } from "lucide-vue-next";
  
  const email = ref("");
  const password = ref("");
  const rememberMe = ref(false);
  const showPassword = ref(false);
  </script>
  
  <style scoped>
  /* Custom styles for smooth toggle transition */
  .transition-transform {
    transition: transform 0.2s ease-in-out;
  }
  </style>
  