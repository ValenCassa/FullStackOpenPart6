import { filterAction } from "../reducers/anecdoteReducer"
import { useDispatch } from "react-redux"

const Filter = () => {
    const dispatch = useDispatch()

    const handleFilter = (event) => {
        const filter = event.target.value

        dispatch(filterAction(filter))
    }

    return (
        <div>
            <input name="filter" onChange={handleFilter}/>
        </div>
    )
}

export default Filter