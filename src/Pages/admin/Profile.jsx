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

  const formatDate = (date, type) => {
    const month = [
      "Undefined",
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];

    const string = date.split("T");

    const rawDate = string[0].split("-");
    const finalDate = rawDate[2] + " " + month[rawDate[1]] + " " + rawDate[0];

    const rawTime = string[1].split(".");
    const finalTime = rawTime[0];

    if (type === "date") {
      return finalDate;
    }
    if (type === "time") {
      return finalTime;
    }
  };

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
    <>
      {isLoading ? (
        <LoadProfile />
      ) : (
        <>
          {!isLoading && profile === null ? (
            <p>Something went wrong, please reload the page...</p>
          ) : (
            <div className="flex justify-center items-center py-12 ">
              <div className="flex flex-row items-center gap-16 max-w-screen-xl w-full bg-white rounded-lg overflow-hidden shadow-md p-4">
                <span className="">
                  <img
                    src={profile?.photo}
                    alt="profilepic"
                    className="h-96 w-96 rounded-lg object-cover"
                  />
                </span>
                <div className="flex flex-col h-full gap-6">
                  <table className="flex flex-col gap-2 h-full text-lg">
                    <thead className="text-3xl font-semibold text-gray-800">
                      <tr>
                        <th>{profile?.name}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="w-36">Email :</td>
                        <td>{profile?.email}</td>
                      </tr>
                      <tr>
                        <td>NIP :</td>
                        <td>{profile?.nip}</td>
                      </tr>
                      <tr>
                        <td>Jabatan :</td>
                        <td>{profile?.jabatan}</td>
                      </tr>
                      <tr>
                        <td>Unit Kerja :</td>
                        <td>{profile?.unitKerja}</td>
                      </tr>
                      <tr className="text-gray-400 font-medium">
                        <td>Admin since :</td>
                        <td>{formatDate(profile?.createdAt, "date")}</td>
                      </tr>
                    </tbody>
                  </table>

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
      )}
    </>
  );
};

export default Profile;
