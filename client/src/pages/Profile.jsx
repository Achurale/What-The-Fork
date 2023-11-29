import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { useEffect } from "react";

const Profile = () => {
  const { profileId } = useParams();

  // If there is no `profileId` in the URL as a parameter, execute the `GET_ME` query instead for the logged-in user's information
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


  // Use React Router's `<Navigate />` component to redirect to the personal profile page if the username is the logged-in user's
  // if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
  //   return <Navigate to="/me" />;
  // }

  if (loading) {
    return <h2 className='text-center'>Loading...</h2>;
  }

  if (!profile._id) {
    return (
      <h4 className='text-center align-middle'>
        You need to be logged in to see your profile page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }

  // Here, you can render the user data as needed

  // ...

  // Example: Display the username
  return <p>{profile.username}</p>;
};

export default Profile;
