<template>
    <!-- Main Content Area -->
    <div class="w-full min-h-screen bg-white p-4">
      <!-- User Edit Card -->
      <div class="max-w-6xl mx-auto bg-navy rounded-xl shadow-md overflow-hidden">
        <!-- Header -->
        <div class="p-4 flex justify-between items-center">
          <div class="flex items-center">
            <div class="bg-white rounded-md p-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-primary"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h1 class="ml-2 text-white font-medium">Kullanıcı Düzenle</h1>
          </div>
          <div class="flex items-center">
            <img
              src="/placeholder.svg?height=32&width=32"
              alt="User Avatar"
              class="w-8 h-8 rounded-full"
            />
            <span class="ml-2 text-white text-sm">Emin (Superadmin)</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="ml-2 text-white"
            >
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
          </div>
        </div>
  
        <!-- User Info Timestamps -->
        <div class="bg-white mx-4 rounded-t-xl p-4">
          <div class="grid grid-cols-3 gap-4">
            <div>
              <h3 class="text-sm font-medium text-gray-700">Son Giriş</h3>
              <p class="text-xs text-gray-500">2023-02-23 11:50:40</p>
            </div>
            <div>
              <h3 class="text-sm font-medium text-gray-700">Son Düzenleme</h3>
              <p class="text-xs text-gray-500">2023-02-27 11:58:40</p>
            </div>
            <div>
              <h3 class="text-sm font-medium text-gray-700">Kayıt Tarihi</h3>
              <p class="text-xs text-gray-500">2023-01-16 00:01:13</p>
            </div>
          </div>
        </div>
  
        <!-- Form Content -->
        <div class="bg-white mx-4 p-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Left Column -->
            <div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Yetki</label
                >
                <div class="relative">
                  <select
                    class="block w-full bg-inputBg border-0 rounded-md py-2 pl-3 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option>Erişim Yöneticisi</option>
                  </select>
                  <div
                    class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
                  >
                    <svg
                      class="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
  
              <div class="mb-4">
                <div class="flex justify-between items-center mb-2">
                  <label class="block text-sm font-medium text-gray-700"
                    >Düzenle API</label
                  >
                  <label class="toggle-switch">
                    <input type="checkbox" checked />
                    <span class="toggle-slider"></span>
                  </label>
                </div>
                <div class="flex items-center text-xs mb-1">
                  <span class="mr-2">İşlemler</span>
                  <span class="mr-2 text-gray-400">|</span>
                  <span>Üretim İşlemleri</span>
                </div>
                <div
                  class="bg-orange-50 p-2 rounded text-apiText text-xs break-all"
                >
                  UYGR-SIFRETOKENTESTSIFRENAPIKEY1VEUYGR-SIFRETOKENTESTSIFRENAPIKEY2UYGR-SIFRETOKENTESTSIFRENAPIKEY3UYGR-SIFRETOKENTESTSIFRENAPIKEY2
                </div>
              </div>
  
              <div class="mb-4">
                <div class="flex justify-between items-center mb-2">
                  <label class="block text-sm font-medium text-gray-700"
                    >Düzenle API</label
                  >
                  <label class="toggle-switch">
                    <input type="checkbox" />
                    <span class="toggle-slider"></span>
                  </label>
                </div>
                <div class="flex items-center text-xs mb-1">
                  <span class="mr-2">Test</span>
                  <span class="mr-2 text-gray-400">|</span>
                  <span>Panel</span>
                </div>
              </div>
            </div>
  
            <!-- Right Column -->
            <div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >İsim</label
                >
                <input
                  type="text"
                  value="Ekin Karagöz"
                  class="block w-full bg-inputBg border-0 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
  
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >E-posta Adresi</label
                >
                <input
                  type="email"
                  value="ekin@pappays.com"
                  class="block w-full bg-inputBg border-0 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
  
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Şifre</label
                >
                <div class="relative">
                  <input
                    type="password"
                    value="••••••••"
                    class="block w-full bg-inputBg border-0 rounded-md py-2 pl-3 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <div class="absolute inset-y-0 right-0 flex items-center px-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="text-gray-400 cursor-pointer"
                    >
                      <path
                        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                      ></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </div>
                </div>
              </div>
  
              <div class="mb-4">
                <div class="flex justify-between items-center mb-2">
                  <div class="flex items-center">
                    <label class="toggle-switch mr-2">
                      <input type="checkbox" checked />
                      <span class="toggle-slider"></span>
                    </label>
                    <span class="text-sm font-medium text-gray-700"
                      >Panel No. Telefon ve E-posta Gönderimi</span
                    >
                  </div>
                </div>
                <div class="flex justify-between items-center mb-2">
                  <div class="flex items-center">
                    <label class="toggle-switch mr-2">
                      <input type="checkbox" checked />
                      <span class="toggle-slider"></span>
                    </label>
                    <span class="text-sm font-medium text-gray-700"
                      >Telegram No. Telefon ve E-posta Gönderimi</span
                    >
                  </div>
                </div>
              </div>
  
              <div
                class="bg-orange-50 p-2 rounded text-apiText text-xs break-all mt-4"
              >
                UYGR-SIFRETOKENTESTSIFRENAPIKEY1VEUYGR-SIFRETOKENTESTSIFRENAPIKEY2UYGR-SIFRETOKENTESTSIFRENAPIKEY3UYGR
              </div>
            </div>
          </div>
  
          <!-- Save Button -->
          <div class="flex justify-center mt-6 mb-2">
            <button
              class="bg-secondary text-white px-6 py-2 rounded-full text-sm font-medium flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mr-1"
              >
                <path
                  d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
                ></path>
                <polyline points="17 21 17 13 7 13 7 21"></polyline>
                <polyline points="7 3 7 8 15 8"></polyline>
              </svg>
              Kaydetme
            </button>
          </div>
        </div>
  
        <!-- Recent Activities -->
        <div class="bg-lightGray mx-4 mb-4 rounded-b-xl p-4">
          <h2 class="text-sm font-medium text-gray-700 mb-3">Son Hareketler</h2>
          <div class="bg-white rounded-md p-3 flex items-center">
            <div class="w-4 h-4 rounded-full bg-success mr-2"></div>
            <span class="text-xs text-gray-600"
              >IP'si ile kayıt oluşturulmuş...</span
            >
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup></script>
  