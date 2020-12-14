import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperclip,
  faChevronDown,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
function Post() {
  const [comments, updatecomment] = useState([
    {
      username: "Username",
      time: "12:40pm",
      msg: "aduyg ayd au aysdgau aysgdu ysadgau yagd",
    },
  ]);
  const [msg, setmsg] = useState("");

  const onshare = () => {
    if (msg !== "") {
      const temp = [...comments];
      var today = new Date();
      var time = formatAMPM(today);
      temp.unshift({ username: "Username", time: time, msg: msg });
      updatecomment(temp);
      setmsg("");
    } else {
      alert("Field Empty!!");
    }
  };
  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }
  const clear = () => {};
  return (
    <>
      <div className="commondiv m-2 p-2">
        <div className="postdiv m-2 p-2">
          <textarea
            type="text"
            rows="3"
            className="textarea"
            id="sharemsg"
            placeholder="Share something with your class"
            value={msg}
            onChange={(e) => {
              setmsg(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="row  justify-content-between">
          <div className="col-lg-5 col-md-3 col-12 col-sm-2 m-4 p-2">
            <span className="cancelpost" onClick={clear}>
              Cancel
            </span>
          </div>
          <div className="col-lg-4 col-md-5 col-10 col-sm-7   m-4 p-2 d-flex flex justify-content-between">
            <div className=" attachment ">
              {" "}
              <FontAwesomeIcon icon={faPaperclip} className="attachmenticon" />
            </div>
            <div className="sharediv">
              <div className="btn-group">
                <button
                  type="button"
                  className="sharebutton btn btn-primary"
                  onClick={onshare}
                >
                  Share
                </button>

                <button type="button" className="sharecaret btn btn-primary">
                  <span className="caret">
                    {" "}
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="icondropdown"
                    />
                  </span>
                  <span className="sr-only"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="commondiv m-2 p-2">
        <div className="row m-1 p-2">
          <div className="col-xl-1 col-lg-2 col-md-2 col-3 col-sm-2 ">
            <img
              className="avatar"
              src="data:image/jpeg;base64,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"
            ></img>
          </div>
          <div className="col-xl-10 col-lg-9 col-md-9 col-7 col-sm-9 ml-1">
            <div className="row p-2 justify-content-between">
              <div className="col-6" style={{ textAlign: "left" }}>
                <h6>Teacher</h6>
              </div>
              <div className="col-6" style={{ textAlign: "right" }}>
                12:40pm
              </div>
              <p className="p-3">
                React makes it painless to create interactive UIs. Design simple
                views for each state in your application, and React will
                efficiently update and render just the right components when
                your data changes. Declarative views make your code more
                predictable and easier to debug.
              </p>
            </div>
          </div>
        </div>
        <div className="commentdiv ">
          <div className="row  justify-content-between">
            <div className="col-xl-1 col-lg-2 col-md-2 col-3 col-sm-3 d-flex flex justify-content-center">
              <img
                className="avatar comment"
                src="data:image/jpeg;base64,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"
              ></img>
            </div>
            <div className="col-xl-9 col-lg-8 col-md-8 col-7 col-sm-7">
              <textarea
                type="text"
                rows="2"
                className="textarea"
                placeholder="|write a comment"
              ></textarea>
            </div>
            <div className="col-xl-1 col-lg-2 col-md-2 col-2 col-sm-2 d-flex flex-column justify-content-center ">
              <FontAwesomeIcon icon={faPaperPlane} className="sendicon" />{" "}
            </div>
          </div>
        </div>
      </div>
      {comments.map((item, i) => {
        return (
          <div className="commondiv m-2 p-2 mt-3" key={i}>
            <div className="row m-1 p-2">
              <div className="col-xl-1 col-lg-2 col-md-2 col-3 col-sm-2 ">
                <img
                  className="avatar"
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0QDRAPDw0SDRANDxIQDQ0PDw8QEQ4SFxEWFhUXFRUYHSggGB0lGxMXITIhJSkrLi8uGB81ODMsNyotLisBCgoKDg0OGxAQGismHSUrKy8rKy0tLS0rLS0tLS0rLi0tKy0tLS0tKystLSstLS0tKy0tLS0tLS0tLS0tLS0tL//AABEIAOAA4QMBEQACEQEDEQH/xAAbAAEBAAIDAQAAAAAAAAAAAAAAAQUGAwQHAv/EAD8QAAIBAwAFCAcGBAcBAAAAAAABAgMEEQUSITFRBhNBYXGBkaEHIjJScrHBFEJDYoLRJFOy8DN0osLD4eIj/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAEDBAUCBv/EADQRAQACAgECAwUIAQMFAAAAAAABAgMRBBIxIUFRBRNhcYEiMpGhscHR4fAzQvEUIzRSYv/aAAwDAQACEQMRAD8Ayh8a+pAAAAAAAQAAAAAAQhKUAAQICRAISAEAhIgAIQkRsCEiAd0pegAAAAAIAAAAAAIQlKAAIEBIgEJACAQkQAEISI2BCRAIB3il6AAAABAAAAAABCEpQABAgJEAhIAQCEiAAhCRGwISIB8kgB3yh6AAACAAAAAACEJSgACBASIBCQAgEJEABCEiNgQkQD5JEABDIFD2AAIAAAAAECAlKAAOvVvKMPaqwi+DnHPgW1wZbfdrP4KrZsde9o/FwS0xar8ePdrP5ItjhZ5/2Srnl4f/AGhYaUtnurw73j5kTxM8d6SmOThn/dDtQmpLMWpLimmimYms6ldExPjCkJQCEiAAhCRGwISIB8kiAQlCZAyRnewCAAAAABAgJSgHU0jpCnQhrT2t+xBb5P8AbrNHH4989tV+s+ijPnrhru34NSvtK16zeZasf5cW0u/j3nfwcPFi7RufWXFzcrJl7z4ekOiamdQAH1Sqyg8wk4PjFtfI83pW8atG3qtprO6zpmrDlDNYjWWuvfisSXatzObn9m1nxxeE+nk34faFo8Mnj8Ww0qsZxUoyUovc0ce9LUnptGpdWtotG6z4Po8vQEISI2BCRAPkkQCEoRgQDJmd7QAAAAAIEBKUA1/TGntVunRxlbJVd6T4R49p1+J7P6oi+Xt5R/LmcrndM9GP8f4a5VqSk3KUnJve5NtnYrWtY1WNQ5VrTadzO3yekAAAAAAd7RWkZUJ9LhL24fVdZl5XFrmr/wDXlLTxuROG3w823UqsZRUovWUllNHztqzWdT3d2JiY3D6ISjYEJEA+SRAIShGB8tkiAZQzPYAAAAIEBKUAxfKG9dKjiLxOq9WL6UvvP6d5u4GCMuXc9o8f4Y+bm93j1HeWmn0bhKAAAAAAAAAy2hL+VPMXtjvcfqjl8/BFpi0OrwMu6zSfJssKikk4vKe5nHmJidS6SgQD5JECEJEYHy2SISJkDKmV7AAACBASlAAGpcqaubhR6IQXi9r+h9B7MprD1esuL7QtvLr0hhzosABkNB6Gr3lZUqK3balR+zSjxk/kuk8XvFI3L1Sk2nUMzyi5EXVtmdLN1RW+UI//AEhx1oLo61nuK8eetvCfCVl8Nq9vFqpepUAAAActpLE117CjkV3jlp4lunLHxZqyu3TfGL3x+qOPkxxaPi7cTpmoTUkmnlPczHMTE6l7AIEISIwPlskQkQlCAZYyLAABAgJSgACBDS+UD/i6n6f6EfS8D/x6/X9ZcHm/69vp+jHmxldjR1lUuK0KNJa06stWPBcW+pLLfYRa0VjcprE2nUPa9A6Ho2dCNGks9NSo161SfTJ/t0I5l7zedy6FKRWNQyJ5e2v6e5H2d3mTjzFZ/jUkll/mjul8+stpmtX5Kr4a2ec6e5I3lpmTjz1JfjUk2kvzx3x+XWbKZq3+bLfFarAFqpQAH1R9qPxL5njL9yflKzD/AKlfnH6socd33Ys7p03xi96+qK8mOLR8UxOmZhNSSaeU9zMkxMTqXoAjA+WyRCRCUI2BMgZcyLACBASlAAECAkadykhi6k/ejF+WPofRezrbwR8Jlw+dGs0/RjDcxvRfRXotatW7ktrfM0m+hLDm12tpfpZj5N+1Wrj172b+ZWoAAANQ5TchqFwpVLZRt629xSxSqvrS9l9a70aMeea+FuyjJgifGO7y+7talGpKlVg6c4PEoS3p/XtNsTExuGOYmJ1LiJQ+6C9ePaivLOqT8luCN5K/OGTOQ7wBz2ly4PjF719UV3pFvmmJZeE1JJp5T3GWY14S9DYEJEJQjYHy2SIBmTGsQICUoAAgQEiAa5yso7adTinB/NfU7Psq/han1/z8nK9pU8a2+jXzruY9n5D0FDRdsl96DqPtnJy+pzc07vLoYY1SGdK1gAAAANW5e8no3Vu60I/xFvFyi1vqQW2UHx4rr7S/Bk6Z1PaVObH1RuO7yM3sLns45n2LJn5VtY/m18Ku8u/RkDmOwAAOe1uXB8YvevqjxekWTEspGaaynlPpMsxqdS9KShGwPlskfLYEySM0YnsJSgACBASIBCR0tMWvO0JxSzJetD4l/bXeaeJl91li09u0s/Kxe8xTHn5NJPpnz72/kk86NtP8vTXhHBzMv35+bo4vuQyx4ewAAAAAPEOVOj/s1/XopYip61P4JrWil2Zx3HSxW6qRLnZK9Nph17GHqt8X5Ix8u+7RX0dLgU1WbersmRuAAADmtrhwfFPev2PF6dSWTjNNZTymZ5jXdI2B8tgRskQDNmNYgACBASIBCQAgGoaesuarNpepUzKPU+lf3xPouDn97j1PePD+HC5mH3eTcdpeo8ga2vou34wU4P8ATUkl5YK88aySswzukNhKloAAAAAHl3pQor7fSa3zt4p9057fD5GzBfpxzM+TLlpNskRHeWBjHCSXQc+1ptO5delYrWKx5KQ9AAAAA5beu4PinvR4tXqSyMZprK2plExpI2B8koMgZsxLQCBASIBCQAgEJHW0haRrU3CWzpjL3ZdDLuPmnDeLQpz4oy06ZZ30aOcbWtQmsSo3DePyzhHDXVmMjr5b1yavXtMOZipam627w3AqWgAAAAAeS8q76Nxf1KsXmFNKjSfGMc5ffJy7sE3vqvRH1W4MXj7yfp8mLKWoAAAAAABy0Kzi+Ke9Hm1dpd6Mk1lbijWgbJQgGdMK5AgJEAhIAQCEiAAhl+TN7zdXm5P1a2Enwkt3jnHgaePfptqfNRnpuN+jbjexgAAAAwPLPSit7SUU8VLjNOnh4aTXrS7l5tHmZ0sx06peXnhrAAAAAAAAAHJRquL6nvR5tXY7qkmsrbkq0JkgZ4wrQkQCEgBAISIACEJEyBvWhrqVW3hOXtbYyfFp4z5HTxWm1YmXPyV6bah3Sx4AAADyTlHpOdzdTnLZGDcKcPcin83vZVM7bKV6YYwPYAAAAAAAAAAfdKo4vq6UeZrsdnn4cfJnjpkbEc9agEJACAQkQAEISI2BCRu3JyOLSn16z8Zs6GCNUhhzT9uWSLlQAAAePact3SvLiD2atabXwt60fJoqbaTusOkHoAAAAAAAAAAAADbTlLUJACAQkQAEISI2BCRzaMoKtc0qCf8Ai1FF43qO+T7ops0YeNfJaI8kZN0x2yeUQ9IuqCpy1YxUYpLUS3JJYwvA6WanTbUdnJxW6q7nu4StYAAAGvcuNAQq2f2uMdWpRlickts6TwtvHDx3ZLoxRbH1LuJeJze6nzjw+f8AcPN528l0Z7DPOOYdC/HvX4uJnhTPgBAAAAAAAAAAAbYctaAQCEiAAhxVK0Y79/BF+Pj3yeMdllMVrdnDK74R8Waa8KfOV0cb1lxu5l1Itrw8cd9vccekPiVST3tl1cNK9oWVx1jtDY/R1R1tIp/y6VSa7dkf95pxfeYPa1tcbXrMfz+z0+5oKccPY1ufAuyY4vGpfM47zSdsRWoyg8SXY+h9hz70ms6lvreLRuHGeXoA5ra3c5YWxL2nwLMeObzpXkyRSGRvrSNS3qUcerUpSp+MWjodMdOoZMeSa5Iv5xO3h2Gtj3rY+0xvtkaT3rPaRMbRMRPdxyt4Pox2bDzOOsq5wY58nHK0XQ2u3aeJxR5KrcWvlLrTg08MpmJidSx3pNZ1L5IeQAAAAAAG2HLWoBCRAAQ4a9TVXW9xo4+L3lteXmtxU67fB0WzrxGvCG9CQAAbh6MY/wAZVfC3fnOP7FuHu5Htmf8As1+f7S9LNL5t81KcZLEllHm1YtGpTW01ncMHXp6s3Hg/LoObevTaYdGluqsS5LW3c5Y3Je0z1ixzefg85MkUhmKdOMViKwjoVrFY1DBa02ncvo9IeJado6l5cw92vUx2a7a8mYreEy+041urDSfhH6OiQvAAHFcUtaPWtxXevVCnNj66/F0DM5oAAAAAADazlrUJEABCEjoXE8y6lsR1+Nj6KfGW/DTpq4jQtAAADcPRnNK7rZeF9nbbbwklOOS3D3cj2zG8Vfn+zfNDaVpXVOdSl7EasqafvauNvY85L62i3ZwuRx7YLRW3fUS756UMbpCg3Ujj7+zvX/XyMefHM3jXm14bxFJ35O/RpKMVFdHmaqVisahmtabTuX2enlhnp+nHSLsp4i3CEqU87JSabcHweMY4+GfHX9rpbP8Ao7Tx/f19Z3H7vOOWsNXSdyvzQfjSg/qZ8n3pfRezp3xafX9ZYQ8NoAAAdC6hiXU9v7mXJXUudyKdN/m4jwoAAAAAA2o5i1AAQhI4608Rb8C3DTrvEPeOvVaIY87TogAAAA57e6qU1UUJavPU3SqdcHJNrv1cdmRE6eL463mJnyncfNvfotuM0rml7tSFRfqi4/8AGi/DPeHC9tU+1S/wmPw/5byXuIjXluAoADyDlnXctJ3Ek8ak4Ri08NOMIrY+1MyZJ+1L672fTXFpE+k/nMujpjSErmrz0licqcI1H0SlGKi2u3CZ5tO52v4+GMNOiO2519XRIXAAABwXcMxz7u0qyxuGfk13Tfo6Rnc8AAAAADaTmLQIQkRsDrXkty7zdwqeM2aeNXxmXVOi1gAAAAAbZ6NrnVvpQ6K1GSXxRakvLWLcM/acr2vTqwRb0n9f8h6eaXzIAAAeG6Tr85cVqm9VK1Sa7JTbXkzFM7nb7fDTox1r6REfk6xCwAAAABrKxxIkmNxpjJLDa4bDHManTkTGp0gQAAAADaTmLEJEbAhI6NxLMn1bDrcavTjhvw11SHGaFoAAAAAGQ5PXfM3tvV3KNWKk/wAsvVl5SZNZ1aJZ+Xj95htX4f29rNr4wAAdLTV1zNrXq7ubpTku3VePPB5tOomV3Hx+8y1r6zDxFGN9sBAAAAAAHRu44nnjtM2WNWc/k11ffq4StnAAAABtBzViNgQkfMpYTfA9Vr1TEJiNzpjztxGvB0wkAAAAAANEJe2aBveftKFbOXUpx1/iSxLzTNtZ3G3xXKxe6zWp6T+Xk756UAGreka71LDUT216kYdy9d/0pd5Vln7LqeycfVyOr0iZ/b93lpmfTgAAAAAAOveR9XPBlWWPDbNyq7rv0dMzsAAAAANnbOasQkQDhuZer2mri13k36LsFd326h1G4AAAAAAAA9H9GV9rW9Wg3toz14r8k/8A0peJowz4afO+2cWslckecfnH9N0LnGAPNPSZe691Top7KFPMvim0/wCmMfEzZp8dPpPY+LpxTf1n9P8AJaeVOuAAAAAAAk45TXFETG4082r1VmGMMbkgAAAA2Y5yxAPkkda5e1LgdDh11WbNnGjwmXCbWgAAAAAAAAz3InSHMX9Nt4jWzRn+prV/1KPme8c6sw+0cPvePOu8eP4f09dNb5J81KkYxcpPVjFOUm9ySWWwmImZ1DxDSl669xVrv8Wbkk+iP3V3JJdximdzt9rhxRix1pHlDqkLQAAAAAAADH3McTfXtMuSNWc3PXpvLjPCkAAAP//Z"
                ></img>
              </div>
              <div className="col-xl-10 col-lg-9 col-md-8 col-7 col-sm-7 ml-1">
                <div className="row p-2 justify-content-between">
                  <div className="col-6" style={{ textAlign: "left" }}>
                    <h6>{item.username}</h6>
                  </div>
                  <div className="col-6" style={{ textAlign: "right" }}>
                    {item.time}
                  </div>
                  <p className="p-3">{item.msg}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default Post;
