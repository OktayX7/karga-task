import PersonItem from "./PersonItem";

// Image Imports
import Person1 from "../../../../public/assets/person-1.png";
import Person2 from "../../../../public/assets/person-2.png";
import Person3 from "../../../../public/assets/person-3.png";
import Person4 from "../../../../public/assets/person-4.png";

const PersonLists = () => {
  const personList = [
    {
      id: 1,
      name: "Mykhailo Kulyk",
      image: Person1,
      description: "Founder. Designer",
    },
    {
      id: 2,
      name: "Nikita Borishchenko",
      image: Person2,
      description: "Chief Ux/Ui designer",
    },
    {
      id: 3,
      name: "Valeria Lozitskaya",
      image: Person3,
      description: "Art director of the 3D department",
    },
    {
      id: 4,
      name: "Khrystyna Pechen",
      image: Person4,
      description: "Art director of the 2D department",
    },
  ];

  return (
    <div className="grid grid-cols md:grid-cols-2 xl:grid-cols-4 gap-4">
      {personList.map((person) => (
        <PersonItem key={person.id} person={person} />
      ))}
    </div>
  );
};

export default PersonLists;
