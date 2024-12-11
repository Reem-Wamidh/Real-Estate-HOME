import  Card from "../Card/Cards.jsx";
import  Properties  from "../lib/DumData.js";

const List =  () =>{


    return(<>

    <div    className=" grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2  gap-4  text-5xl  content-stretch justify-items-center  overflow-y-scroll  "
              style={{
                maxHeight: "calc(100vh - 150px)",
                padding: "1rem",
              }}>

        {Properties.map(item=>(
            <Card key={item.id} item={item} />
        ))

        }
    </div>
    
    </>);
}

export default List;