function Header(){

    return(<header className="d-flex justify-between align-center p-40">
        <div className=" d-flex align-center">
            <img width={40} height={40} src="img/logo.svg" alt=""/>
            <div className={"ml-15"}>
                <h3 className="text-uppercase">React Sneakers</h3>
                <p className={"opacity-5"}>Best sneakers Store</p>
            </div>
        </div>
        <ul className="d-flex">
            <li className="mr-30">
                <img src="img/cart.svg" alt=""/>
                <span className="ml-10">1205$</span>
            </li>
            <li>
                <img src="img/user.svg" alt=""/>
            </li>
        </ul>
    </header>);
}
export default Header;
