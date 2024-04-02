const mongoose = require("mongoose");

const reviewsSchema = new mongoose.Schema(
    {
        rating: Number,
        comment: String,
    },
    {
        timestamps: true
    }
)

const Review = mongoose.model("review", reviewsSchema);

module.exports = Review;

