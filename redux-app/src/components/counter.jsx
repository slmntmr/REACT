import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { TfiMinus, TfiPlus, TfiReload } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { down, reset, set, up } from "../store/slices/counter-slice";

const Counter = () => {
	const counter = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<ButtonGroup className="my-4" size="lg">
			<Button variant="secondary" onClick={() => dispatch(down())}>
				<TfiMinus />
			</Button>
			<Button variant="secondary" disabled>
				{counter}
			</Button>
			<Button variant="secondary" onClick={() => dispatch(up())}>
				<TfiPlus />
			</Button>
			<Button variant="secondary" onClick={() => dispatch(reset())}>
				<TfiReload />
			</Button>
		</ButtonGroup>
	);
};

export default Counter;
