import * as React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/styles';
import axios, { AxiosRequestConfig } from "axios";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
    centre: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
    }
});

interface APIResponseInterface {
    id: string,
    joke: string,
    status: number,
}

const JokeDisplay: React.SFC = () => {

    const classes = useStyles();

    const populateData = async () => {
        let newJokes: string[] = [];

        const config: AxiosRequestConfig = {
            headers: {
                "accept": "application/json",
            }
        }

        for (let index = 0; index < 10; index++) {
            try {
                const response = await axios.get<APIResponseInterface>('https://icanhazdadjoke.com/', config);
                newJokes.push(response.data.joke);
            } catch (error) {
                console.log("Error retrieving response from API" + index);
            }
        }

        setJokes(newJokes);
        setIsLoaded(true);
    }

    const [jokes, setJokes] = React.useState<string[]>([]);
    const [isLoaded, setIsLoaded] = React.useState<boolean>(false);

    React.useEffect(() => {
        populateData();
    }, []);

    return (
        <>
            {isLoaded ?
            <List>
                {jokes.map(j =>
                    <ListItem>
                        <ListItemText primary={j} />
                    </ListItem>
                )}
            </List>
            :
            <div className={classes.centre}>
                <CircularProgress />
            </div>}
        </>
    );
};

export default JokeDisplay;