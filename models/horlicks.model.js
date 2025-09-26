import mongoose from "mongoose";

const HorlicksSchema = new mongoose.Schema(
  {
    location: {
      type: String,
      enum: [
        "Bagbazar",
        "Jodhpur Park",
        "Shib Mandir",
        "Garia Naba Durga",
        "Samaj Sebi",
      ],
      required: true,
    },
    shift: {
      type: String,
      enum: ["Morning", "Night"],
      required: true,
    },
    horlicksSale: {
      type: Number,
      required: true,
      min: 0,
    },
    water500mlSale: {
      type: Number,
      required: true,
      min: 0,
    },
    water1000mlSale: {
      type: Number,
      required: true,
      min: 0,
    },
    subDate: {
      type: String, // "dd/mm/yyyy"
      required: true,
    },
  },
  { timestamps: true } // adds createdAt and updatedAt
);

const Horlicks = mongoose.model("Horlicks", HorlicksSchema);

export default Horlicks;
