function Drawer() {
    return (<div style={{display: "none"}} className="overlay">
        <div className="drawer d-flex ">
            <h2 className={"mb-30"}>Cart<img className={"removeBtn cu-p"} src="/img/btnRemove.svg"
                                             alt="Remove"/></h2>
            <div className={"items flex"}>
                <div className="cartItem d-flex align-center mb-20">
                    <div className="cartItemImg" style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}}>
                    </div>
                    <div className="mr-20 flex">
                        <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                        <b>300$</b>
                    </div>
                    <img className={"removeBtn"} src="/img/btnRemove.svg" alt="Remove"/>
                </div>
                <div className="cartItem d-flex align-center mb-20">

                    <div className="cartItemImg" style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}}>

                    </div>
                    <div className="mr-20 flex">
                        <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                        <b>300$</b>
                    </div>
                    <img className={"removeBtn"} src="/img/btnRemove.svg" alt="Remove"/>
                </div>
            </div>
            <div className="cartTotalBlock">
                <ul>
                    <li>
                        <span>Итого</span>
                        <div></div>
                        <b>300$</b></li>
                    <li>
                        <span>Налог 5%</span>
                        <div></div>
                        <b>20$</b></li>

                </ul>
                <button className='green-button'>Оформить заказ <img src={"/img/buy_arrow.svg"}
                                                                     alt={'buy_arrow'}/></button>
            </div>

        </div>
    </div>);
}

export default Drawer;
