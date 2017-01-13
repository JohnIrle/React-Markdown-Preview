class App extends React.Component {
  constructor() {
    super();
    this.state = {
      markdown: '# Try me \n ## I work'
    };
  }

  handleChange(event) {
    this.setState({ markdown: event.target.value });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <h1>Markdown</h1>
          <textarea onChange={(e) => this.handleChange(e) } value={this.state.markdown} rows="15" style={{width: "300", resize: "none"}} />
        </div>
        <div className="col-md-6">
          <h1>Preview</h1>
          <div dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.render-target'));
