// Definir tipos de acciones
export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
export const TOGGLE_TODO = "TOGGLE_TODO";

// Definir estados especificos para un estado
export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};

// Creadores de acciones
export function addTodo(text) {
  return { type: ADD_TODO, text };
}

export function completeTodo(index) {
  return { type: COMPLETE_TODO, index };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index };
}
