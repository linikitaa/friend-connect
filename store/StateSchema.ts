import { LoginSchema } from '@/features/AuthByUserName/model/types/login'
import { RootState } from '@/store/store'

export interface StateSchema {
  // user: UserSchema
  login: LoginSchema
  // profile: ProfileSchema;
}

export interface ThunkConfig<T> {
  rejectValue: T
  // extra: ThunkExtraArg;
  state: RootState
}
