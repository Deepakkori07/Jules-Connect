import React,{useState, useEffect} from 'react'
import NavBar from './NavBar'
import { updateCategories } from '../Reducers/CategorySlice'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'


export default function UpdateCategory() {
    const {categories} = useSelector((state) => state.categories);
    const [currCategory, setCurrCategory] = useState("");
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const setUpdateCategory  = (ids) => {
        let CategoryID = categories.find((item) => {
            return item.id = ids;
        });
        setCurrCategory(CategoryID.materialCategory)
    };

    useEffect(() => {
        setUpdateCategory(id);
    },[id]);

    const updateCategory = () => {
        let obj = {
            materialCategory:currCategory,
            isArchive:0,
            id,
        };
        dispatch(updateCategories(obj));
        navigate("/CategoryList");
    };

  return (
    <div>
        <NavBar/>
                    <lable>Update Category</lable>
                    <input type="text" value={currCategory} onChange={(e) => setCurrCategory(e.target.value)}/>
                    <button
                      type="button"
                      class="btn btn-primary"
                      onClick={updateCategory}
                    >
                      Add
                    </button>
    </div>
  )
}
