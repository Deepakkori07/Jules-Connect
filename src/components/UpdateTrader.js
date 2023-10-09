import React,{useState,useEffect} from 'react'
import NavBar from './NavBar'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useParams,useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { update } from '../Reducers/OrganisationSlice'


export default function UpdateTrader() {
    const {organisations} = useSelector((state) => state.organisations)
    const {id} = useParams();
    const [currTraderName, setCurrTraderName] = useState("")
    const [currTraderEmail, setCurrTraderEmail] = useState("")
    const [currTraderPassword, setCurrTraderPassword] = useState("")
    const [currTraderCategory, setCurrTraderCategory] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const setCurrTraderData = (ids) => {
        let traderID = organisations.find((item) => {
            return item.id === ids;
        });
        setCurrTraderName(traderID.traderName);
        setCurrTraderEmail(traderID.traderEmail);
        setCurrTraderPassword(traderID.traderPassword);
        setCurrTraderCategory(traderID.tradercategory);
    };

    useEffect(() => {
        setCurrTraderData(id);
    },[id]);

    const updateMaterialData = () => {
        let obj ={
            traderName: currTraderName,
            traderEmail: currTraderEmail,
            traderPassword: currTraderPassword,
            tradercategory: currTraderCategory,
            id,
        };
        dispatch(update(obj));
        navigate("/MyTraders");
    };
  return (
    <div>
        <NavBar/>
        <form key={id}>
        <div>
            <label htmlFor='traderName'>Trader Name</label>
            <input type='text' value={currTraderName} onChange={(e) => setCurrTraderName(e.target.value)}/>
            <label htmlFor='traderEmail'>Trader Email</label>
            <input type='email' value={currTraderEmail} onChange={(e) => setCurrTraderEmail(e.target.value)}/>
        </div>
        <div>
            <label htmlFor='traderPassword'> Password</label>
            <input type='password' value={currTraderPassword} onChange={(e) => setCurrTraderPassword(e.target.value)}/>
            <label htmlFor='AssignCategory'>Assign Category</label>
            <input type='search' value={currTraderCategory} onChange={(e)=> setCurrTraderCategory(e.target.value)}/>
        </div>
        <div>
           <button className='btn btn-danger' onClick={updateMaterialData}>Add Trader </button>
        </div>
        </form>
    </div>
  )
}
