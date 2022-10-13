function createStore(reducer){
  let state;
  
  function getState(){
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    render(getState);
  }
  
  return { 
    dispatch,
    getState
  };
}

function storeReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };

    default:
      return state;
  }
}

function render(getState) {
  let container = document.getElementById("container");
  container.textContent = getState().count;
}

let store = createStore(storeReducer);
store.dispatch({ type: "@@INIT" });
let button = document.getElementById("button");

button.addEventListener("click", () => {
  store.dispatch({ type: "counter/increment" });
});
