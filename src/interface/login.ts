interface ILoginRegister {
  name: string
  password?: string
}

interface IRegister extends ILoginRegister {
  role: number
}

interface IForgetForm extends ILoginRegister {
  newPassword: string
  sureNewPassword?: string
  isForget?: boolean
}

interface IMyself {
  name: string
  description?: string
  age?: number
  avatar?: string
}

export type{
  ILoginRegister,
  IRegister,
  IForgetForm,
  IMyself
}