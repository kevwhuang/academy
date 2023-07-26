import React from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuid } from 'uuid';

const defaultValues = {
    name: '',
    email: '',
    message: '',
    color: 'peru',
};

function Message(props) {
    const { color, email, message, name } = props.data;
    const classAdd = color === 'teal' ? '--switch' : '';

    return (
        <article className="message">
            <p className={`message-name${classAdd}`}>{name}</p>
            <p className={`message-email${classAdd}`}>{email}</p>
            <p className="message-message">{message}</p>
        </article>
    );
}

function Main() {
    const [messages, setMessages] = React.useState([]);
    const { formState, handleSubmit, register, reset }
        = useForm({ defaultValues, shouldUseNativeValidation: true });

    function onSubmit(data) {
        if (data.name + data.email + data.message) setMessages([data, ...messages]);
    }

    React.useEffect(() => {
        if (formState.isSubmitSuccessful) reset(defaultValues);
    }, [formState]);

    return (
        <main>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <h2>Contact</h2>
                <div className="form-input">
                    <label htmlFor="input-name">Name</label>
                    <input
                        id="input-name"
                        type="text"
                        maxLength="50"
                        {...register('name')}
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="input-email">Email</label>
                    <input
                        id="input-email"
                        type="email"
                        maxLength="50"
                        {...register('email')}
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="input-message">Message</label>
                    <textarea
                        id="input-message"
                        maxLength="500"
                        {...register('message')}
                    >
                    </textarea>
                </div>
                <div className="form-input">
                    <label htmlFor="input-select">Color</label>
                    <select
                        id="input-select"
                        className="form-select"
                        {...register('color')}>
                        <option value="peru">Peru</option>
                        <option value="teal">Teal</option>
                    </select>
                </div>
                <div className="form-input">
                    <button type="submit">Submit</button>
                </div>
            </form>
            <section className="form-output">
                <h2>Messages</h2>
                {messages.map(e => <Message key={uuid()} data={e} />)}
            </section>
        </main>
    );
}

export default Main;
