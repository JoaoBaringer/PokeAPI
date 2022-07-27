import { Fragment } from 'react';
import './App.css';
import Context from './store/store';
import Rout from './routes';

const App = () => {
  return (
    <Context>
      <Fragment>
        <Rout />
      </Fragment>
    </Context>
  );
}

export default App;
