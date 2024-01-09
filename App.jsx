import React from 'react'
import { AppRouter } from './src/router/AppRouter'
import WaveSvg from './src/router/components/WaveBackground'
// import { SvgComponent } from './src/router/components/WaveBackground'


export const App = () => {
  return (
      <>
     < AppRouter />
     
    
     < WaveSvg />
      </>
  )
}
