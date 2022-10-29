import { Stage, Sprite } from '@inlet/react-pixi'
import { NextPage } from 'next'
import { FullscreenStage } from '../../../components/FullscreenStage'

const Muushig: NextPage = () => (
  <FullscreenStage options={{ backgroundColor: 0xeef1f5 }}>
    <Sprite image="/piece.png" anchor={0.5} x={75} y={75} />
  </FullscreenStage>
)

export default Muushig
