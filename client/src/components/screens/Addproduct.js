import React,{useState,useEffect} from 'react';
import '../../App.css';
import {Link,useHistory} from 'react-router-dom'; 
import M from 'materialize-css';
import {useSelector,useDispatch} from 'react-redux';
import {saveProduct,deleteProduct,listAllProducts} from '../../actions/productActions';


const Addproduct=()=>{
    const [modalVisible,setModalVisible]=useState(false);
    const history=useHistory();
    const [id,setId]=useState("");
    const [title,setTitle]=useState("");
    const [url,setUrl]=useState("");
    const [category,setCategory]=useState("");
    const [price,setPrice]=useState("");
    const [count,setCount]=useState("");
    const [description,setDescription]=useState("");
    const [rating,setRating]=useState("");

    const productList=useSelector(state=>state.productList);
    const {products,loading,error}=productList;

    const productSave=useSelector(state=>state.productSave);
    const {loading:loadingSave,success:successSave,error:errorSave}=productSave;

    const productDelete=useSelector(state=>state.productDelete);
    const {loading:loadingDelete,success:successDelete,error:errorDelete}=productDelete;

    
    const dispatch=useDispatch();

    useEffect(()=>{
    	if(successSave){
    		setModalVisible(false);
    	}
    	dispatch(listAllProducts());
        return ()=>{
        };
    },[successSave,successDelete])

    const openModal=(product)=>{
    	setModalVisible(true);
    	setId(product._id);
    	setTitle(product.title);
    	setPrice(product.price);
    	setUrl(product.url);
    	setCategory(product.category);
    	setCount(product.count);
    	setDescription(product.description);
    	setRating(product.rating);
    }

    const PostData=()=>{
    	dispatch(saveProduct({_id:id,title,url,category,price,count,description,rating}));
    }

    const deleteH=(product)=>{
    	dispatch(deleteProduct(product._id));
    }

	return (
		<div className="content content-margined">
			<div className="product-header">
				<h3>Products</h3>
				<button className="btnn" onClick={()=>openModal({})}>Create Product</button>
			</div>
            {modalVisible &&
            <div className="mycard">
				<div className="card authcard input-field">
			    	<h2><span style={{color:"#ff523b"}}>Awe</span><span style={{color:"black"}}>zon</span></h2>
			    	{loadingSave && <div>sending...</div>}
			    	{errorSave && <div>{errorSave}</div>}
			    	<input type="text" placeholder="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
			    	<input type="text" placeholder="image" value={url} onChange={(e)=>setUrl(e.target.value)}/>
			    	<input type="text" placeholder="category" value={category} onChange={(e)=>setCategory(e.target.value)}/>
			    	<input type="number" placeholder="price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
			    	<input type="number" placeholder="count" value={count} onChange={(e)=>setCount(e.target.value)}/>
			    	<input type="text" placeholder="description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
			    	<input type="number" placeholder="rating" value={rating} onChange={(e)=>setRating(e.target.value)}/>
			    	<button className="btnn" onClick={()=>PostData()}>{id?"Update":"Create"} Product
			  		</button>
			  		<button className="btnn" onClick={()=>setModalVisible(false)}>Cancel
			  		</button>
		    	</div>
        	</div>
            }
			<div className="product-list">
				<table className="highlight">
					<thead>
						<tr>
							<th>Name</th>
							<th>Price</th>
							<th>Count</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{products.map(product=>(
							<tr>
								<td>{product.title}</td>
								<td>{product.price}</td>
								<td>{product.count}</td>
								<td>
									<button className="btnn" onClick={()=>openModal(product)}>Edit</button>
									{' '}
									<button className="btnn" onClick={()=>deleteH(product)}>Delete</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
		);
}

export default Addproduct; 