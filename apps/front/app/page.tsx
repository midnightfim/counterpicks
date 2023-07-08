
import styles from './page.module.scss';
import axios from "axios";

export default async function Index() {

  const { data } = await axios.get(
     "https://official-joke-api.appspot.com/random_joke"
   );

  const setup = data.setup;
  const punchline = data.punchline;

  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
              <span> Hello there, </span>
              Welcome front asdc 👋
              <h1>{setup}</h1>
              <h1>{punchline}</h1>
          </div>

        </div>
      </div>
    </div>
  );
}
