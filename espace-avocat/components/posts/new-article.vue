<template>
  <div class="flex flex-wrap py-4 px-3">
    <div class="w-full md:w-2/3">
      <div class="mb-8">
        <input type="text" class="w-full bg-gray-100 px-4 py-3 font-bold text-3xl" placeholder="Titre de l'article" />
      </div>


    </div>

    <div class="w-full md:w-1/3 pl-3">
      <!-- Post's type -->
      <div>
        <p class="font-bold text-xl">Type</p>
      </div>

      <!-- Extract -->
      <div>
        <p>Extrait</p>
        <textarea id="" rows="6" class="border-gray-100 border-2 rounded w-full"></textarea>
      </div>

      <!-- Cover -->
      <div>
        <p>Couverture</p>
        <div>
          <label for="photo">
            <img src="/cloud-computing.svg" alt="" class="object-cover h-24" />
          </label>
          <input type="file" accept="image/*" id="photo" style="display: none;" />
        </div>
      </div>

      <!-- Managment -->
      <div>
        <button class="py-2 w-full block rounded border-black border-2 my-2 font-semibold">Enregistrer comme brouillon</button>
        <button class="py-2 w-full block rounded border-red-700 border-2 my-2 bg-red-700 text-white font-semibold">Publier</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "new-article-form",
  }
</script>
