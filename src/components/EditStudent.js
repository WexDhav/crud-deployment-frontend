import StudentForm from "./StudentForm";
import { useEffect,useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

function EditStudent()
{
    const {id} = useParams();
    //const [name,setName] = useState("");
    //const [email,setEmail] = useState("");
    //const [rollNo,setRollNo] = useState("");
    const [data,setData] = useState({name:"",email:"",rollNo:""});
    const [newData , setNewData] = useState([]);

    useEffect(()=>{
        Axios.get("https://crud-deployment-backend-qkt1.onrender.com/studentRoute/update-student/"+id)
        .then((res)=>{
            if(res.status === 200){
                const { name,email,rollNo } = res.data;
                setData({name,email,rollNo});
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err))
    },[id])
    
    const getState = (childData) => {
        setNewData(childData);
    }

    const handleSubmit = () => {
        const data = {name:newData[0],email:newData[1],rollNo:newData[2]}
        Axios.put("https://crud-deployment-backend-qkt1.onrender.com/studentRoute/update-student/"+id,data)
        .then((res)=>{
            if(res.status === 200)
                alert("Record updated successfully");
            else  
                Promise.reject();
        })
        .catch((err)=>alert(err))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <StudentForm getState={getState} nameValue={data.name} emailValue={data.email} rollNoValue={data.rollNo}>
                    Update Student
                </StudentForm>
            </form>
        </div>
    )
}
export default EditStudent;