import Image from 'next/image';

import styles from '../styles/About.module.css';

export default function About() {
     return (
          <div className={styles.about}>
               <h1>Sobre o projeto</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed mi non eros luctus laoreet ac at purus. Integer iaculis molestie nulla quis porttitor. Donec gravida lacus et lacus sagittis imperdiet. Maecenas nec urna et dolor eleifend viverra.</p>
               <Image src='/images/charizard.png' width='300' height='300' alt='Charizard' />
          </div>
     )
}