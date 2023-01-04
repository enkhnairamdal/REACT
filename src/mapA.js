
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

 const categories = [
    {
      
        name: "Улс төр",
    },
    {
      
        name: "Нийгэм",
    },
    {
      
        name:"Спорт",
    },
]

  
    export function Categorylist(){
        return (
            <div >
                 {categories.map((cat1) =>(
                    <Card className='col-6 mx-auto my-3 ' >
                        <div className='mb-4 d-flex justify-content-between  my-4 mx-3' key={cat1.name}>
                        {cat1.name} {cat1.id}
                        <Button variant="outline-primary">Засах</Button>
                    </div>
                    </Card>
                    
                  
                     
                   
            ))}
            </div>
           
            
        );
    }