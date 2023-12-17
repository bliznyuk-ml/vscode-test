// const rootNode = document.getElementById("app");    // элемент для рендеринга приложения React
// // получаем корневой элемент 
// const root = ReactDOM.createRoot(rootNode);
// // рендеринг в корневой элемент

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

const elem = ReactDOM.createRoot(document.getElementById("header"));
function tick() {
  elem
    .render(
      <div>
        <h1>Сервис получения времени</h1>
        <h2>Текущее время {new Date().toLocaleTimeString()}.</h2>
      </div>
            );
          }
setInterval(tick, 1000);
  
ReactDOM.createRoot(document.getElementById("container"))
    .render(
      <div>
      <h2>Начальное время {new Date().toLocaleTimeString()}.</h2>
      </div>
);

// var Hello =() => {
//   return (<h1>Привет, Медвед</h1>);
// }

// ReactDOM.createRoot(
//       document.getElementById("app")
//   )
//   .render(
//       <Hello />
//   );