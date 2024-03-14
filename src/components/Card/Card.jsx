import './Card.css';

export default function Card({ skill }) {

  return (
    <>
      <div className='card-container' >
        <h4>{skill.name}</h4>
        <img src={skill.icon} alt={skill.name} />
        <p>{skill.description}</p>
      </div>
    </>

  );
}
