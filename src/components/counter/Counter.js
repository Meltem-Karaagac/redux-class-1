import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, reset } from "../../redux/actions/counter";

const Counter = () => {
    const { counter } = useSelector((state) => state.counterReducer);
    const dispatch = useDispatch();
    return (
        <div className="app">
            <h2>Counter With Redux</h2>
            <h2>{counter}</h2>
            <div>
                <button onClick={() => dispatch(increase())}>incease</button>
                <button onClick={() => dispatch(reset())}>reset</button>
                <button onClick={() => dispatch(decrease())}>decrease</button>
            </div>
        </div>
    )
}

export default Counter
