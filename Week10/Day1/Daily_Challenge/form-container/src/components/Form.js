import "./Form.css";

function Form(props) {
  return (
    <main>
      <div className='form-container'>
        <h1>Sample form</h1>
        <form className='inputForm'>
          {/* Text Inputs */}
          <input
            className='text'
            onChange={props.handleChange}
            name='firstName'
            placeholder='First Name'
            value={props.firstName}
          />
          <br />
          <input
            className='text'
            onChange={props.handleChange}
            name='lastName'
            placeholder='Last Name'
            value={props.lastName}
          />
          <br />
          <input
            className='text'
            onChange={props.handleChange}
            name='age'
            placeholder='Age'
            value={props.age}
          />
          <br />

          {/* Radio Buttons */}
          <div className='radio-group'>
            {" "}
            <p>Please select your gender:</p>
            <label>
              <input
                className='radiobutton'
                type='radio'
                name='gender'
                value='male'
                checked={props.gender === "male"}
                onChange={props.handleChange}
              />
              Male
            </label>
            <label>
              <input
                className='radiobutton'
                type='radio'
                name='gender'
                value='female'
                checked={props.gender === "female"}
                onChange={props.handleChange}
              />
              Female
            </label>
          </div>
          <br />

          {/* Select Dropdown */}
          <label className='destination-header'>Select your destination</label>
          <select
            className='destination-input'
            onChange={props.handleChange}
            name='destination'
            value={props.destination}
          >
            <option value=''>-- Please Choose a destination --</option>
            <option value='Thailand'>Thailand</option>
            <option value='Japan'>Japan</option>
            <option value='Brazil'>Brazil</option>
          </select>

          {/* Dietary Restrictions */}
          <br />
          <br />
          <label className='restrictions-title'>Dietary restrictions:</label>
          <br />
          <br />
          <div className='restrictions'>
            <label>
              <input
                type='checkbox'
                name='nutsFree'
                onChange={props.handleChange}
                checked={props.nutsFree}
              />
              Nuts free
            </label>
            <label>
              <input
                type='checkbox'
                name='lactoseFree'
                onChange={props.handleChange}
                checked={props.lactoseFree}
              />
              Lactose free
            </label>
            <label>
              <input
                type='checkbox'
                name='isVegan'
                onChange={props.handleChange}
                checked={props.isVegan}
              />
              Vegan
            </label>
          </div>
          <br />
          <button className='submit'>Submit</button>
        </form>
      </div>

      <div className='entered-info'>
        <h2>Entered information:</h2>
        <p>
          Your name: {props.firstName} {props.lastName}
        </p>
        <p>Your age: {props.age}</p>
        <p>Your gender: {props.gender}</p>
        <p>Your destination: {props.destination}</p>
        <p>Your dietary restrictions:</p>
        <div className='restrictions'>
          <span>**Nuts free : {props.nutsFree ? " Yes" : "No"}</span> <br />
          <span>**Lactose free : {props.lactoseFree ? " Yes" : "No"}</span> <br />
          <span>**Vegan meal : {props.isVegan ? " Yes" : "No"}</span>
        </div>
      </div>
    </main>
  );
}

export default Form;
