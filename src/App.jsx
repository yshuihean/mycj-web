import { RouterProvider } from 'react-router-dom'
import router from '@/router'
import { Provider } from 'react-redux'
import store from '@/store'

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider 
        router={router} 
        future={{v7_startTransition: true}}
      />
    </Provider>
  )
}