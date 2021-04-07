import mongoose from 'mongoose';

const connectDB = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }
  await mongoose.connect(
    'mongodb+srv://giftydbuser:RPLYbjULCNyS6TTW@cluster0.khxoz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
    }
  );
  return handler(req, res);
};

export default connectDB;
