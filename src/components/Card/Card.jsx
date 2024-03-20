import './Card.css';

export default function Card({ skill, skillClassName }) {

  return (
    <>
      <div className={!skillClassName ? 'card-container' : 'far-right-card'} id={skill.name} >
        <h4>{skill.name}</h4>
        <img src={skill.icon} alt={skill.name} />
        <br /><br />
        <p>{skill.description}</p>
      </div>
    </>

  );
}
