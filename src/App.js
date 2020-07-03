import React from 'react';
import { NeTextCmp } from './components/index'

const App = () => {
	return (
		<div className="App">
            <NeTextCmp html={
                <>
                    <span>Hi </span>
                    <span>Yeager</span>
                    <p>giao giao</p>
                </>
            }>
			</NeTextCmp>
		</div>
	);
}

export default App;
