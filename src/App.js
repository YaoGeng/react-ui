import React from 'react';
import { NETextCmp } from './components/index'

const App = () => {
	return (
		<div className="App">
			<NETextCmp {...{
				html: 
				<span>
					<span>Hi </span>
					<span>Yeager</span>
					<p>giao giao</p>
				</span>
			}}>
			</NETextCmp>
		</div>
	);
}

export default App;
