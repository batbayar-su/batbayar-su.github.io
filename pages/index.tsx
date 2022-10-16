import { Button, Grid, Link, styled } from '@nextui-org/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Grid.Container
      gap={2}
      css={{
        h: '100vh',
        m: 0,
      }}
      justify="center"
      alignItems="center"
    >
      <Grid xs={4} justify="center">
        <Button auto shadow color="primary" as={Link} href="https://bagi.mn">Resùme</Button>
      </Grid>
      <Grid xs={4} justify="center">
        <Button auto shadow color="gradient" as={Link} href="/games">Games</Button>
      </Grid>
      <Grid xs={4} justify="center">
        <Button auto shadow color="secondary" as={Link} href="https://batbayar-su.medium.com">Blog</Button>
      </Grid>
    </Grid.Container>
  )
}

export default Home
