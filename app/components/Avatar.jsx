import Image from "next/image";
export default function Avatar({ username, photo, description }) {
  return (
    <>
      <div className="photo_container">
        <div className="title">{username}</div>
        <Image
          src={`/img/${photo}`}
          alt="avatar"
          width={300}
          height={300}
          className="photo"
        />
        <div className="age">{description}</div>
      </div>
    </>
  );
}
