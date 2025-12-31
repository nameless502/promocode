import './Promocode.css'

function Promocode() {
    return (
        <div className="promocode">
            <h2 className="promocode_title">
                Скидка <strong>100%</strong> на занятие с тренером по падел-теннису
            </h2>
            <div className="promocode_ticket-wrapper">
                <div className="promocode_ticket">
                    <div className="promocode_ticket-shape">
                        <div className="promocode_ticket-shape-top"></div>
                        <div className="promocode_ticket-shape-rip">
                            <span className="promocode_ticket-text">
                                СНГ2026
                            </span>
                        </div>
                        <div className="promocode_ticket-shape-bottom"></div>
                    </div>
                </div>
                <div className="promocode_description">
                    <p className="promocode_description-text promocode_description-text_main">
                        Для активации промокода назовите его мужу и скидка применится. Срок действия промокода не ограничен
                    </p>
                    <p className="promocode_description-text promocode_description-text_secondary">
                        Место проведения акции падел-клуб "Padel Friends", подробнее:
                        {' '}
                        <a>https://padelfriends.ru/kazan</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Promocode