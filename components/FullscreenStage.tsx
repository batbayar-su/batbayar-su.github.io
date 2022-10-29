import { Stage, _ReactPixi } from '@inlet/react-pixi'
import { HEADER_HEIGHT } from '../constants/theme'
import { useWindowDimensions } from '../hooks/useWindowDimensions'

export const FullscreenStage = ({
  options,
  children,
}: React.PropsWithChildren<{ options?: _ReactPixi.ApplicationOptions }>) => {
  const { height, width } = useWindowDimensions()
  console.log('sizes', height, width)

  return (
    <div style={{ height: `calc(100vh-${HEADER_HEIGHT}px)`, width: '100vw' }}>
      <Stage
        width={width}
        height={height - HEADER_HEIGHT}
        options={options}
        style={{ display: 'block' }}
      >
        {children}
      </Stage>
    </div>
  )
}
