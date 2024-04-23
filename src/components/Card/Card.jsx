import './Card.css';

export default function Card({ skill, skillClassName }) {

  return (
    <>
      <div className={!skillClassName ? 'card-container' : 'far-right-card'} id={skill.name} >
        <a href={skill.link} rel='noreferrer' target='_blank' >
          <h4>{skill.name}</h4>
          <img src={skill.icon} alt={skill.name} />
          <br />
          <p>{skill.description}</p>
        </a>
      </div>
    </>

  );
}
