interface CategoryProps{
    params:{
        categories:string[],
        searchParams?:string
    }
}
/*La rutas dinamicas se ponen dentro de corchetes*/ 
export default function Category(props:CategoryProps){
    const{categories} = props.params
    return (
        <h1>Category dynamic:{categories}</h1>
    )
}