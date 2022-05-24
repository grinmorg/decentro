<template>
  <div>
    <a v-for="link in links.slice(0, 7)" :key="link" href="#" class="mr-2">
      {{ link }}
    </a>
  </div>
  <div>
    <a v-for="link in links.slice(7)" :key="link" href="#" class="mr-2">
      {{ link }}
    </a>
  </div>
  <div class="font-normal text-gray-500">
    &copy; 2021 Grinmorg LLC
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        'О нас',
        'Пресса',
        'Копирайт',
        'Связь с нами',
        'Основатели',
        'Разработчики',
        'Правила',
        'Политика безопасности',
        'Как мы работаем?'
      ]
    }
  }
}
</script>