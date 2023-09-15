import axios from "axios";
import { useEffect, useState } from "react";

function ShowStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = () => {
    axios
      .get("http://localhost:3002/students/all")
      .then((res) => {
        setStudents(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteStudent = (id) => {
    axios
      .delete(`http://localhost:3002/delete/${id}`)
      .then((res) => {
        console.log(res);
        // const data = res.filter((stud) => stud.id !== id);
        getStudents(); //TODO
      })
      .catch((err) => {
        console.log(err);
      });

    // setStudents(res);
  };

  return (
    <div>
      {students.map((stud, index) => {
        return (
          <>
            <button onClick={() => deleteStudent(stud.id)}>
              Delete {stud.name}
            </button>
          </>
        );
      })}
    </div>
  );
}

export default ShowStudents;
