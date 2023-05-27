import React, { useEffect, useState } from 'react'
import pb from '../connectors/pocketbase'

const Menu = () => {

  const [menu, setMenu] = useState([]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleNamechange = (e) => {
    setName(e.target.value);
  };

   const handleDescriptionchange = (e) => {
     setName(e.target.value);
  };


  const fetchMenu = async () => {
    const records = await pb.collection('menu').getFullList({
    sort: '-created',
    });
    return records
  }

  useEffect(() => {
    fetchMenu().then((res) => setMenu(res)).catch((err) => console.log(err))
  }, [])

  return (
    <div className="p-32">
      <div className="text-5xl text-center p-8">
        Menu<br></br>
      </div>
      <div>
        <table id="customers" className="">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Img</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((menu) => {
              return (
                <tr key={menu.id} className="text-center p-3">
                  <td>{menu.name}</td>
                  <td>{menu.description}</td>
                  <td></td>
                  <td>
                    <button className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded">
                      Edit
                    </button>
                  </td>
                  <td>
                    <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Menu
