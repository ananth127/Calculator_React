import './App.css';
import {useState} from 'react';

function App() {
  const [sum1,setSum1]=useState(0);
  const [name1,setName1]=useState('');
  const [name,setName]=useState('');
  const [count, setCount] = useState(0);
  const [message,setMessege]=useState('Welcome !!');
  var c = 0;
var sum=1;
  function handleClick() {
    setCount(count + 1);
    
  }
  function handleClick1() {
    // setCount(count + 1);
    c++;
    document.getElementById('a').textContent = `Click ${c} times`;
  }
  function handlechange(e){ 
    setName1(e.target.value);
  }
  function add(){
    if(parseInt(sum)===""){
      console.log("sum");
      sum='0';
    }
    if(parseInt(num)===""){
      console.log("num");
      num='0';
    }
    console.log(parseInt(sum)+" "+parseInt(num));
    sum=(parseInt(sum1)+parseInt(num));
    setSum1(sum);
    console.log("add= "+sum1);
    document.getElementById('in').value ="" ;
    setMessege(`${num} is Added`);
    
  }
  function sub(){
    if(parseInt(sum)===""){
      console.log("sum");
      sum='0';
    }
    if(parseInt(num)===""){
      console.log("num");
      num='0';
    }
    console.log(parseInt(sum)+" "+parseInt(num));
    sum=(parseInt(sum1)-parseInt(num));
    setSum1(sum);
    console.log("add= "+sum1);
    document.getElementById('in').value = "";
    setMessege(`${num} is Subtracted`);
  }
  function mull(){
    if(parseInt(sum)===""){
      console.log("sum");
      sum='1';
    }
    if(parseInt(num)===""){
      console.log("num");
      num='1';
    }
    console.log(parseInt(sum)+" "+parseInt(num));
    sum=(parseInt(sum1)*parseInt(num));
    setSum1(sum);
    console.log("add= "+sum1);
    document.getElementById('in').value = "";
    setMessege(`${num} is Multiplied`);
  }
  function division(){
    if(parseInt(sum)===""){
      console.log("sum");
      sum='1';
    }
    
    if(parseInt(num)===""){
      console.log("num");
      num='1';
    }
    if(parseInt(sum)===0 || parseInt(num)===0){
      setMessege("Can't do the operation !!");
    }else{
      console.log(parseInt(sum)+" "+parseInt(num));
    sum=(parseInt(sum1)/parseInt(num));
    setSum1(sum);
    console.log("add= "+sum1);
    document.getElementById('in').value = "";
    setMessege(`${num} is Divided`);
    }
    
  }
  // function mull(){
  //   if(val===0){
  //     setVal(1);
  //   }
  //   setSum(parseInt(sum)*parseInt(val));
  //   setVal("1");
  // }
  var num = 0;  // This value is statically assigned and won't cause re-renders when changed
  
    const handleChange = (e) => {
       console.log(e.target.value);  // This change won't cause the component to re-render
      num=e.target.value;
       // document.getElementById('input').value = num;  // Direct DOM manipulation
    };
    function Button({onClick,children}){
      return(
        <button  onClick={onClick}>{children}</button>);
    }
    function btn(){
      console.log("hi every one!!");
      setMessege("Button is Clicked !!!")
    }
    function Toggel({message}){
      return(
        <>
        <Button  onClick={message}>click</Button>
        </>
      );
    }

  return (
  <div>
    <p>Message={message}</p>
  <label>
    Calculator :
  </label>
  <input type='number' id='in' defaultValue={num} placeholder="Enter Number.." onChange={handleChange} />
  { /* <input type='text' id='in' defaultValue={num} placeholder="Enter Number.." onChange={(e) => num=e.target.value} />
   */}
  {/* <input type='text' value={val} onChange={(e) =>setVal(e.target.value)} /> */}
  <button onClick={add}>Add +</button>
  <button onClick={sub}>Sub -</button>
  <button onClick={mull}>Mul *</button>
  <button onClick={division}>Div /</button>
  <p>sum={sum1}</p>
  <button onClick={()=>setSum1(0)}>Reset</button><br></br><br></br>
  <label>
    using const "useState"
  </label> :
  <input type='text' id="ns" value={name} onChange={(e)=>setName(e.target.value)}/>
  <p>{name}</p>
  <label>
    using var :
  </label>
  <input type='text' value={name1} onChange={handlechange}/>
  <p>{name1}</p>
    <button onClick={(e)=>handleClick()}>
      Clicked {count} times
    </button>
    <button id='a' onClick={(e)=>handleClick1()}>
      Clicked {c} times
    </button>

<p> ----------------------------------------------------------------- 
</p>
   
   <Toggel message={()=>{alert("See console output!! using ctr+Shift+C") ;btn();}} />

   <div>
    <p>Content COPYRIGHT &copy;  {new Date().getFullYear() by Ananth}</p>
   </div>

  </div>



  );
}

export default App;
