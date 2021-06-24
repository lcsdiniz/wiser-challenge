import { yupResolver } from '@hookform/resolvers/yup';
import Head from 'next/head';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import * as yup from "yup";
import Button from '../components/Button';
import Input from '../components/Input';
import api from '../services/api';
import {
  Background,
  Container,
  Content,
  ContentContainer,
  Footer,
  FooterMessage,
  Form,
  Subtitle,
  Title
} from '../styles/pages/login.ts';

interface FormData {
  email: string;
  password: string;
}

export default function Login() {
  const onSubmit = async (data: FormData) => {
    console.log('começou')
    const id = (data.email === 'teste@wiser.com' && data.password === '123456') ? 26 : 0;
    try {
      const response = await api.get(`signin/${id}`);
      Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Você foi logado com sucesso',
      })
      console.log('sucesso')
  } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Falha!',
        text: 'Login ou senha incorretos',
      });
      console.log('falha')
    }
    console.log('acabou')
  };
  
  const schema = yup.object().shape({
    email: yup.string().email('Digite um e-mail válido').required('Campo obrigatório'),
    password: yup.string().required('Campo obrigatório'),
  });

  const { register, handleSubmit, formState: { errors }, } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <Head>
        <title>Login | Wiser</title>
      </Head>
      <Container>
        <Background />
        <ContentContainer>
          <Content>
            <Title>Olá, seja <br/>bem-vindo!</Title>
            <Subtitle>Para acessar a plataforma, <br/> faça seu login.</Subtitle>

            <Form onSubmit={handleSubmit(onSubmit)}>
              <Input
                label="E-MAIL"
                placeholder="user.name@mail.com"
                inputError={errors.email}
                name="email"
                register={register}
              />
              <Input
                label="SENHA"
                type="password"
                inputError={errors.password}
                name="password"
                register={register}
              />
              <Footer>
                <Button label="ENTRAR" type="submit" />
                <FooterMessage>Esqueceu seu login ou senha?<br/>Clique <a href="#">aqui</a></FooterMessage>
              </Footer>
            </Form>
          </Content>     
        </ContentContainer>     
      </Container>
    </>
  )
}
