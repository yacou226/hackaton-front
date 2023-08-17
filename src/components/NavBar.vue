<script></script>

<template>
  <div class="">
    <div class="w-full bg-white border border-b-1 flex items-center justify-between">
      <!-- logo and searchbar -->
      <div class="flex items-center justify-start ml-6 w-2/3 ">
        <img class="h-14" src="../assets/logo.png" alt="logo">
        <div  class="w-2/3 h-10  border rounded-lg ml-20 flex items-center ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-4 text-gray-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input class="h-full w-full mx-6 border border-none  " type="text" name="" id="" placeholder="RECHERCHE ..">
        </div>
      </div>

      <!-- notification and user avatar -->
      <div class="flex items-center justify-center  mr-6 ">
        <div class="relative">
          <div class="bg-green-800 w-2 h-2 rounded-full absolute left-3"></div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
        </div>
        <div class="flex items-center">
          <span class="ml-3 font-primary">yacou</span>
          <img class="h-6 w-6 rounded-full ml-3 mr-3" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" srcset="">

        </div>
      </div>
    </div>
  </div>
</template>