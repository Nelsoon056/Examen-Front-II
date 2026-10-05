import { useState } from 'react';
import { Button, Label, TextInput, Textarea } from "flowbite-react";

export function AdminPanel({ db, setDb }) {
  
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: crypto.randomUUID(),
      name: name,
      img: img,
      desc: desc
    };

    setDb([...db, newProduct]);

    setName("");
    setImg("");
    setDesc("");
    
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Create a new Product</h2>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        
        <div>
          <Label htmlFor="name">Product Name</Label>
          <TextInput 
            id="name" 
            type="text" 
            placeholder="Example: Apple"
            required 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="img">Image URL</Label>
          <TextInput 
            id="img" 
            type="url" 
            placeholder="https://..."
            required 
            value={img} 
            onChange={(e) => setImg(e.target.value)} 
          />
        </div>

        <div>
          <Label htmlFor="desc">Description</Label>
          <Textarea 
            id="desc" 
            required 
            placeholder='product description'
            rows={4}
            value={desc} 
            onChange={(e) => setDesc(e.target.value)} 
          />
        </div>

        <Button type="submit" className='buttonAdmin'>
          Guardar Producto
        </Button>
      </form>
    </div>
  );
}