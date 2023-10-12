import React,{useState,useEffect} from 'react'
import NavBar from "./NavBar"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addTrader } from '../Reducers/TraderSlice'
import moment from 'moment/moment'


export default function AddTrader() {
    const navigate = useNavigate();
    const [traderName, setTraderName] = useState("")
    const [traderEmail, setTraderEmail] = useState("")
    const [traderPassword, setTraderPassword] = useState("")
    const [traderCategory, setTraderCategory] = useState("")
    const [traderDate, setTraderDate] = useState("")
    const dispatch = useDispatch();

    useEffect(() => {
        addTrader();
    }, []);

     const addTraderHandle = (e) => {
        e.preventDefault();
        let obj = {
            traderName: traderName,
            traderEmail: traderEmail,
            traderPassword: traderPassword,
            traderCategory: traderCategory,
            isArchive:0,
            traderDate:moment().format('DD/MM/YYYY'),
        };
        dispatch(addTrader(obj));
        setTraderName("");
        setTraderEmail("");
        setTraderPassword("");
        setTraderCategory("");
        setTraderDate("");
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
