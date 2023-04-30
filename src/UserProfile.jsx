/* eslint-disable react/prop-types */
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const UserProfile = ({ name, age, gender, imageNumber, ...props }) => {
  gender = gender === "MALE" ? "men" : "women"

  // const randomInt = randomIntFromInterval(1, 99)
  const profilePic = `https://randomuser.me/api/portraits/${gender}/${imageNumber}.jpg`

  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
      <img src={profilePic}></img>
      {props.children}
    </div>
  )
}

export default UserProfile