export function Layout(props){
    
    return(
        <div className="bg-black min-h-screen flex flex-col"> 
            <h1 className="text-center text-3xl font-bold text-zinc-200 py-10">{props.title}</h1>

            <main className="container flex-grow mx-auto border border-green-300 rounded">
                {props.children}
            </main>

            <footer className="py-8 text-white">
                <p>@anninha</p>
            </footer>
        </div>
    )
}