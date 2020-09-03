<template >
  <div>
    <div class="md:flex shadow-lg  sm:shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl bg-gray-300  flex content-center justify-center  items-center">
      <div classs="hidden md:block shadow sm:shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl">
        <img :src="'photo.jpg'" class="max-w-lg sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"/>
      </div>
      <div class="bg-white rounded-lg p-6 m-7 my-6  md:box-content "></div>
        <div classs="shadow sm:shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl">
        <h3 class ="text-center text-blue-900 font-bold my-6" >LOGIN</h3>
        <hr class="my-2">
        <div class ="mb-6 my-6">
          <label for ="mail" class="block">E-mail</label>
          <input type="email" id="mail" placeholder=" Votre mail" class =" rounded border shadow-inner py-2 py-2 text-gray-800">
        </div>
        <div class ="mb-6">
          <label for ="password" class="block">Mot de passe</label>
          <input type="password" id="password" placeholder=" Votre mot de passe" class =" rounded border shadow-inner py-2 py-2 text-gray-800 ">
        </div>
        <hr class="my-8">
        <div class="my-6">
          <a href= "#" >Mot de passe oublié?</a>
          <button type="submit" class="bg-blue-700 text-white px-2 py-2 rounded hover:bg-blue-800">Se connecter</button>
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
