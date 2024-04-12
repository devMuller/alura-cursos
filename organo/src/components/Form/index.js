import './Form.scss';
import { useState } from 'react';

import TextField from '../TextField';
import ComboBox from '../ComboBox';
import Button from '../Button';

const Form = (props) => {
  const [name, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [img, setImagem] = useState('');
  const [team, setTime] = useState('');

  const onSave = (e) => {
    e.preventDefault();
    props.onSubmit({
      name,
      cargo,
      img,
      team,
    });
    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
  };

  return (
    <section className="forms">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <TextField
          req={true}
          label="Nome"
          placeholder="Digite seu nome"
          value={name}
          setValue={(value) => setNome(value)}
        />
        <TextField
          req={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          value={cargo}
          setValue={(value) => setCargo(value)}
        />
        <TextField
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={img}
          setValue={(value) => setImagem(value)}
        />
        <ComboBox
          req={true}
          label="Time"
          options={props.teams}
          value={team}
          setValue={(value) => setTime(value)}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
