<template>
  <div>
    {{ $t("hello.nested") }}

    {{ $t("hello.nesteds") }}
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

const x = t("hello.nesteds");

console.log(x);
</script>