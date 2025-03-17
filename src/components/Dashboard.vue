<template>
  <div class="dashboard-container">
    <div class="sidemenu">
      <div class="sidemenu-logo-container">
        <img src="@/assets/logo 1.png" alt="Pappays Logo" class="logo" height="75" />
        <div>Pappays</div>
      </div>
      <div class="hor-divider"></div>
      <div class="sidemenu-list">
        <div>
          <img src="@/assets/icons/dashboard.png" alt="Dashboard Icon" />
          <div>Dashbaord</div>
        </div>
        <div>
          <img src="@/assets/icons/pp heasaplar.png" alt="PP Heasaplar Icon" />
          <div>PP Heasaplar</div>
        </div>
        <div>
          <img src="@/assets/icons/PP Sorunlular.png" alt="PP Sorunlular Icon" />
          <div>PP Sorunlular</div>
        </div>
        <div>
          <img src="@/assets/icons/dashboard.png" alt="Dashboard Icon" />
          <div>Dashbaord</div>
        </div>
      </div>
    </div>
    <div class="dashboard-contents"></div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
}
</script>

<style>
body {
  background: linear-gradient(to bottom, #bfdcfd 0%, #fdfcff 36%, #fdfcff 65%, #cce0fe 100%);
}
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
.dashboard-container {
  display: flex;
  gap: 30px;
  justify-content: space-between;
  max-width: 1800px;
  width: 100%;
  margin: 30px;
}
.sidemenu {
  width: 16%;
  background-color: rgba(163, 163, 163, 0.25);
  height: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  padding: 8px 20px;
}
.sidemenu-logo-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 30px;
}
.sidemenu-list {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 5px;
}
.sidemenu-list > div {
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.05);
  height: 43px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 10px 8px;
  gap: 12px;
}
</style>
