import { Document, Schema, model, models } from "mongoose";

const ImageSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  transformationType: {
    type: String,
    required: true,
  },
  publicId: {
    type: String,
    required: true,
  },
  secureUrl: {
    type: URL,
    required: true,
  },
  width: { type: Number },
  height: { type: Number },
  config: { type: Object },
  transformationUrl: { type: URL },
  aspectRatio: { type: String },
  color: { type: String },
  prompt: { type: String },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Image = models?.Image || model("Image", ImageSchema);

export interface IImage extends Document {
  title: string;
  transformationType: string;
  publicId: string;
  secureUrl: string;
  width?: number; // Optional since it's not marked as required
  height?: number; // Optional since it's not marked as required
  config?: object; // Using a more specific type than Object is recommended if possible
  transformationUrl?: string; // Optional since it's not marked as required
  aspectRatio?: string; // Optional since it's not marked as required
  color?: string; // Optional since it's not marked as required
  prompt?: string; // Optional since it's not marked as required
  author: {
    _id: string;
    firstName: string;
    lastName: string;
  }; // Referencing User by ObjectId
  createdAt?: Date; // Optional since it has a default value
  updatedAt?: Date; // Optional since it has a default value
}

export default Image;
