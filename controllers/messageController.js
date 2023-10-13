const mygroup = require("../models/mygroup");

const getMessage = (req, res) => {
  const { id } = req.params;

  if (id) {
    const student = mygroup.getStudentById(id);

    if (student && student.id === id) {
      res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
      res.end(`<html><body><ul><li>${student.name}</li></ul></body></html>`);
    } else {
      res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
      res.end("<html><body>Not valid</body></html>");
    }
  } else {
    const studentList = mygroup.getAll().map((student) => student.name);
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    res.end(
      `<html><body><ul><li>${studentList.join(
        "</li><li>"
      )}</li></ul></body></html>`
    );
  }
};

module.exports = {
  getMessage,
};
