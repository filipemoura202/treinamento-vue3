import UserModule from './user'
import GlobalModule from './global'
import { readonly } from '@vue/reactivity'

export default readonly({
  User: UserModule,
  Global: GlobalModule
})
