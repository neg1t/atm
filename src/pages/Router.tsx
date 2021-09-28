import { Route, Switch } from 'react-router-dom'

import { InfoPage } from './Info'
import { HomePage } from './Home'
import { SettingsPage } from './Setting'
import { GiveOutPage } from './GiveOut'

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/info' component={InfoPage} />
      <Route exact path='/settings' component={SettingsPage} />
      <Route exact path='/give-out' component={GiveOutPage} />

      <Route component={HomePage} />      
    </Switch>
  )
}