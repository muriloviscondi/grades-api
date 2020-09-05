export default (mongoose) => {
  const schema = mongoose.schema({
    name: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    lastModified: {
      type: String,
      required: true,
    },
  });

  const Grade = mongoose.model('grade', schema, 'grade');

  return Grade;
};
