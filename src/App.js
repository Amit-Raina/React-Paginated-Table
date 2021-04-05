import './App.css';
import { Component } from 'react';
import Viewtable from './List/list'

class App extends Component{

  viewLimitChanged = (value) => {
    this.setState({
      limit : value ,
      currentPage : 1
    })
  }

  state = {
    currentPage:1,
    limit:10,
    students : [
      {
        "rno" : 1,
        "name" : "Student 1",
        "email" : "stu1@gmail.com"
      },
      {
        "rno" : 2,
        "name" : "Student 2",
        "email" : "stu2@gmail.com"
      },
      {
        "rno" : 3,
        "name" : "Student 3",
        "email" : "stu3@gmail.com"
      },
      {
        "rno" : 4,
        "name" : "Student 4",
        "email" : "stu4@gmail.com"
      },
      {
        "rno" : 5,
        "name" : "Student 5",
        "email" : "stu5@gmail.com"
      },
      {
        "rno" : 6,
        "name" : "Student 6",
        "email" : "stu6@gmail.com"
      },
      {
        "rno" : 7,
        "name" : "Student 7",
        "email" : "stu7@gmail.com"
      },
      {
        "rno" : 8,
        "name" : "Student 8",
        "email" : "stu8@gmail.com"
      },
      {
        "rno" : 9,
        "name" : "Student 9",
        "email" : "stu9@gmail.com"
      },
      {
        "rno" : 10,
        "name" : "Student 10",
        "email" : "stu10@gmail.com"
      },
      {
        "rno" : 11,
        "name" : "Student 11",
        "email" : "stu11@gmail.com"
      },
      {
        "rno" : 12,
        "name" : "Student 12",
        "email" : "stu12@gmail.com"
      },
      {
        "rno" : 13,
        "name" : "Student 13",
        "email" : "stu13@gmail.com"
      },
      {
        "rno" : 14,
        "name" : "Student 14",
        "email" : "stu14@gmail.com"
      },
      {
        "rno" : 15,
        "name" : "Student 15",
        "email" : "stu15@gmail.com"
      },
      {
        "rno" : 16,
        "name" : "Student 16",
        "email" : "stu16@gmail.com"
      },
      {
        "rno" : 17,
        "name" : "Student 17",
        "email" : "stu17@gmail.com"
      },
      {
        "rno" : 18,
        "name" : "Student 18",
        "email" : "stu18@gmail.com"
      },
      {
        "rno" : 19,
        "name" : "Student 19",
        "email" : "stu19@gmail.com"
      },
      {
        "rno" : 20,
        "name" : "Student 20",
        "email" : "stu20@gmail.com"
      },
      {
        "rno" : 21,
        "name" : "Student 21",
        "email" : "stu21@gmail.com"
      },
      {
        "rno" : 22,
        "name" : "Student 22",
        "email" : "stu22@gmail.com"
      },
      {
        "rno" : 23,
        "name" : "Student 23",
        "email" : "stu23@gmail.com"
      },
      {
        "rno" : 24,
        "name" : "Student 24",
        "email" : "stu24@gmail.com"
      },
      {
        "rno" : 25,
        "name" : "Student 25",
        "email" : "stu25@gmail.com"
      },
      {
        "rno" : 26,
        "name" : "Student 26",
        "email" : "stu26@gmail.com"
      },
      {
        "rno" : 27,
        "name" : "Student 27",
        "email" : "stu27@gmail.com"
      },
      {
        "rno" : 28,
        "name" : "Student 28",
        "email" : "stu28@gmail.com"
      },
      {
        "rno" : 29,
        "name" : "Student 29",
        "email" : "stu29@gmail.com"
      },
      {
        "rno" : 30,
        "name" : "Student 30",
        "email" : "stu30@gmail.com"
      },
      {
        "rno" : 31,
        "name" : "Student 31",
        "email" : "stu31@gmail.com"
      },
      {
        "rno" : 32,
        "name" : "Student 32",
        "email" : "stu32@gmail.com"
      },
      {
        "rno" : 33,
        "name" : "Student 33",
        "email" : "stu33@gmail.com"
      },
      {
        "rno" : 34,
        "name" : "Student 34",
        "email" : "stu34@gmail.com"
      },
      {
        "rno" : 35,
        "name" : "Student 35",
        "email" : "stu35@gmail.com"
      },
      {
        "rno" : 36,
        "name" : "Student 36",
        "email" : "stu36@gmail.com"
      },
      {
        "rno" : 37,
        "name" : "Student 37",
        "email" : "stu37@gmail.com"
      },
      {
        "rno" : 38,
        "name" : "Student 38",
        "email" : "stu38@gmail.com"
      },
      {
        "rno" : 39,
        "name" : "Student 39",
        "email" : "stu39@gmail.com"
      },
      {
        "rno" : 40,
        "name" : "Student 40",
        "email" : "stu40@gmail.com"
      },
    ] 
  }

  nextPage = () => {
    if(Math.ceil(this.state.students.length / this.state.limit) !== this.state.currentPage){
      this.setState({
        currentPage : this.state.currentPage + 1  
      })
    }
    else{
      alert("This is last Page !");
    }
  }

  previousPage = () => {
    if(this.state.currentPage > 1 ){
      this.setState({
        currentPage : this.state.currentPage - 1  
      })
    }
    else{
      alert("This is First Page !");
    }
  }

  lastPage = () => {
    let last = Math.ceil(this.state.students.length / this.state.limit);
    this.setState({
      currentPage : last
    })
  }

  firstPage = () => {
    this.setState({
      currentPage : 1
    })
  }

 render(){
    const showTable = (
      <table cellSpacing="4" border = "1" cellPadding="3">
        <thead>
        <tr>  
        <th>Roll No</th>
        <th>Name</th>
        <th>Email</th>
        </tr>
        </thead>
        <tbody>
        {
          this.state.students.map((detail,index) => {
            if(index >= (this.state.currentPage - 1)*this.state.limit && index < this.state.currentPage*this.state.limit)
              return <Viewtable  key = {index.toString()} rn = {detail.rno} name = {detail.name} email = {detail.email}/>;
            else  
              return null;
            })
        }
        </tbody>
        <tfoot>
        <tr>
          <td className="">
            <button onClick={this.firstPage}>⇦⇦</button>

            <button onClick ={this.previousPage}>⇦</button>
          </td>
          <td className="">
            <button onClick={this.nextPage}>⇨</button>

            <button onClick={this.lastPage}>⇨⇨</button>
          </td>
          <td className="tableButton3">
            <h5 className="pageDisplayButton">{this.state.currentPage}</h5>

            <select name="userLimit" id="selectedValue" onChange={(event) => this.viewLimitChanged(event.target.value)}>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </td>
        </tr>
        </tfoot>
      </table>
    );

  return (
      <div className="App">
       <center>{showTable}</center> 
      </div>
    );
  }
}
export default App;




    