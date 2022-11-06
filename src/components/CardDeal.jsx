import React from 'react'
import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => {
  return (
    <section className={`${layout.section} px-10`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className='sm:block hidden'/> in a few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470] mt-5`}>
          Acru tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris toror. c aliquet ultrices ac, ametau.
        </p>

        <Button styles={"mt-10"}/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%]'/>
      </div>

    </section>
  )
}

export default CardDeal