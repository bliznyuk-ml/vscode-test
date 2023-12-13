const rootNode = document.getElementById("app"); // элемент для рендеринга приложения React
// получаем корневой элемент 
const root = ReactDOM.createRoot(rootNode);
// рендеринг в корневой элемент

const user = {
  id: 5,
  age: 33,
  firstName: 'Tom',
  lastName: 'Smit',
  getFullName: function () {
    return `${this.firstName}` + ' ' + `${this.lastName}`;
  }
};
const userClassName = "user-info";
const styleObj = {
  color: 'red',
  fontFamily: 'Arial'
};
root.render( /*#__PURE__*/React.createElement("div", {
  className: userClassName,
  style: styleObj
}, /*#__PURE__*/React.createElement("p", null, "Full Name: ", user.getFullName()), /*#__PURE__*/React.createElement("p", null, "Age: ", user.age), /*#__PURE__*/React.createElement("p", null, "Time data generate: ", new Date().toLocaleDateString())) // элемент, который мы хотим создать
);
