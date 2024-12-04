import * as Yup from "yup";

const quizValidationSchema = Yup.object({
    quizThumbnail: Yup.mixed().required("Quiz thumbnail is required."),
    title: Yup.string()
        .min(3, "Title should be at least 3 characters.")
        .max(30, "Title should be at most 30 characters.")
        .required("Title is required."),
    desc: Yup.string()
        .max(400, "Description should not exceed 400 characters.")
        .nullable(),
    timeLimit: Yup.number()
        .required("Time limit is required.")
        .min(60, "Time limit should be at least 60 seconds."),
    lineantTime: Yup.number()
        .required("Start till (lineant time) is required.")
        .min(60, "Lineant time should be at least 60 seconds."),
    category: Yup.array()
        .of(Yup.string())
        .min(1, "At least one category is required."),
    startTime: Yup.date()
        .min(new Date(), "Start time must be in the future.")
        .required("Start time is required."),
});

export default quizValidationSchema;
