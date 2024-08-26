import React from 'react'
import images from '../../../assets/images'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { api } from '../../../../../frontend/config/axios.js'
import './sign-in.css'


const SignIn = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
    });

    const onSubmit = async (data) => {
        try {
            const response = await api.post('/login/passenger', data);
            navigate('/');
        } catch (error) {
            console.error("Erro ao fazer login:", error);
        }
    };

    return (
        <>
            <main className="main">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <section className="section">
                        <div className="sign-in">
                            <div className="sign-in-text">
                                <h2>Login</h2>
                                <p>Insira seus dados</p>
                            </div>
                            <div className="sign-in-input">
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    placeholder="E-mail" 
                                    {...register("email")}
                                />
                                {errors.email && <span className="error-message">{errors.email.message}</span>}
                                <input 
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                    placeholder="Senha" 
                                    {...register("password")}
                                />
                                {errors.password && <span className="error-message">{errors.password.message}</span>}
                                <Link to="/forgot-password"><p>Esqueci minha senha</p></Link>
                            </div>
                            <button type="submit" className="profile-passenger">Entrar</button>
                        </div>
                        <div className="sign-up-area">
                            <img src={images.logoAdapt} alt="Logo Adapt" />
                            <div className="sign-up-text">
                                <h2>Ainda não possui conta?</h2>
                                <p>Crie sua conta</p>
                            </div>
                            <Link to="/sign-up">
                                <button className="sign-up-area-button">Cadastrar</button>
                            </Link>
                        </div>
                    </section>
                </form>
            </main>
        </>
    );
}

export default SignIn;