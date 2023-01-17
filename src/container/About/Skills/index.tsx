import Image, { StaticImageData } from 'next/image';
import React from 'react';

import styles from './skills.module.scss';

import ExpressLogo from 'assets/images/express.png';
import NestLogo from 'assets/images/nestjs.png';
import NextLogo from 'assets/images/nextjs.png';
import ReactLogo from 'assets/images/react.png';

interface SkillProps {
  title: string;
  main: Array<StaticImageData>;
  sub: Array<string>;
}

const Skill: React.FC<SkillProps> = ({ title, main, sub }) => {
  return (
    <article className={styles.skill}>
      <h1>{title}</h1>
      <div>
        <ul className={styles.main}>
          {main.map((item) => (
            <li key={item.src}>
              <Image src={item} alt={'logo'} width={120} height={50} />
            </li>
          ))}
        </ul>
        <ul className={styles.sub}>
          {sub.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

const Skills: React.FC = () => {
  return (
    <section className={styles.container}>
      <h1>Skills</h1>
      <section className={styles.skills}>
        <Skill
          title='Frontend'
          main={[ReactLogo, NextLogo]}
          sub={['Redux Toolkit', 'React-Query', 'Recoil', 'SCSS', 'Emotion.js', 'styled-component']}
        />
        <Skill
          title='Backend'
          main={[ExpressLogo, NestLogo]}
          sub={[
            'Sequelize',
            'TypeORM',
            'Prisma',
            'mongoose',
            'Redis',
            'MySQL',
            'MongoDB',
            'Socket',
          ]}
        />
      </section>
    </section>
  );
};

export default Skills;
