import mongoose from "mongoose";

const connectRouteToDb = (handler) => async (request, context) => {
  // Si on est déjà connecté, on garde la connexion actuelle
  if (mongoose.connections[0].readyState) {
    console.log("done");
    return handler(request, context);
  }

  // Sinon, on se connecte
  await mongoose.connect(process.env.DATABASE_URI);

  return handler(request, context);
};

export default connectRouteToDb;
