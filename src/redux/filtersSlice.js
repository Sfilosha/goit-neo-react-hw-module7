import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  // Ім'я слайсу
  name: "filters",
  // Початковий стан редюсера слайсу
  initialState: {
    name: "",
  },
  // Об'єкт редюсерів
  reducers: {
    changeFilter(state, { payload }) {
      state.name = payload;
    },
  },
});

// Генератори екшенів
export const { changeFilter } = filtersSlice.actions;

// Редюсер слайсу
export const filtersReducer = filtersSlice.reducer;

// Selector
export const selectNameFilter = (state) => state.filters.name;
