import { NextPage } from 'next'
import { Card, Grid, Row, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'

const list = [
  {
    title: 'Muushig',
    img: '/images/fruit-1.jpeg',
    link: 'games/muushig',
  },
  {
    title: 'Ludo',
    img: '/images/fruit-2.jpeg',
    link: 'games/ludo',
  },
]

const Games: NextPage = () => {
  const router = useRouter()

  return (
    <Grid.Container
      gap={2}
      justify="center"
      alignItems="center"
      css={{ height: '100vh' }}
    >
      {list.map((item, index) => (
        <Grid xs={6} sm={3} md={2} key={index}>
          <Card isPressable onPress={() => router.push(item.link)}>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={'https://nextui.org' + item.img}
                objectFit="cover"
                width="100%"
                height="100%"
                alt={item.title}
              />
            </Card.Body>
            <Card.Footer css={{ justifyContent: 'center' }}>
              <Text b>{item.title}</Text>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  )
}

export default Games
