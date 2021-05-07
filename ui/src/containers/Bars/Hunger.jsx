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
	return (
		<div className="hunger-bar">
        </div>
	);
}