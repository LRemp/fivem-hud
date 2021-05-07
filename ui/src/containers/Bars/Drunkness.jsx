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
	return (
		<div className="drunkness-bar">
        </div>
	);
}