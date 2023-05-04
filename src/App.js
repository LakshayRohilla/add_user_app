import AddUser from "./components/Users/AddUser";
import './App.css';
import UsersList from "./components/Users/UsersList";
import {useState} from "react";

function App() {
    const [usersList, setUsersList] = useState([]);

    function addUserHandler(uName, uAge) {
        setUsersList([
                ...usersList,
                {
                    name: uName, age: uAge, id: Math.random().toString()
                }
            ]
        )
    }

    return (
        <div className="App">
            <AddUser onAddUser={addUserHandler}/>
            <UsersList users={usersList}/>
        </div>
    );
}

export default App;
