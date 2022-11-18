function logErrors (err, req, res, next) {
  console.log('Logerrors')
  console.error(err);
  next(err); //middleware type error
}


//formato
function errorHandler (err, req, res, next) {
  console.log('errorHandler')
  res.status(5000).json({ //si hay un  error que salga si ir al otro middlewater
    message: err.message,
    stack: err.stack, //mostrar info del error
  });
}

module.exports = {
   logErrors,
    errorHandler
  }
