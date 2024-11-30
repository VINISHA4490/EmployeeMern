import React, { useEffect, useState } from 'react'

const Employees= () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const { data } = await API.get("/employees");
                setEmployees(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchEmployees();
    }, []);

    const handleDelete = async (id) => {
        try {
            await API.delete(`/employees/${id}`);
            setEmployees(employees.filter((emp) => emp._id !== id));
        } catch (err) {
            console.error(err);
        }
    };
  return (
    <div>
    <h2>Employee List</h2>
    {loading ? <p>Loading...</p> : null}
    <ul>
        {employees.map((employee) => (
            <li key={employee._id}>
                {employee.name} - {employee.position} - ${employee.salary}
                {isAdmin() && (
                    <>
                        <button>Edit</button>
                        <button onClick={() => handleDelete(employee._id)}>Delete</button>
                    </>
                )}
            </li>
        ))}
    </ul>
</div>
);
};


export default Employees
