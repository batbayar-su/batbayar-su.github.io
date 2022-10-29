import { Stage, Sprite } from '@inlet/react-pixi'
import { NextPage } from 'next'
import { Text } from '@nextui-org/react'

const Ludo: NextPage = () => (
  <div>
    <Text>This is Ludo</Text>
    <Stage>
      <Sprite image="/piece.png" anchor={{ x: 100, y: 100 }} />
    </Stage>
  </div>
)

export default Ludo
