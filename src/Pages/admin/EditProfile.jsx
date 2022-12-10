import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import { selectUser, SET_USER } from "../../redux/authSlice";
import { getUser, updateUser } from "../../services/authService";
import InputBar from "../../components/dashboard/InputBar";

const EditProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector(selectUser);
  const { email } = user;
  console.log(user);

  useEffect(() => {
    if (!email) {
      navigate("/profile");
    }
  }, [email, navigate]);

  const [profile, setProfile] = useState(user);
  const [profileImage, setProfileImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  //   const { nip } = profile;

  useEffect(() => {
    setIsLoading(true);
    async function getUserData() {
      const data = await getUser();
      console.log(data);

      setProfile(data);
      setIsLoading(false);
      await dispatch(SET_USER(data));
    }
    getUserData();
  }, [dispatch]);

  useEffect(() => {
    setIsLoading(true);
    setProfile(user);
    setImagePreview(user && user.image ? user.image : null);
    setIsLoading(false);
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const saveProfile = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Handle Image upload
      let imageURL;
      if (
        profileImage &&
        (profileImage.type === "image/jpeg" ||
          profileImage.type === "image/jpg" ||
          profileImage.type === "image/png")
      ) {
        const image = new FormData();
        image.append("file", profileImage);
        image.append("cloud_name", "dyd6yggca");
        image.append("upload_preset", "pawpatrol10");

        // First save image to cloudinary
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dyd6yggca/image/upload",
          { method: "post", body: image }
        );
        const imgData = await response.json();
        imageURL = imgData.url.toString();
      }

      // Save Profile
      const formData = {
        name: profile.name,
        nip: profile.nip,
        jabatan: profile.jabatan,
        unitKerja: profile.unitKerja,
        photo: profileImage ? imageURL : profile.photo,
      };

      await updateUser(formData);
      toast.success("Profile updated");
      navigate("/home/profile");
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <div className="">
      {isLoading && <Loader />}

      <div className="flex justify-center items-center py-12 ">
        <div className="flex flex-row gap-16 max-w-screen-xl w-full bg-white rounded-lg shadow-md p-20">
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="profilepic"
              className=" h-80 w-80 rounded-lg object-cover"
            />
          ) : (
            <img
              src={profile?.photo}
              alt="profilepic"
              className="h-80 w-80 rounded-lg object-cover"
            />
          )}

          <span className="w-2/3">
            <form onSubmit={saveProfile} className="flex flex-col gap-4">
              <span className="grid grid-cols-4 w-full">
                <label className="flex items-center justify-end mr-20 text-right">
                  Photo :
                </label>
                <input
                  type="file"
                  name="image"
                  onChange={handleImageChange}
                  className="w-80"
                />
              </span>

              <span className="grid grid-cols-4 w-full">
                <label className="flex items-center justify-end mr-20 text-right">
                  Nama :
                </label>
                <InputBar
                  type="text"
                  name="name"
                  placeholder="Nama komoditas"
                  value={profile?.name}
                  onChange={handleInputChange}
                />
              </span>

              <span className="grid grid-cols-4 w-full">
                <label className="flex items-center justify-end mr-20 text-right">
                  Email:
                </label>
                <input
                  type="text"
                  name="email"
                  value={profile?.email}
                  disabled
                  className="px-4 py-3 rounded-md col-span-3"
                />
              </span>

              <span className="grid grid-cols-4 w-full">
                <label className="flex items-center justify-end mr-20 text-right">
                  nip :
                </label>
                <InputBar
                  type="text"
                  name="nip"
                  placeholder="NIP"
                  value={profile?.nip}
                  onChange={handleInputChange}
                />
              </span>

              <span className="grid grid-cols-4 w-full">
                <label className="flex items-center justify-end mr-20 text-right">
                  Jabatan :
                </label>
                <InputBar
                  type="text"
                  name="jabatan"
                  placeholder="Jabatan"
                  value={profile?.jabatan}
                  onChange={handleInputChange}
                />
              </span>

              <span className="grid grid-cols-4 w-full">
                <label className="flex items-center justify-end mr-20 text-right">
                  Unit Kerja :
                </label>
                <InputBar
                  type="text"
                  name="unitKerja"
                  placeholder="Unit Kerja"
                  value={profile?.unitKerja}
                  onChange={handleInputChange}
                />
              </span>

              <span className="flex flex-row gap-4 justify-end">
                <Link to="/home/profile">
                  <button
                    type="button"
                    className="flex justify-center items-center w-auto gap-2 px-4 py-2 rounded-md text-birumud border border-birumud bg-white hover:bg-birumud hover:text-white shadow-md hover:shadow-lg"
                  >
                    Batal
                  </button>
                </Link>
                <button className="py-2 px-8 rounded-md text-white bg-birumud hover:bg-birumud2 shadow-md hover:shadow-lg">
                  Simpan
                </button>
              </span>
            </form>
          </span>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
