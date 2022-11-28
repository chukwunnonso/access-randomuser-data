import React, {useState, useEffect} from 'react'
import {FaPhone, FaUserCheck} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import moment from  'moment'
const url =  `https://randomuser.me/api/`
 
const FetchUsers = () => {
  const [users, setUsers] = useState([])

  const fetchUserData = async() => {
    const resp = await fetch(url)
    const users = await resp.json()
    setUsers(users.results)
    console.log(users.results);
  }


  useEffect(() => {
    // const fetchUserData = async() => {
    //   const resp = await fetch(url)
    //   const users = await resp.json()
    //   setUsers(users.results)
    //   console.log(users.results);
    // }

    fetchUserData();
  }, [])
  return (
    <>
    
      <section className='bg-gray-900 py-20 px-10 md:h-screen'>
        {users.map((user) => {
            // destructuring
            const { name:{title, first, last}, location: {
                street: {
                    number,
                    name
                },
                city,
                state,
                country,
                postcode,
                coordinates: {
                    latitude,
                    longitude
                },
                timezone: {
                    offset,
                    description
                }
            },
            email,
            login:{
                uuid,
                username
            },
            dob: {
                date,
                age
            },
            phone,
            picture: {
                large
            }
        } = user

            return (
                <div key={uuid} className="bg-gray-200 px-5 py-10 rounded-lg lg:w-9/12 lg:mx-auto 2xl:w-1/2 2xl:px-50"
                >
                    <img className='block mx-auto rounded-full' src={large} alt={first}/>
                    <div className='text-center'>
                        <h3 className='text-2xl my-2'>{title}. {first} {last}</h3>
                        <p>
                            <span className='font-bold'>DOB:</span>
                             {' '}
                             {moment(`${date}`).format("MMMM Do YYYY")
                             }
                        </p>
                        <p>AGE: {age} Years</p>
                        <div className='underline mx-auto my-5'></div>
                    </div>
                    
                    <div className='md:flex md:justify-between'>
                             
                    <div>
                        <p className='flex-items-center mr-3 text-xl my-2'>
                            <AiOutlineMail/> {email}</p>
                        <p className='flex-items-center mr-3 text-xl my-2'>
                            <FaUserCheck/> {username}</p>
                        <p className='flex-items-center mr-3 text-xl my-2'>
                            <FaPhone /> {phone}
                        
                        </p>
                    </div>

                    <div className='mt-10 md:mt-0'>
                        <ul>
                            <li>{number}, {name}</li>
                            <li className='flex items-center justify-between my-3'><span className='font-bold'>Country:</span> {country}</li>
                            <li className='flex items-center justify-between my-3'><span  className="font-bold">State:</span> {state}</li>
                            <li className='flex items-center justify-between my-3'><span className="font-bold">City:</span> {city}</li>
                            <li className='flex items-center justify-between my-3'><span className="font-bold">Postal Code:</span> {postcode}</li>
                            <li className='flex items-center justify-between my-3'><span className="font-bold">Latitude:</span> {latitude}</li>
                            <li className='flex items-center justify-between my-3'><span className="font-bold">Longitude:</span> {longitude}</li>
                            <li>{offset}, {description}</li>
                        </ul>
                    </div>

                    </div>
                </div>
            )
        })}
      </section>
    </>
  )
}

export default FetchUsers



/*



    <section className='bg-gray-900 py-20 px-10'>
        {users.map((user) => {
            // destructuring
            const {gender, name:{title, first, last}, location: {
                street: {
                    number,
                    name
                },
                city,
                state,
                country,
                postcode,
                coordinates: {
                    latitude,
                    longitude
                },
                timezone: {
                    offset,
                    description
                }
            },
            email,
            login:{
                uuid,
                username
            },
            dob: {
                date,
                age
            },
            phone,
            picture: {
                large
            }
        } = user

            return (
                <div key={uuid} className="bg-gray-200 px-5 py-10 rounded-lg" >
                    <img className='block mx-auto' src={large} alt={first}/>
                    <div className='text-center'>
                        <h3 className='text-2xl my-2'>{title}. {first} {last}</h3>
                        <p><span className='font-bold'>DOB:</span> {date}</p>
                        <p>AGE: {age} Years</p>
                        <div className='underline mx-auto my-5'></div>
                    </div>
                </div>
            )
        })}
      </section>
    </>
  )
}






*/