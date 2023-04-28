const  one = (a) =>  (b,c) => {
    console.log(a,b,c);
}

one((b,c) => {console.log("hello")});

// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//       await fn(req, res, next)
//   } catch (error) {
//       res.status(error.code || 500).json({
//           success: false,
//           message: error.message
//       })
//   }
// }

// export default asyncHandler;
