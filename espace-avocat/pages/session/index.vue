<template >
  <div class="pt-10">
    <div class="md:w-4/6 m-auto md:flex md:justify-center">
      <div classs="md:w-1/2 hidden md:block shadow sm:shadow-md md:shadow-lg">
        <img src="photo.jpg" class="w-full object-cover"/>
      </div>
      <div class="md:flex-1 bg-white p-2 md:box-content">
        <div classs="shadow sm:shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl">
          <h3 class ="text-center text-blue-900 font-bold my-6" >LOGIN</h3>
          <hr class="my-2">
          <div class="my-6">
            <label for ="mail" class="block">E-mail</label>
            <input type="email" id="mail" placeholder=" Votre mail" class="rounded border shadow-inner py-2 py-2 text-gray-800">
          </div>
          <div class="mb-6">
            <label for ="password" class="block">Mot de passe</label>
            <input type="password" id="password" placeholder=" Votre mot de passe" class =" rounded border shadow-inner py-2 py-2 text-gray-800 ">
          </div>
          <hr class="my-8">
          <div class="">
            <a href= "#" >Mot de passe oublié?</a>
            <button type="submit" class="bg-blue-700 text-white px-2 py-2 rounded hover:bg-blue-800">Se connecter</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {


}
</script>

<style>

</style>
