const { schema } = require("mongoose");

module.exports = (mongoose) => {
  const Schema = mongoose.Schema(
    {
      name: String,
      nim: String,
      email: String,
      gender: String,
    },
    {
      timestamps: true,
    }
  );
  Schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;

    return object;
  });
  return mongoose.model("mahasiswa", Schema);
};
