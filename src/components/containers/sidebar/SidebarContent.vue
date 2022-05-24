<template>
  <SidebarSection>
    <ul>
      <SidebarNavItem label="Главная" icon="home" is-active />
      <SidebarNavItem label="Топ" icon="fire" />
      <SidebarNavItem label="Подписки" icon="collection" />
    </ul>
  </SidebarSection>

  <SidebarSection>
    <ul>
      <SidebarNavItem label="Библиотека" icon="duplicate" />
      <SidebarNavItem label="История" icon="clock" />
    </ul>
  </SidebarSection>

  <section class="px-8 py-4 font-medium leading-5 border-b">
    <span class="text-sm">
      Авторизуйтесь и вам будут доступны комментарии и подписки.
    </span>
    <ButtonLogin
      class="focus:outline-none flex items-center px-2 py-0.5 mt-3 text-sm text-blue-700 uppercase border border-blue-700 rounded-sm"
    />
  </section>
  <SidebarSection>
    <SidebarSectionHeading title="Лучшее" />
    <ul>
      <SidebarNavItem label="Музыка" icon="musicNote" />
      <SidebarNavItem label="Спорт" icon="speakerphone" />
      <SidebarNavItem label="Игры" icon="puzzle" />
      <SidebarNavItem label="Фильмы" icon="film" />
      <SidebarNavItem label="Новости" icon="newspaper" />
      <SidebarNavItem label="Live" icon="statusOnline" />
      <SidebarNavItem label="360&deg; видео" icon="eye" />
    </ul>
  </SidebarSection>
  <SidebarSection>
    <ul>
      <SidebarNavItem label="Добавить интерес" icon="plusCircle" />
    </ul>
  </SidebarSection>
  <SidebarSection>
    <SidebarSectionHeading title="Еще больше" />
    <ul>
      <SidebarNavItem label="Премиум" icon="play" />
      <SidebarNavItem label="Live" icon="statusOnline" />
    </ul>
  </SidebarSection>
  <SidebarSection>
    <ul>
      <SidebarNavItem label="Настройки" icon="cog" />
      <SidebarNavItem label="Помощь" icon="questionMarkCircle" />
      <SidebarNavItem label="Жалобы" icon="flag" />
      <SidebarNavItem label="Предложения" icon="annotation" />
    </ul>
  </SidebarSection>

  <SidebarSection class="px-6 py-4 text-xs font-semibold space-y-4">
    <TheFooter />
  </SidebarSection>
</template>

<script>
import SidebarNavItem from "./SidebarNavItem.vue";
import SidebarSectionHeading from "./SidebarSectionHeading.vue";
import SidebarSection from "./SidebarSection.vue";
import ButtonLogin from "../../atoms/ButtonLogin.vue";
import TheFooter from "../TheFooter.vue"
export default {
  components: {
    SidebarNavItem,
    ButtonLogin,
    SidebarSectionHeading,
    SidebarSection,
    TheFooter,
  },
};
</script>

<style></style>
