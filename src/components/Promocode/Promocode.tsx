import './Promocode.css'

function Promocode() {
    return (
        <div className="promocode">
            <h2 className="promocode_title">
                Скидка <strong>100%</strong> на индивидуальное занятие с тренером по падел-теннису
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
                <p className="promocode_description">
                    Чтобы активировать промокод назовите его мужу и скидка учется. Срок действия промокода не ограничен
                </p>
            </div>
        </div>
    )
}

export default Promocode