import mongoose, { mongo } from "mongoose";

const HospitalHoursSchema = new mongoose.Schema({
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true
    },
    hours: {
        type: Number,
        required: true,
    }
})

const DoctorSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    salary: {
        type: String,
        required: true,
    },
    qualification: {
        type: String,
        required: true,
    },
    experienceInYears: {
        type: Number,
        default: 0
    },
    wordInHospitals: [HospitalHoursSchema]
}, { timestamps: true })

export const Doctor = mongoose.model("Doctor", DoctorSchema)