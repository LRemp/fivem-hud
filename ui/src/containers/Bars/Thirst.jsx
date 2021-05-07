///////////////////////////
///// Imports /////
///////////////////////////
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import '../Default/Main.scss';

///////////////////////////
///// Default /////
///////////////////////////
export default function Thrist() {
	const values = useSelector(state => state.Default);
	const barInner = {
		backgroundColor: "blue",
		width: values.thirst+"%",
		height: "100%"
	}
	return (
		<div className="thirst-bar">
			<div style={barInner}></div>
        </div>
	);
}