import Counter from "./counter";
import UserTodo from "./userTodo";

function App() {
  // const count = useSelector((state: RootState) => state.counter.value);
  // const dispatch = useDispatch<AppDispatch>();

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      {/* <h1>Counter: {count}</h1>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button> */}
      <Counter />
      <UserTodo />
    </div>
  );
}

export default App;
