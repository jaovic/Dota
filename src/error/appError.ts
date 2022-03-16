export default class AppError {
  constructor(
    readonly message = "Internal Server Error",
    readonly statusCode = 500,
    readonly error?: any
  ) {}
}
