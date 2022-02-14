<template>
  <PageWrapper class="flex justify-center items-center">
    <div class="flex flex-col z-10">
      <h2 class="text-center">
        <span
          v-for="(item, i) in $t('pages.index.title').split(',')"
          :key="i"
          class="linear-wipe-text drop-shadow-xl text-5xl xl:text-7xl 2xl:text-8xl block font-bold uppercase"
        >
          {{ item }}
        </span>
      </h2>
      <div class="flex flex-col items-center mt-6">
        <img
          src="assets/images/HEADER.png"
          class="inline-block"
          alt="NFTChicks"
          width="450"
          height="450"
        />
      </div>
      <div class="flex flex-col items-center mt-4">
        <p class="text-center">
          <span
            class="linear-wipe-text drop-shadow-xl text-lg xl:text-2xl 2xl:text-3xl block font-bold uppercase"
          >
            A limited NFT collection benefitting
            <a class="hover:underline" href="https://cryptochicks.ca/"
              >CryptoChicks</a
            >
            <p>Celebrating the power & beauty of the women in crypto</p>
          </span>
        </p>
      </div>
      <div class="flex space-x-4 justify-center mt-4">
        <Button
          size="lg"
          text="NFT Chicks Auction"
          class="font-extrabold"
          href="https://tofunft.com/discover/items?contracts=12894&network=1088"
        />
      </div>
    </div>
  </PageWrapper>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
</script>

<style lang="scss">
.linear-wipe-text {
  $color1: theme('colors.blue.500');
  $color2: theme('colors.purple.500');
  background: linear-gradient(
    to right,
    $color1 20%,
    $color2 40%,
    $color2 60%,
    $color1 80%
  );
  background-size: 200% auto;
  color: #000;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 20s ease infinite;
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
}
.triangle-shape {
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 40px solid theme('colors.green.600');
  transform: translate(-15rem, -6rem) rotate(45deg);
}
</style>
