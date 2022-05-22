

const Component=( {children,additionalStyles}  )=>{
    const style={
        innerdiv:{
            backgroundColor:"black",
            color:"white",
            maxWidth: "500px",
            border: "1px solid #dadce0",
            borderRadius: "8px",
            marginBottom: "12px",
            padding: "24px",
            minWidth:"350px",
            minHeight: "200px",
            display:"flex",
            justifyContent: 'center',
            alignItems: 'center',
            ...additionalStyles
        }
    }
    return(
        <div style={style.innerdiv}>
          {children}  
        </div>
    )
}




const Button=({additionalStyles,children,onClick})=>{
    const style={
        width:"10rem",
        minWidth:"50%",
        height:"2rem",
        backgroundColor:"#33adff",
        display:"flex",
        justifyContent: 'center',
        alignItems: 'center',
        color:"white",
        borderRadius: "5px",
        userSelect:"none",
        marginTop: "1.5rem",
        cursor:"pointer",
        // boxShadow:"0 0 10px 10px #33adff",
        ...additionalStyles
    }
  return (
    <div onClick={onClick} className='btn_primary' style={style}>
    {children}
    </div>
  )
}



const App=()=>{
    const [hide,setHide]=React.useState(false)
    const style={
        App:{
            display:"grid",
            placeItems:"center",
            width:"100%",
            height:"100vh",
            backgroundColor:"rgb(240, 235, 248)",
            overflow: 'hidden',
            padding: "20px",
            fontWeight: 'bold',
        },
        
       
    }
    const clickhandler=()=>{
        if(!hide){
            setHide(true)
        }else{
            setHide(false)
        }
    }
    return(
        <div style={style.App}>
          <div style={{display:"flex",alignItems:"center"}}>
         {hide?( <Component additionalStyles={{backgroundColor:"#f51624",borderRadius:"50%",width:"300px",height:"300px"}}>
               Component2
           </Component>):( <Component>
               Component1
           </Component>)}
          
          </div>
          <Button onClick={clickhandler}>
              Toggle Component
          </Button>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(<App />);