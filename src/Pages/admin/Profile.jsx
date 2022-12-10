import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import useRedirectLoggedOutUser from "../../customHooks/useRedirect";
import { SET_USER, SET_NAME } from "../../redux/authSlice";
import { getUser } from "../../services/authService";
import { LoadProfile } from "../../components/Loader";

const Profile = () => {
  useRedirectLoggedOutUser("/KatinganAdmin");
  const dispatch = useDispatch();

  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function getUserData() {
      const data = await getUser();
      console.log(data);

      setProfile(data);
      setIsLoading(false);
      await dispatch(SET_USER(data));
      await dispatch(SET_NAME(data.name));
    }
    getUserData();
  }, [dispatch]);

  return (
    <div className="h-full">
      {isLoading && <LoadProfile />}
      <>
        {!isLoading && profile === null ? (
          <p>Something went wrong, please reload the page...</p>
        ) : (
          <div className="flex justify-center items-center py-12 ">
            <div className="flex flex-row gap-16 max-w-screen-xl w-full bg-white rounded-lg shadow-md p-20">
              <span className="">
                <img
                  src={profile?.photo}
                  alt="profilepic"
                  className="h-80 w-80 rounded-lg object-cover"
                />
              </span>
              <div className="flex flex-col h-full gap-12 py-8">
                <span className="flex flex-col gap-2 h-full">
                  <h3 className=" text-4xl font-bold text-gray-800">
                    {profile?.name}
                  </h3>
                  <p className="text-birumud">{profile?.email}</p>
                  <p>NIP : {profile?.nip}</p>
                  <p>Jabatan : {profile?.jabatan}</p>
                  <p>Unit Kerja : {profile?.unitKerja}</p>
                </span>

                <Link to="/home/edit-profile">
                  <button className="bg-birumud rounded-md py-2 px-8 text-white hover:bg-birumud2 shadow-md hover:shadow-lg ">
                    Edit Profile
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default Profile;
