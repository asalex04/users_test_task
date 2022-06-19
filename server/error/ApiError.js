class ApiError extends Error {
    status
    errors
    message
   constructor(status, message, errors = []) {
       super(message)
       this.status = status
       this.errors = errors
       this.message = message
   }

   static badRequest(message, errors = []) {
       return new ApiError(404, message, errors)
   }
}

export default ApiError
