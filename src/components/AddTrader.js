import React,{useState,useEffect} from 'react'
import NavBar from "./NavBar"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { add } from '../Reducers/OrganisationSlice'
// import { useSelector } from 'react-redux/es/hooks/useSelector'

export default function AddTrader() {
    const navigate = useNavigate();
    // const {organisations} = useSelector((state) => state.organisations)
    const [traderName, setTraderName] = useState("")
    const [traderEmail, setTraderEmail] = useState("")
    const [traderPassword, setTraderPassword] = useState("")
    const [traderCategory, setTraderCategory] = useState("")
    const dispatch = useDispatch();

    useEffect(() => {
        add();
    }, []);

     const addTraderHandle = (e) => {
        e.preventDefault();
        let obj = {
            traderName: traderName,
            traderEmail: traderEmail,
            traderPassword: traderPassword,
            traderCategory: traderCategory,
        };
        dispatch(add(obj));
        setTraderName("");
        setTraderEmail("");
        setTraderPassword("");
        setTraderCategory("");
        navigate("/MyTraders")
     };
  return (
    <div>
        <NavBar/>
        <div>
            <label htmlFor='traderName'>Trader Name</label>
            <input type='text' value={traderName} onChange={(e) => setTraderName(e.target.value)}/>
            <label htmlFor='traderEmail'>Trader Email</label>
            <input type='email' value={traderEmail} onChange={(e) => setTraderEmail(e.target.value)}/>
        </div>
        <div>
            <label htmlFor='traderPassword'> Password</label>
            <input type='password' value={traderPassword} onChange={(e) => setTraderPassword(e.target.value)}/>
            <label htmlFor='AssignCategory'>Assign Category</label>
            <input type='search' value={traderCategory} onChange={(e)=> setTraderCategory(e.target.value)}/>
        </div>
        <div>
           <button className='btn btn-danger' onClick={addTraderHandle}>Add Trader </button>
        </div>
    </div>
  )
}
