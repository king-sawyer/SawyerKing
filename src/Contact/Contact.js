import React from "react";
import "./Contact.css";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <>
        <div className="contactPage">
          <div className="formItem">
            <h3>Interested in getting in contact? Here is my info below!</h3>
            <a
              class="contacts-links"
              href="https://github.com/king-sawyer"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              GitHub{" "}
            </a>
            <br />
            <a
              class="contacts-links"
              href="https://www.linkedin.com/in/sawyer-king-6b82a11b2/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              LinkedIn{" "}
            </a>
            <br />

            <a
              class="contacts-links"
              href="https://www.instagram.com/kingsawyer55/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Instagram{" "}
            </a>
            <br />

            <a class="contacts-links" href="mailto:kingsawyer555@gmail.com">
              {" "}
              Email{" "}
            </a>
            <br />
          </div>
          <form
            onSubmit={this.submitForm}
            action="https://formspree.io/f/xgeprybw"
            method="POST"
          >
            <div className="formItem">
              <h3>Send me an email!</h3>
              <label>
                Your Email: <br />
                <input type="email" name="email" />
              </label>
            </div>
            <br />
            <div className="formItem">
              <label>
                Message: <br />
                <textarea type="text" name="message" />
              </label>
            </div>
            <div className="formItem">
              <br />
              {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
              {status === "ERROR" && <p>Ooops! There was an error.</p>}
            </div>
          </form>
        </div>
      </>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
