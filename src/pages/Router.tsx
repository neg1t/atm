import { Route, Switch, Redirect } from 'react-router-dom'

import { InfoPage } from './Info'
import { HomePage } from './Home'

export const Routes = () => {
  return (
    <Switch>
      {/* <Route exact path='/'>
        <Redirect to='/info' />
      </Route> */}
      <Route exact path='/' component={HomePage} />
      <Route exact path='/info' component={InfoPage} />

      <Route component={HomePage} />      
    </Switch>
  )
}