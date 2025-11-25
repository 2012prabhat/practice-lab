import React from 'react'


function HookUseMemo() {
    const userList = [
  {
    name: "Aarav Sharma",
    city: "Delhi",
    gender: "Male",
    mobile: "9876543210",
    age: 24
  },
  {
    name: "Priya Verma",
    city: "Mumbai",
    gender: "Female",
    mobile: "9098765432",
    age: 28
  },
  {
    name: "Rohan Singh",
    city: "Bangalore",
    gender: "Male",
    mobile: "9123456780",
    age: 30
  },
  {
    name: "Sneha Patel",
    city: "Ahmedabad",
    gender: "Female",
    mobile: "9988776655",
    age: 22
  },
  {
    name: "Karan Mehta",
    city: "Chennai",
    gender: "Male",
    mobile: "9812345678",
    age: 27
  },
  {
    name: "Ananya Gupta",
    city: "Pune",
    gender: "Female",
    mobile: "9876123450",
    age: 26
  },
  {
    name: "Vikram Yadav",
    city: "Hyderabad",
    gender: "Male",
    mobile: "9765432109",
    age: 29
  },
  {
    name: "Meera Nair",
    city: "Kochi",
    gender: "Female",
    mobile: "9090909090",
    age: 23
  },
  {
    name: "Harshit Kapoor",
    city: "Jaipur",
    gender: "Male",
    mobile: "9911223344",
    age: 31
  },
  {
    name: "Tara Joshi",
    city: "Indore",
    gender: "Female",
    mobile: "9822334455",
    age: 25
  }
];
  return (
    <>
    {userList.map((m,i)=>{
        return <div key={i}>{m.name}</div>
    })}
    </>
  )
}

export default HookUseMemo