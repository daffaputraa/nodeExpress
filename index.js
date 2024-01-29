const express = require("express");
const bodyParse = require("body-parser");
const data = require("./mySql");
const response = require("./response");
const cors = require("cors");
// app module require

const app = express();

app.use(bodyParse.json());
app.use(cors());
// app module inisiasi

// app routing

app.post("/mahasiswa", (req, res) => {
  const query = `INSERT INTO mahasiswa (nama, alamat) values ('${req.body.nama}', '${req.body.alamat}')`;
  data.query(query, (error, result) => {
    if (error) throw error;
    response(res.statusCode, result, "Data  berhasil dipost!", res);
  });
});

app.put("/mahasiswa/:id", (req, res) => {
  const query = `UPDATE mahasiswa SET nama = '${req.body.nama}', alamat = '${req.body.alamat}' WHERE id = '${req.params.id}'`;
  data.query(query, (error, result) => {
    if (error) throw error;
    response(res.statusCode, result, "Data berhasil diupdate!", res);
  });
});

app.delete("/mahasiswa/:id", (req, res) => {
  const query = `DELETE FROM mahasiswa WHERE id = '${req.params.id}'`;
  data.query(query, (error, result) => {
    if (error) throw error;
    response(res.statusCode, result, "Data berhasil dihapus!", res);
  });
});

app.get("/", (req, res) => {
  const query = `SELECT * FROM mahasiswa`;
  data.query(query, (error, result) => {
    response(res.statusCode, result, "Yeay data berhasil", res);
  });
});

app.get("/mahasiswa/:id", (req, res) => {
  const query = `SELECT * FROM mahasiswa where id = '${req.params.id}'`;
  data.query(query, (error, result) => {
    response(res.statusCode, result, "Yeay data berhasil", res);
  });
});

//
//
//
//
//
//
//
//
// app.get("/", (req, res) => {
//   return res.json(db);
// });

// app.get("/produk/:name", (req, res) => {
//   const result = db.filter(
//     (element) =>
//       element.name.toLocaleLowerCase() === req.params.name.toLocaleLowerCase()
//   );

//   return res.json(result);
// });

// app.post("/create", (req, res) => {
//   const newProduk = {
//     id: db.length + 1,
//     name: req.body.name,
//     quantity: req.body.quantity,
//   };

//   db.push(newProduk);

//   res.json(newProduk);
// });

// app.delete("/produk/:name", (req, res) => {
//   const index = db.findIndex(
//     (element) =>
//       element.name.toLocaleLowerCase() === req.params.name.toLocaleLowerCase()
//   );

//   const delateProduk = db.splice(index, 1);

//   res.send(delateProduk);
// });

// app.get("/tes", (req, res) => {
//   console.log({ Query: req.query });
//   res.send("Hello");
// });

// app listener
app.listen(3001, () => {
  console.log("Server is listening to 3000");
});
