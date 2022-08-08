

const Scroll = (props) => {
    return (
        <div style={{height : '600px',overflowY : 'scroll',borderTop:'5px solid white'}}>
            {props.children}
        </div>
    )
}

export default Scroll;

//932901045435 Prathi