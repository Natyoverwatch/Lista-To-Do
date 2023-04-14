import React from 'react';
import './App.scss';
import { useState } from 'react';
import { Form, Input, Row, Col, Button} from 'antd';

const ToDoList = () => {
  const [datos, setDatos] = useState([]);
  const [notes, setNotes] = useState([]);
  let [counter, setCounter] = React.useState(0);
  //destructurng
  //React.useState => [value, function to update the value];
  const contador = (value) => {
      setCounter(counter + value);
  };

  const agregarNota =() =>{
      const newNote = {
          name: datos,
          id: counter,
      }
      setNotes([...notes, newNote])
  };

  const removerNota =(id) =>{
    const newNote = notes.filter((nota) => nota.id !== id)
    setNotes(newNote)
  };

  const CambiarNota =(id) =>{
    
  };

  return(
      <>
          <Form
              name="basic"
              layout="vertical"
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              autoComplete="off"
          >
              <Form.Item
              name="Usuario"
              rules={[{ required: true, message: 'Por favor diligencie su usuario!' }]}
              >
              <Input onClick={() => contador(1)} value={datos} onChange={e => setDatos(e.target.value)} />
              </Form.Item>
              <Form.Item >
                <Button 
                    type='primary'
                    htmlType="submit"
                    className='estilobotoningresar'
                    style={{margin:'1em 0'}}
                    onClick={agregarNota}
                >
                    Ingresar
                </Button>
            </Form.Item>
          </Form>
          {/*<button onClick={agregarNota}> Agregar a la lista </button>*/}
          <Row >
              {notes.map((nota) => (
                  <Col key={nota.id} onClick={()=> removerNota(nota.id)} className='loginform'>
                      {nota.name}
                  </Col>
              ))}
          </Row>
          
      </>
  )
}

function ToDo() {
  return(
    <div className='container'>
      Actualizar notas
      <ToDoList/>
    </div>
  )
}

export default ToDo;