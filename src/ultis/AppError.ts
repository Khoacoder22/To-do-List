export class AppError extends Error {
    // field 
    status: number;
    isOperational: boolean;

    //constructor
    constructor(message: string, status: number = 500){
        super(message);
        this.status = status;
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor); // ghi lại lỗi chính xác 
    }
}