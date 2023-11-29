import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// import SkillsList from '../components/SkillsList';
// import SkillForm from '../components/SkillForm';

import { GET_ME, QUERY_SINGLE_PROFILE } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
  const { profileId } = useParams();
  console.log('profileId', profileId)

  // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
  const { loading, error, data } = useQuery(
    profileId ? QUERY_SINGLE_PROFILE : GET_ME,
    {
      variables: { profileId: profileId },
    }
  );
  
  console.log('data', data)

  // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
  const profile = data?.me || data?.profile || {};

  // Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
  // if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
  //   return <Navigate to="/me" />;
  // }

  if (loading) {
    return <h2 className='text-center'>Loading...</h2>;
  }

  if (profile?.name) {
    return (
      <h4 className='text-center align-middle'>
        You need to be logged in to see your profile page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }

  if (error) {
    console.error('Apollo Query Error: ', error);
    return <h1 className='text-center'>Error loading data</h1>
  } else {console.log('data: ', data)}

  return (
    <div>
      <h2 className="card-header">
        {profileId ? `${profile.name}'s` : 'Your'} friends have endorsed these
        skills...
      </h2>

      {profile.skills?.length > 0 && (
        <SkillsList
          skills={profile.skills}
          isLoggedInUser={!profileId && true}
        />
      )}

       <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <SkillForm profileId={profile._id} />
       </div>
     </div>
  );
};

export default Profile;
