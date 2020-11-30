import { createStore } from "redux";
import todoApp from "./redux/reducers";
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters,
} from "./redux/actions";
let store = createStore(todoApp);

export default function App() {
  console.log(store.getState());

  let unsubscribe = store.subscribe(() => console.log(store.getState()));

  store.dispatch(addTodo("Aprender sobre acciones"));
  store.dispatch(addTodo("Aprender sobre reductores"));
  store.dispatch(addTodo("Aprender sobre stores"));
  store.dispatch(toggleTodo(0));
  store.dispatch(toggleTodo(1));
  store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

  // Anulamos el monitoreo de las actualizaciones al estado
  unsubscribe();

  return <div>Redux Concepts</div>;
}
