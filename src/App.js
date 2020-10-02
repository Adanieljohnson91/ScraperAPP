import React, {useState} from 'react';
import services from "./services/puppetBridge.js";
import './App.css';


function App() {
  const [page, setPage] = useState({page:""})


  const changeHandler = (e) =>{
    let target = e.target;
    let {name, value} = target
    setPage((props)=>{
      return{
        ...props,
        [name]:value
      }
    })
  }
  const  search = async () =>{
   let res = await services.sendSearch(page.page);
   console.log(res);
  }

  return (

    <div>
      <h1 className="text-primary justify-content-center">Hello World</h1>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Enter Website</label>
          <input type="text" className="form-control" name="page" value={page.page} onChange={changeHandler} />
          <button type="button" onClick={search}>Search</button>
          <small id="scrape text" className="form-text text-muted">
            Scrape Page 
          </small>
        </div>
      </form>

    </div>
  );
}

export default App;