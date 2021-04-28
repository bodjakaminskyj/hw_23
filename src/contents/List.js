import { connect } from "react-redux"

const List = props => {
    const { items } = props
    return(
        <ul>
            {items.map((item) => (
                    <li key={item}>{item}</li>
            ))
            }
        </ul>
    )
}

const mapStateToProp = (state) => ({
    items: state.items
})

export default connect(mapStateToProp)(List);