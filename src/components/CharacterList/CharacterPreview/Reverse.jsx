import './Reverse.scss';

function Reverse({ character }) {
  return (
    <div className="Reverse">
      <table className="Reverse__table">
        <tr>
          <td>Name:</td>
          <td>{character.name}</td>
        </tr>
        <tr>
          <td>Species:</td>
          <td>{character.species}</td>
        </tr>
        <tr>
          <td>Gender:</td>
          <td>{character.gender}</td>
        </tr>
        <tr>
          <td>Status:</td>
          <td>{character.status}</td>
        </tr>
        <tr>
          <td>Origin:</td>
          <td>{character.origin.name}</td>
        </tr>
        <tr>
          <td>Location:</td>
          <td>{character.location.name}</td>
        </tr>
      </table>
    </div>
  );
}

export default Reverse;
