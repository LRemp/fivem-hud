///////////////////////////
///// Imports /////
///////////////////////////
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import '../Default/Main.scss';

///////////////////////////
///// Default /////
///////////////////////////
export default function Armour() {
	const values = useSelector(state => state.Default);
	const barInner = {
		backgroundColor: "lightblue",
		width: values.armour+"%",
		height: "100%"
	}
	return (
		<div className="armour-bar">
			<div style={barInner}></div>
        </div>
	);
}