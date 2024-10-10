import Head from 'next/head';
import { Grid, Card, CardContent, Typography, TextField, Button, Avatar } from '@mui/material';
import Link from 'next/link';
export default function Home() {

  return (

    <div className='main'>

      <div className='mt-10'>
        <Head>
          <title>Armaghan's Digital Nook </title>
          <meta name='description' content='Welcome to Armaghan Digital Nook' />
          <link rel="icon" href='/favicon.ico' />
        </Head>
        <main>
          <Grid container spacing={3}>
            <Grid item>
              <h1 class="w3-center w3-animate-left">Hey, I'm Armaghan </h1>
            </Grid>
          </Grid>
          <div className='intro'>
            <p>Welcome to my digital nook.
              I'm a web developer, software engineer from Iran.
              And here, I share what i've been working on recently and things I learned along the way.
            </p>

            <div class="image-area">
              <div class="img-wrapper">
                <img src="/IMG_6740.jpg" alt="Armaghan Nikfar" />
                <h2>Armaghan Nikfar</h2>

              </div>
            </div>
          </div>
          <section className='section2'>
            <h1>Recent Post's</h1>
            <ul className='mb-6'>
              <a href='https://www.youtube.com/watch?v=Eh3EpwqT4cM' target='_blank'>
                <div className="border-b border-gray-200 py-3 transition-transform hover:scale-[1.01] dark:border-gray-700">
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="flex h-10 w-12 items-center justify-center rounded-lg bg-gray-100 text-sm text-gray-500 dark:bg-gray-700 dark:text-gray-400">01</div>
                    <div className="flex w-full flex-col gap-x-6 gap-y-1 sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="font-medium">Protect your NextJs 13 app using Next-Auth</h4>
                      <div className="flex items-center justify-start gap-2">
                        <p className=" text-gray-500 dark:text-gray-400">
                          <span>76K</span>
                          <span className="ml-1.5 text-[13px] text-gray-400">views</span>
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="mt-1 h-4 w-4 fill-red-400">
                          <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clip-rule="evenodd">
                          </path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a href='https://www.youtube.com/watch?v=mOvW3iheF14' target='_blank'>
                <div className="border-b border-gray-200 py-3 transition-transform hover:scale-[1.01] dark:border-gray-700">
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="flex h-10 w-12 items-center justify-center rounded-lg bg-gray-100 text-sm text-gray-500 dark:bg-gray-700 dark:text-gray-400">02</div>
                    <div className="flex w-full flex-col gap-x-6 gap-y-1 sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="font-medium">How to connect your NextJs app to MongoDB</h4>
                      <div className="flex items-center justify-start gap-2">
                        <p className=" text-gray-500 dark:text-gray-400">
                          <span>37K</span>
                          <span className="ml-1.5 text-[13px] text-gray-400">views</span>
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="mt-1 h-4 w-4 fill-red-400">
                          <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clip-rule="evenodd">
                          </path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a href='https://www.youtube.com/watch?v=L5JU1oR29TM' target='_blank'>
                <div className="border-b border-gray-200 py-3 transition-transform hover:scale-[1.01] dark:border-gray-700">
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="flex h-10 w-12 items-center justify-center rounded-lg bg-gray-100 text-sm text-gray-500 dark:bg-gray-700 dark:text-gray-400">03</div>
                    <div className="flex w-full flex-col gap-x-6 gap-y-1 sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="font-medium">NextJS 13 Introduction - Building a fullstack app using Prisma & Mongodb</h4>
                      <div className="flex items-center justify-start gap-2">
                        <p className=" text-gray-500 dark:text-gray-400">
                          <span>28K</span>
                          <span className="ml-1.5 text-[13px] text-gray-400">views</span>
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="mt-1 h-4 w-4 fill-red-400">
                          <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clip-rule="evenodd">
                          </path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a href='https://www.youtube.com/watch?v=3Dw6D_WuzSE' target='_blank'>
                <div className="border-b border-gray-200 py-3 transition-transform hover:scale-[1.01] dark:border-gray-700">
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="flex h-10 w-12 items-center justify-center rounded-lg bg-gray-100 text-sm text-gray-500 dark:bg-gray-700 dark:text-gray-400">04</div>
                    <div className="flex w-full flex-col gap-x-6 gap-y-1 sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="font-medium">Server vs client components in NextJs 13 – When to use which</h4>
                      <div className="flex items-center justify-start gap-2">
                        <p className=" text-gray-500 dark:text-gray-400">
                          <span>28K</span>
                          <span className="ml-1.5 text-[13px] text-gray-400">views</span>
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="mt-1 h-4 w-4 fill-red-400">
                          <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clip-rule="evenodd">
                          </path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </ul>
            <Link href='/posts' className='hover:text-black-500' target='_blank'>
              <Typography color='primary'>
                Watch all videos ...
              </Typography>
            </Link>
          </section>
          <section>
            <div class="infocardContainer">
              <div id="main">
                <img src="/images/skils.jpg"></img>
              </div>
              <div id="textbois">
                <Grid container>
                  <Typography style={{ color: "black",fontWeight:'bold' }}>React Js</Typography>
                  <Typography style={{ color: "black",fontWeight:'bold'  }}>Next Js</Typography>
                  <Typography style={{ color: "black",fontWeight:'bold'  }}>Python</Typography>
                  <Typography style={{ color: "black",fontWeight:'bold'  }}>Java script</Typography>
                  <Typography style={{ color: "black",fontWeight:'bold'  }}>Material UI & Tailwind CSS</Typography>
                  <Typography style={{ color: "black",fontWeight:'bold'  }}>Artifical intelligence</Typography>
                  <Typography style={{ color: "black",fontWeight:'bold'  }}>HTML5 & CSS</Typography>
                  <Typography style={{ color: "black",fontWeight:'bold'  }}>React Native</Typography>




                </Grid>

              </div>
            </div>
          </section>
          <section className='section3'>
            <h1 className='mb-7'>My Recent Projects</h1>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <Card className='card'>
                  <h3 className='px-5 py-5 uppercase font-bold text-lg text-zinc-500 tracking-wide'>React Js</h3>
                  <CardContent>
                    <h3 className='font-semibold'>Dashboard Pannel + 100 updates</h3>
                    <Typography >A Dashboard pannel for Shatel Co built with React Js, MUI, Tailwind,Auth, SignalR, Notifications.</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card className='card'>
                  <svg className='cardNextLogo' viewBox="0 0 148 90" version="1.1" xmlns="http://www.w3.org/1999/xlink"><path d="M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z" fill="currentColor" fill-rule="nonzero"></path></svg>
                  <CardContent>
                    <h3 className='font-semibold'>NextJs Personal Website</h3>
                    <Typography>A personal website with nextjs that shared personal information.</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card className='card'>
                  <h3 className='px-5 py-5 uppercase font-bold text-lg text-zinc-500 tracking-wide'>Extentions</h3>
                  <CardContent>
                    <h3 className='font-semibold'>Chrome & Firefox extentions</h3>
                    <Typography>usefull extentions for firefox and chrome, using Java script, Jquery.</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card className='card'>
                  <svg className='cardNextLogo' viewBox="0 0 148 90" version="1.1" xmlns="http://www.w3.org/1999/xlink"><path d="M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z" fill="currentColor" fill-rule="nonzero"></path></svg>
                  <CardContent>
                    <h3 className='font-semibold'>NextJS Portfolio Site</h3>
                    <Typography>A personal portfolio site built with NextJS and MDX</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card className='card'>
                  <h3 className='px-5 py-5 uppercase font-bold text-lg text-zinc-500 tracking-wide'>React Js</h3>
                  <CardContent>
                    <h3 className='font-semibold'>English school website</h3>
                    <Typography>A website for english school with online classes using React Js, BigBlueButton config</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card className='card'>
                  <svg className='cardNextLogo' viewBox="0 0 148 90" version="1.1" xmlns="http://www.w3.org/1999/xlink"><path d="M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z" fill="currentColor" fill-rule="nonzero"></path></svg>
                  <CardContent>
                    <h3 className='font-semibold'>NextJS connected to MongoDB</h3>
                    <Typography>How to connect to MongoDB and use it into next app</Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={6}>
                <Card className='card'>
                  <h3 className='px-5 py-5 uppercase font-bold text-lg text-zinc-500 tracking-wide'>React Js</h3>
                  <CardContent>
                    <h3 className='font-semibold'>Speech to text AI</h3>
                    <Typography>Chrome extention with converting speech to text using AI</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card className='card'>
                  <svg className='cardNextLogo' viewBox="0 0 148 90" version="1.1" xmlns="http://www.w3.org/1999/xlink"><path d="M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z" fill="currentColor" fill-rule="nonzero"></path></svg>
                  <CardContent>
                    <h3 className='font-semibold'>FTP App</h3>
                    <Typography>A app with next js that can login to an ftp server and read data from there and display them</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item={6}>
                <Link href='/about' target='_blank'>
                  <svg class="animate-bounce w-6 h-6 ...">
                  </svg>
                  <Typography className='hover:text-blue-500' color="primary">Show more ...</Typography>

                </Link>
              </Grid>
            </Grid>

          </section>
          <section className='section4'>
            <Grid container justifyContent={'center'}>
              <Card className='subscribeCard'>
                <CardContent>
                  <h3 className='text-xl font-bold text-white'>Subscribe to my newsletter</h3>
                  <p className='text-sm text-gray-400'>Get updates on my new notes</p>
                  <Grid container spacing={2} style={{ marginTop: "6px" }}>
                    <Grid item xs={10}>
                      <TextField className='textField' type='text' placeholder='Your email' />
                    </Grid>
                    <Grid item xs={1}>
                      <Button className='p-2' variant='contained'>
                        Subscribe
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </section>
        </main>
      </div>
    </div>
  );
}
