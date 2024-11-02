import React, { useState, useEffect } from 'react';
import '../styles/SupportForm.css';
import { useUser } from '../contexts/UserContext';

function SupportForm() {
    const { updateUser } = useUser()

    useEffect(() => {
        updateUser({ option: 'Suporte' });
    }, [updateUser]);

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        assunto: '',
        mensagem: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para enviar o formulário
        updateUser({
            nome: formData.nome,
            email: formData.email,
            option: 'Suporte'
        });
        console.log('Formulário enviado:', formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="support-form-container">
            <h2>Solicitação de Suporte</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nome:</label>
                    <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Assunto:</label>
                    <input
                        type="text"
                        name="assunto"
                        value={formData.assunto}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Mensagem:</label>
                    <textarea
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Enviar Solicitação</button>
            </form>
        </div>
    );
}

export default SupportForm;