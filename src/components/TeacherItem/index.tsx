import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/62737540?s=460&u=09e9ee790a8aa4fddae19edd23e6c2c604390eae&v=4" alt="Luan Ogawa"/>
                <div>
                    <strong>Luan Ogawa</strong>
                    <span>Lógica</span>
                </div>
            </header>
            
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                <br/>
                Numquam quaerat similique necessitatibus velit nostrum, delectus deserunt qui laborum et sint eius fuga sit consectetur cum provident id saepe doloremque! 
                <br/>
                Possimus!
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$50,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;