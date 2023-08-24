const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companyProjectsSchema = new mongoose.Schema(
    {
        projectName: { type: String, required: true },
        date: { type: Date, required: true },
        teamSize: { type: Number, required: true },
        projectDescription: { type: String, required: true },
        skills: { type: String, required: true },
        file: {
            data: Buffer,
            contentType: String
        }
    },
    {
        timestamps: true
    }
)

const Projects = mongoose.model("Projects", companyProjectsSchema);
module.exports = Projects