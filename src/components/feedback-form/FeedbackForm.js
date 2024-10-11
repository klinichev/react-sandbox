import { useState } from 'react';
import emailjs from 'emailjs-com';

import { FeedbackFormContainer } from './styles.js';

export default function FeedbackForm() {
    const SERVICE_ID = 'service_p5wzmol';
    const TEMPLATE_ID = 'template_efej36c';
    const ACCOUNT_ID = 'Qg8b1bk-aTpMQlmXj';

    const [formState, setFormState] = useState('default');

    const sendEmail = (e) => {
        e.preventDefault();
        setFormState('loading');
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, ACCOUNT_ID)
            .then((result) => {
                setFormState('success');
            }, (error) => {
                console.log(error.text);
                setFormState('error');
            });
    }

    if (formState === 'loading') {
        return (
            <FeedbackFormContainer>
                <h2>Отправляем письмо...</h2>
            </FeedbackFormContainer>
        );
    }

    if (formState === 'success') {
        return (
            <FeedbackFormContainer>
                <h2>Отправили!</h2>
            </FeedbackFormContainer>
        );
    }

    if (formState === 'error') {
        return (
            <FeedbackFormContainer>
                <h2>Оказывается, почта сегодня не ходит... Приходите завтра.</h2>
            </FeedbackFormContainer>
        );
    }

    return (
        <FeedbackFormContainer>
            <h2>Хотите написать мне письмо?</h2>
            <form onSubmit={sendEmail}>
                <div>
                    <input placeholder='Имя' type='text' name='from_name' required={true} autoсomplete='on' />
                </div>
                <div>
                    <input placeholder='Электропочта' type='email' name='from_email' required={true} autoсomplete='on' />
                </div>
                <div>
                    <textarea placeholder='Сообщение' name='html_message' required={true}></textarea>
                </div>
                <div>
                    <button type='submit'>Отправить</button>
                </div>
            </form>
        </FeedbackFormContainer>
    );
}