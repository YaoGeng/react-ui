import React from 'react';
import { NeText } from './components/index'

const App = () => {
	return (
		<div className="App">
            <NeText html={
                <>
                    <span>Hi </span>
                    <span>Yeager</span>
                    <p>giao giao</p>
                </>
            }>
            </NeText>
		</div>
	);
}

export default App;
