import React from 'react';
import ReactDOM from 'react-dom';
// @ts-ignore. No typings for remote module
const Counter = React.lazy(() => import('wb5_mf_components/Counter'));

const App = () => (
    <div>
        <h1>Host App</h1>
        <React.Suspense fallback="Loading...">
            <Counter />
        </React.Suspense>
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
