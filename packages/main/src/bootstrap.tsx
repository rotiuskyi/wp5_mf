import React from 'react';
import ReactDOM from 'react-dom';
const Counter = React.lazy(() => import('wb5_mf_components/Counter'));
const Hello = React.lazy(() => import('wb5_mf_components/Hello'));

const App = () => (
    <div>
        <h1>Host App</h1>
        <React.Suspense fallback="Loading...">
            <Hello name="John Doe" />
            <Counter />
        </React.Suspense>
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
