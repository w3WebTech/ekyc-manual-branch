<template>
      <div class="hidden md:block h-screen">
        <!-- Iframe for larger screens -->
        <iframe src="https://funds-plum.vercel.app/desktop.html" class="w-full h-screen border-2 border-gray-300"
            title="Iframe Example 1"></iframe>
    </div>
    <div class="block md:hidden h-screen">
        <!-- Iframe for smaller screens -->
        <iframe src="https://funds-plum.vercel.app/testing.html" class="w-full h-screen border-2 border-gray-300"
            title="Iframe Example 2"></iframe>
    </div>
</template>

<script>

</script>

<style scoped>
/* Add any additional styles here */
</style>