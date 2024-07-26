import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
    const [category, setCategory] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:3000/auth/add_category', { category })
            .then(result => {
                console.log(result);
                if (result.data.Status) {
                    navigate('/dashboard/category');
                } else {
                    alert(result.data.Error);
                }
            })
            .catch(err => console.log(err));
    };
    
    return (
        <div className='d-flex justify-content-center align-items-center h-75'>
            <div className='p-3 rounded 2-25 border'>
                <h2 className='text-center text-primary'>Add Category</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="category"><strong>Category:</strong></label>
                        <input 
                            type="text" 
                            name="category" 
                            autoComplete='off' 
                            placeholder='Enter category' 
                            onChange={(e) => setCategory(e.target.value)} 
                            className='form-control rounded-3' 
                        />
                    </div>
                    <button type="submit" className='btn btn-primary w-100 rounded-3'>Add Category</button>
                </form>
            </div>
        </div>
    );
};

export default AddCategory;
