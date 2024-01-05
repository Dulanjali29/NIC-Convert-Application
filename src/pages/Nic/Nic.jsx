import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

import lankaNIC from 'lanka-nic';


export default function Nic(){
  
    const [nic,setnic]=useState("")
    const [bday,setbday]=useState("")
    const [gender,setgender]=useState("")

    function search(){
        console.log(nic);
        let { dateOfBirth,gender}=lankaNIC.getInfoFromNIC(nic);
        setbday(dateOfBirth.toDateString());
        
        setgender(gender);
    }
   function clear(){
    setnic("")
    setbday("")
    setgender("")
  
   }
    return(
   <div>
     <Card  className='m-auto  mt-5' style={{ width: '30rem' }}>
    
      <Card.Body>
        <Card.Title>NIC Application</Card.Title>
        <Card.Text>
        <Form.Control value={nic} className="mt-4" type="text"  placeholder="Input Your NIC No" onChange={(val)=>setnic(val.target.value)}/>
        
        </Card.Text>
        <div>
        <Button className='mt-3'   variant="danger" onClick={search}>Submit</Button>
        </div>
      
        <h5 className='mt-3' date>Birth day :{bday}</h5>
        <h5 className='mt-2'>Gender : {gender}</h5>
        
        <div>
       
        <Button  className='ms-5'   variant="primary" onClick={clear}>Clear</Button>
        </div> 
        
      </Card.Body>
    </Card>
</div>
    )
} 