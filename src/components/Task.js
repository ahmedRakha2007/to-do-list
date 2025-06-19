import * as React from 'react';
import { Stack, Typography, Modal, Button, Box } from "@mui/material";
import "./task.css"
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Task({task, handleDoneInput, handleDeleteTask, handleEditButton}){
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [editedTask, setEditedTask] = useState("")
    return(
        <>
        <Stack direction= "row" alignItems="center" justifyContent="space-between" className="todo-container"
        sx={{
            width: {
                xs: "320px",
                sm: "500px",
                md:  "600Px",
                lg: "700px",
                xl: "700px",
            }
        }}
        >
                    <Box
            sx={{
                  maxWidth: {
                xs: "60%",
                sm: "60%",
                md:  "70%",
                lg: "70%",
                xl: "70%",
                },     
                color: "white",
                whiteSpace: "normal",     // Allow line breaks at spaces
                overflowWrap: "break-word", // Prevent overflow for very long words (optional)
            }}
            >
           <Typography
                variant="h6"
                sx={{
                    textDecoration: task.done ? "line-through" : "none",
                    fontSize: {
                    xs: '14px',   
                    sm: '16px',   
                    md: '18px',
                    lg: '20px',   
                    xl: '22px',   
                    },
                    mr: "10px"
                }}
                >
                {task.task}
                </Typography>

            </Box>


                    <div className="icons-container">
            <Box
             sx={{
                     width: { xs: '30px', sm: '40px', md: '45px' },
                    height: { xs: '30px', sm: '40px', md: '45px' },
                }}
            className="check-icon" onClick={() => { handleDoneInput(task.id) }}>
                <CheckIcon
                sx={{
                    fontSize: { xs: 20, sm: 25, md: 30 },  // smaller on phones, bigger on desktop
                    transition: 'color 0.3s ease',
                    '&:hover': { color: 'green' },
                }}
                />
            </Box>
            <Box
              sx={{
                     width: { xs: '30px', sm: '40px', md: '45px' },
                    height: { xs: '30px', sm: '40px', md: '45px' },
                }}
            className="edit-icon" onClick={handleOpen}>
                <EditIcon
                sx={{
                    fontSize: { xs: 20, sm: 25, md: 30 },
                    transition: 'color 0.3s ease',
                    '&:hover': { color: 'yellow' },
                }}
                />
            </Box>
            <Box
              sx={{
                     width: { xs: '30px', sm: '40px', md: '45px' },
                    height: { xs: '30px', sm: '40px', md: '45px' },
                }}
            className="delete-icon" onClick={() => { handleDeleteTask(task.id) }}>
                <DeleteIcon
                sx={{
                    fontSize: { xs: 20, sm: 25, md: 30 },
                    transition: 'color 0.3s ease',
                    '&:hover': { color: 'red' },
                }}
                />
            </Box>
            </div>

             {/*  EDIT MODAL */}
                 <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    >
                    <Box
                        sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: {
                            xs: '90%',  // phones
                            sm: '70%',  // tablets
                            md: '50%',  // small laptops
                            lg: '40%',  // desktops
                            xl: '30%',  // large screens
                        },
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: {
                            xs: 2,
                            sm: 3,
                            md: 4
                        },
                        borderRadius: '12px',
                        }}
                    >
                        <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        sx={{
                            fontSize: {
                            xs: '18px',
                            sm: '20px',
                            md: '22px'
                            },
                            mb: 2
                        }}
                        >
                        Edit Task
                        </Typography>

                        <input
                        value={editedTask}
                        onChange={(e) => setEditedTask(e.target.value)}
                        type="text"
                        style={{
                            width: '100%',
                            borderRadius: '10px',
                            padding: '10px',
                            fontSize: '16px',
                            marginBottom: '20px',
                            border: '1px solid gray'
                        }}
                        />

                        <Stack alignItems="end">
                        <Button
                            onClick={() => {
                            handleEditButton(editedTask, task.id);
                            handleClose();
                            }}
                            variant="outlined"
                            sx={{
                            bgcolor: "white",
                            fontSize: {
                                xs: '12px',
                                sm: '14px',
                                md: '16px'
                            }
                            }}
                            startIcon={<EditIcon />}
                        >
                            Edit
                        </Button>
                        </Stack>
                    </Box>
                    </Modal>

     {/*  EDIT MODAL */}
        </Stack>
        </>
    )
}

export default Task;