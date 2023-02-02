import Pet from "./Pet"

const Results = ({ pets }) => {
    return (
        <div className="search">
            {!pets.length ? (
                <h1>Sorry, No Pets Found</h1>
            ) : (
                pets.map((pet) => (
                    <Pet
                    animal = {pets.animal}
                    id = {pet.id}
                    name = {pet.name}
                    breed = {pet.breed}
                    images = {pet.images}
                    location = {`${pet.city}, ${pet.state}`}
                    key = {pet.id}
                />
                ))
            )}
        </div>
    );
};

export default Results;