import { useState } from 'react';
export const Form = () => {
  // const initalvalue = {
  //   name: '',
  //   email: '',
  // };
  const [data, setData] = useState({
    name: '',
    email: '',
  });

  const handleChang = (e) => {
    const { name, value } = e.target;
    setData((newData) => ({
      ...newData,
      [name]: value,
    }));
  };
  const handleSetup = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSetup}>
        <input
          type='text'
          value={data.name}
          placeholder='enter Name'
          name='name'
          onChange={handleChang}
        />
        <br />
        <input
          type='text'
          value={data.email}
          placeholder='enter Email'
          name='email'
          onChange={handleChang}
        />
        <br />
        <button>Click Me</button>
      </form>
    </>
  );
};
// const initialvalues = {
//     fname: "",
//     lname: ""
//   };
//   const [data, setData] = useState(initialvalues);
//   const display = () => console.log(data);

//   const handleChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };
//   return (
//     <div className="App">
//       <input
//         placeholder="enter name"
//         value={data.fname}
//         name="fname"
//         id="fname"
//         onChange={handleChange}
//       />
//       <input
//         placeholder="enter surname"
//         value={data.lname}
//         name="lname"
//         id="lname"
//         onChange={handleChange}
//       />
//        <button onClick={display}>click</button>
//     </div>
//   );
// }
