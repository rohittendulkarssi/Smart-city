import React, { useEffect, useState } from 'react';
import { IContextProvider } from '../uxp';
import { EventsEnum } from '../index';

interface IMapChangeMode {
  uxpContext: IContextProvider;
}

const SearchBoxContainer: React.FunctionComponent<IMapChangeMode> = (props) => {
  const { uxpContext } = props;

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  


let [data,setData] = React.useState<any>([]) 
function getData () {  
    props.uxpContext.executeAction("E3D","GetDistrictDetails",{},{json:true}).then(res=>{ 
        console.log("District",res);
        setData(res);
    }).catch(e=>{
        
    }); 
}  

useEffect(() =>{
  getData() 
}, [])

 

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


// const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//   const inputValue = event.target.value.toLowerCase();
//   setSearchTerm(inputValue);

//   if (inputValue === '') { 
//     setSearchResults([]);
//   } else {    
//     const filteredResults = data.filter((item: { name: string; longitude: number; latitude: number; }) => {
//       const lowerCaseName = item.name.toLowerCase();
//       const lowerCaseInput = inputValue.toLowerCase(); 
      
//       return (
//         lowerCaseName.includes(lowerCaseInput) ||
//         String(item.longitude).includes(inputValue) ||
//         String(item.latitude).includes(inputValue)
//       );
//     });

//     setSearchResults(filteredResults);
//   }
// };



const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const inputValue = event.target.value.toLowerCase();
  setSearchTerm(inputValue);

  if (inputValue === '') { 
    setSearchResults([]);
  } else {    
    const filteredResults = data.filter((item: { name: string; }) => {
      const lowerCaseName = item.name.toLowerCase();
      const lowerCaseInput = inputValue.toLowerCase(); 
      
      return (
        lowerCaseName.includes(lowerCaseInput)  
        // String(item.longitude).includes(inputValue) ||
        // String(item.latitude).includes(inputValue)
      );
    });

    setSearchResults(filteredResults);
  }
};
 
 

const handleResultClick = (result: { name: string;   }) => {
  setSearchTerm(result.name);
  setSearchResults([]);
  
  if (uxpContext.eventHandler) { 
    uxpContext.eventHandler(EventsEnum.DistrictJump, {
      name: result.name,
      // longitude: result.longitude,
      // latitude: result.latitude,
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


 