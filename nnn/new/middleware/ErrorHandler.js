const errorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "err";

    res.status(err.statusCode).json({
        status: err.status,
        message: "something went wrong!"
    });
};

module.exports = errorHandler;