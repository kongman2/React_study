import { Provider } from 'react-redux'
// import Counter from './NonTookit/Counter'
// import storeNonToolkit from './NonTookit/store'

import User from './UseTookit/User'
import Counter from './UseTookit/Counter'
import storeUseToolkit from './UseTookit/store'

function App() {
   //  return (
   //     <Provider store={storeNonToolkit}>
   //        <Counter />
   //     </Provider>
   //  )

   return (
      <Provider store={storeUseToolkit}>
         <Counter />
         <User />
      </Provider>
   )
}

export default App
