import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { useEffect } from "react";
import { Link } from 'react-router-dom'
import Auth from "../utils/auth";

const Profile = () => {
  
if (Auth.loggedIn()) {
  const { loading, error, data } = useQuery(GET_ME);

  // Check if data is returning from the `GET_ME` query
  const profile = data?.me || {};

  useEffect(() => {
    console.log("loading", loading)
    console.log("data", data);
    console.log("profile", profile);
  }, [data]);

  // Check for errors
  if (error) {
    console.error('Apollo Query Error: ', error);
    return <h1 className='text-center'>Error loading data</h1>;
  }

  if (loading) {
    return <h2 className='text-center'>Loading...</h2>;
  }

  return <div className='m-auto'>
    <h2 className='text-center'>Welcome, {profile.username}!</h2>
    <p className=''>
      You have {profile.recipeCount} recipes saved! Check the <Link as={Link} to='/saved'>favorites page</Link> to see them!
    </p>
  </div>
} else if (!Auth.loggedIn()){
    return (
      <div className='m-auto w-75 d-flex flex-column'>
        <h2 className='text-center'>
          Welcome! Sign up or log in using the navigation above, or feel free to search for recipes!
        </h2>
        <h3 className='text-center m-2'>
          Want to know more about us? Check out our <Link as={Link} to='/about'>about</Link> page to learn more!
        </h3>
      </div>
    );
  }

  
};

export default Profile;
