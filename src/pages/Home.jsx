import { useRef, useState } from "react";
import { Layout } from "../components/Layout";

export function Home() {
   const [cards, setCards] = useState([]);

    const ref = useRef(null);

    const onClickHandle = () =>{
       //adcionar
        const value = ref.current.value;
        ref.current.value=""

        const valueObj = {
            value,
            checked: false
        }

        setCards((valorAntigo) => {
            return [...valorAntigo, valueObj]
        })    
    }
//delete 
    const onDeleteHandle = (value) => {
        setCards((cards) => cards.filter(el => el.value != value) );
    }

    //check

    const onchecktHandle = (value) => {
        setCards((cards) => cards.map(el => {
            if (el.value === value) {
                return { ...el, checked: !el.checked } 
            }

            return el
        }))
    }








    return (
        <Layout title="ToLIST" > 
           <section className="flex flex-col gap-2  aline-center mt-10 ">
                <input ref={ref} type="text" placeholder="Digite sua tarefa" className="w-72 h-12 mx-auto rounded-md  "/>
                <button
                    onClick={onClickHandle} 
                    className="bg-green-300 px-4 py-2 rounded-md
                    text-black font-bold w-40 mt-10 mx-auto"
                >Adicionar</button>
           </section>

           <section className="text-white grid grid-cols-3 gap-4 mt-16 ml-20 w-10/12 ">
                {cards.map((el, index) => {
                    return (
                        <article key={index} className={`border cursor-pointer border-green-300 ${el.checked && 'bg-green-500'}`} onClick={() => onchecktHandle(el.value)} >
                            <div className="ml-5 mt-5">{el.value}</div>
                            <div className="deleteItem">
                                <button
                                onClick={() => onDeleteHandle(el.value)} 
                                className=" px-4 py-2 rounded-md
                                text-white font-bold w-10 mx-auto ">X</button>
                            </div>
                        </article>
                    )
                })}
           </section>
            
        </Layout>

    )
    
}