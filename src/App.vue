<script setup lang="ts">
import BaseAutocomplete from '@/components/BaseAutocomplete/BaseAutocomplete.vue'
import { ref } from 'vue'

const items = [
  { title: 'Option 1', value: 1 },
  { title: 'Option 2', value: 2 },
  { title: 'Option 3', value: 3 },
]

const selectedValue = ref(null)
</script>

<template>
  <v-app>
    <v-main>
      <v-container>
        <h1>Vuetify Component Library</h1>
        <p>This is a demo application. Use Storybook to explore components.</p>

        <div style="max-width: 400px; margin-top: 2rem">
          <h2>BaseAutocomplete Example</h2>
          <base-autocomplete
            v-model="selectedValue"
            :items="items"
            label="Select an option"
            placeholder="Choose..."
          />
          <p v-if="selectedValue">Selected: {{ selectedValue }}</p>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>
