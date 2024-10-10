<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <v-btn @click="toggleTheme">切換主題</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card class="mt-5" color="primary">
            <v-card-title>當前主題的主要顏色</v-card-title>
            <v-card-text class="my-custom-btn">
              這是主要顏色的顯示，根據當前的主題變化。
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary">主要按鈕</v-btn>
              <v-btn color="secondary">次要按鈕</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { useTheme } from "vuetify";

export default {
  setup() {
    const theme = useTheme();

    const toggleTheme = () => {
      theme.global.name.value =
        theme.global.name.value === "light" ? "dark" : "light";
    };

    return {
      toggleTheme,
    };
  },
};
</script>

<style>
.my-custom-btn {
  background-color: var(--v-primary-base);
}
</style>
