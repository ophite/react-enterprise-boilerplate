import { Route, IndexRoute, IndexRedirect } from 'react-router';

import App from '../containers/layouts/App.jsx';
import NotFoundPage from '../components/pages/notFound/NotFound.page.jsx'
import Layout from '../containers/layouts/Layout.container.jsx';
import Pokemon from '../containers/pokemons/Pokemon.container.jsx';
import Pokemons from '../containers/pokemons/Pokemons.container.jsx';
import Table from '../containers/react-datagrid/Table.container.jsx';
import PhysicalPersonEdit from '../components/pages/individual/Individual.page.jsx';


export default (
    <Route path="/" component={App}>
        <Route component={Layout}>
            <IndexRedirect to="pokemons"/>
            <Route path="table" component={Table}/>
            <Route path="person" component={PhysicalPersonEdit}/>
            <Route path="pokemons">
                <IndexRoute component={Pokemons}/>
                <Route path=":pokemonId" component={Pokemon}/>
            </Route>
        </Route>
        <Route path="404" component={NotFoundPage}/>
        <Route path='*' component={NotFoundPage}/>
    </Route>
);

