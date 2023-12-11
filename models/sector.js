import mongoose from "mongoose";

const sectorSchema = new mongoose.Schema({
  // Define your schema fields here based on your data structure
    end_year: String,
    intensity: Number,
    sector: String,
    topic: String,
    insight: String,
    url: String,
    region: String,
    start_year: String,
    impact: String,
    added: String,
    published: String,
    country: String,
    relevance: Number,
    pestle: String,
    source: String,
    title: String,
    likelihood: Number,
});

export const sector = mongoose.model("newdata", sectorSchema);
