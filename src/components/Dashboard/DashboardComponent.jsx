import { formatDate } from "../../utils/stringFormat"
import { FaEdit, FaTrash, FaCheckCircle } from "react-icons/fa";
import styles from "../Dashboard/DashboardComponent.module.css"
import { useEffect, useState } from "react";

const DashboardComponent = ({ tasks, HandleDelete, Conclude, HandleUpdate})=>{

const tableHead = ["id", "titulo", "descrição", "data de criação", "data de conclusão", "concluido", "editar", "excluir", "concluir"]
const [taskToEdit, setTaskToEdit] = useState(null);

    return(
        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        {tableHead.map((item, index) => (
                        <th key={index}>{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tasks && tasks.map((task) =>{
                        return <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>{formatDate(task.creationDate)}</td>
                            <td>{task.conclusionDate && formatDate(task.conclusionDate)}</td>
                            <td>{task.concluded ? "✅" : "❌"}</td>
                            <td>
                                <FaEdit 
                                size={18} 
                                color="blue" 
                                style={{ cursor: "pointer", marginRight: "10px" }} 
                                onClick={() => HandleUpdate(task)}
                                />
                            </td>
                            <td>
                                <FaTrash 
                                size={18} 
                                color="red" 
                                style={{ cursor: "pointer" }} 
                                onClick={()=> HandleDelete(task.id)}
                                />
                            </td>
                            <td>
                                <FaCheckCircle
                                size={18}
                                color="green"
                                style={{cursor:"pointer"}}
                                onClick={() => Conclude(task)}
                                />
                            </td>

                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default DashboardComponent