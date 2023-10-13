const mygroup = [
  {id: "21110181", name: "Vuong Dinh Hieu"}
];

const acceptedMSSVList = ["21110181", "21110162", "21110353"];

const getAll = () => mygroup;
const getAllAcceptedMSSVList = () => acceptedMSSVList;

const getStudentById = (id) => mygroup.find((student) => student.id === id);

const addStudent = (id, name) => {
  mygroup.push({ id, name });
};

module.exports = {
  getAll,
  getStudentById,
  addStudent,
  getAllAcceptedMSSVList,
};
