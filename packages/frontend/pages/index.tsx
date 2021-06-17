import React from 'react'
import styles from './index.module.scss'
import Particles from 'react-particles-js'
import ToTheTopButton from '../components/ToTheTopButton'
import Footer from '../components/Footer'

const Home = () => (
  <div>
    <Particles
      className={styles.particles}
      params={{
        particles: {
          shape: {
            type: 'image',
            image: [
              {
                src: './sakura-particles/sakura.png',
                width: 400,
                height: 200,
              },
              {
                src: './sakura-particles/sakura2.png',
                width: 400,
                height: 200,
              },
              {
                src: './sakura-particles/sakura3.png',
                width: 400,
                height: 200,
              },
              {
                src: './sakura-particles/sakura4.png',
                width: 400,
                height: 200,
              },
            ],
          },
          number: {
            value: 80,
            density: {
              enable: false,
            },
          },
          size: {
            value: 32,
            random: true,
            anim: {
              speed: 4,
              size_min: 0.3,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            random: true,
            speed: 0.5,
            direction: 'bottom',
            out_mode: 'out',
          },
        },
      }}
    />
    <ToTheTopButton />
    <Footer />
  </div>
)

export default Home
