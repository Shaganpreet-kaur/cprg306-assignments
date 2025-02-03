export default function Item({name,quantity, category}){
    return(
        <section className="bg-slate-300 m-2 p-2">
            <h2 className="font-bold text-lg text-orange-600">{name}</h2>
            <p className="ml-1">quantity:{quantity}</p>
            <p className="ml-1">category:{category}</p>
            
        </section>
    );
}