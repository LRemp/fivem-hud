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
	return (
		<div className="health-bar">
        </div>
	);
}