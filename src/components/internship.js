import "./styles/internship.css";
export default function Intership() {
  return (
    <>
      <div className='row'>
        <div className='col-lg-6'>
          <h1 className=' ms-4 mt-4 '>Intership</h1>
          <dl className=' ms-4 mt-4 '>
            <dt>Exposys Data Labs, Bapatla— Web Developer</dt>
            <dd>Nov 2022 - Dec 2022</dd>
            <dd>
              <ul>
                <li> Working as a Front End Developer. </li>
                <li>
                  Responsibilities including designing the UI for the web page
                  and application
                </li>
              </ul>
            </dd>
          </dl>
        </div>
        <div className='col-lg-6'>
          <img
            src='/images/exposys.jpg'
            className='img-fluid pic1'
            alt='exposys'
            title='Exposys Data Labs'
          />
        </div>
      </div>
    </>
  );
}
