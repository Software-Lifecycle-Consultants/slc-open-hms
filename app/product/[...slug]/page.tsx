export default function Prod({
    params,
}:{
    params:{slug:string[];};
}){
    if(params.slug.length === 1){
        return(
            <h1> viewing product {params.slug[0]}</h1>
        )
    }
    else{
        return <h1> you are in product page</h1>
    }
}