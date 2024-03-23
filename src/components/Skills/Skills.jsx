import './Skills.css';

import Card from '../Card/Card';

import { useInView } from 'react-intersection-observer';
import { useRef, useState, useEffect } from 'react'

export default function Skills({ textContent }) {

  const [containerWidth, setContainerWidth] = useState(0);
  const [isSkillsViewed, setIsSkillsViewed] = useState(false);
  const [numSkillColums, setNumSkillColumns] = useState(0);
  const skillsGridRef = useRef(null);

  const [skillsInViewRef, skillsInView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      const newContainerWidth = skillsGridRef?.current?.offsetWidth;
      setContainerWidth(newContainerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const computedStyles = getComputedStyle(skillsGridRef.current);
    const gridTemplateColumns = computedStyles.gridTemplateColumns;
    const numColumns = gridTemplateColumns?.split(' ')?.length;
    setNumSkillColumns(numColumns);
  }, [containerWidth])

  
  const handleSkillsAnimation = () => {
    if (skillsInView && !isSkillsViewed) {
      let i = 1, delay = 0;
      textContent.skills.forEach((skill, index) => {
        const element = document.getElementById(skill.name);
        element.style.pointerEvents = 'none';
        const animation = element?.animate(
          [
            { transform: 'translateX(-120vw)' },
            { transform: 'translateX(0)' },
          ],
          {
            duration: 800,
            easing: 'cubic-bezier(0.190, 1.000, 0.220, 1.000)',
            fill: 'forwards',
            delay: (((numSkillColums / i) * 80) + delay)
          }
        );
        animation.onfinish = () => {
          element.style.pointerEvents = 'auto';
          setIsSkillsViewed(true);
          element.classList?.remove('reset-move-animation');
        };
        i++;
        if (i == numSkillColums + 1) {
          i = 1;
          delay = (numSkillColums / i) * 80 * (index / numSkillColums) + 80;
        }
      });
    } else if (!skillsInView && isSkillsViewed) {
      textContent.skills.forEach((skill) => {
        const element = document.getElementById(skill.name);
        element?.animate(
          [
            { transform: 'translateX(0)' },
            { transform: 'translateX(120vw)' },
          ],
          {
            duration: 0,
            fill: 'forwards',
            delay: 0
          }
        );
      });
      setIsSkillsViewed(false);
    }
  }

  const setSkillClassName = (i) => {
    return ((i + 1) % numSkillColums == 0 && i !== 0);
  }

  return (
    <div className='skills-in-view-container' id='skillsContainer' ref={skillsInViewRef} >
      <section id='skills' >
        <h2>{textContent.skillsButton}</h2>
        <div className='skills-container' ref={skillsGridRef} >
          {textContent.skills.map((skill, index) => {
            return (
              <Card key={skill.name} skill={skill} skillClassName={setSkillClassName(index)} />
            );
          })}
        </div>
      </section>
      {handleSkillsAnimation(skillsInView)}
    </div>)
}