'use client'
import { Avatar, Card, Grid, Typography } from '@material-ui/core';
import './contact.css'
const Contact = () => {
  return (
    <>

    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div class="mb-4">
            <div class="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                
                <h2
                    class="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                    Get in Touch
                </h2>
               
                <Grid container justify='center'>
                  <Grid item xs={1}>
                    <Avatar/>
                  </Grid>
                  <Grid item xs={1}>
                    <Typography style={{marginTop:"6px"}} color='primary'> Gmail</Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography style={{marginTop:"6px"}}>armaghannikfar@gmail.com</Typography>
                  </Grid>
                </Grid>
              
               <div style={{marginTop:"4px"}}>
               <Grid container justify='center'>
                  <Grid item xs={1}>
                    <Avatar/>
                  </Grid>
                  <Grid item xs={1}>
                    <Typography style={{marginTop:"6px"}} color='primary'> GitHub</Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <a href="https://github.com/ArmaghanNikfar" target="_blank"style={{marginTop:"6px", color:"blue"}}>My Github</a>
                  </Grid>
                </Grid>
               </div>
               <div style={{marginTop:"4px"}}>
               <Grid container justify='center'>
                  <Grid item xs={1}>
                    <Avatar/>
                  </Grid>
                  <Grid item xs={1}>
                    <Typography style={{marginTop:"6px"}} color='primary'> LinkedIn</Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <a href='www.linkedin.com/in/armaghan-nikfar-aa2a74256' target='_blank' style={{marginTop:"6px", color:"blue"}}>My LinkedIn</a>
                  </Grid>
                </Grid>
               </div>
               <div style={{marginTop:"4px"}}>
               <Grid container justify='center'>
                  <Grid item xs={1}>
                    <Avatar/>
                  </Grid>
                  <Grid item xs={1}>
                    <Typography style={{marginTop:"6px"}} color='primary'> Phone</Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography style={{marginTop:"6px"}}>+989981511296</Typography>
                  </Grid>
                </Grid>
               </div>
            </div>
        </div>
        </div>
    </>
  )
}
export default Contact;