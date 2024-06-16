import UploadWidget from "../../components/uploadWidget/UploadWidget";
import { cloudinaryConfigs } from "../../config/cloudinary";
import "./profileUpdatePage.scss";
import useProfileUpdatePage from "./useProfileUpdatePage";

function ProfileUpdatePage() {
  const { currentUser, updateHandler, error, avatar, setAvatar } =
    useProfileUpdatePage();

  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={updateHandler}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={currentUser.username}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser.email}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button>Update</button>
          {error ? <span>{error}</span> : null}
        </form>
      </div>
      <div className="sideContainer">
        <img src={avatar || "/noavatar.jpg"} alt="" className="avatar" />
        <UploadWidget uwConfig={cloudinaryConfigs} setAvatar={setAvatar} />
      </div>
    </div>
  );
}

export default ProfileUpdatePage;
