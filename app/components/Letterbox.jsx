export default function Letterbox() {
  return (
    <>
      <div className="letterbox">
        <div className="letter_title">MESSAGE</div>
        <form className="letter_form" action="" method="get">
          <textarea
            className="textarea"
            name="message"
            id=""
            placeholder="Напиши здесь..."
          ></textarea>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </>
  );
}
