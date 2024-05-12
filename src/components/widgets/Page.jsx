function Page(props){
    return(
        <main className="p-2 text-black"  >
        <h3 className="mb-4 text-2xl"> {props.name} </h3>
        { props.children }
        </main>
    )
}
export default Page