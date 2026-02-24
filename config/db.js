const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/lpu26a");
    console.log("Database connected Successfully");
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;