import React, { useEffect, useState } from "react";
import { getPeople, getPerson } from "./utils";
import "./styles.css";

const StarWars = () => {
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState({});
  const [toBeRemoved, setRemoved] = useState([]);

  useEffect(() => {
    getPeople().then((response) => setPeople(response.results));
  }, []);

  const storePerson = (url) => {
    getPerson(url).then((res) => setPerson(res.result.properties));
  };

  const removePeople = () => {
    const copyOfPeople = [...people];

    const removableItems = copyOfPeople.filter(
      (item) => !toBeRemoved.includes(item.uid)
    );

    setPeople(removableItems);
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          removePeople();
        }}
      >
        <table>
          <tr>
            <th>Remove</th>
            <th>Person</th>
            <th>Individual Data</th>
          </tr>
          {people.map(({ name, uid, url }) => (
            <tr key={uid}>
              <td>
                <input
                  onChange={(e) => setRemoved([e.target.value, ...toBeRemoved])}
                  type="radio"
                  value={uid}
                />
              </td>
              <td>{name}</td>
              <td style={{ cursor: "pointer" }}>
                <button onClick={() => storePerson(url)}>Get Data</button>
              </td>
            </tr>
          ))}
        </table>
        <button>Remove</button>
      </form>
      {person && (
        <table>
          <tr>
            {person.birth_year && <th>Birth Year</th>}
            {person.eye_color && <th>Eye Color</th>}
            {person.gender && <th>Gender</th>}
            {person.hair_color && <th>Hair Color</th>}
            {person.height && <th>Height</th>}
            {person.homeworld && <th>Homeworld</th>}
            {person.mass && <th>Mass</th>}
            {person.name && <th>Name</th>}
            {person.skin_color && <th>Skin Color</th>}
          </tr>
          <tr>
            {person.birth_year && <td>{person.birth_year}</td>}
            {person.eye_color && <td>{person.eye_color}</td>}
            {person.gender && <td>{person.gender}</td>}
            {person.hair_color && <td>{person.hair_color}</td>}
            {person.height && <td>{person.height} cm</td>}
            {person.homeworld && <td>{person.homeworld}</td>}
            {person.mass && <td>{person.mass} kg</td>}
            {person.name && <td>{person.name}</td>}
            {person.skin_color && <td>{person.skin_color}</td>}
          </tr>
        </table>
      )}
    </>
  );
};

export default StarWars;
