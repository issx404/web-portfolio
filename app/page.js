import About from "./components/About";
import Avatar from "./components/Avatar";
import Recent from "./components/Recent";
import Links from "./components/Links";

export default function Home() {
  return (
    <>
      <div className="container">
        <Avatar
          username="nickname"
          photo="ava.png"
          description="description!"
        />

        <About
          title="ABOUT ME"
          paragraph="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        />
        <Recent />
        <Links />
        <div className="banners">
          <div className="banners_title">BANNERS</div>
          <div className="banners_icon">
            <div className="banners_single_icon">
              <a className="banners_single_link" href="#">
                <img src="/img/atari.gif" />
              </a>
            </div>
            <div className="banners_single_icon">
              <a className="banners_single_link" href="#">
                <img src="/img/blizzlogo.gif" />
              </a>
            </div>
            <div className="banners_single_icon">
              <a className="banners_single_link" href="#">
                <img src="/img/bobbutton.gif" />
              </a>
            </div>
            <div className="banners_single_icon">
              <a className="banners_single_link" href="#">
                <img src="/img/dynamiclogo.gif" />
              </a>
            </div>
            <div className="banners_single_icon">
              <a className="banners_single_link" href="#">
                <img src="/img/ffmpeg.gif" />
              </a>
            </div>
            <div className="banners_single_icon">
              <a className="banners_single_link" href="#">
                <img src="/img/ilovehorror.gif" />
              </a>
            </div>
            <div className="banners_single_icon">
              <a className="banners_single_link" href="#">
                <img src="/img/im-baby.gif" />
              </a>
            </div>
            <div className="banners_single_icon">
              <a className="banners_single_link" href="#">
                <img src="/img/js.gif" />
              </a>
            </div>
            <div className="banners_single_icon">
              <a className="banners_single_link" href="#">
                <img src="/img/linres.gif" />
              </a>
            </div>
            <div className="banners_single_icon">
              <a className="banners_single_link" href="#">
                <img src="/img/linuxnow2.gif" />
              </a>
            </div>
            <div className="banners_single_icon">
              <a className="banners_single_link" href="#">
                <img src="/img/antifa.gif" />
              </a>
            </div>
            <div className="banners_single_icon">
              <a className="banners_single_link" href="#">
                <img src="/img/linuxnow2.gif" />
              </a>
            </div>
          </div>
        </div>

        {/* <div id="changer" className="changer">
          <p>Changer</p>
        </div>

        <div onClick="moveToTop()" className="upper">
          <p>Up</p>
        </div> */}
        <div className="footer">
          <span>
            {`Source code of this project is here: `}
            <a
              href="https://github.com/issx404?tab=repositories"
              target="_blank"
              title="@iseestarszx"
            >
              github
            </a>
          </span>
        </div>
      </div>
      {/* <Script src="/view/main.js" strategy="afterInteractive" /> */}
    </>
  );
}
