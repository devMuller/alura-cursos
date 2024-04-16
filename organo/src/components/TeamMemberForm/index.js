import './TeamMemberForm.scss';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import TextField from '../TextField';
import ComboBox from '../ComboBox';
import Button from '../Button';

const TeamMemberForm = (props) => {
  const [name, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [img, setImagem] = useState('');
  const [team, setTeam] = useState({ id: '', name: '' });

  const onSave = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: uuid(),
      name,
      cargo,
      img,
      team: team.id,
    });
    setNome('');
    setCargo('');
    setImagem('');
    setTeam({ id: '', name: '' });
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
          value={team.name}
          setValue={(value) => setTeam(value)}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default TeamMemberForm;
