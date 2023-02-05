import './profile.css';

const Profile = ({imgsrc,firstName,lastName,tripLength,location,bio})=>{
        return (
            <div class = "profile">
                <button>
                    <div id = "user">
                        <div id = "userPic">
                            <img src = {imgsrc} alt = {firstName} ></img>
                        </div>
                        <div id = "userInfo">
                            <h1>{firstName} {lastName}</h1>
                            <p class = "tripLength">Willing to embark for {tripLength} days</p>
                            <p class = "location">{location}</p>
                            <p>{bio}</p>
                        </div>    
                    </div>
                </button>
            </div>
        )
}
export default Profile;