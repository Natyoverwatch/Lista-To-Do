import React from 'react';
import './App.scss';
import { useState } from 'react';
import { Form, Input, Row, Col, Button} from 'antd';

const ToDoList = () => {
  const [datos, setDatos] = useState([]);
  const [notes, setNotes] = useState([]);
  let [counter, setCounter] = React.useState(0);
  const [form] = Form.useForm();
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

  const onReset = () => {
    form.resetFields();
  };

  return(
      <>
        <Row style={{display:'flex', justifyContent:'center', padding: '0 1em'}}>
          <Col className='loginformbasic' xs={{span:20, offset:2 }} md={{span:10, offset:3 }} lg={{span:6, offset:2 }} style={{margin:'0 2em'}}>
          <h1 style={{color: 'blue',display:'flex', alignContent:'center', justifyContent:'center'}}>Actualizar notas </h1>
          <Form
            form={form}
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
                <Input value={datos} onChange={e => setDatos(e.target.value)} />
              </Form.Item>
              <Form.Item >
                <Button 
                  type='primary'
                  htmlType="submit"
                  className='estilobotoningresar'
                  style={{margin:'1em 0'}}
                  onClick={()=>{agregarNota(); onReset(); contador(1)}}
                >
                    Ingresar
                </Button>
              </Form.Item>
          </Form>
          </Col>
        
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
      <ToDoList/>
    </div>
  )
}

export default ToDo;