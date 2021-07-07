import Card from './components/card'
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
    const arr=[
        {name:'Мужские Кроссовки Nike Blazer Mid Suede',price:300 ,img:'img/sneakers/1.jpg'},
        {name:'Мужские Кроссовки Nike Air Max 270',price:350 ,img:'img/sneakers/2.jpg'},
        {name:'Мужские Кроссовки Nike Blazer Mid Suede',price:267 ,img:'img/sneakers/3.jpg'},
        {name:'Кроссовки Puma X Aka Boku Future Rider',price:267 ,img:'img/sneakers/4.jpg'},
    ];

    return (
        <div className="wrapper clear">
           <Drawer/>
            <Header/>
            <div className="content p-40">
                <div className="d-flex align-center mb-40 justify-between">
                    <h1>All Sneakers</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="Search"/>
                        <input type="text" placeholder="Поиск..."/>
                    </div>
                </div>

                <div className={"d-flex"}>
                    {arr.map(value => {

                        return (<Card title={value.name} price={value.price} img={value.img} onClick={()=>value}/>)
                    })}

                </div>
            </div>
        </div>
    );
}

export default App;
