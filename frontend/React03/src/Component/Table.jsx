import React, { useEffect, useState } from "react";
import axios from "axios";


function Table() {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
const[editIndex,setEditIndex] =useState(null);  
  useEffect(() => {
    document.title = "UserList Table";
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const dataapi = await axios.get(`https://dummyjson.com/users/?limit=9&skip=0`);
      setTodos(dataapi.data.users);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
const deleteUser = (index) =>{
  // (_, todosIndex): The callback function has two parameters
  // _: The current item in the todos array, which we don't use.
  setTodos(todos.filter((_,todosIndex)=>todosIndex !== index));
};
  const openModal = () => {
    setIsModalOpen(true);
  };

  
  const closeModal = () => {
    setIsModalOpen(false);
    setName("");
    setEmail("");
  };

  const addUser = () => {
    if (name && email) {
      const newUser = {  firstName: name, lastName: "", email };
      setTodos([...todos, newUser]);
      closeModal();
    }
  };
const toggleEdit =(index)=>{
  setEditIndex(index ===editIndex ?null :index)
};


  return (
    <div className="container py-4">
      <button   className="btn btn-danger btncreate mb-3"  onClick={openModal}>
        Create  
      </button>
      {/* <h2 className="mb-4">User List</h2> */}
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>NO</th>
              <th>Name</th>
              <th className="text-center">Email</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((user, index) => (
              <tr
               key={index}
                // apply class when editting
className={editIndex===index ? 'table-warnings':''}

              >
              <td>{user.id}</td>
                <td>{user.firstName} {user.lastName}</td>
                <td className="text-center">{user.email}</td>
                <td className="text-center">
                  
                  <button className="btn btn-link text-primary"
                  onClick={()=> toggleEdit(index)}
                  >Edit</button>

                  <button className="btn btn-link text-danger"
onClick={() => {
  console.log("Deleting user with ID:", user.id); // Debug log
  deleteUser(index)
}}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Adding a New User */}
      {isModalOpen && (
        <div className="modal show shadow d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New User</h5>
                <button type="button" className="btn-close" onClick={closeModal}>
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name"
                  />
                </div>
                <div className="form-group mt-2">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={closeModal}>
                  Close
                </button>
                <button className="btn btn-primary" onClick={addUser}>
                  Add User
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Table;
