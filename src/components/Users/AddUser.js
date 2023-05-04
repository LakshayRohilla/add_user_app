import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";
import {useState} from "react";
import ErrorModal from "../UI/ErrorModal";

function AddUser({onAddUser}) {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    function addUserHandler(event) {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
         setError({
             title: 'Invalid input',
             message: 'Please enter a valid name and age (non-empty values) '});
            return;
        }
        if (+enteredAge < 1) {
            setError({
             title: 'Invalid age',
             message: 'Please enter a valid age > 0 '});
            return;
        }
        setEnteredAge('');
        setEnteredUsername('');
        onAddUser(enteredUsername, enteredAge);
    }

    const usernameChangeHandler = (e) => setEnteredUsername(e.target.value);
    const ageChangeHandler = (e) => setEnteredAge(e.target.value);
    const errorHandler = () => setError(null);

    return (
        <>
            {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message}/>}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder='Enter UserName' value={enteredUsername} onChange={usernameChangeHandler}/>
                <label htmlFor="age">Age (Years)</label>
                <input type="number" id="age" placeholder='Enter Age' value={enteredAge} onChange={ageChangeHandler}/>
                <Button type="submit">Add User</Button>
            </form>
            <br/>
            <a href='https://github.com/LakshayRohilla/add_user_app/compare/complete-code?expand=1' target="_blank" rel="noreferrer" ><Button>
                Check My Implementation.
            </Button></a>
        </Card>
            </>
    )
}

export default AddUser;