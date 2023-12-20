const rootNode = document.getElementById("app"); // элемент для рендеринга приложения React
// получаем корневой элемент 
const root = ReactDOM.createRoot(rootNode);
// рендеринг в корневой элемент

// const user = {
//     id : 5,
//     age : 33,
//     firstName: 'Tom',
//     lastName: 'Smit',
//     getFullName : function(){
//      return `${this.firstName}` + ' ' + `${this.lastName}`;
//     } 
//    };

//    const userClassName = "user-info";
//     const styleObj = {
//       color : 'red',
//       fontFamily: 'Arial'
//     };

// root.render(
//     <div className={userClassName} style={styleObj}>
//         <p>Full Name: {user.getFullName()}</p>
//         <p>Age: {user.age}</p>
//         <p>Time data generate: {new Date().toLocaleDateString()}</p>
//         </div>  // элемент, который мы хотим создать
// );

// const elem = ReactDOM.createRoot(document.getElementById("header"));
// function tick() {
//   elem
//     .render(
//       <div>
//         <h1>Сервис получения времени</h1>
//         <h2>Текущее время {new Date().toLocaleTimeString()}.</h2>
//       </div>
//             );
//           }
// setInterval(tick, 1000);

// ReactDOM.createRoot(document.getElementById("container"))
//     .render(
//       <div>
//       <h2>Начальное время {new Date().toLocaleTimeString()}.</h2>
//       </div>
// );

var Hello = props => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "\u041F\u0440\u0438\u0432\u0435\u0442, \u041C\u0435\u0434\u0432\u0435\u0434"), /*#__PURE__*/React.createElement("p", null, "Name: ", props.name), /*#__PURE__*/React.createElement("p", null, "Age: ", props.age));
};
Hello.defaultProps = {
  name: "Scott",
  age: "25"
};
ReactDOM.createRoot(document.getElementById("header")).render( /*#__PURE__*/React.createElement(Hello, {
  age: "65"
}));
function ClickButton(props) {
  function press() {
    alert("Hello React!");
  }
  return /*#__PURE__*/React.createElement("button", {
    onClick: press
  }, "Click");
}
root.render( /*#__PURE__*/React.createElement(ClickButton, null));
