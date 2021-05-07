///////////////////////////
///// Imports /////
///////////////////////////
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import '../Default/Main.scss';

///////////////////////////
///// Default /////
///////////////////////////
export default function Drunkness() {
	const values = useSelector(state => state.Default);
	const barInner = {
		backgroundColor: "violet",
		width: values.drunkness+"%",
		height: "100%"
	}
	return (
		<div className="drunkness-bar">
			<div style={barInner}></div>
        </div>
	);
}