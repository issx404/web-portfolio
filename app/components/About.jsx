export default function About({ title, paragraph }) {
  return (
    <div className="about">
      <div className="about_title">{title}</div>
      <p>{paragraph}</p>
    </div>
  );
}
