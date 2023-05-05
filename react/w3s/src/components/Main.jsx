import React from 'react';
import { v4 as uuid } from 'uuid';

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
    const [formInputs, setFormInputs] = React.useState({
        name: '',
        email: '',
        message: '',
        color: 'peru',
    });

    const [messages, setMessages] = React.useState([]);

    function handleChange(e) {
        setFormInputs({ ...formInputs, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        const copy = [...messages];

        e.preventDefault();
        if (!(formInputs.name + formInputs.email + formInputs.message)) return;
        copy.unshift(formInputs);
        setMessages(copy);

        setFormInputs({
            name: '',
            email: '',
            message: '',
            color: 'peru',
        });
    }

    return (
        <main>
            <form className="form" onSubmit={handleSubmit}>
                <h2>Contact</h2>
                <div className="form-input">
                    <label htmlFor="input-name">Name</label>
                    <input
                        id="input-name"
                        type="text"
                        name="name"
                        value={formInputs.name || ''}
                        maxLength="50"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="input-email">Email</label>
                    <input
                        id="input-email"
                        type="email"
                        name="email"
                        value={formInputs.email || ''}
                        maxLength="50"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="input-message">Message</label>
                    <textarea
                        id="input-message"
                        name="message"
                        value={formInputs.message || ''}
                        maxLength="500"
                        onChange={handleChange}
                    >
                    </textarea>
                </div>
                <div className="form-input">
                    <label htmlFor="input-select">Color</label>
                    <select
                        id="input-select"
                        className="form-select"
                        name="color"
                        value={formInputs.color}
                        onChange={handleChange}>
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
