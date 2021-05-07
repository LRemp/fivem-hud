///////////////////////////
///// Imports /////
///////////////////////////
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import './Main.scss';
import Health from '../Bars/Health';
import Armour from '../Bars/Armour';
import Hunger from '../Bars/Hunger';
import Thirst from '../Bars/Thirst';
import Drunkness from '../Bars/Drunkness';
import Voice from '../Bars/Voice';

///////////////////////////
///// Default /////
///////////////////////////
export default function Default() {
	const values = useSelector(state => state.Default);
	return (
		<div
			className={clsx('container', {
				'container-Show': values.isShowing,
			})}
		>
			<Health />
			<Armour />
			<Hunger />
			<Thirst />
			<Drunkness />
			<Voice />
		</div>
	);
}
