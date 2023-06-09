export interface IUser {
  password?: string
  rememberMe?: boolean
  username?: string
}

export interface ILogin {
  password?: string
  rememberMe?: boolean
  username?: string
}

interface Imeeting {
  address: string
  cityId: number
  companyId: number
  description: string
  endRegistration: number
  id: number
  startDate: number
  startRegistration: number
  status: boolean
  typeEnum: string
}

export interface ICompanyData {
  active: true
  chairmanId: number
  description: string
  id: number | string
  imageUrl: string
  meetingCount: number
  meetings: Imeeting[]
  name: string
  secretaryId: number
  webPage: string
}

export interface IUserData {
  activated: boolean
  authTypeEnum: any
  authorities: string[]
  email: string
  faceIdRequired: boolean
  fullName: string
  groupEnum: string
  id: number
  imageUrl: string
  lastName: string
  login: string
  passport: string
  password: string
  phoneNumber: string
  pinfl: string
  position: string
  resident: boolean
}
