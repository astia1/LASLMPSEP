"use strict";

const e = React.createElement;

class Gform extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      alert("You liked this.");
    }

    return (
      <div>
        {/* <button
          buttonClass
          class="btn btn-secondary"
          onClick={() => this.setState({ liked: true })}
        >
          Like
        </button> */}
        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSfc9lPrTw5ZIXsNcJFG3i4NA9yh8dEBpAJnHFAFmZCFDi4ytg/formResponse"
          target="_self"
          id="bootstrapForm"
          method="POST"
        >
          <fieldset>
            <legend for="1633920210">Name</legend>
            <div class="form-group">
              <input
                id="2005620554"
                type="text"
                name="entry.2005620554"
                class="form-control"
                required
              />
            </div>
          </fieldset>

          <fieldset>
            <legend for="227649005">Email</legend>
            <div class="form-group">
              <input
                id="1045781291"
                type="text"
                name="entry.1045781291"
                class="form-control"
                required
              />
            </div>
          </fieldset>

          <fieldset>
            <legend for="1770822543">Phone number</legend>
            <div class="form-group">
              <input
                id="1166974658"
                type="text"
                name="entry.1166974658"
                class="form-control"
              />
            </div>
          </fieldset>

          <fieldset>
            <legend for="1846923513">Comments</legend>
            <div class="form-group">
              <textarea
                id="839337160"
                name="entry.839337160"
                class="form-control"
                rows="10"
              ></textarea>
            </div>
          </fieldset>

          <input type="hidden" name="fvv" value="1" />
          <input type="hidden" name="fbzx" value="-216207867762045024" />

          <input type="hidden" name="pageHistory" value="0" />

          <input class="btn btn-secondary" type="submit" value="Submit" />
        </form>
        <script src="script.js"></script>
      </div>
    );
  }
}

const domContainer = document.querySelector("#gForm");
ReactDOM.render(e(Gform), domContainer);
