<template>
  <div class="flex items-center ">
    <!-- user Name -->
    <div class="ml-6 m-2">
      <h1 class="text-sm">Hello Monsieur,</h1>
      <h2>yacou</h2>
    </div>

    <!-- searchbar -->
    <div class="w-2/3 px-2  bg-gray-100 p-2 rounded ml-8 flex items-center">
      <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-3">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      <span class="text-xs text-gray-600 ml-6">RECHERCHE</span>
    </div>

    <!-- notification & user avatar -->
    <div class="flex items-center justify-end w-48">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>

      <div class="h-6 w-6 ml-4 rounded-full flex items-center justify-center bg-green-800">
        <img class="h-full w-full rounded-full" src="../assets/user.jpg" alt="user">
      </div>
 
    </div>
  </div>
</template>