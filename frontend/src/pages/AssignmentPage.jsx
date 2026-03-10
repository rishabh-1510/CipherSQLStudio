import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function AssignmentsPage() {
    const [assignments, setAssignments] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get("http://localhost:5000/api/assignments")
            .then((res) => setAssignments(res.data));
    }, []);
    const handleAttempt = (id) => {
    navigate(`/attempt/${id}`);
  };

    return (
        <div className="container">
            <h1>SQL Assignments</h1>

            {assignments.map((a) => (
                <div key={a.id} style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
                    <h3>{a.title}</h3>
                    <p>{a.description}</p>
                    <span>{a.difficulty}</span>
                    <br />
                    <button onClick={()=>handleAttempt(a.id)}>Attempt</button>
                </div>
            ))}
        </div>
    );
}

export default AssignmentsPage;