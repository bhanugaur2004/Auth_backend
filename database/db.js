import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@blog.v28vyfy.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL);
        console.log("Mongo DB connected successfully");
    } catch (error) {
        console.log(error)
    }
}

export default Connection;