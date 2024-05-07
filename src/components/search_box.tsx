import React, { useEffect, useState, useRef } from 'react';
import { IContextProvider } from '../uxp';
import { EventsEnum } from '../index';

interface IMapChangeMode {
  uxpContext: IContextProvider;
}

const SearchBoxContainer: React.FunctionComponent<IMapChangeMode> = (props) => {
  const { uxpContext } = props;

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = useRef<HTMLInputElement>(null); // Ref for the input element

  let [data, setData] = React.useState<any>([]);

  function getData() {
    props.uxpContext.executeAction("E3D", "GetDistrictDetails", {}, { json: true }).then(res => {
      console.log("District", res);
      setData(res);
    }).catch(e => {

    });
  }

  useEffect(() => {
    getData()
  }, []);

  useEffect(() => {
    // Attach event listener to document for outside clicks
    document.addEventListener('click', handleClickOutside);

    return () => {
      // Clean up event listener on component unmount
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    // Check if the click occurred outside of the input element
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      // Blur the input element to lose focus
      inputRef.current.blur();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.toLowerCase();
    setSearchTerm(inputValue);

    if (inputValue === '') {
      setSearchResults([]);
    } else {
      const filteredResults = data.filter((item: { name: string; }) => item.name.toLowerCase().includes(inputValue));
      setSearchResults(filteredResults);
    }
  };

  const handleResultClick = (result: { name: string; }) => {
    setSearchTerm(result.name);
    setSearchResults([]);

    if (uxpContext.eventHandler) {
      uxpContext.eventHandler(EventsEnum.DistrictJump, {
        name: result.name,
      });
    }
  };

  const handleClearClick = () => {
    setSearchTerm('');
    setSearchResults([]);
  };

  return (
    <div className='searchBox-widget'>
      <div className='searchbox-container'>
        <input
          ref={inputRef}  
          className='searchbox'
          type='text'
          value={searchTerm}
          onChange={handleInputChange}
          placeholder='Search District'
        />
        {searchTerm && (
          <a className='clear-button' onClick={handleClearClick}> X </a>
        )}
      </div>
      <ul className='search-list'>
        {searchResults.map((result, index) => (
          <li key={index} onClick={() => handleResultClick(result)}>
            {result.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBoxContainer;





















// import React, { useEffect, useState, useRef } from 'react';
// import { IContextProvider } from '../uxp';
// import { EventsEnum } from '../index';

// interface IMapChangeMode {
//   uxpContext: IContextProvider;
// }

// const SearchBoxContainer: React.FunctionComponent<IMapChangeMode> = (props) => {
//   const { uxpContext } = props;

//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [isOpen, setIsOpen] = useState(false);

//   let [data, setData] = useState<any>([]);

//   useEffect(() => {
//     getData();
//   }, []);

//   function getData() {
//     props.uxpContext
//       .executeAction("E3D", "GetDistrictDetails", {}, { json: true })
//       .then((res) => {
//         console.log("District", res);
//         setData(res);
//       })
//       .catch((e) => {});
//   }

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const inputValue = event.target.value.toLowerCase();
//     setSearchTerm(inputValue);

//     if (inputValue === '') {
//       setSearchResults([]);
//       setIsOpen(false);
//     } else {
//       const filteredResults = data.filter((item: { name: string }) =>
//         item.name.toLowerCase().includes(inputValue)
//       );
//       setSearchResults(filteredResults);
//       setIsOpen(true);
//     }
//   };

//   const handleResultClick = (result: { name: string }) => {
//     setSearchTerm(result.name);
//     setSearchResults([]);
//     setIsOpen(false);

//     if (uxpContext.eventHandler) {
//       uxpContext.eventHandler(EventsEnum.DistrictJump, {
//         name: result.name,
//       });
//     }
//   };

//   const handleClearClick = () => {
//     setSearchTerm('');
//     setSearchResults([]);
//     setIsOpen(false);
//   };

//   const dropdownRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setIsOpen(false);
//       }
//     }

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [dropdownRef]);

//   return (
//     <div className='searchBox-widget'>
//       <div className='searchbox-container' ref={dropdownRef}>
//         <input
//           className='searchbox'
//           type='text'
//           value={searchTerm}
//           onChange={handleInputChange}
//           placeholder='Search District'
//         />
//         {searchTerm && (
//           <a className='clear-button' onClick={handleClearClick}>
//             X
//           </a>
//         )}
//       </div>
//       {isOpen && (
//         <ul className='search-list'>
//           {searchResults.map((result, index) => (
//             <li key={index} onClick={() => handleResultClick(result)}>
//               {result.name}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default SearchBoxContainer;
















// import React, { useEffect, useState } from 'react';
// import { IContextProvider } from '../uxp';
// import { EventsEnum } from '../index';

// interface IMapChangeMode {
//   uxpContext: IContextProvider;
// }

// const SearchBoxContainer: React.FunctionComponent<IMapChangeMode> = (props) => {
//   const { uxpContext } = props;

//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
  


// let [data,setData] = React.useState<any>([]) 
// function getData () {  
//     props.uxpContext.executeAction("E3D","GetDistrictDetails",{},{json:true}).then(res=>{ 
//         console.log("District",res);
//         setData(res);
//     }).catch(e=>{
        
//     }); 
// }  

// useEffect(() =>{
//   getData() 
// }, [])

 

// const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//   const inputValue = event.target.value.toLowerCase();
//   setSearchTerm(inputValue);

//   if (inputValue === '') { 
//     setSearchResults([]);
//   } else {    
//    const filteredResults = data.filter((item: { name: string; }) => item.name.toLowerCase().includes(inputValue));
//    setSearchResults(filteredResults);
//   }
// }; 

// const handleResultClick = (result: { name: string;   }) => {
//   setSearchTerm(result.name);
//   setSearchResults([]);
  
//   if (uxpContext.eventHandler) { 
//     uxpContext.eventHandler(EventsEnum.DistrictJump, {
//       name: result.name, 
//     });
//   }
// };


// const handleClearClick = () => {
//   setSearchTerm('');
//   setSearchResults([]);
// };

// return (
//   <div className='searchBox-widget'>
//     <div className='searchbox-container'>
//       <input
//         className='searchbox'
//         type='text'
//         value={searchTerm}
//         onChange={handleInputChange}
//         placeholder='Search District'
//       />
//       {searchTerm && (
//         <a className='clear-button' onClick={handleClearClick}> X </a>
//       )}
//     </div>
//     <ul className='search-list'>
//       {searchResults.map((result, index) => (
//         <li key={index} onClick={() => handleResultClick(result)}>
//           {result.name}
//         </li>
//       ))}
//     </ul>
//   </div>
// );
// };

// export default SearchBoxContainer;


 