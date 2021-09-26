import { Route, Switch, Redirect } from 'react-router-dom'

// import { Products } from './Product'
// import { Reports } from './Report'
// import { Users } from './User'
// import { Media } from './Media'
// import { ManageMedia } from './Media/ManageMedia'
// import { UploadPage } from './UploadPage'
import { InfoPage } from './Info'

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Redirect to='/info' />
      </Route>

      <Route exact path='/info' component={InfoPage} />
      {/* 
      <Route exact path='/products' component={Products} />
      <Route exact path='/users' component={Users} />
      <Route exact path='/reports' component={Reports} />

      <Route exact path='/media' component={Media} />
      <Route exact path='/media/manage' component={ManageMedia} />

      <Route exact path='/secret/upload' component={UploadPage} /> */}
    </Switch>
  )
}