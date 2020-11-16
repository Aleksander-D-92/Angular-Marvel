export interface UserRegisterForm {
  username: string;
  password: string;
  confirmPassword: string;
}

export interface UserLoginForm {
  username: string;
  password: string;

}

export interface JWT {
  value: string;
}

export interface JWTPayload {
  sub: string;
  userId: number;
  authorities: string;
  iat: Date;
  exp: Date;
}
