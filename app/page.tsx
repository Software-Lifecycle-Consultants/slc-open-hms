import Image from 'next/image'
import { Box, Typography, Button } from '@mui/material'

export default function Home() {
  return (
    <>
    <Box>
      <Typography variant='h4' component='h1'>Hello</Typography>
      <Typography variant='body1' component='p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci sint odit repellat dignissimos asperiores quidem repudiandae necessitatibus dicta facere nulla non quaerat obcaecati, qui vero fuga assumenda sed iure amet in voluptate earum? Ipsa adipisci quam ab perspiciatis excepturi totam quisquam voluptatum fuga, corrupti suscipit id, consequatur eligendi soluta quasi. Nulla sit porro rem in inventore, ullam facilis repellat ut ipsum et nihil beatae, velit commodi! Expedita laborum cumque dolore autem blanditiis non perferendis molestiae doloribus ipsum sed enim placeat qui vitae voluptates dolores, cum deleniti iusto magnam iure illo at, inventore laudantium. Itaque ex, aut tenetur molestiae distinctio maxime.</Typography>
    </Box>
    <Box>
      <Typography variant='h4' component='h1'>Second section</Typography>
      <Typography variant='body1' component='p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci sint odit repellat dignissimos asperiores quidem repudiandae necessitatibus dicta facere nulla non quaerat obcaecati, qui vero fuga assumenda sed iure amet in voluptate earum? Ipsa adipisci quam ab perspiciatis excepturi totam quisquam voluptatum fuga, corrupti suscipit id, consequatur eligendi soluta quasi. Nulla sit porro rem in inventore, ullam facilis repellat ut ipsum et nihil beatae, velit commodi! Expedita laborum cumque dolore autem blanditiis non perferendis molestiae doloribus ipsum sed enim placeat qui vitae voluptates dolores, cum deleniti iusto magnam iure illo at, inventore laudantium. Itaque ex, aut tenetur molestiae distinctio maxime.</Typography>
    </Box>
    <Button variant='contained' color='warning'>Im a button</Button>
    <Button variant='outlined'>Im a button</Button>
    <Button variant='text'>Im a button</Button>
  </>
  )
}
