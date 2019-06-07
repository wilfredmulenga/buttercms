import React from 'react';
import { render } from 'react-snapshot';
import { browserHistory } from 'react-router';

import Routes from './routes';

 render(<Routes history={browserHistory} />,
 document.getElementById('root')
)
