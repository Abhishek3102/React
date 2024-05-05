// import { Fragment } from "react";
// function ListGroup() {
//   return (
//     <Fragment>
//       <h1>List</h1>
//       <ul className="list-group">
//         <li className="list-group-item">An item</li>
//         <li className="list-group-item">A second item</li>
//         <li className="list-group-item">A third item</li>
//         <li className="list-group-item">A fourth item</li>
//         <li className="list-group-item">And a fifth one</li>
//       </ul>
//     </Fragment>
//   );
// }

import { useState } from "react";

// { items: [], heading: string }
interface ListGroupProps {
  items: string[];
  heading: string;
  // (item:string) => void
  onSelectItem: (item: string) => void;
}

// For fragments, the same code can be written as:

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={() => console.log("Clicked")}
            //To show the name of the clicked item:
            // onClick={() => console.log(item, index)}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
