const db = require("../models");
const Mahasiswa = db.mahasiswa;

exports.create = (req, res) => {
  Mahasiswa.create(req.body)
    .then(() => res.send({ message: "Data berhasil disimpan" }))
    .catch((err) => res.status(500).send({ message: err.message }));
};
exports.findAll = (req, res) => {
  Mahasiswa.find()
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send({ message: err.message }));
};
exports.show = (req, res) => {
  const id = req.params.id;

  Mahasiswa.findById(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: "ID tidak ada atau data sudah dihapus" });
      } else {
        res.send(data);
      }
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};
exports.update = (req, res) => {
  const id = req.params.id;

  Mahasiswa.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "tidak dapat mengupate data" });
      }
      res.send({ message: "data barhasil diupdate" });
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};
exports.delete = (req, res) => {
  const id = req.params.id;

  Mahasiswa.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "tidak dapat menghapus data" });
      }
      res.send({ message: "data barhasil dihapus" });
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};
