<script setup>
import Sidebar from './Components/Sidebar.vue';
import NavBar from './components/NavBar.vue';
import AllData from './Components/AllData.vue'

</script>

<template>
	<!-- main div -->
	<div class="bg-gray-50 h-screen w-screen border flex    p-6">
		<!-- Sidebar -->
		<div class="h-full w-80 bg-white shadow rounded-lg  ">
			<Sidebar />
		</div>
		<!-- NavBar and viewRouter -->
		<div class="w-full h-full ml-4   ">
			<!-- Navbar -->
			<div class="bg-white shadow-md w-full h-16 rounded-lg mb">
				<NavBar />
			</div>
			<!-- RouterView -->
			<div class="">
				<AllData />
			</div>
		</div>
	</div>
</template>

<style>
</style>