import './Person.scss';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">
        {(() => {
          if (isMarried) {
            if (sex === 'm') {
              return `${partnerName} is my wife`;
            }

            if (sex === 'f') {
              return `${partnerName} is my husband`;
            }
          }

          return 'I am not married';
        })()}

        {/* {isMarried
          ? `${partnerName} is my ${sex === 'm' ? 'wife' : 'husband'}`
          : 'l am not married'} */}
      </p>
    </section>
  );
};
