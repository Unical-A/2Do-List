import { Route } from 'react-router';
import { routes } from './routes';

function App() {
    return (
        <div>
            {routes.map((item,index) => (
                <Route
                    key={index}
                    path={item.path}
                    exact={item.exact}
                    children={<item.page/>}
                />
            ))}

        </div>
    );
}

export default App;
