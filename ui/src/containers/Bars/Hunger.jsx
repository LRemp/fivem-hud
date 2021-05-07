///////////////////////////
///// Imports /////
///////////////////////////
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import '../Default/Main.scss';

///////////////////////////
///// Default /////
///////////////////////////
export default function Hunger() {
	const values = useSelector(state => state.Default);
	const barInner = {
		backgroundColor: "gold",
		width: values.hunger+"%",
		height: "100%"
	}
	return (
		<div className="hunger-bar">
			<div style={barInner}></div>
        </div>
	);
}