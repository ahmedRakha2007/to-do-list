import { Box, Typography } from "@mui/material"
import "./addToDo.css"
function AddToDo({handleAddTask, taskInput, handleTaskInput}){
    return(
        <>
       <Box component="form" sx={{display: "flex",
         justifyContent: "center",
          mt: "60px",
          width: {
            xs: '350px',   // phones
            sm: '500px', // tablets
            md: '600px',   // small laptops
            lg: '900px', // desktops
            xl: '1100px',   // big screens
          }
          }}>
       <input 
       value={taskInput}
       type="text"
        placeholder="Add a task."
        onChange={(e)=>{handleTaskInput(e)}}
        />
       <button onClick={(e)=>{handleAddTask(taskInput,e)}}>
        <Typography 
        sx={{
              fontSize: {
              xs: '13px',   // phones
            sm: '15px', // tablets
            md: '22px',   // small laptops
            lg: '22px', // desktops
            xl: '22px',   // big screens
          }
        }}
        >
        I Got This!
        </Typography>
        </button>
       </Box>
       </>
    )
}
export default AddToDo