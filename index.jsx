const rootNode = document.getElementById("app");    // элемент для рендеринга приложения React
// получаем корневой элемент 
const root = ReactDOM.createRoot(rootNode);
// рендеринг в корневой элемент

const user = {
    id : 5,
    age : 33,
    firstName: 'Tom',
    lastName: 'Smit',
    getFullName : function(){
     return `${this.firstName}` + ' ' + `${this.lastName}`;
    } 
   };

   const userClassName = "user-info";
    const styleObj = {
      color : 'red',
      fontFamily: 'Arial'
    };

root.render(
    <div className={userClassName} style={styleObj}>
        <p>Full Name: {user.getFullName()}</p>
        <p>Age: {user.age}</p>
        <p>Time data generate: {new Date().toLocaleDateString()}</p>
        </div>  // элемент, который мы хотим создать
);