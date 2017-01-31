

//const title = React.createElement('h1', {}, 'My First React Code')
//declare var
//3 args -> element(text/htmltag/var), {} object to set properties, children of compnent(text or reference to another react component)


const meInReact =
  React.createElement('div', {className: "me"},
  //<div data-reactroot class = "me">
    React.createElement('h1', {}, 'An Awesome Person'),
    React.createElement('p', {}, 'Who is learning React'),
    React.createElement('ul', {className: "me_interests"},
      [
        React.createElement('li', {}, 'JavaScript'),
        React.createElement('li', {}, 'React'),
        React.createElement('li', {}, 'Movies'),
        React.createElement('li', {}, 'Ice cream')
      ]
    ));

ReactDOM.render(meInReact, document.getElementById('main'))
