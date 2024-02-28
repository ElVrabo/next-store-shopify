interface CategoryProps{
    params:{
        category:string
    }
}
/*La rutas dinamicas se ponen dentro de corchetes*/ 
export default function Category(props:CategoryProps){
    const{category} = props.params
    return (
        <h1>Category dynamic:{category}</h1>
    )
}