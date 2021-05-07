///////////////////////////
///// Imports /////
///////////////////////////
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import '../Default/Main.scss';

///////////////////////////
///// Default /////
///////////////////////////
export default function Voice() {
	const values = useSelector(state => state.Default);

    const style = {
        backgroundColor: "pink",
        width: "50%",
        height: "100%",
    }

	return (
		<div className="voice-bar">
            <div style={style}>

            </div>
        </div>
	);
}