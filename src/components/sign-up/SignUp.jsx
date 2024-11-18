import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'; 
const SignUp = () => {
  const [ShowPassword, setShowPassword] = useState(false);
  return (

    <div className='d-flex justify-content-center align-items-center vh-100 border border-primar'>
      <Box className="p-4 bg-white shadow rounded-3">
        <Typography className='fw-bold' variant='h4'>Get Start Shopping</Typography>
        <Typography variant='h6'>Welcome to FreshCart! Enter your email to get started.</Typography>
        <Box>
          <TextField placeholder='First Name' size='small' fullWidth />
        </Box>
        <Box className="my-3">
          <TextField placeholder='Second Name' size='small' fullWidth />
        </Box>
        <Box>
          <TextField placeholder='Email' size='small' fullWidth />
        </Box>
        <Box className="my-3">
          <TextField placeholder='Password' size='small' type={ShowPassword ? 'text' : 'Password'} slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="start" onClick={() => setShowPassword(!ShowPassword)} >
                  {ShowPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </InputAdornment>
              ),
            },
          }} fullWidth />
        </Box>
        <Button fullWidth variant='contained' >Sign Up</Button>

        <p className="text-center mt-3 fs-4">
          Already have an account?{" "}
          <Link className="text-decoration-none text-primary fw-bold" to="/Sign-in">
            Sign In
          </Link>
        </p>
      </Box>
    </div>
  )
}

export default SignUp;
