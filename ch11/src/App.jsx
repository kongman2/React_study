import CounterComponent from './ReduxCounter/CounterComponent'
import store from './ReduxCounter/store'
import { Provider } from 'react-redux'

function App() {
   return (
      <Provider store={store}>
         <CounterComponent />
      </Provider>
   )
}

export default App
