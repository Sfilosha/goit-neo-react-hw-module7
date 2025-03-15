import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: "contacts",
  // Початковий стан редюсера слайсу
  initialState: {
    items: [],
    loading: false,
    error: false,
    errorMessage: "",
  },
  // Об'єкт асинхронних редюсерів
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter((el) => el.id !== payload.id);
      })
      .addMatcher(
        ({ type }) => type.endsWith("/pending"),
        (state) => {
          state.loading = true;
          state.error = false;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("/rejected"),
        (state, { payload }) => {
          state.error = true;
          state.errorMessage = payload;
          state.loading = false;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("/fulfilled"),
        (state) => {
          state.loading = false;
        }
      );
  },
});

// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;

// Selector
export const selectContacts = (state) => state.contacts;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  ({ items }, query) => {
    return items?.filter((el) =>
      el.name.toLowerCase().includes(query.toLowerCase())
    );
  }
);
