const mygroup = require("../models/mygroup");

const checkMSSV = (mssv) => {
  const acceptedMSSVList = mygroup.getAllAcceptedMSSVList();
  if (!acceptedMSSVList.includes(mssv)) {
    return false;
  }
  return true;
};

const getStudent = (req, res) => {
  const { mssv, id } = req.params;
  const student = mygroup.getStudentById(id);

  if (student && checkMSSV(id) && checkMSSV(mssv)) {
    res.json(student);
  } else {
    res.json({ error: "not valid" });
  }
};

const postStudent = (req, res) => {
  const { mssv, id } = req.params;
  // Nếu muốn lấy thêm id thì
  // const { id, name } = req.body;
  const { name } = req.body;

  if (checkMSSV(mssv) && mygroup.getStudentById(id) === undefined) {
    mygroup.addStudent(id, name);
    res.json({ message: "Student added successfully" });
  } else {
    res.json({ error: "Not valid" });
  }
};

module.exports = {
  getStudent,
  postStudent,
};
