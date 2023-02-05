const Profile = ()=>{
        return (
            <div id = "user">
                <div id = "userPic">
                    <img src = {this.props.imgsrc} alt = {this.props.firstName} ></img>
                </div>
                <div id = "userInfo">
                    <h1>{this.props.firstName} {this.props.lastName}</h1>
                    <p class = "preferences">Open to day excursions</p>
                    <p class = "location">{this.props.location}</p>
                    <p>{this.props.bio}</p>
                </div>    
            </div>
        )
}
export default Profile;