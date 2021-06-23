import { yupResolver } from '@hookform/resolvers/yup';
import Head from 'next/head';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import * as yup from "yup";
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import api from '../services/api';
import { Background, Container, Content, ContentContainer, Footer, FooterMessage, Form, Subtitle, Title } from '../styles/login';

interface FormData {
  email: string;
  password: string;
}

export default function Login() {
  const onSubmit = async (data: FormData) => {
    const id = (data.email === 'teste@wiser.com' && data.password === '123456') ? 26 : 0;
    try {
    const response = await api.get(`signin/${id}`);
    Swal.fire(
      'Sucesso!',
      'Você foi logado com sucesso',
      'success'
    );
  } catch (error) {
    Swal.fire(
      'Falha!',
      'Login ou senha incorretos',
      'error',
    )
  }
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
              <Input label="E-MAIL" placeholder="user.name@mail.com" inputError={errors.email} {...register("email")} />
              <Input label="SENHA" type="password" inputError={errors.password} {...register("password")} />
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
