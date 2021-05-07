///////////////////////////
///// Imports /////
///////////////////////////
import { Nui } from '../Nui/NuiHandler';
import { store } from '../../index';
import Hud from '../Default/Main';
import './Main.scss';
import bk from '../../Untitled.png';

///////////////////////////
///// Nui Events /////
///////////////////////////
Nui.registerEmit('toggle', data => {
	store.dispatch({ type: 'toggle', value: data.value });
});

///////////////////////////
///// Main /////
///////////////////////////
export default function App() {
	return (
		<section className='mainWindow'>
			<Hud />
		</section>
	);
}
