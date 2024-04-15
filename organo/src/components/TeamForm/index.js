import './TeamForm.scss';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import TextField from '../TextField';
import Button from '../Button';
import InputColor from '../InputColor';

const TeamForm = (props) => {
  const [name, setNome] = useState('');
  const [color, setColor] = useState('#ffffff');

  const onSave = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: uuid(),
      name,
      color,
    });
    setNome('');
  };

  return (
    <section className="forms">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar uma equipe.</h2>
        <TextField
          req={true}
          label="Nome da equipe"
          placeholder="Digite o nome da equipe"
          value={name}
          setValue={(value) => setNome(value)}
        />
        <InputColor
          label="Cor da Equipe"
          value={color}
          setValue={(value) => setColor(value)}
        />
        <Button>Criar Equipe</Button>
      </form>
    </section>
  );
};

export default TeamForm;
