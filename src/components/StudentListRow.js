import Axios from 'axios';
import {Link} from "react-router-dom";

function StudentListRow(props)
{
    const {_id,name,email,rollNo} = props.obj;

    const handleClick = () => {
        Axios.delete("https://crud-deployment-backend-qkt1.onrender.com/studentRoute/delete-student/" + _id)
        .then((res) => {
            if(res.status === 200){
                alert("Record deleted successfully");
                window.location.reload();
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }
    
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{rollNo}</td>
            <td class="d-flex justify-content-center">
                <button class="btn btn-success">
                    <Link class="text-decoration-none text-light" to={"/edit-student/" + _id}>Edit</Link>
                </button>
                <button onClick={handleClick} class="btn btn-danger mx-3">Delete</button>
            </td>
        </tr>
    )
}
export default StudentListRow;