function OutraLista({ itens }) {
  return (
    <>
      <h3>Lista coisas boas:</h3>
      {itens.length > 0 ? (
        itens.map((item, index) => <p key={index}>{item}</p>)
      ) : (
        <p>Não ha iterns na lista</p>
      )}
    </>
  );
}

export default OutraLista;
