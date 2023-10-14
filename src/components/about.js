import "./styles/about.css";
export default function About() {
  return (
    <>
      <div className='row '>
        <div className='col-lg-4'>
          <img
            src='/images/mypic.jpg'
            className='img-fluid pic1'
            alt='MyPic'
            title='Gangadhar'
          />
        </div>
        <div className='col-lg-6 ms-4'>
          <h1 className='text-center py-3' id='h1'>
            About
          </h1>

          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is <b>Gangadhar</b>. I am a
            motivated and accomplished recent graduate equipped with a{" "}
            <b>B.Tech</b> degree from <b>Bapatla Engineering college</b>. With a
            solid academic foundation and a passion for personal and
            professional growth, I am ready to apply my skills and contribute to
            a dynamic organization. I possess a strong work ethic, excellent
            problem-solving abilities, and effective communication skills,
            making me an asset to any team. With a positive attitude and a
            hunger for learning, I am eager to embrace new challenges .
          </p>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-4'>
          <h1 className='ms-4 mt-4 '>Education</h1>
          <img
            src='/images/clg.jpg'
            className='img-fluid pic1'
            alt='clg'
            title='Bapatla Engineering College'
          />
        </div>
        <div className='col-lg-5 col-sm-3 pos'>
          <table class='table table-success table-striped'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Degree/Grade </th>
                <th scope='col'>Institution</th>
                <th scope='col'>Score</th>
                <th scope='col'>Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>1</th>
                <td>B.Tech Computer Science And Engineering</td>
                <td>Bapatla Engineering College-Bapatla</td>
                <td>CGPA-7.3</td>
                <td>2023</td>
              </tr>
              <tr>
                <th scope='row'>2</th>
                <td>Intermediate MPC</td>
                <td>Sri Chaitanya jr.college -Vijayawada</td>
                <td>CGPA-9.61</td>
                <td>2019</td>
              </tr>
              <tr>
                <th scope='row'>3</th>
                <td>Secondary(High School)</td>
                <td>ZPHS-Putlacheruvu </td>
                <td>CGPA-9.3</td>
                <td>2017</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
