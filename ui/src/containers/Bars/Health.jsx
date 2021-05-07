///////////////////////////
///// Imports /////
///////////////////////////
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import '../Default/Main.scss';

///////////////////////////
///// Default /////
///////////////////////////
export default function Health() {
	const values = useSelector(state => state.Default);
	const barInner = {
		backgroundColor: "green",
		width: values.health+"%",
		height: "100%"
	}
	return (
		<div className="health-bar">
			<div style={barInner}></div>
        </div>
	);
}