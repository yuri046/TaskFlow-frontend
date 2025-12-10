import styles from "../Dashboard/Dashboard.module.css"
import DashboardComponent from "../../components/Dashboard/DashboardComponent"
import AsideMenu from "../../components/Menu/AsideMenu"
import { useState } from "react"
import { validateDescription, validateTitle } from "../../utils/validate"
import { ConcludeTask, CreateTask, DeleteTask, UpdateTask } from "../../API/TaskFlow"
import { useEffect } from "react"
import { GetAllTasks } from "../../API/TaskFlow"


const Dashboard = ()=>{
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [creatinTask, setCreatinTask] = useState(false)
    const token = localStorage.getItem("token")
    const [tasks, setTasks] = useState([])
    const [editingTask, setEditingTask] = useState(false)
    const [taskToEdit, setTaskToEdit] = useState(null);

    useEffect(()=>{
        const loadTasks = async ()=>{
            const data = await GetAllTasks(token)
            setTasks(data || [])
        }

        if (!token) {
            navigate("/login"); 
            return null;
}

        loadTasks()
    },[])
    
    const HandleTask = ()=>{
        if(creatinTask){
            setCreatinTask(false)
        } else {setCreatinTask(true)}
    }

    const CreateNewTask = async ()=>{
        const newTask = {}
        const newErrors = {}

        validateTitle(title, newErrors, newTask)
        validateDescription(description, newTask)

        if(Object.keys(newErrors).length === 0){
            await CreateTask(newTask, token)
            const data = await GetAllTasks(token)
            setTasks(Array.isArray(data) ? data : [])
        }

        setCreatinTask(false)
    }

    const Conclude = async(task)=>{
        await ConcludeTask(token, task)
        const data = await GetAllTasks(token)
        setTasks(Array.isArray(data) ? data : [])
    }

    const Delete = async (id)=>{
        await DeleteTask(id, token)
        const data = await GetAllTasks(token)
        setTasks(Array.isArray(data) ? data : [])
    }

    const HandleEdit = (task) => {
        setEditingTask(true);
        setCreatinTask(false);
        setTaskToEdit(task);
        setTitle(task.title || '');
        setDescription(task.description || '');
};

    const Update = async () => {
    const updatedTask = {};
    const newErrors = {};

    validateTitle(title, newErrors, updatedTask);
    validateDescription(description, updatedTask);

    if (Object.keys(newErrors).length === 0 && taskToEdit) {
        await UpdateTask(token, {
            ...taskToEdit,
            ...updatedTask
        });

        const data = await GetAllTasks(token);
        setTasks(Array.isArray(data) ? data : []);
        setEditingTask(false);
        setTaskToEdit(null);
        setTitle('');
        setDescription('');
    } else {
        
        console.log("Erros de validação", newErrors);
    }
};

    const inputTask = (
        <div className={styles.inputTask}>
                <input 
                    type="text"
                    placeholder="Digite um titulo"       
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                    />
           
                <input 
                    type="text"
                    placeholder="Digite uma descrição (opcional)"
        
                    value={description}
                    onChange={(e)=> setDescription(e.target.value)}
                    />

                <button className={styles.taskButton} onClick={CreateNewTask}>Criar nova Tarefa</button>
            </div>
    )

    const editTask = (
        <div className={styles.inputTask}>
                <input 
                    type="text"
                    placeholder="Digite um titulo"       
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                    />
           
                <input 
                    type="text"
                    placeholder="Digite uma descrição (opcional)"
        
                    value={description}
                    onChange={(e)=> setDescription(e.target.value)}
                    />

                <button className={styles.taskButton} onClick={Update}>Editar tarefa</button>
            </div>
    )
    const taskButton = (<button className={styles.taskButton} onClick={HandleTask}>Nova tarefa</button>)

    return(
        <div className={styles.container}>
            <AsideMenu style={{backgroundColor:"red"}}/>
            <div className={styles.subContainer}>
                <div className={styles.subContainer2}>
                    <h1>Tarefas</h1>
                    {creatinTask ? "" : taskButton}
                </div>
                {creatinTask ? inputTask : ""}
                {editingTask ? editTask : ""}
                <DashboardComponent tasks={tasks} HandleDelete={Delete} Conclude={Conclude} HandleUpdate={HandleEdit}/>
            </div>
            
        </div>
    )
}

export default Dashboard