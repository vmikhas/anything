import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, decrementByAmount } from "./counterSlice";

export default function Counter() {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<div>
			<div>
				<button aria-label="Увеличить значение" onClick={() => dispatch(increment())}>Увеличить</button>
				<span>{count}</span>
				<button aria-label="Уменьшить значение" onClick={() => dispatch(decrement())}>Уменьшить</button>
				<button onClick={() => dispatch(incrementByAmount(42))}>Прибавить 42</button>
				<button onClick={() => dispatch(decrementByAmount(67))}>Уменьшить 67</button>
			</div>
		</div>
	);
}