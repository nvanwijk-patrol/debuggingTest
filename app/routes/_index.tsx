import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import axios from "axios";

export let loader = async () => {
  const response = await axios.get('https://patrol-test.myshopify.com/admin/product.json', {
    
    //API Keys should of course be stored in .env files and not plain text 
    //but this is a test store with default fake data so don't worry about this security fix
    headers: {
      'X-Shopify-Access-Token': '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',
    },
  });
  return json(response.data);
};

export default function Index() {
  const data = useLoaderData();
  return (
    <div style={{margin:"20px"}}>
      <h1>Product List</h1>
      <ul>
        {data.products.map((product) => (
          <li key={product.id}>
            <div style={{width:"250px"}}>
              <img src={product.image.src} />
            </div>
            <p>Product Title: <b>{product.title}</b></p>
            <form method="post" action={`/update/${product.id}`}>
              <input type="text" name="title" placeholder="Update Title" />
              <button style={{marginLeft:"10px", border:"1px solid black", padding:"5px"}}>Update</button>
            </form>
            <hr/>
          </li>
        ))}
      </ul>
    </div>
  );
}
